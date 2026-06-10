#!/usr/bin/env python3
"""
DataForSEO v3 Query-Helper fuer die SEO-Recherche (Casa Bellucci, Phase 1).

Kein Build-Teil. Liest die DataForSEO-Credentials aus ~/.codex/config.toml
([mcp_servers.dataforseo].env) und feuert einen POST gegen einen v3-Endpoint.
Credentials werden NIE ausgegeben oder in Dateien geschrieben.

Aufruf:
  echo '[{"keywords":["italienisches restaurant berlin"],"location_name":"Berlin,Berlin,Germany","language_code":"de"}]' \
    | python3 scripts/dataforseo_query.py keywords_data/google_ads/search_volume/live

  python3 scripts/dataforseo_query.py <endpoint-path> --payload payload.json
  python3 scripts/dataforseo_query.py --auth-test

Ausgabe: JSON-Antwort der API auf stdout (pretty). Exit != 0 bei Fehler.
"""
import sys
import os
import json
import tomllib
import tempfile
import subprocess

CONFIG_PATH = os.path.expanduser("~/.codex/config.toml")
BASE = "https://api.dataforseo.com/v3/"


def load_credentials():
    with open(CONFIG_PATH, "rb") as f:
        cfg = tomllib.load(f)
    env = cfg["mcp_servers"]["dataforseo"]["env"]
    user = env["DATAFORSEO_USERNAME"]
    pw = env["DATAFORSEO_PASSWORD"]
    return user, pw


def query(path, payload):
    """POST via curl (nutzt System-Certs; lokaler TLS-Proxy bricht Python-urllib).
    Credentials und URL stehen in einer 0600-Tempdatei (curl --config),
    damit sie nicht in der Prozessliste landen.
    """
    user, pw = load_credentials()
    url = BASE + path.lstrip("/")
    cfg_fd, cfg_path = tempfile.mkstemp(prefix="dfs_cfg_")
    data_fd, data_path = tempfile.mkstemp(prefix="dfs_data_")
    try:
        os.write(cfg_fd, (
            f'url = "{url}"\n'
            f'user = "{user}:{pw}"\n'
            'request = "POST"\n'
            'header = "Content-Type: application/json"\n'
        ).encode())
        os.close(cfg_fd)
        os.write(data_fd, json.dumps(payload).encode())
        os.close(data_fd)
        proc = subprocess.run(
            ["curl", "-s", "--max-time", "180", "--config", cfg_path,
             "--data", f"@{data_path}"],
            capture_output=True, timeout=200,
        )
        if proc.returncode != 0:
            sys.stderr.write(f"curl error {proc.returncode}: {proc.stderr.decode(errors='replace')}\n")
            sys.exit(2)
        try:
            return json.loads(proc.stdout.decode())
        except json.JSONDecodeError:
            sys.stderr.write(f"Non-JSON response: {proc.stdout.decode(errors='replace')[:500]}\n")
            sys.exit(3)
    finally:
        for p in (cfg_path, data_path):
            try:
                os.remove(p)
            except OSError:
                pass


def main():
    args = sys.argv[1:]
    if not args:
        sys.stderr.write(__doc__)
        sys.exit(1)

    if args[0] == "--auth-test":
        # Guenstiger Call: 1 Keyword Search Volume
        payload = [{
            "keywords": ["italienisches restaurant berlin"],
            "location_name": "Berlin,Berlin,Germany",
            "language_code": "de",
        }]
        res = query("keywords_data/google_ads/search_volume/live", payload)
        status = res.get("status_code")
        cost = res.get("cost")
        tasks = res.get("tasks") or []
        first = (tasks[0].get("result") or [{}])[0] if tasks else {}
        print(json.dumps({
            "status_code": status,
            "status_message": res.get("status_message"),
            "cost": cost,
            "sample": {
                "keyword": first.get("keyword"),
                "search_volume": first.get("search_volume"),
                "competition": first.get("competition"),
            },
        }, ensure_ascii=False, indent=2))
        sys.exit(0 if status == 20000 else 4)

    path = args[0]
    payload_file = None
    if "--payload" in args:
        payload_file = args[args.index("--payload") + 1]

    if payload_file:
        with open(payload_file, "rb") as f:
            payload = json.load(f)
    else:
        raw = sys.stdin.read()
        payload = json.loads(raw) if raw.strip() else [{}]

    res = query(path, payload)
    print(json.dumps(res, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()

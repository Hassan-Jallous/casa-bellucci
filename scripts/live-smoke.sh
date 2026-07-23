#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${1:-https://casabellucci.de}"
BASE_URL="${BASE_URL%/}"

failures=0

check_status() {
  local label="$1"
  local path="$2"
  local expected="$3"
  local url="${BASE_URL}${path}"
  local status

  status="$(curl -L -sS -o /tmp/casa-smoke-body -w '%{http_code}' "$url" || true)"
  if [[ "$status" == "$expected" ]]; then
    printf 'PASS %-28s %s %s\n' "$label" "$status" "$url"
  else
    printf 'FAIL %-28s got %s expected %s %s\n' "$label" "$status" "$expected" "$url"
    failures=$((failures + 1))
  fi
}

check_json() {
  local label="$1"
  local path="$2"
  local url="${BASE_URL}${path}"
  local status

  status="$(curl -L -sS -o /tmp/casa-smoke-body -w '%{http_code}' "$url" || true)"
  if [[ "$status" != "200" ]]; then
    printf 'FAIL %-28s got %s expected 200 %s\n' "$label" "$status" "$url"
    failures=$((failures + 1))
    return
  fi

  if python3 -m json.tool /tmp/casa-smoke-body >/dev/null 2>&1; then
    printf 'PASS %-28s %s %s\n' "$label" "$status JSON" "$url"
  else
    printf 'FAIL %-28s status 200 but body is not JSON %s\n' "$label" "$url"
    failures=$((failures + 1))
  fi
}

check_contains() {
  local label="$1"
  local path="$2"
  local needle="$3"
  local url="${BASE_URL}${path}"
  local status

  status="$(curl -L -sS -o /tmp/casa-smoke-body -w '%{http_code}' "$url" || true)"
  if [[ "$status" != "200" ]]; then
    printf 'FAIL %-28s got %s expected 200 %s\n' "$label" "$status" "$url"
    failures=$((failures + 1))
    return
  fi

  if grep -qi -- "$needle" /tmp/casa-smoke-body; then
    printf 'PASS %-28s %s contains %s\n' "$label" "$status" "$needle"
  else
    printf 'FAIL %-28s status 200 but missing %s %s\n' "$label" "$needle" "$url"
    failures=$((failures + 1))
  fi
}

check_status "Homepage" "/" "200"
check_status "Sitemap" "/sitemap.xml" "200"
check_status "Robots" "/robots.txt" "200"
check_contains "Admin noindex" "/admin/" "noindex"
check_json "Menu API" "/api/menu-urls.php"

config_status="$(curl -L -sS -o /tmp/casa-smoke-body -w '%{http_code}' "${BASE_URL}/config.php" || true)"
if [[ "$config_status" == "403" || "$config_status" == "404" ]]; then
  printf 'PASS %-28s %s %s\n' "Config protected" "$config_status" "${BASE_URL}/config.php"
else
  printf 'FAIL %-28s got %s expected 403 or 404 %s\n' "Config protected" "$config_status" "${BASE_URL}/config.php"
  failures=$((failures + 1))
fi

# Chunk-Konsistenz: jede von index.html referenzierte JS-Datei muss 200 + Body > 0 liefern.
# Verhindert ChunkLoadError durch stale FTP-State / partiellen Deploy.
# macOS bash 3.2: kein mapfile, daher while-read.
curl -L -sS -H 'Cache-Control: no-cache' -o /tmp/casa-smoke-index "${BASE_URL}/" || true
chunk_count=0
chunk_fail=0
while IFS= read -r path; do
  [[ -z "$path" ]] && continue
  chunk_count=$((chunk_count + 1))
  status="$(curl -L -sS -o /tmp/casa-smoke-chunk -w '%{http_code}' "${BASE_URL}${path}" || true)"
  size="$(wc -c < /tmp/casa-smoke-chunk | tr -d ' ')"
  if [[ "$status" == "200" && "$size" -gt 0 ]]; then
    printf 'PASS %-28s %s %s\n' "chunk" "$status" "${BASE_URL}${path}"
  else
    printf 'FAIL %-28s got %s size=%s %s\n' "chunk" "$status" "$size" "${BASE_URL}${path}"
    chunk_fail=$((chunk_fail + 1))
    failures=$((failures + 1))
  fi
done < <(grep -oE '/_next/static/chunks/[^"'\'' ]+\.js' /tmp/casa-smoke-index 2>/dev/null | sort -u || true)
if (( chunk_count == 0 )); then
  printf 'FAIL %-28s no chunk refs found in homepage HTML\n' "JS chunks"
  failures=$((failures + 1))
elif (( chunk_fail == 0 )); then
  printf 'PASS %-28s %s files OK\n' "JS chunk set" "$chunk_count"
fi

rm -f /tmp/casa-smoke-body /tmp/casa-smoke-index /tmp/casa-smoke-chunk

if (( failures > 0 )); then
  printf '\n%d automated smoke check(s) failed.\n' "$failures"
  exit 1
fi

cat <<'EOF'

Automated smoke checks passed.

Manual checks still required before marking a deploy complete:
- Admin login works with the deployed password.
- PDF upload works in /admin/.
- Public menu PDF updates after the upload.
EOF

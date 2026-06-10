#!/usr/bin/env python3
"""Konsolidiert die DataForSEO-Rohdaten zu sauberen Tabellen fuer die Doc-Erstellung."""
import json
import os
import csv

D = os.path.join(os.path.dirname(os.path.abspath(__file__)), "seo-data")


def load(name):
    with open(os.path.join(D, name)) as f:
        return json.load(f)


# 1) Keyword-Master: Volumen + Difficulty + Competition mergen
vol = {}
for x in load("search_volume_curated.json")["tasks"][0]["result"]:
    vol[x["keyword"]] = {"sv": x.get("search_volume"), "comp": x.get("competition"),
                         "cpc": x.get("cpc")}
kd = {}
for it in load("keyword_difficulty_curated.json")["tasks"][0]["result"][0]["items"]:
    kd[it["keyword"]] = it.get("keyword_difficulty")

rows = []
for k, v in vol.items():
    rows.append({"keyword": k, "search_volume": v["sv"] or 0,
                 "keyword_difficulty": kd.get(k), "competition": v["comp"],
                 "cpc": v["cpc"]})
rows.sort(key=lambda r: -(r["search_volume"] or 0))
with open(os.path.join(D, "keywords_master.csv"), "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=["keyword", "search_volume", "keyword_difficulty", "competition", "cpc"])
    w.writeheader()
    w.writerows(rows)
print(f"keywords_master.csv: {len(rows)} keywords")

# 2) SERP-Wettbewerber je Head-Term + Feature-Map
serp_summary = {}
for fn in sorted(os.listdir(D)):
    if fn.startswith("serp_") and fn.endswith(".json"):
        r = load(fn)["tasks"][0]["result"][0]
        kw = r["keyword"]
        items = r.get("items") or []
        feats = {}
        organic = []
        local = []
        for it in items:
            t = it.get("type")
            feats[t] = feats.get(t, 0) + 1
            if t == "organic":
                organic.append({"rank": it.get("rank_group"), "domain": it.get("domain"),
                                "url": it.get("url"), "title": it.get("title")})
            if t == "local_pack":
                local.append({"rank": it.get("rank_group"), "title": it.get("title"),
                              "rating": it.get("rating")})
        serp_summary[kw] = {"features": feats, "organic": organic[:10], "local_pack": local[:6]}
with open(os.path.join(D, "serp_summary.json"), "w") as f:
    json.dump(serp_summary, f, ensure_ascii=False, indent=2)
print(f"serp_summary.json: {len(serp_summary)} head-terms")

# 3) Domain ranked keywords (kompakt)
rk = load("ranked_keywords_casabellucci.json")["tasks"][0]["result"][0]
rkrows = []
for it in (rk.get("items") or []):
    kdd = it.get("keyword_data") or {}
    ki = kdd.get("keyword_info") or {}
    se = it.get("ranked_serp_element", {}).get("serp_item", {})
    rkrows.append({"keyword": kdd.get("keyword"), "position": se.get("rank_group"),
                   "search_volume": ki.get("search_volume") or 0, "url": se.get("url")})
rkrows.sort(key=lambda r: (r["position"] or 999, -(r["search_volume"] or 0)))
with open(os.path.join(D, "domain_ranked_keywords.csv"), "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=["keyword", "position", "search_volume", "url"])
    w.writeheader()
    w.writerows(rkrows)
print(f"domain_ranked_keywords.csv: {len(rkrows)} (total_count {rk.get('total_count')})")

# 4) Local listings (Italiener) kompakt
loc = load("business_listings_italian_kudamm.json")["tasks"][0]["result"][0]
locrows = []
for it in (loc.get("items") or []):
    rating = it.get("rating") or {}
    ai = it.get("address_info") or {}
    locrows.append({"title": it.get("title"), "rating": rating.get("value"),
                    "votes": rating.get("votes_count"), "address": ai.get("address"),
                    "category": it.get("category")})
locrows.sort(key=lambda r: -(r["votes"] or 0))
with open(os.path.join(D, "local_italian.csv"), "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=["title", "rating", "votes", "address", "category"])
    w.writeheader()
    w.writerows(locrows)
print(f"local_italian.csv: {len(locrows)} listings")

# 5) Competitor domains
cd = load("competitors_domain_casabellucci.json")["tasks"][0]["result"][0]
cdrows = []
for it in (cd.get("items") or []):
    m = (it.get("metrics") or {}).get("organic") or {}
    cdrows.append({"domain": it.get("domain"), "intersections": it.get("intersections"),
                   "avg_position": round(it.get("avg_position") or 0, 1),
                   "organic_keywords": m.get("count")})
with open(os.path.join(D, "competitor_domains.csv"), "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=["domain", "intersections", "avg_position", "organic_keywords"])
    w.writeheader()
    w.writerows(cdrows)
print(f"competitor_domains.csv: {len(cdrows)} domains")

print("\nDONE. Konsolidierte Dateien in scripts/seo-data/")

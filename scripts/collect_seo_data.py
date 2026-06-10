#!/usr/bin/env python3
"""
Sammelt DataForSEO-Rohdaten fuer Casa Bellucci SEO Phase 1.
Speichert je Abfrage eine JSON-Datei unter scripts/seo-data/.
Kein Build-Teil. Reine Research-Datenbeschaffung.

Aufruf:
  python3 scripts/collect_seo_data.py keywords    # Keyword-Expansion + Volumen + Difficulty
  python3 scripts/collect_seo_data.py serp        # SERP fuer Head-Terms (Wettbewerber + Features)
  python3 scripts/collect_seo_data.py domain      # ranked_keywords + backlinks casabellucci.de
  python3 scripts/collect_seo_data.py local       # Business listings / GBP Umkreis Kudamm
  python3 scripts/collect_seo_data.py all
"""
import sys
import os
import json
import time

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from dataforseo_query import query  # noqa: E402

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "seo-data")
os.makedirs(OUT, exist_ok=True)

LOC = "Germany"
LANG = "de"
TOTAL_COST = [0.0]


def save(name, data):
    cost = data.get("cost") or 0
    TOTAL_COST[0] += cost
    path = os.path.join(OUT, name + ".json")
    with open(path, "w") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    sc = data.get("status_code")
    n = 0
    try:
        n = len(data["tasks"][0]["result"] or [])
    except Exception:
        pass
    print(f"  saved {name}.json  status={sc} cost={cost} results={n}")
    return data


# Seed-Themen fuer Expansion (Deutschland, Deutsch)
SEED_IDEAS = [
    "italienisches restaurant berlin",
    "restaurant charlottenburg",
    "restaurant kurfürstendamm",
    "frühstück charlottenburg",
    "bar charlottenburg",
    "italienisches restaurant charlottenburg",
]

# Seeds fuer keyword_suggestions (Long-Tail je Anlass)
SEED_SUGGEST = [
    "restaurant kurfürstendamm",
    "frühstück kurfürstendamm",
    "brunch charlottenburg",
    "business lunch berlin",
    "italienisch essen berlin charlottenburg",
    "aperitivo berlin",
    "sommerterrasse berlin",
    "romantisches restaurant berlin",
    "geschäftsessen berlin",
    "abendessen kurfürstendamm",
    "weinbar charlottenburg",
    "cocktailbar kurfürstendamm",
]

# Kuratierte Liste zur Volumen/Difficulty-Validierung (inkl. Map-v1-Keywords + Luecken)
CURATED = [
    # Brand
    "casa bellucci", "casa bellucci berlin", "bellucci berlin", "casa bellucci kurfürstendamm",
    # Kategorie / Lage
    "italienisches restaurant berlin", "italienisches restaurant charlottenburg",
    "italienisches restaurant kurfürstendamm", "italienisches restaurant berlin charlottenburg",
    "restaurant kurfürstendamm", "restaurant charlottenburg", "restaurant berlin kudamm",
    "restaurant berlin charlottenburg", "italiener charlottenburg", "italiener kurfürstendamm",
    "gemütliche restaurants berlin charlottenburg", "restaurant charlottenburg italiener",
    # Fruehstueck / Brunch
    "frühstück charlottenburg", "frühstück kurfürstendamm", "bestes frühstück charlottenburg",
    "frühstück charlottenburg-wilmersdorf", "brunch charlottenburg", "brunch kurfürstendamm",
    "frühstück berlin charlottenburg", "italienisches frühstück berlin", "frühstück savignyplatz",
    # Lunch / Mittag
    "lunch charlottenburg", "lunch kurfürstendamm", "business lunch berlin", "mittagessen charlottenburg",
    "mittagstisch charlottenburg", "business lunch charlottenburg",
    # Dinner / Abend
    "abendessen kurfürstendamm", "dinner charlottenburg", "abendessen charlottenburg",
    "gehobenes restaurant berlin", "fine dining berlin", "italienisch essen berlin",
    # Bar / Aperitivo
    "bar charlottenburg", "bar kurfürstendamm", "cocktailbar kudamm", "cocktailbar charlottenburg",
    "aperitivo berlin", "aperitivo charlottenburg", "weinbar charlottenburg", "weinbar berlin",
    # Terrasse
    "restaurant terrasse berlin", "restaurant mit terrasse charlottenburg", "sommerterrasse berlin",
    "restaurant terrasse kurfürstendamm",
    # Anlass
    "romantisches restaurant berlin", "restaurant für geschäftsessen berlin", "date restaurant berlin",
    # USP / Gerichte
    "pasta restaurant berlin", "frischer fisch restaurant berlin", "sizilianisches restaurant berlin",
    # Reservierung
    "restaurant reservieren berlin", "tisch reservieren charlottenburg",
]


def collect_keywords():
    print("[keywords] Expansion via keyword_ideas ...")
    save("keyword_ideas", query(
        "dataforseo_labs/google/keyword_ideas/live",
        [{"keywords": SEED_IDEAS, "location_name": LOC, "language_name": "German",
          "include_serp_info": False, "limit": 700,
          "order_by": ["keyword_info.search_volume,desc"]}],
    ))
    time.sleep(1)

    print("[keywords] Suggestions je Seed ...")
    sugg = []
    for s in SEED_SUGGEST:
        r = query("dataforseo_labs/google/keyword_suggestions/live",
                  [{"keyword": s, "location_name": LOC, "language_name": "German",
                    "include_serp_info": False, "limit": 80,
                    "order_by": ["keyword_info.search_volume,desc"]}])
        TOTAL_COST[0] += r.get("cost") or 0
        try:
            res = r["tasks"][0]["result"][0]
            for item in (res.get("items") or []):
                ki = item.get("keyword_info") or {}
                sugg.append({"seed": s, "keyword": item.get("keyword"),
                             "search_volume": ki.get("search_volume"),
                             "competition": ki.get("competition")})
        except Exception:
            pass
        time.sleep(0.6)
    with open(os.path.join(OUT, "keyword_suggestions.json"), "w") as f:
        json.dump(sugg, f, ensure_ascii=False, indent=2)
    print(f"  saved keyword_suggestions.json  rows={len(sugg)}")

    print("[keywords] Volumen (Google Ads) kuratierte Liste ...")
    save("search_volume_curated", query(
        "keywords_data/google_ads/search_volume/live",
        [{"keywords": CURATED, "location_name": LOC, "language_code": LANG}],
    ))
    time.sleep(1)

    print("[keywords] Bulk Keyword Difficulty ...")
    save("keyword_difficulty_curated", query(
        "dataforseo_labs/google/bulk_keyword_difficulty/live",
        [{"keywords": CURATED, "location_name": LOC, "language_name": "German"}],
    ))


def collect_serp():
    heads = [
        "italienisches restaurant berlin", "restaurant kurfürstendamm",
        "italienisches restaurant charlottenburg", "frühstück charlottenburg",
        "bar charlottenburg", "restaurant charlottenburg",
    ]
    print("[serp] Google organic advanced je Head-Term ...")
    for kw in heads:
        slug = kw.replace(" ", "_").replace("ü", "ue").replace("ö", "oe").replace("ä", "ae")
        save("serp_" + slug, query(
            "serp/google/organic/live/advanced",
            [{"keyword": kw, "location_name": "Berlin,Berlin,Germany",
              "language_code": LANG, "device": "desktop", "depth": 20,
              "people_also_ask_click_depth": 1}],
        ))
        time.sleep(1)


def collect_domain():
    dom = "casabellucci.de"
    print("[domain] ranked_keywords casabellucci.de ...")
    save("ranked_keywords_casabellucci", query(
        "dataforseo_labs/google/ranked_keywords/live",
        [{"target": dom, "location_name": LOC, "language_name": "German",
          "limit": 200, "order_by": ["ranked_serp_element.serp_item.rank_group,asc"]}],
    ))
    time.sleep(1)
    print("[domain] backlinks summary ...")
    save("backlinks_summary_casabellucci", query(
        "backlinks/summary/live",
        [{"target": dom, "internal_list_limit": 10, "backlinks_status_type": "live"}],
    ))
    time.sleep(1)
    print("[domain] competitors_domain (organische Wettbewerber) ...")
    save("competitors_domain_casabellucci", query(
        "dataforseo_labs/google/competitors_domain/live",
        [{"target": dom, "location_name": LOC, "language_name": "German", "limit": 30}],
    ))


def collect_local():
    print("[local] business_listings search (Italiener Umkreis Kudamm) ...")
    # Kurfuerstendamm 63: ca. 52.5009, 13.3287
    save("business_listings_italian_kudamm", query(
        "business_data/business_listings/search/live",
        [{"categories": ["italian_restaurant"],
          "location_coordinate": "52.5009,13.3287,3",
          "limit": 50,
          "order_by": ["rating.value,desc"]}],
    ))
    time.sleep(1)
    save("business_listings_restaurant_kudamm", query(
        "business_data/business_listings/search/live",
        [{"categories": ["restaurant"],
          "location_coordinate": "52.5009,13.3287,2",
          "limit": 50,
          "order_by": ["rating.votes_count,desc"]}],
    ))


def main():
    what = sys.argv[1] if len(sys.argv) > 1 else "all"
    steps = {"keywords": collect_keywords, "serp": collect_serp,
             "domain": collect_domain, "local": collect_local}
    if what == "all":
        for fn in steps.values():
            fn()
    elif what in steps:
        steps[what]()
    else:
        print(__doc__)
        sys.exit(1)
    print(f"\n=== Geschaetzte Kosten dieser Sammlung: ${TOTAL_COST[0]:.3f} ===")


if __name__ == "__main__":
    main()

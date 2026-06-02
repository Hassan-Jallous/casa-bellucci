# Casa Bellucci SEO Keyword-Research und Strategie

Stand: 2026-06-02

## Datenquelle und Methodik

Alle Zahlen in diesem Dokument stammen aus DataForSEO. Konkret aus zwei Endpunkten:

- DataForSEO Google Ads Search Volume (Suchvolumen, Competition, CPC)
- DataForSEO Labs (Keyword Difficulty, Keyword-Vorschlaege, SERP-Daten)

Parameter fuer die kuratierten Keyword-, Volumen- und Difficulty-Daten: Standort "Germany", Sprache Deutsch, Stand 2026-06-02. Diese Daten liegen in `scripts/seo-data/keywords_master.csv` und `scripts/seo-data/keyword_suggestions.json`.

Die SERP-Detaildaten (SERP-Features, Local Pack, People Also Ask, Related Searches) in den Dateien `scripts/seo-data/serp_*.json` und `scripts/seo-data/serp_summary.json` wurden mit Standort "Berlin, Berlin, Germany", Sprache Deutsch, Geraet Desktop, Stand 2026-06-02 gezogen. Diese feinere Geo-Eingrenzung ist fuer SERP-Features bewusst gewaehlt, weil das Local Pack lageabhaengig ist.

Suchvolumen sind von Google Ads gerundete Monatswerte. Wo ein Difficulty-Wert in den Rohdaten leer ist, steht hier "keine Daten" statt einer Schaetzung. Es wird nichts ergaenzt, was nicht in den Rohdaten steht.

Abgrenzung: Dieses Dokument validiert und erweitert die bestehende Keyword-Map v1 (`docs/seo-keyword-map.md`). Es ersetzt sie nicht. Korrekturen und Ergaenzungen sind im Changelog am Ende dokumentiert.

Hinweis zum Code: Dies ist ein reines Strategiedokument. Es werden keine Aenderungen an Code, CSS oder Seiteninhalt vorgenommen.

---

## 1. Executive Summary

1. Der sizilianische USP hat echtes, grosses Suchvolumen. "sizilianisches restaurant berlin" liegt bei 4.400 Suchanfragen pro Monat bei einer Difficulty von nur 12 (Quelle: keywords_master.csv, DataForSEO, Germany, 2026-06-02). Das ist der wertvollste neue Fund. Er deckt sich exakt mit der Positionierung (65 Prozent Sizilien und Sueditalien auf der Weinkarte, Cucina Siciliana am Abend) und fehlt in Map v1 komplett.

2. Die Keyword-Difficulty ist durchweg niedrig. Sehr viele relevante Begriffe haben KD 0, das Maximum im gesamten Set liegt bei 20 ("weinbar berlin", "restaurant reservieren berlin"). Das ist die zentrale Botschaft: Bei sauberer Onpage-Optimierung besteht ein kurzfristiges Quick-Win-Fenster fuer Top-Rankings, ohne dass aggressiver Linkaufbau noetig ist.

3. casabellucci.de rankt heute schon stark fuer Brand- und Lage-Begriffe. Die Domain steht z. B. auf "frueh­stueck am kudamm" 880 SV Position 3, "bellucci berlin" 2.900 SV Position 3, "brunch am kudamm" und "kudamm brunch" je 210 SV Position 3, "italienische restaurants kurfuerstendamm" Position 1, "italienisches restaurant kurfuerstendamm" Position 2 (Quelle: domain_ranked_keywords.csv, DataForSEO, 2026-06-02). Diese Bestandsrankings sind ein Asset und muessen beim Relaunch durch Redirects und Content-Paritaet geschuetzt werden.

4. Local Pack dominiert alle Head-Terms. Bei jedem analysierten Hauptbegriff zeigt Google ein Local Pack mit 12 Eintraegen (Quelle: serp_summary.json, 2026-06-02). Bei "restaurant kurfuerstendamm" steht Casa Bellucci im Local Pack bereits auf Position 1 und organisch auf Position 5. Das macht Google Business Profile, Bewertungen und LocalBusiness-Schema mindestens so wichtig wie klassische Onpage-Texte.

5. Einige in Map v1 hoch priorisierte Anlass-Cluster sind ueberschaetzt. "abendessen kurfuerstendamm", "lunch kurfuerstendamm", "restaurant terrasse kurfuerstendamm" und "aperitivo charlottenburg" haben jeweils SV 0, "sommerterrasse berlin" nur 10, "dinner charlottenburg" nur 10 (Quelle: keywords_master.csv, 2026-06-02). Lunch, Dinner und Terrasse rechtfertigen daher keine eigene Top-Prioritaet-Landingpage, sondern bleiben Content-Abschnitte. Bar und Aperitivo hingegen haben ueber "bar charlottenburg" 2.400 und "aperitivo berlin" 210 echtes Volumen.

---

## 2. Master-Keyword-Tabelle

Alle Werte aus `keywords_master.csv` (Suchvolumen, KD, Competition) und ergaenzend `keyword_suggestions.json`, DataForSEO, Germany, 2026-06-02. SERP-Feature-Spalte aus `serp_summary.json` (nur fuer die sechs gezogenen Head-Terms verfuegbar, sonst "nicht gezogen"). Intent aus SERP-Interpretation abgeleitet. Sortiert nach Prioritaet, dann nach Suchvolumen.

Ziel-URL-Kuerzel:
- `/` = Homepage (vorhanden)
- `/reservierung/` = Reservierung (vorhanden)
- `/it-restaurant/` = `/italienisches-restaurant-berlin-charlottenburg/` (geplant)
- `/sizilianisch/` = `/sizilianisches-restaurant-berlin/` (geplant)
- `/fruehstueck/` = `/fruehstueck-brunch-kurfuerstendamm/` (geplant)
- `/bar/` = `/bar-aperitivo-kurfuerstendamm/` (geplant)
- `/wein/` = `/weinbar-charlottenburg/` (geplant, optional)

| Keyword | SV | Intent | SERP-Features | KD | Cluster | Ziel-URL | Prio | Notiz / Quelle |
| --- | ---: | --- | --- | ---: | --- | --- | --- | --- |
| bellucci berlin | 2.900 | navigational | nicht gezogen | 0 | Brand | `/` | P0 | rankt heute Pos 3, domain_ranked_keywords.csv |
| casa bellucci | 390 | navigational | nicht gezogen | 0 | Brand | `/` | P0 | rankt Pos 1, domain_ranked_keywords.csv |
| casa bellucci berlin | 170 | navigational | nicht gezogen | 0 | Brand | `/` | P0 | rankt Pos 1, domain_ranked_keywords.csv |
| italienisches restaurant berlin | 4.400 | commercial | Local Pack 12, PAA-nah, compare_sites, related | 17 | Italienisch+Lage | `/it-restaurant/` | P0 | hoechstes non-brand Volumen, keywords_master.csv |
| sizilianisches restaurant berlin | 4.400 | commercial | nicht gezogen | 12 | Sizilianisch/USP | `/sizilianisch/` | P0 | wertvollster Neufund, keywords_master.csv |
| restaurant charlottenburg | 2.900 | local/commercial | Local Pack 12, PAA, compare_sites, related | 0 | Italienisch+Lage | `/it-restaurant/` | P0 | keywords_master.csv |
| bar charlottenburg | 2.400 | local/commercial | Local Pack 12, compare_sites, related | 0 | Bar+Aperitivo | `/bar/` | P0 | keywords_master.csv |
| fruehstueck charlottenburg | 1.900 | local/commercial | Local Pack 12, compare_sites, related | 0 | Fruehstueck+Brunch | `/fruehstueck/` | P0 | keywords_master.csv |
| restaurant kurfuerstendamm | 880 | local/commercial | Local Pack 12, PAA, compare_sites | 4 | Italienisch+Lage | `/it-restaurant/` | P0 | Local Pack Pos 1, organisch Pos 5, serp_summary.json |
| restaurant berlin charlottenburg | 1.300 | local/commercial | nicht gezogen | 0 | Italienisch+Lage | `/it-restaurant/` | P1 | keywords_master.csv |
| fine dining berlin | 1.900 | commercial | nicht gezogen | 0 | Fine-Dining/Anlass | `/sizilianisch/` oder `/` | P1 | competition MEDIUM, keywords_master.csv |
| weinbar berlin | 1.600 | commercial | nicht gezogen | 20 | Wein | `/wein/` | P1 | hoechste KD im Set, keywords_master.csv |
| italiener charlottenburg | 1.000 | local/commercial | nicht gezogen | 0 | Italienisch+Lage | `/it-restaurant/` | P1 | keywords_master.csv |
| brunch charlottenburg | 1.000 | local/commercial | nicht gezogen | 0 | Fruehstueck+Brunch | `/fruehstueck/` | P1 | keyword_suggestions.json bestaetigt 1.000 |
| restaurant berlin kudamm | 880 | local/commercial | nicht gezogen | 0 | Italienisch+Lage | `/it-restaurant/` | P1 | keywords_master.csv |
| romantisches restaurant berlin | 720 | commercial | nicht gezogen | 0 | Fine-Dining/Anlass | `/sizilianisch/` | P1 | competition MEDIUM, keywords_master.csv |
| fruehstueck berlin charlottenburg | 720 | local/commercial | nicht gezogen | 0 | Fruehstueck+Brunch | `/fruehstueck/` | P1 | keywords_master.csv |
| aperitivo berlin | 210 | commercial | nicht gezogen | 0 | Bar+Aperitivo | `/bar/` | P1 | keywords_master.csv |
| weinbar charlottenburg | 260 | local/commercial | nicht gezogen | 1 | Wein | `/wein/` | P1 | keywords_master.csv |
| gehobenes restaurant berlin | 320 | commercial | nicht gezogen | 17 | Fine-Dining/Anlass | `/sizilianisch/` | P1 | keywords_master.csv |
| italienisches restaurant charlottenburg | 320 | commercial | Local Pack 12, compare_sites, related | 0 | Italienisch+Lage | `/it-restaurant/` | P1 | keywords_master.csv |
| business lunch berlin | 170 | commercial | nicht gezogen | 0 | Fine-Dining/Anlass | `/it-restaurant/` Abschnitt | P1 | CPC 3,01, keywords_master.csv |
| italienisches restaurant berlin charlottenburg | 210 | commercial | nicht gezogen | 0 | Italienisch+Lage | `/it-restaurant/` | P1 | URL-naher Begriff, keywords_master.csv |
| fruehstueck kurfuerstendamm | 210 | local/commercial | nicht gezogen | 0 | Fruehstueck+Brunch | `/fruehstueck/` | P1 | rankt Pos 6, domain_ranked_keywords.csv |
| bestes fruehstueck charlottenburg | 210 | informational/commercial | nicht gezogen | 0 | Fruehstueck+Brunch | `/fruehstueck/` | P2 | keine Superlative behaupten, keywords_master.csv |
| bar kurfuerstendamm | 170 | local/commercial | nicht gezogen | 7 | Bar+Aperitivo | `/bar/` | P2 | rankt Pos 6, domain_ranked_keywords.csv |
| cocktailbar charlottenburg | 170 | commercial | related zu bar charlottenburg | 2 | Bar+Aperitivo | `/bar/` | P2 | keywords_master.csv |
| gemuetliche restaurants berlin charlottenburg | 170 | commercial | related zu restaurant charlottenburg | 0 | Italienisch+Lage | `/it-restaurant/` | P2 | Atmosphaere-Abschnitt, keywords_master.csv |
| fruehstueck savignyplatz | 320 | local | related zu fruehstueck | 0 | Fruehstueck+Brunch | `/fruehstueck/` | P2 | nur bei Lagebezug, keywords_master.csv |
| frueh­stueck charlottenburg-wilmersdorf | 170 | local/commercial | related zu fruehstueck | 0 | Fruehstueck+Brunch | `/fruehstueck/` | P2 | keywords_master.csv |
| pasta restaurant berlin | 170 | commercial | nicht gezogen | 18 | Italienisch+Lage | `/it-restaurant/` Abschnitt | P2 | pasta fatta a mano, keywords_master.csv |
| italiener kurfuerstendamm | 140 | local/commercial | nicht gezogen | 0 | Italienisch+Lage | `/it-restaurant/` | P2 | rankt Pos 7, domain_ranked_keywords.csv |
| lunch charlottenburg | 140 | local/commercial | nicht gezogen | 0 | Lunch (Abschnitt) | `/it-restaurant/` Abschnitt | P2 | keywords_master.csv |
| italienisch essen berlin | 140 | commercial | nicht gezogen | 1 | Italienisch+Lage | `/it-restaurant/` | P2 | keywords_master.csv |
| cocktailbar kudamm | 110 | commercial | nicht gezogen | 8 | Bar+Aperitivo | `/bar/` | P2 | keywords_master.csv |
| date restaurant berlin | 110 | commercial | nicht gezogen | 0 | Fine-Dining/Anlass | `/sizilianisch/` | P2 | competition MEDIUM, keywords_master.csv |
| mittagstisch charlottenburg | 90 | local/commercial | nicht gezogen | 0 | Lunch (Abschnitt) | `/it-restaurant/` Abschnitt | P2 | keywords_master.csv |
| italienisches restaurant kurfuerstendamm | 70 | local/commercial | nicht gezogen | 1 | Italienisch+Lage | `/it-restaurant/` | P2 | rankt Pos 2, domain_ranked_keywords.csv |
| restaurant charlottenburg italiener | 70 | commercial | related zu restaurant charlottenburg | 0 | Italienisch+Lage | `/it-restaurant/` | P2 | keywords_master.csv |
| business lunch charlottenburg | 40 | commercial | nicht gezogen | 0 | Fine-Dining/Anlass | `/it-restaurant/` Abschnitt | P2 | keywords_master.csv |
| mittagessen charlottenburg | 40 | local/commercial | nicht gezogen | 19 | Lunch (Abschnitt) | `/it-restaurant/` Abschnitt | P3 | keywords_master.csv |
| brunch kurfuerstendamm | 30 | local/commercial | nicht gezogen | keine Daten | Fruehstueck+Brunch | `/fruehstueck/` | P3 | KD leer in keywords_master.csv |
| italienisches fruehstueck berlin | 30 | commercial | nicht gezogen | keine Daten | Fruehstueck+Brunch | `/fruehstueck/` | P3 | KD und CPC leer, keywords_master.csv |
| restaurant reservieren berlin | 20 | transactional | nicht gezogen | 20 | Conversion | `/reservierung/` | P2 | competition MEDIUM, keywords_master.csv |
| restaurant terrasse berlin | 210 | commercial | nicht gezogen | 12 | Terrasse (Abschnitt) | `/it-restaurant/` Abschnitt | P3 | einziger Terrasse-Begriff mit SV, keywords_master.csv |
| dinner charlottenburg | 10 | commercial | nicht gezogen | keine Daten | Dinner (Abschnitt) | `/it-restaurant/` Abschnitt | P3 | SV sehr niedrig, keywords_master.csv |
| sommerterrasse berlin | 10 | commercial | nicht gezogen | keine Daten | Terrasse (Abschnitt) | `/it-restaurant/` Abschnitt | P3 | SV 10, keine eigene Seite, keywords_master.csv |
| casa bellucci kurfuerstendamm | 0 | navigational | nicht gezogen | keine Daten | Brand | `/` | P3 | SV 0, keywords_master.csv |
| lunch kurfuerstendamm | 0 | local/commercial | nicht gezogen | keine Daten | Lunch (Abschnitt) | `/it-restaurant/` Abschnitt | P3 | SV 0, keywords_master.csv |
| abendessen kurfuerstendamm | 0 | commercial | nicht gezogen | keine Daten | Dinner (Abschnitt) | `/it-restaurant/` Abschnitt | P3 | SV 0, keywords_master.csv |
| abendessen charlottenburg | 0 | commercial | nicht gezogen | keine Daten | Dinner (Abschnitt) | `/it-restaurant/` Abschnitt | P3 | SV 0, keywords_master.csv |
| aperitivo charlottenburg | 0 | commercial | nicht gezogen | keine Daten | Bar+Aperitivo | `/bar/` Abschnitt | P3 | SV 0, keywords_master.csv |
| restaurant mit terrasse charlottenburg | 0 | commercial | nicht gezogen | keine Daten | Terrasse (Abschnitt) | `/it-restaurant/` Abschnitt | P3 | SV 0, keywords_master.csv |
| restaurant terrasse kurfuerstendamm | 0 | commercial | nicht gezogen | keine Daten | Terrasse (Abschnitt) | `/it-restaurant/` Abschnitt | P3 | SV 0, keywords_master.csv |
| restaurant fuer geschaeftsessen berlin | 0 | commercial | nicht gezogen | keine Daten | Fine-Dining/Anlass | `/it-restaurant/` Abschnitt | P3 | SV 0, keywords_master.csv |
| frischer fisch restaurant berlin | 0 | commercial | nicht gezogen | keine Daten | Italienisch+Lage | `/it-restaurant/` Abschnitt | P3 | SV 0, frischer Fisch als Content, keywords_master.csv |
| tisch reservieren charlottenburg | 0 | transactional | nicht gezogen | keine Daten | Conversion | `/reservierung/` | P3 | SV 0, keywords_master.csv |

Long-Tail-Ergaenzungen aus `keyword_suggestions.json` (DataForSEO, Germany, 2026-06-02), die fuer Content und FAQ nuetzlich sind, aber keine eigenen Seiten rechtfertigen:

- "brunch in charlottenburg" 1.000, "brunch berlin charlottenburg" 390, "sonntagsbrunch charlottenburg" (als Related Search) fuer den Fruehstueck-Cluster.
- "romantisches restaurant berlin am wasser" 70 und "romantisches italienisches restaurant berlin" 10 fuer den Anlass-Cluster.
- "aperitivo bar berlin" 90 fuer den Bar-Cluster.
- "weinbar berlin-charlottenburg" 50 fuer den Wein-Cluster.
- "business lunch berlin charlottenburg" 30 als Abschnitt-Variante.
- Hinweis: "alimentari totti ... aperitivo" 3.600 und "restaurant tugra kurfuerstendamm" 2.400 in den Suggestions sind Fremd-Brand-Begriffe (andere Lokale) und nicht targetbar.

---

## 3. Cluster-Abschnitte (Hub-and-Spoke)

Jeder Cluster hat eine Zielseite (Hub), ein Haupt-Keyword, Neben-Keywords (Spokes) und ein internes Verlinkungsschema. Alle Volumina aus den oben genannten Rohdaten, 2026-06-02.

### Cluster Brand

- Zielseite: `/` (Homepage)
- Haupt-Keyword: bellucci berlin 2.900 (KD 0)
- Neben-Keywords: casa bellucci 390, casa bellucci berlin 170, casa bellucci kurfuerstendamm 0
- Bestand: Homepage rankt fuer fast alle Brand-Varianten bereits Pos 1 bis 3 (domain_ranked_keywords.csv). Hier geht es um Verteidigung, nicht um Eroberung.
- Verlinkung: Homepage ist der zentrale Hub und verlinkt auf alle anderen Cluster-Seiten. Jede Cluster-Seite verlinkt im Brotkrumen oder Header zurueck auf `/`.

### Cluster Italienisch und Lage (Charlottenburg / Kudamm / Berlin)

- Zielseite: `/italienisches-restaurant-berlin-charlottenburg/`
- Haupt-Keyword: italienisches restaurant berlin 4.400 (KD 17)
- Neben-Keywords: restaurant charlottenburg 2.900 (KD 0), restaurant berlin charlottenburg 1.300 (KD 0), italiener charlottenburg 1.000 (KD 0), restaurant berlin kudamm 880 (KD 0), restaurant kurfuerstendamm 880 (KD 4), italienisches restaurant charlottenburg 320 (KD 0), italienisches restaurant berlin charlottenburg 210 (KD 0), gemuetliche restaurants berlin charlottenburg 170 (KD 0), pasta restaurant berlin 170 (KD 18), italiener kurfuerstendamm 140 (KD 0), italienisch essen berlin 140 (KD 1), italienisches restaurant kurfuerstendamm 70 (KD 1)
- Eingebettete Abschnitte ohne eigene Seite: Lunch (lunch charlottenburg 140, mittagstisch charlottenburg 90, mittagessen charlottenburg 40), Dinner (dinner charlottenburg 10, abendessen charlottenburg 0), Terrasse (restaurant terrasse berlin 210, sommerterrasse berlin 10), frischer Fisch (frischer fisch restaurant berlin 0, als Content-Signal).
- Verlinkung: Hub-Seite. Verlinkt auf `/sizilianisch/`, `/fruehstueck/`, `/bar/`, `/reservierung/`. Homepage verlinkt aus Hero oder About hierher.

### Cluster Sizilianisch / USP

- Zielseite: `/sizilianisches-restaurant-berlin/`
- Haupt-Keyword: sizilianisches restaurant berlin 4.400 (KD 12)
- Neben-Keywords: fine dining berlin 1.900 (KD 0), romantisches restaurant berlin 720 (KD 0), gehobenes restaurant berlin 320 (KD 17), date restaurant berlin 110 (KD 0), romantisches italienisches restaurant berlin 10
- Begruendung: Dies ist der differenzierende Cluster. Sizilianisch hat dasselbe Volumen wie der generische Italienisch-Begriff, aber weniger direkte Konkurrenz mit den grossen Listen-Portalen und passt exakt zur Kueche (Cucina Siciliana, Nero d'Avola, sizilianische Tarocco, Amalfi-Zitronen laut lib/data.ts). Hier lassen sich auch die Anlass- und Fine-Dining-Begriffe sauber buendeln, weil "gehoben" und "romantisch" sprachlich zur Abend-Positionierung passen.
- Verlinkung: Verlinkt auf `/wein/` (Sizilien-Weine als Beleg), `/reservierung/` und zurueck auf `/it-restaurant/`.

### Cluster Fruehstueck und Brunch

- Zielseite: `/fruehstueck-brunch-kurfuerstendamm/`
- Haupt-Keyword: fruehstueck charlottenburg 1.900 (KD 0)
- Neben-Keywords: brunch charlottenburg 1.000 (KD 0), fruehstueck berlin charlottenburg 720 (KD 0), fruehstueck savignyplatz 320 (KD 0), fruehstueck kurfuerstendamm 210 (KD 0), bestes fruehstueck charlottenburg 210 (KD 0), fruehstueck charlottenburg-wilmersdorf 170 (KD 0), brunch kurfuerstendamm 30 (KD keine Daten), italienisches fruehstueck berlin 30 (KD keine Daten)
- Bestand: casabellucci.de rankt schon stark im Frueh­stueck-Umfeld am Kudamm ("frueh­stueck am kudamm" 880 Pos 3, "brunch am kudamm" 210 Pos 3). Diese Seite buendelt und vertieft, was die Homepage heute nebenbei abdeckt.
- Verlinkung: Verlinkt auf `/reservierung/` und zurueck auf `/it-restaurant/`. Homepage verlinkt aus dem Fruehstueck-Abschnitt hierher.

### Cluster Bar und Aperitivo

- Zielseite: `/bar-aperitivo-kurfuerstendamm/`
- Haupt-Keyword: bar charlottenburg 2.400 (KD 0)
- Neben-Keywords: aperitivo berlin 210 (KD 0), bar kurfuerstendamm 170 (KD 7), cocktailbar charlottenburg 170 (KD 2), cocktailbar kudamm 110 (KD 8), aperitivo bar berlin 90, aperitivo charlottenburg 0
- Begruendung: Trotz aperitivo charlottenburg SV 0 hat der Cluster ueber bar charlottenburg 2.400 und aperitivo berlin 210 klar genug Volumen fuer eine eigene Seite. Wichtig laut Map v1: Sprachlich "Bar und Aperitivo am Kurfuerstendamm" statt "Cocktailbar Berlin", damit die Seite zur Realitaet (Restaurant mit Bar) passt.
- Verlinkung: Verlinkt auf `/wein/`, `/reservierung/` und zurueck auf `/it-restaurant/`.

### Cluster Wein

- Zielseite: `/weinbar-charlottenburg/` (optional, P1)
- Haupt-Keyword: weinbar berlin 1.600 (KD 20)
- Neben-Keywords: weinbar charlottenburg 260 (KD 1), weinbar berlin-charlottenburg 50
- Begruendung: Hoechste KD im gesamten Set (20), daher kein reiner Quick-Win. Aber der Sommelier-Schwerpunkt mit 65 Prozent Sizilien und Sueditalien (lib/data.ts) ist ein echter Inhaltsbeleg. Wenn nur Ressourcen fuer eine optionale Seite da sind, kann Wein zunaechst als starker Abschnitt auf `/sizilianisch/` oder `/bar/` leben und spaeter zur eigenen Seite werden.
- Verlinkung: Verlinkt auf `/bar/`, `/sizilianisch/`, `/reservierung/`.

### Cluster Fine-Dining / Anlass

- Zielseite: primaer als Abschnitte auf `/sizilianisches-restaurant-berlin/`, keine separate Seite zwingend noetig
- Haupt-Keyword: fine dining berlin 1.900 (KD 0)
- Neben-Keywords: romantisches restaurant berlin 720, gehobenes restaurant berlin 320 (KD 17), business lunch berlin 170 (CPC 3,01), date restaurant berlin 110, business lunch charlottenburg 40, restaurant fuer geschaeftsessen berlin 0, geschaeftsessen berlin 10
- Begruendung: Hohe CPC bei business lunch berlin (3,01) signalisiert kaufkraeftige Intention, aber niedriges Volumen. Diese Begriffe bedienen Anlass-Suchen und passen gut als Unterabschnitte (Geschaeftsessen, Date, besonderer Anlass) zur Sizilianisch/Fine-Dining-Seite, statt eigene duenne Seiten zu erzeugen.
- Verlinkung: innerhalb `/sizilianisch/`, mit CTA auf `/reservierung/`.

### Cluster Lunch / Dinner / Terrasse (niedrig priorisiert, Content-Abschnitt)

- Keine eigene Top-Prioritaet-Seite. Begruendung: lunch kurfuerstendamm 0, abendessen kurfuerstendamm 0, dinner charlottenburg 10, sommerterrasse berlin 10, restaurant terrasse kurfuerstendamm 0, restaurant mit terrasse charlottenburg 0 (alle keywords_master.csv, 2026-06-02). Einzige nennenswerte Ausnahme ist restaurant terrasse berlin 210 (KD 12) und lunch charlottenburg 140 (KD 0).
- Umsetzung: Als Abschnitte auf `/it-restaurant/` (All-Day-Konzept: Fruehstueck, Lunch, Dinner, Terrasse) und ueber die Speisekarte abgedeckt. Terrasse bleibt ein starkes Bild- und Conversion-Thema, auch wenn das Suchvolumen klein ist.

---

## 4. Soll-Seitenarchitektur

Bestehende vs. neue Seiten, mit Prioritaet, Hauptbegriff, Volumen plus Intent als Begruendung. Bestandsrankings aus domain_ranked_keywords.csv, 2026-06-02.

| Seite | Status | Hauptbegriff (SV / KD) | Intent | Prio | Begruendung |
| --- | --- | --- | --- | --- | --- |
| `/` | vorhanden | bellucci berlin 2.900 / 0 | navigational | P0 | Brand-Hub, rankt bereits Pos 1 bis 3 fuer Brand-Varianten. Verteidigen und intern verlinken. |
| `/reservierung/` | vorhanden | restaurant reservieren berlin 20 / 20 | transactional | P0 | Conversion-Seite, kein Keyword-Overload noetig. ReserveAction-Schema schon vorhanden (lib/seo.ts). |
| `/italienisches-restaurant-berlin-charlottenburg/` | neu | italienisches restaurant berlin 4.400 / 17 | commercial | P0 | Groesste non-brand Nachfrage plus alle Lage-Varianten. Casa Bellucci rankt fuer Kudamm-Begriffe schon top, eine eigene Hub-Seite hebt das. |
| `/sizilianisches-restaurant-berlin/` | neu | sizilianisches restaurant berlin 4.400 / 12 | commercial | P0 | Hoechstwertiger Differenzierungs-Begriff, deckt USP exakt. Niedrige KD, kein Bestandsranking, also klarer Zugewinn. |
| `/fruehstueck-brunch-kurfuerstendamm/` | neu | fruehstueck charlottenburg 1.900 / 0 | local/commercial | P1 | Eigener Suchintent (morgens), KD 0, plus Bestandsrankings am Kudamm. Erst live, wenn Fruehstuecksangebot final ist. |
| `/bar-aperitivo-kurfuerstendamm/` | neu | bar charlottenburg 2.400 / 0 | local/commercial | P1 | Grosses Volumen, KD 0. Nur live, wenn Bar und Aperitivo visuell und inhaltlich stark genug dargestellt sind. |
| `/weinbar-charlottenburg/` | neu, optional | weinbar berlin 1.600 / 20 | commercial | P1 | Sommelier-USP als Beleg, aber hoechste KD. Optional, kann zunaechst Abschnitt sein. |

Anlass-, Lunch-, Dinner- und Terrasse-Begriffe bekommen keine eigenen Seiten (siehe Cluster oben), sondern leben als Abschnitte. Legal-Seiten (Impressum, Datenschutz) bleiben SEO-sekundaer und teils noindex.

Relaunch-Hinweis (WordPress zu Next.js): Die alte casabellucci.de rankt fuer 176 Keywords (domain_ranked_keywords.csv), darunter starke Begriffe auf Pos 1 bis 7 wie "frueh­stueck am kudamm" 880, "bellucci berlin" 2.900, "italienische restaurants kurfuerstendamm" 70 Pos 1. Beim Umstieg auf die neue Site muss gelten:

- 1:1-Redirects fuer alle bisher rankenden URLs (besonders `/`, `/presse/`, `/impressum/`, die in den Rohdaten auftauchen).
- Content-Paritaet: Begriffe wie Fruehstueck, Brunch, Kudamm, Bellucci muessen auf der neuen Homepage und den Hub-Seiten mindestens so prominent vorkommen wie bisher, damit Rankings nicht abrutschen.
- canonical und LocalBusiness-Schema frueh aktiv (lib/seo.ts liefert restaurantJsonLd bereits).

---

## 5. GEO / AI-Overview-Chancen

Quelle der Fragen: serp_restaurant_charlottenburg.json und serp_restaurant_kurfuerstendamm.json (People Also Ask), DataForSEO, Berlin, 2026-06-02. Related Searches aus den uebrigen serp_*.json.

People Also Ask, die direkt zur Positionierung passen und als zitierfaehige FAQ-Antworten beantwortet werden sollten:

- "Wo sollte man unbedingt in Berlin essen gehen?" (in beiden Head-Terms)
- "Wo gehen die Promis in Berlin essen?" / "Wo gehen die Stars in Berlin essen?"
- "Was ist das Besondere am Kurfuerstendamm?"
- "Wo kann man in Berlin gut und guenstig essen gehen?"
- "Wo ist es in Charlottenburg am schoensten?"
- "Welchen Ruf hat Charlottenburg?"

Ableitung fuer FAQ-Content (auf `/it-restaurant/` und `/`):

- Eine kurze, zitierfaehige Antwort (40 bis 60 Woerter) zu "Was ist das Besondere am Kurfuerstendamm?" mit konkreter Verortung (Kurfuerstendamm 63, Charlottenburg, City West). Solche knappen Faktenbloecke werden von AI Overviews und Chat-Suchen bevorzugt zitiert.
- Eine Antwort zu "Wo sollte man in Berlin italienisch oder sizilianisch essen?" mit dem USP (Cucina Siciliana, Pasta fatta a mano, frischer Fisch, 65 Prozent Sizilien und Sueditalien auf der Weinkarte).
- FAQ-Block mit Oeffnungszeiten (Mo bis Sa 09:00 bis 00:00, So 09:00 bis 18:00), Reservierung, Terrasse, Fruehstueckszeiten. Diese Fakten als FAQPage-Schema auszeichnen.

Related Searches als Long-Tail- und Untertitel-Quellen:

- Italienisch+Lage: "italienisches restaurant berlin charlottenburg", "italienisches restaurant berlin in der naehe", "beste italiener charlottenburg", "italiener charlottenburg savignyplatz", "sardisches restaurant berlin-charlottenburg".
- Fruehstueck: "bestes fruehstueck charlottenburg", "sonntagsbrunch charlottenburg", "fruehstueck berlin kudamm", "fruehstueck am savignyplatz berlin".
- Bar: "cocktailbar charlottenburg", "gemuetliche bar charlottenburg", "beste bars charlottenburg".

Local-Pack- und Maps-Relevanz (serp_summary.json): Bei allen sechs Head-Terms erscheint ein Local Pack mit 12 Eintraegen. Bei "restaurant kurfuerstendamm" steht Casa Bellucci im Local Pack auf Position 1 mit Bewertung 4,5 bei 264 Stimmen. Konkurrenten im selben Pack haben teils 4,7 bis 4,9 bei deutlich mehr Stimmen (z. B. Bellucci Wilmersdorf 4,7 / 1.527, Restaurant Capone 4,5 / 2.118). Empfehlung: Bewertungsanzahl und Schnitt aktiv steigern (Review-Strategie), Google Business Profile pflegen, NAP-Konsistenz mit Kurfuerstendamm 63, 10707 Berlin sicherstellen. Das wirkt direkt auf die Sichtbarkeit, weil Local Pack ueber dem organischen Ergebnis steht.

---

## 6. Changelog gegenueber Keyword-Map v1

### Bestaetigt (Volumen aus v1 an Rohdaten geprueft, korrekt)

| Keyword | SV laut v1 | SV laut Rohdaten | Status |
| --- | ---: | ---: | --- |
| italienisches restaurant berlin | 4.400 | 4.400 (KD 17) | bestaetigt |
| restaurant charlottenburg | 2.900 | 2.900 (KD 0) | bestaetigt |
| bar charlottenburg | 2.400 | 2.400 (KD 0) | bestaetigt |
| fruehstueck charlottenburg | 1.900 | 1.900 (KD 0) | bestaetigt |
| restaurant kurfuerstendamm | 880 | 880 (KD 4) | bestaetigt |
| bellucci berlin | 2.900 | 2.900 (KD 0) | bestaetigt |
| casa bellucci | 390 | 390 (KD 0) | bestaetigt |
| italienisches restaurant charlottenburg | 320 | 320 (KD 0) | bestaetigt |
| fruehstueck kurfuerstendamm | 210 | 210 (KD 0) | bestaetigt |
| bar kurfuerstendamm | 170 | 170 (KD 7) | bestaetigt |

### Korrigiert (v1-Annahme vs. Rohdaten)

| Keyword | v1-Annahme | Rohdaten 2026-06-02 | Konsequenz |
| --- | --- | --- | --- |
| frueh­stueck savignyplatz | 320, eigenes Lage-Keyword | 320 (KD 0), aber Savignyplatz ist nicht die Lage von Casa Bellucci (Kudamm) | nur indirekt nutzen, keine Lage-Behauptung |
| sommerterrasse berlin | als eigene P2-Landingpage `/sommerterrasse-kurfuerstendamm/` geplant | SV 10 | keine eigene Seite, nur Content-Abschnitt |
| restaurant terrasse kurfuerstendamm | impliziter Terrasse-Cluster mit eigener Seite | SV 0 | Terrasse-Cluster degradiert zu Abschnitt |
| lunch / dinner als spaetere Menue-Unterseiten | als eigene Seiten vorgesehen (`/lunch/`, `/dinner/`) | lunch kurfuerstendamm 0, dinner charlottenburg 10, abendessen kurfuerstendamm 0 | keine eigenen Top-Prioritaet-Seiten, Abschnitte auf `/it-restaurant/` |
| Bar-Seite Prioritaet P2 | P2 | bar charlottenburg 2.400 (KD 0) | auf P1 hochgestuft, Volumen rechtfertigt das |

### Neu hinzugefuegt (fehlte in v1)

| Keyword | SV | KD | Warum wichtig |
| --- | ---: | ---: | --- |
| sizilianisches restaurant berlin | 4.400 | 12 | wertvollster Neufund, deckt USP exakt, neue P0-Seite |
| fine dining berlin | 1.900 | 0 | grosser Anlass-Begriff, KD 0 |
| weinbar berlin | 1.600 | 20 | Wein-Cluster, Sommelier-USP |
| restaurant berlin charlottenburg | 1.300 | 0 | starke Lage-Variante, KD 0 |
| italiener charlottenburg | 1.000 | 0 | hochvolumige Lage-Variante |
| brunch charlottenburg | 1.000 | 0 | Brunch klar abgegrenzt, KD 0 |
| romantisches restaurant berlin | 720 | 0 | Anlass-Begriff |
| fruehstueck berlin charlottenburg | 720 | 0 | Fruehstueck-Variante |
| gehobenes restaurant berlin | 320 | 17 | Premium-Positionierung |
| weinbar charlottenburg | 260 | 1 | lokale Wein-Variante |
| aperitivo berlin | 210 | 0 | Bar-Cluster, italienische Bar-Sprache |
| restaurant terrasse berlin | 210 | 12 | einziger Terrasse-Begriff mit echtem SV |
| business lunch berlin | 170 | 0 | hohe CPC 3,01, kaufkraeftiger Anlass |
| cocktailbar charlottenburg | 170 | 2 | Bar-Variante |

Begruendung der Korrekturen: Map v1 hatte fuer Terrasse, Lunch und Dinner noch keine eigenen DataForSEO-Pulls (in v1 ausdruecklich als offen markiert). Die jetzt vorliegenden Werte zeigen SV 0 bis 10 fuer diese Anlass-Begriffe. Daher werden sie zu Content-Abschnitten degradiert. Gleichzeitig ist der sizilianische USP-Term mit 4.400 SV bei KD 12 ein so starker Fund, dass er eine eigene P0-Seite rechtfertigt.

---

## 7. Methodik- und Datenhinweis

Erhebung ueber den Helper `scripts/dataforseo_query.py` und das Sammelskript `scripts/collect_seo_data.py` (keine Build-Komponenten). Credentials werden aus der lokalen Config gelesen und nie ausgegeben.

Parameter:
- Kuratierte Keyword-, Volumen- und Difficulty-Daten (keywords_master.csv, keyword_suggestions.json): location_name "Germany", Sprache Deutsch, Stand 2026-06-02. Quelle Suchvolumen: DataForSEO Google Ads Search Volume. Quelle Difficulty: DataForSEO Labs (Bulk Keyword Difficulty). Quelle Vorschlaege: DataForSEO Labs Keyword Suggestions.
- SERP-Daten (serp_*.json, serp_summary.json): location_name "Berlin, Berlin, Germany", language_code "de", device "desktop", depth 20, Stand 2026-06-02. Diese feinere Geo-Eingrenzung ist fuer das lageabhaengige Local Pack bewusst gewaehlt.
- Bestandsrankings (domain_ranked_keywords.csv): DataForSEO Labs Ranked Keywords fuer target casabellucci.de, location_name "Germany", Sprache Deutsch, Stand 2026-06-02.

Wichtiger Hinweis: Suchvolumen sind von Google Ads gerundete Monatswerte (typische Stufen 0, 10, 20, 30, 40, 50, 70, 90, 110, 140, 170, 210, 260, 320, 390, 480, 590, 720, 880, 1.000 und hoeher). Sie sind keine exakten Klickzahlen und schwanken saisonal. Keyword Difficulty ist ein DataForSEO-Score von 0 bis 100. Wo der Wert in den Rohdaten leer war, steht in diesem Dokument "keine Daten". Es wurde nichts geschaetzt oder erfunden.

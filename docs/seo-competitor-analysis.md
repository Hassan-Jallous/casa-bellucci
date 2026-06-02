# SEO-Wettbewerbsanalyse Casa Bellucci

Stand: 2026-06-02

## 1. Kopf, Datenquelle und Methodik

**Geschäft:** Casa Bellucci, gehobenes italienisch-sizilianisches All-Day-Restaurant plus Bar. Kurfürstendamm 63, 10707 Berlin-Charlottenburg. Produktionsdomain https://casabellucci.de (aktuell alte WordPress-Seite live, neue Next.js-Seite vorbereitet). USP: sizilianisch, All-Day (Frühstück bis Bar), Sommerterrasse, Weinkarte mit Sommelier.

**Datenquellen:**
- DataForSEO (SERP Berlin/Germany, Business Listings, Labs), abgerufen am 2026-06-02. Daraus stammen die SERP-Ranglisten, Local-Pack-Einträge, Bewertungszahlen und die Keyword-Listen.
- Eigene Keyword-Gap-Abfragen über DataForSEO Labs (ranked_keywords) für Osteria Ballarò und Ristorante Arlecchino, abgerufen am 2026-06-02.
- Eigene On-Page-Scrapes der fünf Wettbewerber-Startseiten per curl am 2026-06-02 (HTTP 200 bei allen fünf). Daraus stammen Title, Meta-Description, H1, H2-Struktur, JSON-LD-Schema-Typen, CMS, Sprache, grobe Content-Tiefe und Seitenarchitektur.
- Eigene NAP- und Schema-Daten von Casa Bellucci aus `lib/site.ts` und `lib/seo.ts` der vorbereiteten Next.js-Seite.

**Methodik kurz:** Erst Rohdaten gelesen (serp_summary.json, competitor_domains.csv, local_italian.csv, domain_ranked_keywords.csv mit 176 Keywords von Casa Bellucci). Dann die fünf Wettbewerber-Startseiten gescraped und SEO-Elemente extrahiert. Dann die Keyword-Listen der zwei direktesten Wettbewerber gegen Casa Belluccis 176 Keywords abgeglichen (Keyword gilt als Gap, wenn der Wettbewerber dafür rankt und Casa Bellucci nicht, Brand-Begriffe des Wettbewerbers ausgeschlossen). Jede Zahl im Dokument trägt Quelle und Datum. Wo etwas nicht erhoben werden konnte (Backlinks), ist das klar gekennzeichnet.

**Begründung der Wettbewerberauswahl:** Die fünf Profile decken die drei relevanten Konkurrenzachsen ab.
- Lage- und Positionierungs-Wettbewerb am Kurfürstendamm: Grace Restaurant (Fine Dining plus Rooftop Bar) und Eiffel Restaurant (Kurfürstendamm-Lage, All-Day inklusive Frühstück).
- Direkter sizilianischer USP-Wettbewerb in Charlottenburg: Osteria Ballarò (Cucina Siciliana).
- Organisch und lokal starke italienische Charlottenburg-Restaurants: Ristorante Arlecchino (organisch Top 5, 2944 bis 3007 Bewertungen) und Restaurant Mamma Monti (organisch Top 3 für italienisches restaurant charlottenburg).
Alle fünf tauchen entweder in den SERP-Top-Domains der Head-Terms (serp_summary.json, 2026-06-02) oder in competitor_domains.csv als organische Wettbewerber auf.

---

## 2. Executive Summary

1. **Die organische SERP gehört den Verzeichnissen, nicht den Restaurants.** Für fünf der sechs untersuchten Head-Terms steht auf Platz 1 ein Verzeichnis oder Listicle (tripadvisor.de, mitvergnuegen.com, quandoo.de, opentable.de). Quelle: serp_summary.json, 2026-06-02. Heißt für Casa Bellucci: Der organische Platz 1 für generische Begriffe ist meist nicht erreichbar, weil dort kein einzelnes Restaurant steht. Wichtiger sind Local Pack, Präsenz in genau diesen Verzeichnissen und Long-Tail- plus Nischen-Begriffe.

2. **Casa Bellucci hat einen Local-Pack- und Bewertungsrückstand.** In local_italian.csv (50 italienische Restaurants im Umkreis Kurfürstendamm, DataForSEO Business Listings, 2026-06-02) taucht Casa Bellucci unter den Top 50 nach Bewertungsanzahl nicht auf. Im Local Pack für restaurant kurfürstendamm steht Casa Bellucci zwar auf Platz 1, aber mit nur 264 Bewertungen bei 4,5 Sternen (serp_summary.json, 2026-06-02). Zum Vergleich: Luardi 4,8 bei 8786 Bewertungen, Ristorante Arlecchino 4,8 bei 3007, Mamma Monti 4,8 bei 845, Osteria Ballarò 4,8 bei 434 (serp_summary.json Local Pack für italienisches restaurant charlottenburg, 2026-06-02). Das ist die zentrale Local-SEO-Schwäche: zu wenige Bewertungen und ein niedrigerer Schnitt als die direkten Konkurrenten.

3. **Die sizilianische Nische ist die größte ungenutzte Chance.** Casa Bellucci positioniert sich als sizilianisch, rankt aber laut domain_ranked_keywords.csv (2026-06-02) für keinen einzigen sizilianisch-Begriff. Der einzige direkte sizilianische Wettbewerber, Osteria Ballarò, besetzt diese Nische schwach (organisch Platz 7 für italienisches restaurant charlottenburg, serp_summary.json, 2026-06-02) und mit nur 418 bis 434 Bewertungen. Hier ist Differenzierung möglich, bevor jemand anders sie besetzt.

4. **Casa Bellucci rankt stark auf Brand und Kudamm, aber gar nicht auf Kategorie-Begriffe.** Trotz alter Seite rankt Casa Bellucci für 176 Keywords, darunter Platz 1 für casa bellucci restaurant berlin charlottenburg (Suchvolumen 4400) und Platz 5 organisch für restaurant kurfürstendamm (serp_summary.json und domain_ranked_keywords.csv, 2026-06-02). Aber für italienisches restaurant berlin, italienisches restaurant charlottenburg, italiener charlottenburg, restaurant charlottenburg, bar charlottenburg und frühstück charlottenburg rankt Casa Bellucci nicht (eigener Abgleich, 2026-06-02). Genau diese Begriffe haben die Wettbewerber.

5. **Quick Wins:** Bewertungsaufbau über Google Business Profile (264 Bewertungen sind der größte Hebel), dedizierte Landingpages für die Cluster sizilianisch, Frühstück am Kudamm und Bar am Kudamm sowie Listung in den SERP-dominanten Verzeichnissen (Quandoo läuft bereits über Merchant-ID 104436, dazu OpenTable, Tripadvisor, mitvergnuegen, visitberlin).

---

## 3. SERP-Landschaft (Head-Terms)

Quelle: serp_summary.json, DataForSEO SERP Berlin/Germany, 2026-06-02. SERP-Features pro Term in Klammern.

| Head-Term | Organische Top 5 (Domain, Rang) | Local Pack Top 3 (Name, Sterne/Bewertungen) | SERP-Features |
|---|---|---|---|
| italienisches restaurant berlin | tripadvisor.de (1), mitvergnuegen.com (2), ristorante-arlecchino.de (3), bigmammagroup.com (4), bocca-felice.de (5) | Nuova Italia 4,9/596, Bocca Felice 4,9/2286, Impasto Rosso 4,8/2953 | Local Pack, People also search, Related searches, Compare sites |
| italienisches restaurant charlottenburg | quandoo.de (1), tripadvisor.de (2), mamma-monti.com (3), visitberlin.de (4), ristorante-arlecchino.de (5) | Luardi 4,8/8786, Mamma Monti 4,8/845, Arlecchino 4,8/3007 | Local Pack, Related searches, Compare sites |
| restaurant kurfürstendamm | tripadvisor.de (1), restaurant-schildkroete.de (2), louisas-place.de (3), eiffel-restaurant.de (4), casabellucci.de (5) | Casa Bellucci 4,5/264, Bocca di Lupo 4,9/65, Greek Restaurant Ku'Damm 4,7/84 | Local Pack, People also ask, Compare sites |
| restaurant charlottenburg | mitvergnuegen.com (1), tip-berlin.de (2), cremeguides.com (3), al-mundo.de (4), opentable.de (5) | Das Köstlich 4,8/173, Schnitzelei 4,5/4651, Al-Mundo 4,8/845 | Local Pack, People also ask, Related searches, Compare sites |
| frühstück charlottenburg | mitvergnuegen.com (1), visitberlin.de (2), opentable.de (3), setsberlin.de (4), au-lait.de (5) | A Never Ever Ending Love Story 4,6/2702, Café au Lait 4,4/2998, Day Date Berlin 4,8/142 | Local Pack, Related searches, Compare sites |
| bar charlottenburg | mitvergnuegen.com (1), tip-berlin.de (2), reddit.com (3), opentable.de (4), tripadvisor.de (5) | Galander Charlottenburg 4,7/609, Monkey Bar 4,1/7365, Journey into the Night 4,6/318 | Local Pack, Related searches, Compare sites |

**Befund:** Bei fünf von sechs Head-Terms steht ein Verzeichnis oder Listicle auf Platz 1, einzige Ausnahme ist restaurant kurfürstendamm mit einem direkten Restaurant auf Platz 2 (restaurant-schildkroete.de). Casa Bellucci erscheint nur bei restaurant kurfürstendamm in den organischen Top 10 (Platz 5) und gleichzeitig im Local Pack auf Platz 1. Für die übrigen fünf Head-Terms ist Casa Bellucci organisch nicht in den Top 10. Jeder Head-Term zeigt ein Local Pack mit 12 Einträgen, das ist konsistent die wichtigste Sichtbarkeitschance für ein einzelnes Restaurant.

---

## 4. Wettbewerber-Profile

On-Page-Daten aus eigenem curl-Scrape der Startseiten, 2026-06-02. Bewertungsdaten aus serp_summary.json und local_italian.csv, 2026-06-02.

### 4.1 Grace Restaurant (grace-restaurant.de)

- **Positionierung/Lage:** Casual Fine Dining plus Rooftop Bar und Garden am Kurfürstendamm, kreative asiatisch-europäische Küche. Direktester Lage- und Premium-Positionierungs-Wettbewerber. Organisch Platz 8 für restaurant kurfürstendamm (serp_summary.json, 2026-06-02). In competitor_domains.csv 57 gemeinsame Keywords, durchschnittliche Position rund 19 (2026-06-02).
- **On-Page:** Title "GRACE Berlin, Fine Dining & Rooftop Bar am Kurfürstendamm" (im Original mit Gedankenstrich getrennt). Meta-Description vorhanden und keyword-stark (Trend-Restaurant, Bar, Charlottenburg, kreative Küche, Rooftop, Kurfürstendamm). H1 nur "Willkommen im GRACE" (kein Keyword in der H1). Fünf H2 mit klarer Themenstruktur (Casual Fine Dining in Berlin, Das GRACE Restaurant, Die GRACE Bar, Rooftop & GRACE Garden). JSON-LD vorhanden: BreadcrumbList, Organization, WebPage, WebSite. Auffällig: kein Restaurant-Schema, nur Organization. CMS WordPress mit All in One SEO (AIOSEO). Sprache de-DE. Architektur deckt Reservierung, Menü/Karte, Bar, Terrasse, Öffnungszeiten, Galerie, Events und Kontakt ab.
- **Local SEO:** Im Local Pack der untersuchten Head-Terms nicht unter den Top 6 vertreten. Keine Bewertungszahl in den vorliegenden Local-Pack-Daten erfasst.
- **Stärken:** Klare Premium-Positionierung, starke Meta-Description, saubere H2-Struktur, breite Seitenarchitektur, professionelles SEO-Plugin.
- **Schwächen:** H1 ohne Keyword, nur Organization-Schema statt Restaurant-Schema, organisch nur Platz 8 für den Kern-Lage-Term.

### 4.2 Osteria Ballarò (osteria-ballaro.berlin)

- **Positionierung/Lage:** Cucina Siciliana in Charlottenburg, modern interpretierte sizilianische Küche. Der direkteste sizilianische USP-Wettbewerber. Organisch Platz 7 für italienisches restaurant charlottenburg (serp_summary.json, 2026-06-02). Local Pack Platz 4 für denselben Term mit 4,8/434 (serp_summary.json, 2026-06-02), in local_italian.csv 4,8/418 (2026-06-02).
- **On-Page:** Title "Osteria Ballarò › Cucina Siciliana › Charlottenburg", besetzt also den sizilianischen Begriff plus die Lage direkt im Title. Meta-Description vorhanden (sizilianische Küche, handwerkliche Qualität, Berlin-Charlottenburg, mit Tippfehler "Berln"). Keine H1 auf der Startseite (H1 count 0). Neun H2, teils funktional (Main Navigation, Footer-Menü), teils inhaltlich (Benvenuti, CUCINA, BEVANDE, Galerie, INFO, Anfahrt). JSON-LD nur Organization, kein Restaurant-Schema. CMS WordPress. Sprache de-DE. Architektur deckt Speisekarte, Wein/Bevande, Galerie, Reservierung und Kontakt ab.
- **Local SEO:** 4,8 Sterne bei 418 bis 434 Bewertungen, ein solider Schnitt, aber relativ wenige Bewertungen verglichen mit Arlecchino oder Luardi.
- **Stärken:** Besetzt den sizilianischen Begriff explizit im Title, klarer Nischen-USP, guter Bewertungsschnitt.
- **Schwächen:** Fehlende H1, nur Organization-Schema, schwache organische Position trotz klarer Nische, vergleichsweise wenige Bewertungen. Das zeigt: Die sizilianische Nische ist offen und schwach verteidigt.

### 4.3 Ristorante Arlecchino (ristorante-arlecchino.de)

- **Positionierung/Lage:** Italienisches Restaurant Berlin-Charlottenburg, direkt am Kudamm (Meinekestraße 25). Organisch sehr stark: Platz 3 für italienisches restaurant berlin und Platz 5 für italienisches restaurant charlottenburg (serp_summary.json, 2026-06-02). In competitor_domains.csv jedoch nicht unter den Top 30 nach Intersections gelistet, der Wettbewerb läuft also vor allem über die generischen Kategorie-Begriffe.
- **On-Page:** Title "Italienisches Restaurant Berlin-Charlottenburg", exakt der Kategorie-plus-Lage-Begriff, keyword-optimiert. Meta-Description vorhanden (zentral in Berlin-Charlottenburg, Kudamm-Nähe, feinste italienische Küche). H1 identisch zum Title "Italienisches Restaurant Berlin-Charlottenburg", also voll keyword-fokussiert. Vier inhaltliche H2, alle rund um italienisches Restaurant und Kudamm. JSON-LD vorhanden: WebPage, BreadcrumbList, WebSite, aber kein Restaurant-Schema. CMS WordPress (mit LayerSlider). Sprache de. Architektur deckt Speisekarte, Wein, Galerie, Reservierung, Events, Öffnungszeiten und Kontakt ab.
- **Local SEO:** 4,8 Sterne bei 2944 Bewertungen (local_italian.csv) bzw. 3007 (serp_summary.json Local Pack Platz 3 für italienisches restaurant charlottenburg), 2026-06-02. Einer der bewertungsstärksten direkten Wettbewerber.
- **Stärken:** Perfekt auf den Kategorie-Begriff optimierte Title-H1-Kombination, sehr starke organische Position, sehr viele Bewertungen bei hohem Schnitt.
- **Schwächen:** Kein Restaurant-Schema, kein Frühstücks- oder Bar-Profil, eng auf Dinner-Italiener fokussiert. Keine All-Day-Story.

### 4.4 Restaurant Mamma Monti (www.mamma-monti.com)

- **Positionierung/Lage:** Italienisches Restaurant in Berlin-Charlottenburg (Carmerstraße 11). Organisch Platz 3 für italienisches restaurant charlottenburg und Platz 8 für italienisches restaurant berlin (serp_summary.json, 2026-06-02).
- **On-Page:** Title "Startseite - Mamma Monti - Italieniches Restaurant in Berlin Charlottenburg", mit dem Wort "Startseite" als unnötigem Prefix und Tippfehler "Italieniches". Keine Meta-Description (n/a im Scrape). Keine H1 (H1 count 0). Nur drei H2 (Willkommen im Mamma Monti, Unsere Öffnungszeiten, Unser Menu). Geringste Content-Tiefe der fünf (rund 2100 sichtbare Zeichen im Scrape). JSON-LD vorhanden: WebPage, ImageObject, BreadcrumbList, WebSite, aber kein Restaurant-Schema. CMS WordPress 6.9.1. Sprache de. Architektur deckt Speisekarte, Wein, Reservierung, Events, Öffnungszeiten und Kontakt ab.
- **Local SEO:** 4,8 Sterne bei 834 Bewertungen (local_italian.csv) bzw. 845 (serp_summary.json Local Pack Platz 2 für italienisches restaurant charlottenburg), 2026-06-02.
- **Stärken:** Starke organische Position für den Charlottenburg-Kategorie-Begriff trotz dünner Seite, solide Bewertungsbasis.
- **Schwächen:** Fehlende Meta-Description, fehlende H1, "Startseite"-Prefix und Tippfehler im Title, sehr dünner Content, kein Restaurant-Schema. Rankt fast trotz der Seite, nicht wegen ihr. Das zeigt, wie stark Local-Signale und Bewertungen hier den Ausschlag geben.

### 4.5 Eiffel Restaurant (eiffel-restaurant.de)

- **Positionierung/Lage:** Restaurant am Kurfürstendamm mit All-Day-Profil inklusive Frühstück, Business Lunch und Abendessen. Direkter Lage- und All-Day-Wettbewerber. Organisch Platz 4 für restaurant kurfürstendamm (serp_summary.json, 2026-06-02). In competitor_domains.csv 56 gemeinsame Keywords, durchschnittliche Position rund 18 (2026-06-02).
- **On-Page:** Title "★ - Eiffel Restaurant - Kurfürstendamm, Berlin" (mit Stern-Sonderzeichen am Anfang). Meta-Description vorhanden, aber werblich mit Häkchen-Symbolen statt Keywords. H1 vorhanden und stark: "Fantastisch essen in Berlin in Ihrem Eiffel Restaurant am Kurfürstendam" (Tippfehler "Kurfürstendam"). Sieben H2, die das All-Day-Profil sauber abbilden: Frühstücken am Kurfürstendamm, Business Lunch/Mittagessen, Abendessen am Ku'damm, Was möchten Sie trinken, Tischreservierung. KEIN JSON-LD (JSON-LD blocks 0), also gar kein strukturiertes Markup. CMS Joomla. Sprache de-de. Architektur deckt Frühstück, Lunch, Speisekarte, Wein, Reservierung, Events und Kontakt ab.
- **Local SEO:** In den Local-Pack-Daten der untersuchten Head-Terms nicht unter den Top 6 erfasst, keine Bewertungszahl in den vorliegenden Daten.
- **Stärken:** Bestes All-Day-Content-Profil der fünf (Frühstück, Lunch, Dinner, Bar in eigenen H2), starke H1, organisch Platz 4 für den Kern-Lage-Term. Das ist genau Casa Belluccis Positionierung, hier liegt der direkteste inhaltliche Wettbewerb.
- **Schwächen:** Kein strukturiertes Markup überhaupt (kein JSON-LD), veraltetes Joomla-CMS, Sonderzeichen und Tippfehler in Title und H1, keine OG-Tags. Technisch angreifbar.

---

## 5. Vergleichs-Matrix

Casa-Bellucci-Spalte aus lib/seo.ts und lib/site.ts (vorbereitete Next.js-Seite) plus Live-Baseline der alten Seite. Wettbewerberspalten aus On-Page-Scrape und Bewertungsdaten, alle 2026-06-02.

| Dimension | Casa Bellucci | Grace | Osteria Ballarò | Arlecchino | Mamma Monti | Eiffel |
|---|---|---|---|---|---|---|
| Positionierung | Sizilianisch, All-Day, Bar, Terrasse | Fine Dining, Rooftop Bar | Cucina Siciliana | Italiener Dinner | Italiener | All-Day am Kudamm |
| Title-Keyword-Fokus | Italienisch + Kurfürstendamm (neue Seite) | Fine Dining + Rooftop + Kurfürstendamm | Cucina Siciliana + Charlottenburg | Italienisches Restaurant Berlin-Charlottenburg | Italienisch Berlin Charlottenburg (mit Tippfehler) | Eiffel + Kurfürstendamm |
| H1 | nur "Casa Bellucci" (Baseline) | "Willkommen im GRACE", kein Keyword | keine H1 | exakter Kategorie-Begriff | keine H1 | starke Lage-H1 (mit Tippfehler) |
| Meta-Description | vorhanden, keyword-stark (neue Seite) | vorhanden, stark | vorhanden | vorhanden | fehlt | vorhanden, werblich |
| Schema | Restaurant-Schema vollständig (neue Seite) | nur Organization | nur Organization | WebPage/Breadcrumb, kein Restaurant | WebPage/Breadcrumb, kein Restaurant | kein JSON-LD |
| Bewertungen | 264 (Local Pack) | n/a | 418 bis 434 | 2944 bis 3007 | 834 bis 845 | n/a |
| Bewertungsschnitt | 4,5 | n/a | 4,8 | 4,8 | 4,8 | n/a |
| Frühstück abgedeckt | ja | nein | nein | nein | nein | ja |
| Bar abgedeckt | ja | ja | teilweise (Bevande) | nein | nein | teilweise |
| Terrasse abgedeckt | ja | ja (Rooftop/Garden) | nein | nein | nein | nein |
| Dedizierte Landingpages | nein (Single-Page) | teilweise | teilweise | teilweise | nein | teilweise |

**Schlüsselbefunde aus der Matrix:**
- Casa Belluccis vorbereitete Next.js-Seite hat als einzige ein vollständiges Restaurant-Schema mit openingHoursSpecification, servesCuisine (inkl. Sizilianisch), acceptsReservations und ReserveAction (lib/seo.ts, 2026-06-02). Das ist ein echter technischer Vorsprung, drei der fünf Wettbewerber haben gar kein Restaurant-Schema, Eiffel hat überhaupt kein JSON-LD.
- Casa Bellucci und Eiffel sind die einzigen mit echtem Frühstücks-Profil. Das ist Casa Belluccis verteidigbarste inhaltliche Position gegen die reinen Dinner-Italiener.
- Casa Bellucci ist der einzige Anbieter, der Frühstück, Bar und Terrasse zugleich abdeckt. Diese All-Day-plus-sizilianisch-Kombination hat kein einziger Wettbewerber.
- Klarer Rückstand nur bei Bewertungen: 264 ist die mit Abstand niedrigste belastbare Zahl gegen die direkten Charlottenburg-Italiener (Arlecchino 2944 bis 3007, Mamma Monti 834 bis 845, Osteria Ballarò 418 bis 434).
- H1-Schwäche: Casa Belluccis Baseline-H1 ist nur "Casa Bellucci" ohne Keyword. Arlecchino und Eiffel zeigen, wie eine keyword-tragende H1 aussieht.

---

## 6. Gap- und Chancen-Matrix

### 6.1 Keyword-Gaps

Quelle: eigener Abgleich der DataForSEO-Labs-ranked_keywords von Osteria Ballarò und Ristorante Arlecchino gegen Casa Belluccis 176 Keywords, 2026-06-02. Gap heißt: Wettbewerber rankt, Casa Bellucci rankt nicht (Brand-Begriffe ausgeschlossen). Suchvolumen aus DataForSEO. Die Positionsangaben sind die organische Position (rank_group), nicht die absolute SERP-Position (rank_absolute, die Anzeigen und SERP-Features mitzählt).

Casa Bellucci rankt heute stark auf Brand (casa bellucci, bellucci) und auf den Kudamm-Cluster (restaurant kudamm, italiener kudamm, frühstück kudamm), aber für die generischen Kategorie- und Charlottenburg-Begriffe gar nicht. Bestätigt durch Direktprüfung am 2026-06-02: für italienisches restaurant berlin, italienisches restaurant charlottenburg, italiener charlottenburg, restaurant charlottenburg, bar charlottenburg, frühstück charlottenburg sowie alle sizilianisch-Begriffe rankt Casa Bellucci nicht.

Wichtigste Gap-Keywords (Wettbewerber ranken, Casa Bellucci nicht), organische Position in Klammern:

| Keyword | Suchvolumen | Wer rankt (organische Pos) | Casa Bellucci |
|---|---|---|---|
| italienisches restaurant berlin | 4400 | Arlecchino (3) | rankt nicht |
| italiener charlottenburg | 1000 | Arlecchino (3), Ballarò (7) | rankt nicht |
| charlottenburg italiener | 1000 | Ballarò (7), Arlecchino (16) | rankt nicht |
| restaurant berlin charlottenburg | 1300 | Ballarò (17) | rankt nicht |
| beste italiener berlin / bester italiener berlin | je 880 | Arlecchino (21 / 14), Ballarò (33 / 35) | rankt nicht |
| essen charlottenburg | 480 | Ballarò (24) | rankt nicht |
| italienische restaurants charlottenburg | 320 | Ballarò (6), Arlecchino (9) | rankt nicht |
| italienisches restaurant charlottenburg | 320 | Arlecchino (5), Ballarò (8) | rankt nicht |
| restaurant italienisch charlottenburg | 320 | Ballarò (8), Arlecchino (15) | rankt nicht |
| italiener berlin-charlottenburg | 260 | Ballarò (5) | rankt nicht |
| beste italiener charlottenburg | 260 | Ballarò (6) | rankt nicht |
| italienische restaurants berlin charlottenburg | 210 | Arlecchino (4), Ballarò (6) | rankt nicht |
| best restaurants charlottenburg | 260 | Arlecchino (12) | rankt nicht |

Muster: Der gesamte Cluster italienisches restaurant charlottenburg und italiener charlottenburg ist eine Gap. Casa Bellucci hat zwar den Kudamm-Cluster besetzt, aber den Charlottenburg-Kategorie-Cluster komplett verfehlt, obwohl es geografisch in Charlottenburg liegt. Differenziert betrachtet: Arlecchino rankt für die beiden volumenstärksten Begriffe (italienisches restaurant berlin und italiener charlottenburg) bereits auf organischer Position 3. Das ist stark und nur mittelfristig angreifbar. Die zahlreichen Charlottenburg-Longtail-Varianten (italienische restaurants charlottenburg, italienisches restaurant charlottenburg, italiener berlin-charlottenburg, beste italiener charlottenburg) liegen dagegen nur auf Positionen 5 bis 8, dort sind die Wettbewerber realistisch erreichbar, zumal Casa Bellucci geografisch in Charlottenburg sitzt und sizilianisch differenziert.

### 6.2 Content-Gaps

- **Sizilianisch:** Casa Bellucci rankt für keinen sizilianisch-Begriff (domain_ranked_keywords.csv, 2026-06-02), obwohl das der USP ist. Kein dedizierter Content zu sizilianischer Küche. Osteria Ballarò besetzt den Begriff im Title, sonst niemand. Größte verteidigbare Content-Lücke.
- **Charlottenburg statt nur Kudamm:** Casa Belluccis Content zielt auf Kudamm, nicht auf Charlottenburg. Title und Texte sollten beide Geo-Begriffe tragen.
- **Dedizierte Landingpages:** Casa Bellucci ist eine Single-Page-Seite ohne eigene URLs für Frühstück, Bar, Weinkarte, Terrasse. Die Wettbewerber Eiffel und Grace haben für diese Themen zumindest eigene H2-Sektionen oder Unterseiten. Eigene indexierbare Landingpages wären nötig, um Cluster wie frühstück charlottenburg oder bar charlottenburg überhaupt anzugreifen.

### 6.3 SERP-Feature-Chancen

- **Local Pack (Quick Win):** Jeder Head-Term zeigt ein Local Pack mit 12 Einträgen (serp_summary.json, 2026-06-02). Casa Bellucci steht bei restaurant kurfürstendamm bereits auf Local-Pack-Platz 1, fehlt aber im Local Pack der anderen fünf Head-Terms. Bewertungsaufbau und GBP-Kategorien-Optimierung sind hier der Hebel.
- **People also ask:** Erscheint bei restaurant kurfürstendamm und restaurant charlottenburg (serp_summary.json, 2026-06-02). FAQ-Content (Öffnungszeiten, Frühstück, Reservierung, Terrasse) kann hier zitiert werden.
- **Bilder und Sitelinks:** Restaurant-Schema mit image-Array ist auf der neuen Seite vorhanden (lib/seo.ts, 2026-06-02), das unterstützt Bild- und Rich-Result-Chancen, die drei Wettbewerber mangels Restaurant-Schema nicht haben.
- **AI Overviews / Compare sites:** Alle sechs Head-Terms zeigen das Feature Compare sites (serp_summary.json, 2026-06-02). Strukturierte, zitierfähige Inhalte und vollständiges Schema erhöhen die Chance, in solchen vergleichenden und KI-Antworten aufzutauchen.

### 6.4 Local-SEO-Gaps

- **Bewertungsanzahl (größte Gap):** 264 Bewertungen (serp_summary.json, 2026-06-02) gegen Arlecchino 2944 bis 3007, Mamma Monti 834 bis 845, Osteria Ballarò 418 bis 434. Casa Bellucci fehlt komplett in den Top 50 nach Bewertungsanzahl in local_italian.csv (2026-06-02).
- **Bewertungsschnitt:** 4,5 gegen durchgehend 4,8 bei den direkten Charlottenburg-Italienern. Sowohl Menge als auch Schnitt müssen steigen.
- **Namens-Verwirrung:** Im Local Pack für restaurant kurfürstendamm erscheinen zwei Einträge, Casa Bellucci Restaurant Berlin Charlottenburg (4,5/264) und Bellucci Restaurant Berlin Wilmersdorf (4,7/1527) (serp_summary.json, 2026-06-02). Diese Dopplung kann Bewertungen und Sichtbarkeit splitten und sollte im GBP geprüft werden.

### 6.5 Einteilung Quick Wins vs. langfristig

**Quick Wins (Wochen, geringer Aufwand, hoher Hebel):**
1. Bewertungsaufbau über GBP. Begründung: 264 Bewertungen sind der größte und unmittelbarste Rückstand, Local Pack ist bei jedem Head-Term das relevanteste Feature.
2. Keyword-tragende H1 und Title mit Charlottenburg plus sizilianisch ergänzen. Begründung: Casa Bellucci verfehlt den gesamten Charlottenburg-Kategorie-Cluster, obwohl die neue Seite technisch sauber ist. Eine bessere H1 als "Casa Bellucci" ist sofort umsetzbar.
3. Vollständigkeit in den SERP-dominanten Verzeichnissen sicherstellen: Quandoo (Merchant-ID 104436 vorhanden), OpenTable, Tripadvisor, mitvergnuegen, visitberlin. Begründung: Diese Domains besetzen die organischen Top-Plätze, Präsenz dort ist oft wertvoller als organischer Platz 1.
4. NAP-Konsistenz und GBP-Dopplung Casa Bellucci vs. Bellucci Wilmersdorf klären. Begründung: verhindert Aufsplittung von Bewertungs- und Ranking-Signalen.

**Langfristig (Monate, mehr Aufwand):**
1. Dedizierte, indexierbare Landingpages für sizilianische Küche, Frühstück am Kudamm/Charlottenburg, Bar und Weinkarte. Begründung: Single-Page-Architektur kann die Cluster sonst nicht angreifen.
2. Content-Aufbau zur sizilianischen Nische als Differenzierung. Begründung: schwach verteidigte Nische, einziger direkter Wettbewerber Osteria Ballarò ist organisch und bei Bewertungen schwach.
3. Backlink-Aufbau (siehe Abschnitt 7).

---

## 7. Backlinks

**Nicht erhoben.** Begründung: Das DataForSEO-Backlinks-Modul ist im aktiven Abo nicht freigeschaltet, die API antwortet mit "Access denied". Es werden hier bewusst keine Backlink-Zahlen genannt, um keine erfundenen Daten zu liefern.

**Qualitative Einordnung und Empfehlung für Phase 2:** Die organische SERP für die Head-Terms wird durchgehend von Verzeichnissen und redaktionellen Listicles dominiert (tripadvisor.de, opentable.de, quandoo.de, mitvergnuegen.com, tip-berlin.de, visitberlin.de, cremeguides.com, feinschmecker.de, serp_summary.json, 2026-06-02). Diese Seiten sind nicht nur SERP-Konkurrenten, sondern auch die wichtigsten potenziellen Backlink- und Citation-Quellen. Empfohlene Phase-2-Schritte: Aufnahme bzw. Optimierung der Einträge in genau diesen Verzeichnissen, gezielte Platzierung in lokalen redaktionellen Listicles (mitvergnuegen, tip-berlin, cremeguides, the-berliner) sowie lokale Presse mit dem sizilianischen und Sommerterrassen-Aufhänger. Eine quantitative Backlink-Gap-Analyse sollte nachgeholt werden, sobald ein Backlinks-fähiges Tool verfügbar ist (DataForSEO-Backlinks-Add-on, Ahrefs oder Majestic).

---

## 8. Methodik- und Datenhinweis

- **Primärquelle:** DataForSEO, SERP-Region Berlin/Germany, Sprache Deutsch, Module SERP, Business Listings und Labs. Abrufdatum durchgehend 2026-06-02. Konkrete Rohdateien: serp_summary.json (SERP-Features, organische Top-Domains, Local Pack), competitor_domains.csv (30 organische Wettbewerber-Domains), local_italian.csv (50 italienische Restaurants nach Bewertungsanzahl), domain_ranked_keywords.csv (176 Keywords von casabellucci.de), ranked_ballaro.json und ranked_arlecchino.json (je 100 Keywords der Wettbewerber, am 2026-06-02 über scripts/dataforseo_query.py gezogen).
- **Eigene On-Page-Erhebung:** curl-Scrape der fünf Wettbewerber-Startseiten am 2026-06-02, alle HTTP 200. Extrahiert wurden Title, Meta-Description, og:title, H1, H2-Struktur, JSON-LD-Schema-Typen, CMS/Generator, Sprache, grobe sichtbare Textmenge und Navigations-/Seitenstichworte. Kein Wettbewerber-Scrape ist fehlgeschlagen.
- **Eigene NAP- und Schema-Basis von Casa Bellucci:** lib/site.ts und lib/seo.ts der vorbereiteten Next.js-Seite, Stand Repository 2026-06-02.
- **Abweichungen in Zahlen:** Bewertungszahlen können zwischen serp_summary.json (Local Pack zum Zeitpunkt der SERP-Abfrage) und local_italian.csv (Business-Listings-Abzug) leicht abweichen, weil sie zu leicht unterschiedlichen Zeitpunkten und über unterschiedliche DataForSEO-Endpunkte erhoben wurden. Beide Werte sind jeweils mit Quelle genannt (Beispiel Arlecchino 2944 in local_italian.csv vs. 3007 im Local Pack).
- **Nicht erhoben:** Backlink-Profile (Abo deckt das Backlinks-Modul nicht ab, API "Access denied"). Als Lücke gekennzeichnet, keine geschätzten Zahlen.
- **Keine Änderung** an Code, CSS oder Content der Casa-Bellucci-Seite im Rahmen dieser Analyse.

# Legacy Redirect Map

Stand: 2026-06-05

Quelle:
- `scripts/seo-data/domain_ranked_keywords.csv`, DataForSEO, Stand 2026-06-02.
- `docs/seo-keyword-map.md`
- `docs/seo-keyword-research.md`
- Aktuelle Next.js-Routen unter `app/`

## Ranked URLs aus `domain_ranked_keywords.csv`

| Alter Pfad | Datenlage | Zielstatus |
| --- | --- | --- |
| `/` | 174 Keyword-Rankings | Bleibt 200 |
| `/impressum/` | 1 Keyword-Ranking | Bleibt 200, Route existiert |
| `/presse/` | 1 Keyword-Ranking | 301 auf `/` |

## Geplante/alte Kurzpfade aus SEO-Dokumenten

Diese Pfade sind in den SEO-Dokumenten als Ziel-URL-Kürzel oder frühere Content-Ideen genannt, existieren aber nicht als aktuelle Next.js-Routen. Sie bekommen deshalb 301-Ziele auf die vorhandenen finalen Seiten oder passende Homepage-Anker.

| Alter Pfad | Ziel | Begründung |
| --- | --- | --- |
| `/it-restaurant/` | `/italienisches-restaurant-berlin-charlottenburg/` | SEO-Kürzel aus Keyword-Research |
| `/sizilianisch/` | `/sizilianisches-restaurant-berlin/` | SEO-Kürzel aus Keyword-Research |
| `/fruehstueck/` | `/fruehstueck-brunch-kurfuerstendamm/` | SEO-Kürzel/alte Menü-Idee |
| `/fruehstueck-charlottenburg-kurfuerstendamm/` | `/fruehstueck-brunch-kurfuerstendamm/` | Frühere Zielseitenvariante aus Keyword-Map |
| `/bar/` | `/bar-aperitivo-kurfuerstendamm/` | SEO-Kürzel aus Keyword-Research |
| `/bar-charlottenburg-kurfuerstendamm/` | `/bar-aperitivo-kurfuerstendamm/` | Frühere Zielseitenvariante aus Keyword-Map |
| `/sommerterrasse-kurfuerstendamm/` | `/#terrasse` | Keine eigene Seite, passende Homepage-Sektion existiert |
| `/speisekarte/` | `/#menu` | Keine eigene Seite, Menü-Sektion existiert |
| `/lunch/` | `/#menu` | Keine eigene Seite, Menü-Sektion existiert |
| `/dinner/` | `/#menu` | Keine eigene Seite, Menü-Sektion existiert |
| `/drinks-wein/` | `/#wein` | Keine eigene Seite, Wein-Sektion existiert |

## Bewusste Nicht-Redirects

| Pfad | Status | Grund |
| --- | --- | --- |
| `/impressum/` | 200 | Aktuelle App-Route vorhanden |
| `/datenschutzerklaerung/` | 200 | Aktuelle App-Route vorhanden |
| `/cookie-richtlinie-eu/` | 200 | Aktuelle App-Route vorhanden |
| `/reservierung/` | 200 | Aktuelle App-Route vorhanden |
| `/danke-fuer-ihre-reservierung/` | 200 | Aktuelle App-Route vorhanden |
| `/menus/*.pdf` | 200 | Statische PDF-Dateien im Export |
| `/pdf/*.pdf` | 200 nach Backend-Installation | Vom PHP-Backend/Admin verwaltete Live-PDF-Dateien |

## Umsetzung

Die Redirects stehen in `php-backend/.htaccess`, weil diese Datei manuell in `public_html/.htaccess` auf Hostinger installiert wird und vom FTP-Sync bewusst ausgeschlossen ist.

Die Regeln sind als eng gefasste `RedirectMatch 301`-Regeln geschrieben:
- Nur exakt bekannte Pfade werden umgeleitet.
- Aktuelle App-Routen bleiben unverändert.
- Keine Regel erzeugt einen zweiten Hop innerhalb der aktuellen Mapping-Tabelle.

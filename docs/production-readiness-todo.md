# Production Readiness TODO

Stand: 2026-06-05

Ziel: Casa Bellucci erst live auf Hostinger deployen, wenn SEO, Rechtstexte, Admin/PHP-Backend, Accessibility, Performance und Deployment-Smokes belastbar geprüft sind.

## Status

- [ ] Nicht production-ready.
- [x] `npm run build` läuft lokal durch.
- [x] `npm exec tsc -- --noEmit` läuft lokal durch.
- [x] PHP-Syntaxcheck für Backend-APIs läuft lokal durch.
- [x] Static-export Linkcheck hatte keine fehlenden internen `href/src`-Ziele.
- [ ] Live-Hostinger-Smoke-Test besteht nicht: `robots.txt` und `/api/menu-urls.php` liefern live 404.
- [x] Provisorische Hostinger-Preview ist online: `https://casabellucci-preview.jallous-webdesign.de/`.
- [ ] Preview ist kein Production-Signoff: Static-Seiten laufen, aber PHP-API/Admin-Backend ist dort noch nicht live.

## P0 Launch-Blocker

### 1. Legacy-Redirects für alte WordPress-URLs

Status: Lokal umgesetzt, verifiziert und dediziert reviewed am 2026-06-05. P0-1 darf als abgeschlossen gelten. Live-Wirkung hängt daran, dass `php-backend/.htaccess` gemäß Deploy-Doku nach Hostinger `public_html/.htaccess` kopiert wird.

Problem:
Die SEO-Recherche nennt alte rankende URLs, besonders `/presse/`, `/impressum/` und weitere Bestands-URLs. Im aktuellen Static Export gibt es keine serverseitigen Redirects, und `php-backend/.htaccess` schützt bisher nur `config.php`.

Risiko:
Rankingverlust und 404s nach Relaunch.

TODO:
- [x] Aus `scripts/seo-data/domain_ranked_keywords.csv` und SEO-Dokumenten alle rankenden Alt-URLs sammeln.
- [x] Redirect-Mapping erstellen: alte URL -> neue Ziel-URL.
- [x] Hostinger-kompatible `.htaccess`-Redirects ergänzen.
- [x] `/presse/` explizit abfangen.
- [x] Prüfen, ob alte PDF-/Upload-URLs Redirects oder bewusst 410/404 bekommen sollen.

Akzeptanzkriterien:
- Jede bekannte rankende Alt-URL hat einen klaren Status: 301, 410 oder bleibt 200.
- Wichtigste alten URLs liefern 301 auf passende neue Seiten.
- Keine Redirect-Kette mit mehr als einem Hop.

Verifikation:
```bash
curl -I https://casabellucci.de/presse/
curl -I https://casabellucci.de/impressum/
```

Verifikation erledigt:
- `scripts/seo-data/domain_ranked_keywords.csv` enthält als rankende Pfade nur `/`, `/impressum/` und `/presse/`.
- `docs/legacy-redirect-map.md` dokumentiert Status: `/` bleibt 200, `/impressum/` bleibt 200, `/presse/` geht 301 auf `/`.
- `php-backend/.htaccess` enthält eng gefasste `RedirectMatch 301`-Regeln für bekannte Legacy-/SEO-Kurzpfade.
- Lokaler Mapping-Check: alle Redirect-Ziele existieren als aktuelle App-Route oder bewusst als Homepage-Anker; keine Ziel-URL erzeugt einen weiteren Hop.
- `npm run build`: bestanden.
- Dedicated read-only Subagent-Review: P0-1 PASS, keine verbleibenden actionable Issues.

### 2. Rechtstexte, NAP und Cookie-Text finalisieren

Status: Technisch lokal umgesetzt, verifiziert und dediziert reviewed am 2026-06-05. P0-2 darf als technischer Launch-Blocker abgeschlossen gelten. Finale Betreiber-/Legal-Freigabe bleibt als separater Non-Code-Signoff vor Produktion bestehen.

Problem:
Öffentliche Adresse und Schema nutzen `Kurfürstendamm 63, 10707 Berlin`, aber Legal-Text enthält weiterhin `10625 Berlin`. Cookie-Text behauptet Consent-/Einstellungsfunktionen, die im App-Code nicht sichtbar sind.

Risiko:
Rechtliches Risiko, Local-SEO-NAP-Inkonsistenz und unprofessioneller Cookie-Status.

TODO:
- [x] Aus vorhandener Projektquelle übernehmen: `lib/site.ts` führt `legalPostalCity: '10625 Berlin'` und `postalCity: '10707 Berlin'`.
- [x] Falls Geschäfts-/Legal-Adresse abweicht: klar zwischen Besucheradresse und gesetzlicher Anschrift unterscheiden.
- [x] `lib/site.ts` und `lib/i18n/legal/*` konsistent machen.
- [x] Cookie-Seite aktualisieren: nur Funktionen behaupten, die wirklich existieren.
- [x] Entscheiden: Cookie-Banner/Consent implementieren oder Cookie-Text entsprechend reduzieren.
- [x] `LEGAL_MODIFIED` und sichtbare Aktualisierungsdaten abgleichen.

Akzeptanzkriterien:
- Keine ungeklärte NAP-Abweichung zwischen Schema, Kontakt, Footer und Legal-Seiten.
- Cookie-Seite behauptet keine nicht vorhandene UI.
- Datenschutz/Cookie/Impressum sind technisch konsistent; finale Betreiber-/Legal-Freigabe bleibt vor Produktion erforderlich.

Verifikation:
```bash
rg -n "10625|10707|Cookie|Consent|Einstellungen speichern|Pop-Up" lib app components public
```

Verifikation erledigt:
- `lib/i18n/legal/{de,en,it}.ts` trennt gesetzliche Anbieteranschrift `10625 Berlin` explizit von Besucher-/Schema-Adresse `10707 Berlin-Charlottenburg`.
- Keine externe Betreiber-/Anwaltsfreigabe eingeholt; diese bleibt separater Non-Code-Signoff.
- Öffentliche Kontakt-/Schema-Flächen bleiben auf `10707 Berlin`.
- Cookie-Richtlinie behauptet kein nicht vorhandenes Consent-Popup und kein `Einstellungen speichern`.
- Datenschutz/Cookie nennen die tatsächlich eingesetzten Dienste/Speicher: `cb-lang` LocalStorage, Admin-`sessionStorage`, Google Fonts, Quandoo.
- Source-Scan: keine alten positiven Claims für Google Analytics, Google Ads, Google Tag Manager, Meta Pixel oder alte WordPress-Quelle.
- Rendered-HTML-Check für `/impressum/`, `/datenschutzerklaerung/`, `/cookie-richtlinie-eu/`: erwartete Hinweise vorhanden, verbotene alte Claims nicht vorhanden.
- `npm exec tsc -- --noEmit`: bestanden.
- `npm run build`: bestanden.
- Dedicated read-only Subagent-Review: P0-2 PASS, keine verbleibenden actionable technischen Issues. Finale Betreiber-/Legal-Freigabe bleibt separater Non-Code-Signoff.

### 3. Mehrsprachigkeit SEO-Entscheidung treffen

Status: Option A ist gewählt, lokal verifiziert und dediziert reviewed am 2026-06-05. P0-3 darf als abgeschlossen gelten. EN/IT bleiben Komfortsprachen nach explizitem User-Klick; SEO-relevant bleibt die deutsche Canonical-Version.

Problem:
Die Seite nutzt eine einzige URL pro Seite. Content und `<html lang>` können clientseitig anhand von Browser-Sprache oder LocalStorage auf EN/IT wechseln, während Canonical, JSON-LD und Sitemap deutsch/canonical bleiben. Es gibt keine `hreflang`-Alternates.

Risiko:
Sprachvarianz auf derselben URL, schwache International-SEO-Signale und potenzielle Indexierungs-/Snippet-Inkonsistenzen.

Entscheidung erforderlich:
- Option A: Nur Deutsch ist SEO-relevant. EN/IT bleiben rein clientseitiger Komfort.
- Option B: EN/IT sollen indexierbar sein. Dann brauchen sie eigene URL-Struktur und `hreflang`.

TODO Option A:
- [x] Automatischen Browser-Sprachwechsel deaktivieren.
- [x] Default immer Deutsch rendern.
- [x] Sprachwechsel nur nach explizitem User-Klick.
- [x] EN/IT nicht als SEO-Ziel behandeln.

TODO Option B: Nicht gewählt.
- [ ] Sprachrouten planen, z. B. `/en/...` und `/it/...`.
- [ ] `alternates.languages`/`hreflang` in Metadata ergänzen.
- [ ] Sitemap mit Sprachalternates oder HTML-`link rel="alternate"` ergänzen.
- [ ] Canonical pro Sprache korrekt setzen.
- [ ] JSON-LD pro Sprache prüfen.

Akzeptanzkriterien:
- Pro URL ist klar, welche Sprache Google sehen soll.
- Kein automatischer Wechsel erzeugt eine andere Hauptsprache auf derselben canonical URL.
- Falls mehrere Sprachen indexierbar sind: jede Sprachversion listet sich selbst und alle Alternates.

Verifikation:
```bash
npm run build
rg -n "hreflang|canonical|og:locale|lang=" out/**/*.html out/*.html
```

Verifikation erledigt:
- `npm run build`: bestanden.
- `npm exec tsc -- --noEmit`: bestanden.
- Static-Export-Smoke: Erstbesuch mit `navigator.language = de-DE` und leerem Storage bleibt Deutsch.
- Static-Export-Smoke: Erstbesuch mit `navigator.language = en-US` und leerem Storage bleibt Deutsch.
- Static-Export-Smoke: Expliziter Klick auf IT setzt `html lang="it"`, speichert `cb-lang=it` und bleibt nach Reload Italienisch.
- Dedicated read-only Subagent-Review: P0-3 Option A PASS, keine verbleibenden actionable Issues.

### 4. PHP-Admin-Auth production-härten

Status: Erledigt und dediziert reviewed am 2026-06-05. P0-4 darf als abgeschlossen gelten.

Problem:
Aktuell ist das Admin-Passwort in `config.php` plaintext. Token ist deterministisch aus Passwort + Datum + Secret. Mindestpasswort ist 6 Zeichen. Rate-Limit und atomisches Config-Schreiben sind verbessert, aber Auth ist noch nicht stark genug.

Risiko:
Token-/Passwort-Kompromiss erlaubt PDF-Overwrite und Passwortänderung.

TODO:
- [x] `config.php` auf `admin_password_hash` statt `admin_password` umstellen.
- [x] Login mit `password_verify()` prüfen.
- [x] Passwortänderung mit `password_hash()` speichern.
- [x] Mindestlänge auf mindestens 12 Zeichen erhöhen.
- [x] Token auf random session token umstellen.
- [x] Token serverseitig speichern, z. B. in nicht öffentlichem Temp-/Session-Verzeichnis.
- [x] Token-Ablaufzeit explizit speichern und prüfen.
- [x] Bestehende `config.example.php` und `DEPLOY.md` aktualisieren.

Akzeptanzkriterien:
- Kein Klartextpasswort in Config-Beispiel oder Produktiv-Config nötig.
- Token kann nicht aus Passwort/Datum abgeleitet werden.
- Abgelaufene Tokens werden abgelehnt.

Verifikation:
```bash
php -l php-backend/api/login.php
php -l php-backend/api/change-password.php
```

Verifikation erledigt:
- `php -l` für `php-backend/api/auth.php`, `login.php`, `status.php`, `upload.php`, `change-password.php`, `menu-urls.php`, `config.example.php` und lokale `config.php`: bestanden.
- Isolierter PHP-Server-Test: Login erzeugt 64-Zeichen-Token, Status mit Token 200, zu kurzes neues Passwort 400, Passwortänderung 200, altes Token danach 401, neues Token 200, Upload 200, neue Config enthält gültigen Hash und kein `admin_password`.
- `npm exec tsc -- --noEmit`: bestanden.
- Dedicated read-only Subagent-Re-Review: P0-4 PASS, keine verbleibenden actionable Issues.

### 5. Hostinger `.htaccess` und Authorization-Header absichern

Status: Lokal umgesetzt und dediziert reviewed, aber noch nicht abgeschlossen. Der Subagent hat P0-5 als FAIL bewertet, weil die Live-Smokes auf `https://casabellucci.de/api/menu-urls.php` 404/`No input file specified.` lieferten. Der erneute Live-Smoke am 2026-06-05 liefert weiterhin 404 auf `/api/menu-urls.php`; zusätzlich ist `https://casabellucci.de/robots.txt` live 404. Das lokale `.htaccess`/Header-Codebild ist in Ordnung; die manuelle Installation oder Live-Deployment der PHP-Backend-Dateien und des aktuellen Static Exports fehlt noch.

Problem:
`.htaccess` nutzt alte `Order/Deny`-Syntax und `php_flag`, was auf Shared Hosting 500s auslösen kann. Außerdem ist nicht sichergestellt, dass der `Authorization` Header bei PHP ankommt.

Risiko:
`config.php` ist eventuell nicht geschützt, oder Admin-APIs liefern nach Login immer 401.

TODO:
- [x] Apache-2.4-kompatiblen Schutz für `config.php` verwenden.
- [x] `php_flag` entfernen, falls Hostinger/LiteSpeed es nicht unterstützt.
- [x] Authorization-Header-Weitergabe ergänzen, z. B. `SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1`, falls auf Hostinger nötig.
- [x] Fallback in PHP prüfen: `REDIRECT_HTTP_AUTHORIZATION`.
- [ ] Live mit Hostinger testen.

Akzeptanzkriterien:
- `https://casabellucci.de/config.php` ist nicht lesbar.
- Admin-Login, Status, Upload und Passwortänderung funktionieren live.
- Keine 500s durch `.htaccess`.

Verifikation:
```bash
curl -I https://casabellucci.de/config.php
curl -I https://casabellucci.de/api/menu-urls.php
```

Aktuelle Review-Evidenz:
- Lokales `.htaccess` nutzt `SetEnvIf Authorization "(.+)" HTTP_AUTHORIZATION=$1` und `Require all denied`.
- Keine alten `Order/Deny`- oder `php_flag`-Direktiven mehr.
- PHP-Auth prüft `HTTP_AUTHORIZATION`, `REDIRECT_HTTP_AUTHORIZATION` und `apache_request_headers()`.
- Dedicated read-only Subagent-Re-Review: lokaler Code PASS, P0-5 insgesamt FAIL wegen fehlender Live-Backend-Installation.
- Erneuter Live-Smoke am 2026-06-05: Homepage 200, Sitemap 200, Admin noindex 200, `config.php` 404 geschützt; `robots.txt` 404 und `/api/menu-urls.php` 404.
- Hostinger-Handoff-Paket vorbereitet mit `./scripts/prepare-hostinger-package.sh`: `_deploy/hostinger-20260605-201623/` und `_deploy/hostinger-20260605-201623.zip`. Das Paket enthält `static-public_html/robots.txt`, `backend-manual/public_html/api/menu-urls.php` und `backend-manual/public_html/.htaccess`. `_deploy/` ist in `.gitignore` ausgeschlossen.
- Hostinger-Deploy-Prereq-Check ergänzt: `./scripts/check-hostinger-prereqs.sh`. Aktueller Stand am 2026-06-05: GitHub authentifiziert, lokale Dateien vorhanden, aber `deploy-hostinger.yml` fehlt noch auf dem GitHub-Default-Branch und die GitHub-Secrets `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`, `FTP_SERVER_DIR` fehlen. Damit ist der GitHub-FTP-Deploy noch nicht startbar.
- Provisorischer Hostinger-Static-Deploy am 2026-06-05: `https://casabellucci-preview.jallous-webdesign.de/` wurde aus `_deploy/casa-bellucci-preview_20260605_202530.zip` deployed.
- Preview-Smoke am 2026-06-05: `/`, `/robots.txt`, `/sitemap.xml`, `/reservierung/`, `/impressum/`, `/datenschutzerklaerung/`, `/italienisches-restaurant-berlin-charlottenburg/`, `/sizilianisches-restaurant-berlin/`, `/fruehstueck-brunch-kurfuerstendamm/`, `/bar-aperitivo-kurfuerstendamm/` und `/admin/` liefern 200.
- Preview-Smoke am 2026-06-05: `/admin/` enthält `noindex, nofollow`; Browser-Rendercheck für Desktop 1440x1100 und Mobile 390x844 bestanden.
- Preview-Einschränkung: `/api/menu-urls.php` liefert auf der Preview 404, weil `hosting_deployStaticWebsite` nur statische Dateien ausrollt. Für P0-5 bleibt ein PHP-fähiger Hostinger-Deploy mit Admin-Login, Status, Upload, Passwortänderung und Menü-JSON nötig.
- SEO-Einschränkung der Preview: `robots.txt`, Sitemap und Canonicals zeigen weiterhin bewusst auf `https://casabellucci.de/`, nicht auf die temporäre Preview-Domain.

## P1 Production-Readiness

### 6. Mobile-Sprachumschaltung sichtbar machen

Status: Erledigt und dediziert reviewed am 2026-06-05. P1-6 darf als abgeschlossen gelten.

Problem:
Auf Mobile ist `.lang-switch` im Header ausgeblendet. Playwright auf 390px konnte IT nicht klicken, weil das Element nicht sichtbar ist.

TODO:
- [x] Sprachumschalter in MobileNav ergänzen.
- [x] Design kompakt halten.
- [x] Sprache nach Klick speichern und Overlay schließen oder sichtbar aktualisieren.

Akzeptanzkriterien:
- Mobile User können DE/EN/IT umschalten.
- Aktive Sprache ist sichtbar.

Verifikation:
```bash
# Playwright oder Browser manuell:
# 390px Viewport öffnen, Mobile-Menü öffnen, EN/IT klicken, H1 prüfen.
```

Verifikation erledigt:
- `npm exec tsc -- --noEmit`: bestanden.
- `npm run build`: bestanden.
- Static-Export Playwright-Smoke auf 390x844: Mobile-Menü öffnet, DE/EN/IT sind sichtbar, Buttons 44x36, kein horizontaler Overflow.
- Klick auf EN setzt `html lang="en"`, speichert `cb-lang=en`, H1 wird Englisch, aktiver Button EN, Overlay bleibt offen.
- Klick auf IT setzt `html lang="it"`, speichert `cb-lang=it`, H1 wird Italienisch, aktiver Button IT; Reload behält IT.
- Dedicated read-only Subagent-Review: P1-6 PASS, TODO darf aktualisiert werden.

### 7. Menü-PDF-Modal barriereärmer machen

Status: Erledigt und dediziert reviewed am 2026-06-05. P1-7 darf als abgeschlossen gelten.

Problem:
`MenuViewer` ist visuell ein Modal, hat aber kein `role="dialog"`, kein `aria-modal`, keinen Fokus-Trap, keine Initial-Fokussetzung und keine Fokus-Rückgabe.

TODO:
- [x] `role="dialog"` und `aria-modal="true"` setzen.
- [x] Dialog sinnvoll labeln.
- [x] Beim Öffnen Fokus auf Schließen-Button oder Dialog setzen.
- [x] Beim Schließen Fokus zum auslösenden Button zurückführen.
- [x] Fokus im Dialog halten, solange offen.
- [x] Hintergrund für Screenreader ausblenden oder inert-ähnlich behandeln.

Akzeptanzkriterien:
- Tastatur kann Dialog öffnen, bedienen und schließen.
- Escape schließt weiter.
- Fokus springt nach Schließen zurück.

Verifikation erledigt:
- `npm exec tsc -- --noEmit`: bestanden.
- `npm run build`: bestanden.
- Static-Export Playwright-Smoke: erstes Menü per Tastatur geöffnet, Dialog hat `role="dialog"`, `aria-modal="true"` und gültiges `aria-labelledby`.
- Initial-Fokus liegt auf Schließen-Button.
- Tab erreicht iframe und Fallback-Link und bleibt im Dialog.
- Escape schließt nach Animation, Body-Overflow wird wiederhergestellt, Fokus kehrt zum auslösenden Menü-Button zurück.
- Dedicated read-only Subagent-Review: P1-7 PASS, TODO darf aktualisiert werden.

### 8. Admin-UI Accessibility verbessern

Status: Erledigt und dediziert reviewed am 2026-06-05. P1-8 darf als abgeschlossen gelten.

Problem:
Passwortänderungsfelder nutzen teilweise nur Placeholder. Eine Passwortkarte ist klickbar, aber kein Button.

TODO:
- [x] Echte Labels für alle Admin-Felder ergänzen.
- [x] Passwortkarte zu `<button type="button">` oder klar fokussierbarem Control umbauen.
- [x] Fokuszustände sichtbar prüfen.
- [x] Fehlermeldungen mit `aria-live` prüfen.

Akzeptanzkriterien:
- Admin ist per Tastatur bedienbar.
- Screenreader bekommt Feldnamen und Statusmeldungen.

Verifikation erledigt:
- `npm exec tsc -- --noEmit`: bestanden.
- `npm run build`: bestanden.
- Static-Export Playwright-Smoke auf `/admin/` bei 430x932 mit Dummy-`sessionStorage`: Tastaturfokus erreicht `Ändern`, Fokus-Outline ist sichtbar, `aria-expanded` wechselt `false` -> `true`, alle drei Passwortfelder haben passende `label[for]`, leeres Speichern erzeugt `role="alert"` mit `aria-live="assertive"`, kein horizontaler Overflow.
- Dedicated read-only Subagent-Review: P1-8 PASS, TODO darf aktualisiert werden.

### 9. Public-Assets bereinigen

Status: Erledigt und dediziert reviewed am 2026-06-05. P1-9 darf als abgeschlossen gelten.

Problem:
`public/` wird vollständig in `out/` kopiert. Aktuell landen Kandidatenbilder und alte große PNGs im Export. `out/images` liegt bei ca. 68 MB.

TODO:
- [x] `public/images/_hero-candidates/` aus Production-Public entfernen oder archivieren.
- [x] Alte generierte PNGs prüfen und ungenutzte Dateien verschieben.
- [x] Nur tatsächlich referenzierte Assets in `public/` belassen.
- [x] Optional: große JPGs weiter komprimieren.

Akzeptanzkriterien:
- Keine Designkandidaten im Export.
- `out/` ist deutlich kleiner.
- Keine referenzierten Assets fehlen.

Verifikation:
```bash
npm run build
du -sh out out/images
find out/images -type f -size +1M -print
```

Verifikation erledigt:
- Designkandidaten, generierte Draft-PNGs, Originalquellen und aktuell unreferenzierte Public-Medien wurden aus `public/images/` nach `_archive/public-image-candidates-2026-06-05/` verschoben.
- Das produktiv genutzte mobile Hero-Bild liegt stabil unter `public/images/hero-mobile.jpg`; `public/styles/vivid.css` verweist auf diesen Pfad.
- `rm -rf out && npm run build`: bestanden.
- `du -sh public/images out out/images`: `18M public/images`, `21M out`, `18M out/images`.
- `find out/images -type f -size +1M -print`: keine Ausgabe.
- Referenzcheck über `app`, `components`, `lib`, `public/styles` und `out`: 47 Bildreferenzen, `missing: []`.
- Dedicated read-only Subagent-Review: P1-9 PASS, TODO darf aktualisiert werden.

### 10. Lint-Script reparieren

Status: Erledigt und dediziert reviewed am 2026-06-05. P1-10 darf als abgeschlossen gelten.

Problem:
`npm run lint` ruft `next lint` auf. Unter Next 16 wird das aktuell als ungültiger Projektpfad interpretiert.

TODO:
- [x] Next-16-konformes Linting einrichten, vermutlich über `eslint`.
- [x] `package.json` Script ersetzen.
- [x] Falls nötig ESLint Flat Config prüfen.

Akzeptanzkriterien:
- `npm run lint` läuft und ist als CI-/Release-Check nutzbar.

Verifikation:
```bash
npm run lint
```

Verifikation erledigt:
- Lokale Next-16-Doku `node_modules/next/dist/docs/01-app/03-api-reference/05-config/03-eslint.md` geprüft: `next lint` ist ab Next 16 entfernt; empfohlen ist ESLint CLI mit Flat Config.
- `package.json` nutzt jetzt `eslint .` statt `next lint`.
- `eslint.config.mjs` nutzt `eslint-config-next/core-web-vitals` und `eslint-config-next/typescript` mit Ignoren für `.next/**`, `out/**`, `build/**`, `_archive/**` und `next-env.d.ts`.
- `npm run lint`: Exit 0 mit 42 Warnungen und 0 Fehlern. Die Warnungen sind nicht-blockierend und betreffen vor allem bestehende `<img>`-Nutzung sowie Font-/Script-Hinweise.
- `npm exec tsc -- --noEmit`: bestanden.
- `npm run build`: bestanden.
- Static-Export Smoke nach runtime-sensitiven Lint-Fixes: gespeichertes `cb-lang=it` rendert Italienisch, `data-cloak` wird entfernt, Quandoo-Shell und Widget-Container existieren und skalieren auf mobile Breite.
- Dedicated read-only Subagent-Review: P1-10 PASS, TODO darf aktualisiert werden.

### 11. Deployment-Smoke-Check definieren

Status: Erledigt und dediziert reviewed am 2026-06-05. P1-11 darf als Definition des Smoke-Protokolls abgeschlossen gelten. Der bekannte Live-Backend-Blocker aus P0-5 bleibt davon unberührt und muss vor finalem Production-Signoff separat gelöst werden.

Problem:
Hostinger-Workflow lädt nur `out/` hoch und schützt Backend-Dateien per Excludes. Das ist bewusst, aber der Deploy kann erfolgreich sein, während PHP/Admin kaputt ist.

TODO:
- [x] `php-backend/DEPLOY.md` um verbindliche Live-Smokes erweitern.
- [x] Optional ein Skript für Live-Smokes erstellen.
- [x] Im Smoke-Protokoll abdecken:
  - [x] Homepage 200.
  - [x] Sitemap 200.
  - [x] Robots 200.
  - [x] Admin 200 und noindex.
  - [x] `/api/menu-urls.php` 200 JSON.
  - [x] `config.php` nicht lesbar.
  - [x] PDF-Upload funktioniert.
  - [x] Menü-PDF wird nach Upload auf öffentlicher Seite aktualisiert.

Akzeptanzkriterien:
- Kein Deploy gilt als fertig ohne Live-Smoke-Protokoll.

Verifikation erledigt:
- `php-backend/DEPLOY.md` verlangt vor Deploy-Abschluss `./scripts/live-smoke.sh https://casabellucci.de` und ein manuelles Admin-/PDF-Protokoll.
- `scripts/live-smoke.sh` prüft Homepage, Sitemap, Robots, Admin-Noindex, `/api/menu-urls.php` JSON und `config.php`-Schutz automatisiert und endet bei Fehlern mit Exit 1.
- Manuelle Checks für Admin-Login, PDF-Upload und öffentliche Menü-Aktualisierung sind in der Deploy-Doku verpflichtend.
- `chmod +x scripts/live-smoke.sh` ausgeführt.
- `bash -n scripts/live-smoke.sh`: bestanden.
- `git diff --check -- scripts/live-smoke.sh php-backend/DEPLOY.md docs/production-readiness-todo.md`: bestanden.
- Dedicated read-only Subagent-Review: P1-11 PASS, TODO darf aktualisiert werden.

## P2 SEO, Content und Polish

### 12. Impressum-Indexierung entscheiden

Status: Erledigt und dediziert reviewed am 2026-06-05. Entscheidung: Impressum bleibt öffentlich erreichbar, wird aber `noindex, follow` und aus der Sitemap entfernt.

Problem:
Datenschutz, Cookies, Danke und Admin sind noindex. Impressum ist indexierbar und in der Sitemap.

TODO:
- [x] Entscheiden, ob Impressum indexierbar bleiben soll.
- [x] Falls noindex: `pageMetadata({ index: false })` setzen und aus Sitemap entfernen.

Verifikation erledigt:
- `app/impressum/page.tsx` setzt `pageMetadata({ index: false })`.
- `/impressum/` wurde aus `app/sitemap.ts` entfernt.
- `npm exec tsc -- --noEmit`: bestanden.
- `npm run build`: bestanden.
- Export-Check: `out/impressum/index.html` enthält `noindex, follow`; `out/sitemap.xml` enthält keine `/impressum/`-URL.
- Dedicated read-only Subagent-Review: P2-12 PASS, TODO darf aktualisiert werden.

### 13. Sitemap `lastModified` stabilisieren

Status: Erledigt und dediziert reviewed am 2026-06-05. `lastModified` ist jetzt build-stabil.

Problem:
`app/sitemap.ts` nutzt `new Date()`, wodurch jede URL bei jedem Build als geändert erscheint.

TODO:
- [x] Statisches Datum oder Content-basierte Daten verwenden.
- [x] Alternativ `lastModified` weglassen, wenn kein echtes Änderungsdatum gepflegt wird.

Verifikation erledigt:
- `app/sitemap.ts` nutzt ein module-level `LAST_MODIFIED = new Date('2026-06-05T00:00:00.000Z')` statt Build-Zeit in `sitemap()`.
- `npm exec tsc -- --noEmit`: bestanden.
- `npm run build`: bestanden.
- Export-Check: `out/sitemap.xml` enthält 6 `<lastmod>`-Einträge, alle exakt `2026-06-05T00:00:00.000Z`.
- Dedicated read-only Subagent-Review: P2-13 PASS, TODO darf aktualisiert werden.

### 14. CTA-Klarheit Terrasse/Galerie

Status: Erledigt und dediziert reviewed am 2026-06-05. P2-14 darf als abgeschlossen gelten.

Problem:
Homepage-Terrasse CTA sagt `Terrasse ansehen`, linkt aber zu `#galerie`.

TODO:
- [x] Entweder Linktext zu Galerie ändern.
- [ ] Oder Link auf echte Terrasse-Zielstelle setzen.

Verifikation erledigt:
- `lib/i18n/dictionaries/{de,en,it}/home.ts` nutzt für den Terrace-CTA jetzt Galerie-Text: `Galerie ansehen →`, `View gallery →`, `Vedi la galleria →`.
- `components/sections/Terrace.tsx` verlinkt weiterhin bewusst auf `#galerie`.
- `npm exec tsc -- --noEmit`: bestanden.
- `npm run build`: bestanden.
- Export-Check: `out/index.html` enthält im Terrace-Actions-Block `<a class="btn btn-ghost" href="#galerie">Galerie ansehen →</a>` und kein `Terrasse ansehen` im Homepage-HTML.
- Dedicated read-only Subagent-Review: P2-14 PASS, keine verbleibenden actionable Issues.

### 15. Deutsche A11y-Wortwahl

Status: Erledigt und dediziert reviewed am 2026-06-05. P2-15 darf als abgeschlossen gelten.

Problem:
Deutsches `menuAria` nutzt `Menu` statt `Menü`.

TODO:
- [x] In `lib/i18n/dictionaries/de/header.ts` auf `Menü` ändern.
- [x] Weitere ASCII-Umlaut-Schreibweisen in sichtbaren deutschen Texten prüfen.

Verifikation erledigt:
- `lib/i18n/dictionaries/de/header.ts` setzt `menuAria: 'Menü'`.
- `components/sections/Header.tsx` nutzt diesen Wert für den Burger-Button.
- `out/index.html` rendert `aria-label="Menü"`.
- Scan sichtbarer deutscher Dictionaries/ARIA: keine verbleibenden offensichtlichen ASCII-Umlaut-Ersatzschreibungen im Scope; technische Identifier, Routen, Pfade und Kommentare bleiben unverändert.
- `npm exec tsc -- --noEmit`: bestanden.
- `npm run build`: bestanden.
- Dedicated read-only Subagent-Review: P2-15 PASS, keine verbleibenden actionable Issues.

### 16. Deploy-Doku mit Umlauten korrigieren

Status: Erledigt und dediziert reviewed am 2026-06-05. P2-16 darf als abgeschlossen gelten.

Problem:
`php-backend/DEPLOY.md` enthält deutsche ASCII-Ersatzschreibungen wie `laedt`, `fuehrendem`, `schuetzt`, `zurueckgesetzt`, `oeffnen`.

TODO:
- [x] Doku auf echte Umlaute umstellen.
- [x] Technische Identifier, Pfade und Befehle unverändert lassen.

Verifikation erledigt:
- `php-backend/DEPLOY.md` nutzt echte Umlaute in der deutschen Prosa, z. B. `lädt`, `führendem`, `schützt`, `zurückgesetzt`, `öffnen`.
- Technische Identifier, Pfade und Befehle wie `public_html/`, `php-backend/api/`, `config.php`, `FTP_SERVER_DIR` und `./scripts/live-smoke.sh` bleiben unverändert.
- Suchlauf nach relevanten ASCII-Ersatzschreibungen in `php-backend/DEPLOY.md`: keine Treffer.
- Dedicated read-only Subagent-Review: P2-16 PASS, keine verbleibenden actionable Issues.

### 17. Copy-Polish italienische Produktnamen

Status: Erledigt und dediziert reviewed am 2026-06-05. P2-17 darf als abgeschlossen gelten.

Problem:
Einige italienische Namen verlieren Apostrophe, z. B. `Spremuta d Arancia`, `Nero d Avola`.

TODO:
- [x] Deutsche Dictionaries auf solche Namen scannen.
- [x] Korrekte Schreibweise setzen, z. B. `d'Arancia`, `Nero d'Avola`.

Verifikation:
```bash
rg -n " d Arancia| d Avola|d Arancia|d Avola" lib/i18n
```

Verifikation erledigt:
- `lib/i18n/dictionaries/de/landingFruehstueck.ts` korrigiert zwei Vorkommen zu `Spremuta d'Arancia`.
- `lib/i18n/dictionaries/de/landingBar.ts` und `lib/i18n/dictionaries/de/landingSizilianisch.ts` korrigieren je ein Vorkommen zu `Nero d'Avola`.
- `npm exec tsc -- --noEmit`: bestanden.
- `npm run build`: bestanden.
- Scan über deutsche Dictionaries und aktuellen Export: keine Treffer für `d Arancia`, `d Avola`, `Nero d Avola` oder `Spremuta d Arancia`.
- Dedicated read-only Subagent-Review: P2-17 PASS, keine verbleibenden actionable Issues.

### 18. GitHub Pages als Preview klar abgrenzen

Status: Erledigt und dediziert reviewed am 2026-06-05. Entscheidung: GitHub Pages bleibt Preview unter `/casa-bellucci`; Hostinger/`https://casabellucci.de` ist Production. P2-18 darf als abgeschlossen gelten.

Problem:
GitHub Pages deployt auf `main` mit `/casa-bellucci`, während Canonicals auf `https://casabellucci.de` zeigen.

TODO:
- [x] Entscheiden: GitHub Pages bleibt Preview oder wird deaktiviert.
- [x] Wenn Preview: noindex für GitHub Pages prüfen oder Preview nicht verlinken.
- [x] Wenn Production nur Hostinger: Workflow-Kommentar/README klarstellen.

Verifikation erledigt:
- `lib/seo.ts` exportiert `IS_PREVIEW_BUILD = Boolean(process.env.NEXT_PUBLIC_BASE_PATH)`.
- `pageMetadata()` und Root-Metadata setzen bei Preview-Builds `noindex, follow`; Production ohne Base Path bleibt `index, follow`.
- `.github/workflows/deploy.yml` dokumentiert `NEXT_PUBLIC_BASE_PATH=/casa-bellucci` als GitHub-Pages-Preview-Signal.
- `README.md` dokumentiert Hostinger als Production und GitHub Pages als noindex Preview.
- `npm exec tsc -- --noEmit`: bestanden.
- Normaler Production-Build: `out/index.html` enthält `index, follow`, kein `noindex`, Canonical `https://casabellucci.de/`, keine `/casa-bellucci`-Assetpfade.
- Preview-Build mit `NEXT_PUBLIC_BASE_PATH=/casa-bellucci`: `out/index.html` enthält `noindex, follow`, Canonical bleibt `https://casabellucci.de/`, Assetpfade nutzen `/casa-bellucci/...`.
- Finaler normaler Rebuild: `out/index.html` ist wieder Production-Zustand.
- Dedicated read-only Subagent-Review: P2-18 PASS, keine verbleibenden actionable Issues.

## Finaler Pre-Launch Ablauf

1. [ ] Alle P0 erledigen.
2. [x] Alle P1 erledigen oder bewusst mit Risiko abzeichnen.
3. [x] `npm run build`.
4. [x] `npm exec tsc -- --noEmit`.
5. [x] `npm run lint`.
6. [x] PHP-Syntaxcheck:
   ```bash
   find php-backend/api -maxdepth 1 -name '*.php' -print -exec php -l {} \;
   ```
7. [x] Static-export Linkcheck wiederholen.
8. [x] Desktop und Mobile visuell prüfen.
9. [ ] Hostinger deployen.
10. [ ] Live-Smokes dokumentieren.

Finaler lokaler Checklist-Run am 2026-06-05:
- `npm run build`: bestanden.
- `npm exec tsc -- --noEmit`: bestanden.
- `npm run lint`: bestanden mit 42 Warnungen, 0 Fehlern. Warnungen betreffen bestehende `<img>`-/Font-Hinweise und einen Script-Hinweis.
- PHP-Syntaxcheck für `php-backend/api/*.php`: bestanden.
- Static-export Linkcheck: 14 HTML-Dateien, 521 interne `href/src`-Refs, 0 fehlende interne Ziele.
- Desktop-Smoke 1440x1000 und Mobile-Smoke 390x844 auf lokalem Static Export: Hero sichtbar, kein horizontaler Overflow, Burger `aria-label="Menü"`, Terrace-CTA `Galerie ansehen →` auf `#galerie`, Canonical `https://casabellucci.de/`, Robots `index, follow`.
- Lokaler Static Export liefert erwartbar 404 auf `/api/menu-urls.php`, weil die PHP-API nur auf Hostinger laufen kann.
- Live-Smoke `./scripts/live-smoke.sh https://casabellucci.de`: FAIL wegen `robots.txt` 404 und `/api/menu-urls.php` 404. Daher kein Production-Signoff.
- `./scripts/check-hostinger-prereqs.sh`: FAIL wegen fehlendem remote `deploy-hostinger.yml` auf dem GitHub-Default-Branch und fehlenden GitHub-FTP-Secrets.

## Notizen Aus Dem Audit

- Export-Linkcheck lokal: 14 HTML-Dateien, 524 interne refs, 0 fehlende interne `href/src`.
- `out` war lokal ca. 71 MB, `out/images` ca. 68 MB.
- Playwright Desktop: DE/IT Sprachwechsel funktioniert, Menü-Popup öffnet und Escape schließt.
- Playwright Mobile 390px: Sprachumschalter war nicht sichtbar/klickbar.
- Static export ohne PHP-Backend liefert lokal erwartbar 404 auf `/api/menu-urls.php`; live muss diese API über Hostinger-PHP 200 liefern.

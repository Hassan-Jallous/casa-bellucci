# Deploy nach Hostinger

Diese Anleitung beschreibt, wie die statische Next.js-Site und das PHP-Backend
gemeinsam auf einer Hostinger-Instanz unter derselben Domain laufen.

Es gibt zwei Teile:

1. Automatisch: Der Workflow `.github/workflows/deploy-hostinger.yml` baut
   `out/` und lädt es per FTP nach `public_html/` hoch.
2. Einmalig manuell: Das PHP-Backend (`api/`, `config.php`, `.htaccess`) und die
   Start-PDFs werden per FTP oder hPanel-Dateimanager eingespielt. Der Workflow
   fasst diese Dateien bewusst nicht an.

## Ziel-Layout auf dem Server

```text
public_html/
  index.html, admin/, _next/, images/, menus/, styles/, ...   (aus out/, automatisch)
  api/                                                          (manuell, aus php-backend/api/)
  config.php                                                    (manuell, echter Passwort-Hash)
  pdf/                                                          (manuell Start-PDFs, danach vom Admin verwaltet)
  .htaccess                                                     (manuell, schützt config.php)
```

## 1. GitHub-Secrets setzen

Im GitHub-Repo unter Settings, Secrets and variables, Actions, New repository
secret diese vier Secrets anlegen:

| Secret           | Inhalt                                                            |
| ---------------- | ----------------------------------------------------------------- |
| `FTP_SERVER`     | FTP-Hostname, z. B. `ftp.deinedomain.de` oder die IP              |
| `FTP_USERNAME`   | FTP-Benutzername des FTP-Kontos                                   |
| `FTP_PASSWORD`   | Passwort des FTP-Kontos                                           |
| `FTP_SERVER_DIR` | Zielordner mit führendem und abschließendem Slash, z. B. `/public_html/` |

Die FTP-Daten stehen in hPanel unter Dateien, FTP-Konten. Dort steht der
FTP-Hostname, der Benutzername, und das Passwort kann dort gesetzt oder
zurückgesetzt werden. Der Zielordner ist üblicherweise `/public_html/`.

## 2. Einmalige manuelle Schritte

Für einen gebündelten lokalen Handoff kann zuerst ein Upload-Paket erstellt
werden:

```bash
./scripts/prepare-hostinger-package.sh
```

Das Paket liegt danach unter `_deploy/hostinger-YYYYMMDD-HHMMSS/` und zusätzlich
als ZIP unter `_deploy/`. Der Ordner `static-public_html/` enthält den aktuellen
statischen Export für `public_html/`. Der Ordner `backend-manual/public_html/`
enthält nur die einmalig/manuell zu installierenden Backend-Dateien.

Diese Dateien aus dem Repo-Ordner `php-backend/` einmalig hochladen. Sie liegen
nicht im automatischen Deploy und bleiben auf dem Server erhalten.

1. `php-backend/api/` nach `public_html/api/` kopieren.
2. `php-backend/.htaccess` nach `public_html/.htaccess` kopieren.
   Diese Datei schützt `config.php` und hilft dabei, den `Authorization` Header
   an PHP weiterzugeben.
3. `php-backend/config.example.php` hochladen und auf dem Server in
   `public_html/config.php` umbenennen.
4. Ein langes Admin-Passwort wählen, mindestens 12 Zeichen.
5. Auf dem lokalen Rechner oder Server einen Passwort-Hash erzeugen:

   ```bash
   php -r 'echo password_hash("DEIN_LANGES_PASSWORT", PASSWORD_DEFAULT) . PHP_EOL;'
   ```

6. Den erzeugten Hash in `public_html/config.php` bei `admin_password_hash`
   eintragen.
7. `session_ttl_seconds` kann bei `86400` bleiben.
8. `pdf_dir` kann auf `__DIR__ . '/pdf'` bleiben.
9. Start-PDFs `php-backend/pdf/*.pdf` nach `public_html/pdf/` kopieren.

Wichtig: Die echte `config.php` darf nie ins Git. Sie existiert nur auf dem
Server.

## 3. Schreibrechte

Der Ordner `public_html/pdf/` muss vom Webserver beschreibbar sein, damit
Uploads im Admin-Bereich funktionieren.

Empfohlene Rechte:

- `pdf/`: `755` oder `775`, je nach Hostinger-Owner.
- `config.php`: `644`, damit die Passwortänderung die Datei durch den Webserver
  neu schreiben kann.

Falls Uploads fehlschlagen, zuerst die Schreibrechte von `pdf/` prüfen.

## 4. Was der Workflow macht

Der Workflow `deploy-hostinger.yml`:

- baut `out/` ohne basePath, weil die Site im Domain-Root liegt,
- lädt `out/` per FTP nach `public_html/`,
- löscht serverseitig entfernte Dateien beim normalen Sync,
- schützt aber per `exclude` die manuell verwalteten Daten:
  `pdf/`, `config.php`, `api/`, `.htaccess`,
- lässt `dangerous-clean-slate` aus.

Du kannst die Site neu deployen, ohne Backend, Konfiguration oder hochgeladene
Karten zu verlieren.

## 5. Workflow starten

GitHub, Tab Actions, Workflow "Deploy to Hostinger (FTP)", Run workflow.

Vorher kann lokal geprüft werden, ob der Workflow auf GitHub startbar ist und
die nötigen Secrets existieren:

```bash
./scripts/check-hostinger-prereqs.sh
```

Der Check muss ohne `FAIL` durchlaufen. Fehlt der Workflow auf GitHub, müssen die
lokalen Änderungen zuerst auf den Default-Branch gepusht werden. Fehlen Secrets,
müssen `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD` und `FTP_SERVER_DIR` in GitHub
Actions angelegt werden.

Der automatische `push`-Trigger sollte erst aktiviert werden, wenn alle FTP-
Secrets gesetzt sind und der manuelle Live-Smoke-Test bestanden hat.

## 6. Live-Smoke-Test nach dem Deploy

Diese Checks sind verpflichtend, bevor ein Deploy als fertig gilt:

```bash
./scripts/live-smoke.sh https://casabellucci.de
```

Der automatisierte Smoke prüft:

- Homepage, Sitemap, Robots und Admin liefern 200.
- `/api/menu-urls.php` liefert 200 und JSON.
- `/admin/` enthält ein `noindex`-Signal.
- `/config.php` ist nicht lesbar, erwartet 403 oder 404.

Zusätzlich manuell protokollieren:

- Admin-Login funktioniert mit dem gesetzten Passwort.
- PDF-Upload funktioniert.
- Die öffentliche Karte aktualisiert sich nach dem Upload.

Ein Deploy gilt erst als fertig, wenn der automatisierte Smoke bestanden ist und
die drei manuellen Admin-/PDF-Checks mit Datum, Uhrzeit und getesteter URL
protokolliert wurden.

Wenn Login funktioniert, aber Status/Upload/Passwortänderung 401 liefern, kommt
der `Authorization` Header nicht bei PHP an. Dann zuerst `.htaccess` und die
Hostinger/LiteSpeed-Konfiguration prüfen.

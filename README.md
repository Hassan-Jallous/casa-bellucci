# Casa Bellucci Website

Mehrsprachige Restaurant-Website (DE / EN / IT), gebaut mit **Next.js** (statischer Export). Gehostet auf **Hostinger** unter [casabellucci.de](https://casabellucci.de).

## Stack

- **Next.js 16** – App Router, statischer Export (`output: 'export'`)
- **React 19**
- **PDF.js** (`pdfjs-dist`) – Speisekarten-Viewer
- Plain CSS (`public/styles/`)
- **PHP** – kleines Backend (Kontaktformular, Admin-Upload)

## Voraussetzungen

- Node.js 20 oder neuer
- npm

## Lokale Entwicklung

```sh
npm install        # Abhängigkeiten installieren
npm run dev        # Dev-Server auf http://localhost:3000
npm run build      # Statischer Export nach ./out/
npm run lint       # ESLint
```

## Projektstruktur

```text
app/
├── [lang]/        # Sprach-Routing (de/en/it) – alle Seiten liegen hier
└── admin/         # Admin-Panel (Speisekarten-Upload)
components/        # React-Komponenten (Sections, UI)
lib/
├── data.ts        # Inhalte / Daten
└── i18n/          # Übersetzungen (dictionaries/, config, Provider)
public/
├── styles/        # CSS (critical.css, styles.css, vivid.css)
└── …              # Bilder, PDFs, Fonts
php-backend/       # PHP-API (Kontaktformular, Admin-Upload)
docs/              # Interne Notizen (SEO, Migration) – kein Build-Bestandteil
```

Routing läuft über das `[lang]`-Segment im App Router. Sprache wird aus der URL abgeleitet (`/de/`, `/en/`, `/it/`).

## Deployment auf Hostinger

Es gibt zwei Wege. Beide laden den statischen Export aus `out/` ins Web-Root (`public_html`).

### A) Automatisch per GitHub Actions (empfohlen)

Der Workflow `.github/workflows/deploy-hostinger.yml` baut bei jedem Push auf `main` den Export und lädt `out/` per FTP hoch. Dafür müssen im GitHub-Repo unter **Settings → Secrets and variables → Actions** vier Secrets gesetzt sein:

| Secret | Wert |
| :--- | :--- |
| `FTP_SERVER` | FTP-Host (z. B. `82.25.102.236`) |
| `FTP_USERNAME` | FTP-Benutzer |
| `FTP_PASSWORD` | FTP-Passwort |
| `FTP_SERVER_DIR` | Zielordner mit führendem/abschließendem Slash, z. B. `/public_html/` |

### B) Manuell per FTP

```sh
npm run build
```

Anschließend den **gesamten Inhalt** von `out/` per SFTP/FTP nach `/public_html/` laden (Zugangsdaten separat).

> Server-Secrets (SMTP, Admin-Passwort) liegen in `php-backend/config.php` direkt auf dem Server und sind **nicht** Teil dieses Repos. PHP-Backend-Setup siehe `php-backend/DEPLOY.md`.

## Sprachen

Übersetzungen unter `lib/i18n/dictionaries/` (de/en/it). Neue Texte dort für alle drei Sprachen ergänzen.

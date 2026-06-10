# Casa Bellucci

Next.js 16 Static Export für die Casa Bellucci Website.

## Aktueller Stand

Die aktive Website läuft über die migrierte Next.js-App:

- `app/`
- `components/`
- `lib/`
- `public/`
- `php-backend/` für die Hostinger-PHP-APIs

Die alte statische Prototyp-Phase ist abgeschlossen. Neue Homepage- und SEO-Arbeit passiert in der Next.js-App.

## Lokal starten

```bash
npm install
npm run dev
```

Für Production-Checks:

```bash
npm exec tsc -- --noEmit
npm run lint
npm run build
```

## Production

Die Production-Domain ist:

```text
https://casabellucci.de
```

Canonical URLs, Sitemap, JSON-LD und Open Graph zeigen auf diese Domain. Der Hostinger-Deploy läuft über `.github/workflows/deploy-hostinger.yml`; die manuelle PHP-Backend-Installation ist in `php-backend/DEPLOY.md` dokumentiert.

Vor einem Production-Deploy muss `docs/production-readiness-todo.md` abgearbeitet sein. Der Live-Smoke läuft mit:

```bash
./scripts/live-smoke.sh https://casabellucci.de
```

## GitHub Pages Preview

`.github/workflows/deploy.yml` baut eine GitHub-Pages-Preview unter `/casa-bellucci`.

Diese Preview ist nicht die Production-Version. Der Workflow setzt:

```text
NEXT_PUBLIC_BASE_PATH=/casa-bellucci
```

Die App erkennt dadurch den Preview-Build und rendert `noindex, follow` in der Metadata. Hostinger baut ohne `NEXT_PUBLIC_BASE_PATH` und bleibt indexierbar.

## Wichtige Dokumente

- `AGENTS.md`: Projektregeln und aktueller Arbeitsmodus
- `homepage-structure.md`: Homepage-Struktur und Positionierung
- `docs/production-readiness-todo.md`: aktive Production-Readiness-Liste
- `php-backend/DEPLOY.md`: Hostinger-Backend und Live-Smoke

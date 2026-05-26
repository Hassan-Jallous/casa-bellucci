# Casa Bellucci Prototype

## Aktueller Stand

Dieses Projekt ist aktuell ein statischer HTML/React-Prototyp. Die aktive Homepage läuft über:

- `index.html`
- `scripts/`
- `styles/`
- `images/`
- `fonts/`
- `public/menus/`

Der alte Next.js-Stand ist nicht mehr die aktive Arbeitsbasis. Homepage-Arbeit passiert im Prototyp, bis die Migration ausdrücklich gestartet wird.

## Quelle der Wahrheit

`homepage-structure.md` definiert die Homepage-Struktur, Positionierung und die erlaubten Hauptsektionen. Keine neuen Homepage-Sektionen hinzufügen, ohne diese Datei vorher bewusst zu ändern.

Aktuelle Homepage-Reihenfolge:

1. Hero
2. All-Day Concept
3. Signature Moments / Menu
4. Sommerterrasse
5. Gallery / Atmosphere
6. Reservation
7. Contact / Location

## Lokal starten

Der Prototyp braucht keinen Build-Schritt. Wegen Video-, PDF- und Font-Pfaden sollte er aber über einen lokalen HTTP-Server laufen:

```bash
python3 -m http.server 4173
```

Dann öffnen:

```text
http://localhost:4173/
```

## Wichtige Pfade

- `scripts/app.jsx`: React-Einstieg und Seitenreihenfolge
- `scripts/sections.jsx`: Homepage-Sektionen und Navigation
- `scripts/data.js`: Menü-, Presse- und Galerie-Daten
- `scripts/effects.jsx`: Video-Hero und ergänzende UI-Effekte
- `scripts/decor.jsx`: dekorative SVG-Komponenten
- `styles/styles.css`: Basislayout und Hauptdesign
- `styles/vivid.css`: aktuelle visuelle Override-Schicht
- `brand-spec.md`: visuelle Richtung
- `docs/nextjs-migration.md`: spätere Next.js-Migrationsnotizen

## Deployment

GitHub Pages wird über `.github/workflows/deploy.yml` gebaut. Der Workflow kopiert bewusst nur die statisch benötigten Prototyp-Artefakte nach `site/`:

- `index.html`
- `scripts/`
- `styles/`
- `images/`
- `fonts/`
- `public/menus/`

Wenn neue statische Root-Pfade eingebaut werden, muss der Workflow entsprechend erweitert werden.

## Next.js später

Die Migration wird vorbereitet, aber nicht im laufenden Prototyp versteckt begonnen. Vor Next.js-Arbeit zuerst `docs/nextjs-migration.md` lesen. Wenn wieder echtes Next.js im Projekt installiert ist, zusätzlich die lokale Dokumentation unter `node_modules/next/dist/docs/` prüfen, bevor Code geschrieben wird.

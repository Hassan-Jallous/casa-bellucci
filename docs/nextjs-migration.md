# Next.js-Migrationsnotizen

## Ziel

Die aktuelle Casa-Bellucci-Homepage soll später von einem statischen HTML/React-Prototyp in eine Next.js-App überführt werden. Bis dahin bleibt der Prototyp die aktive Wahrheit.

## Nicht jetzt tun

- Keine neue Next.js-App im laufenden Cleanup anlegen.
- Keine versteckte Migration von `index.html`, `scripts/` oder `styles/`.
- Keine neuen Homepage-Sektionen erfinden.
- Keine alten Next.js-Dateien wiederbeleben, nur weil sie historisch vorhanden waren.

## Vorbereiteter Zielzuschnitt

Ein späterer Next.js-Stand sollte die aktuelle Prototyp-Logik in klare Grenzen überführen:

- `app/page.tsx`: Homepage-Komposition in der Reihenfolge aus `homepage-structure.md`
- `components/sections/`: einzelne Homepage-Sektionen
- `components/layout/`: Header, Mobile Navigation, Footer
- `components/decor/`: LemonBranch, MajolikaPattern, TricoloreLine und ähnliche Dekoration
- `data/`: Menü-, Galerie- und Standortdaten
- `public/`: Bilder, Videos, Fonts, PDFs und Icons
- `app/impressum`, `app/datenschutzerklaerung`: rechtliche Seiten später separat

## Migrationsreihenfolge

1. Next.js-Version und Projektkonventionen prüfen. Wenn `node_modules/next/dist/docs/` vorhanden ist, zuerst dort die relevanten lokalen Guides lesen.
2. Assets konsolidieren: Der Prototyp nutzt aktuell `images/`, `fonts/` und `public/menus/`; Next.js sollte diese statischen Dateien später unter `public/` bündeln.
3. Daten aus `scripts/data.js` in ein importierbares Modul überführen.
4. Komponenten aus `scripts/sections.jsx`, `scripts/effects.jsx` und `scripts/decor.jsx` in React-Komponenten ohne globale `window`-Exports zerlegen.
5. CSS-Schichten prüfen: `styles/styles.css` und `styles/vivid.css` entweder global übernehmen oder gezielt in Komponenten-/Section-Strukturen aufteilen.
6. Routing für spätere Seiten erst nach der Homepage-Migration ergänzen.
7. Deployment danach neu entscheiden: GitHub Pages statisch, Vercel oder ein anderer Host.

## Hauptrisiken

- Video-Hero: Autoplay, mobile Quelle, Posterbild und Performance müssen nach der Migration separat geprüft werden.
- Asset-Pfade: Der Prototyp nutzt relative Pfade, Next.js erwartet öffentliche Dateien typischerweise unter `/...` aus `public/`.
- PDF-Links: Menü-PDFs müssen weiterhin direkt erreichbar sein.
- Globale Abhängigkeiten: Der Prototyp lädt React und Babel per CDN und verwendet globale Komponenten; Next.js braucht Modulimporte.
- CSS-Reihenfolge: `vivid.css` überschreibt Teile aus `styles.css`; diese Reihenfolge muss erhalten oder bewusst ersetzt werden.
- Mehrsprachigkeit: Alte Next.js-Reste hatten mehrere Sprachen. Die aktuelle Homepage ist deutsch fokussiert; Mehrsprachigkeit später bewusst planen.

## Abnahmekriterien für die spätere Migration

- Die Homepage folgt weiterhin `homepage-structure.md`.
- Hero-Video, Navigation, Menü-PDFs, Galerie-Lightbox, Reservierungsanker und Kontaktlinks funktionieren.
- Desktop und Mobile sind visuell geprüft.
- Keine Prototyp-CDN-Abhängigkeiten bleiben nötig.
- Alte Next.js-Reste sind entweder gelöscht oder bewusst als Referenz dokumentiert.

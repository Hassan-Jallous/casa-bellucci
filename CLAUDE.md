# CLAUDE.md - Casa Bellucci

Projektspezifische Infos fuer Claude Code. Globale Regeln in ~/.claude/CLAUDE.md gelten zusaetzlich.

## Stack
- Next.js 16 (App Router)
- React 19
- TypeScript
- Static Export (`output: 'export'` in next.config.ts, erzeugt `out/`)

## Styling
- Bestehendes Custom CSS unter `public/styles/styles.css` und `public/styles/vivid.css`
- Eingebunden via `<link>` in `app/layout.tsx`, NICHT via `import`. Grund: die CSS nutzt relative `url()`-Pfade (z.B. `../images/...`, `../fonts/...`), die der Bundler beim Import als Module aufloesen wuerde und damit brechen wuerde. Ueber `<link>` aus `public/` loest der Browser sie korrekt auf.
- Fonts via Google-Fonts `<link>` im `<head>` von app/layout.tsx (Playfair Display, Montserrat, Allura), nicht via next/font.
- NICHT zu Tailwind migrieren. Das Custom CSS ist die einzige Quelle.

## Struktur
- `app/` - layout.tsx (head, links, metadata) und page.tsx. page.tsx ist eine Server Component und komponiert die ganze Seite (alle Sektionen) innerhalb von `<UIProvider>`.
- `components/` - Architektur folgt der App-Router-Konvention: statische Sektionen sind Server Components, Interaktivitaet steckt in klar abgegrenzten Client-Inseln.
  - `UIProvider.tsx` (`'use client'`) - React Context fuer geteilten UI-State (`mobileOpen`, `lightbox`). Konsumenten nutzen den Hook `useUI()`. KEIN Prop-Drilling fuer diesen State.
  - Client Components: `UIProvider`, `SmoothScrollButton`, `sections/Header`, `sections/MobileNav`, `sections/Lightbox`, `sections/GalleryFilmstrip`, `sections/MenuSection`.
  - Server Components: `sections/About|Terrace|Reservation|Contact|Footer|Gallery|Wine|Brand`, `effects.tsx` (ImageHero etc.), `decor.tsx`.
  - `SmoothScrollButton.tsx` kapselt das `scrollIntoView({behavior:'smooth'})`-Verhalten (die Reserve-Buttons). Wichtig: es gibt KEIN `scroll-behavior: smooth` im CSS, daher muss Smooth-Scroll in JS bleiben. Reine `<a href="#...">`-Nav-Links springen hart (so gewollt).
- `lib/` - `data.ts` (Inhaltsdaten) und `assetPath.ts` (basePath-aware Asset-Helper)
- `public/` - `styles/`, `images/`, `fonts/`, `menus/`, `.nojekyll`

## Asset-Pfade
- IMMER ueber `asset()` aus `lib/assetPath.ts` referenzieren. Der Helper ist basePath-aware (haengt `/casa-bellucci` auf GitHub Pages an). Nie rohe `/images/...`-Pfade in TSX hardcoden.

## Befehle
- Dev: `npm run dev` (Port 3000)
- Build: `npm run build` -> erzeugt `out/`
- Build mit basePath (wie auf GitHub Pages): `NEXT_PUBLIC_BASE_PATH=/casa-bellucci npm run build`
- Typecheck: `npx tsc --noEmit`

## Deploy
- GitHub Pages via `.github/workflows/deploy.yml`, getriggert bei push auf `main`
- Workflow macht echten Next.js-Build mit `NEXT_PUBLIC_BASE_PATH=/casa-bellucci` und published `out/`
- basePath: `/casa-bellucci`
- Repo: `Hassan-Jallous/casa-bellucci`
- `.nojekyll` liegt in `public/` und wird beim Build nach `out/` kopiert (verhindert Jekyll-Processing auf Pages)

## Sonstiges
- `scripts/gen-hero.py` ist ein manuelles Gemini-Bild-Tool, kein Teil des Builds. Nicht in die App einbinden.
- `homepage-structure.md` und andere `.md`-Dateien im Root sind Doku.

## Regel
- Design pixel-treu halten. Keine Klassennamen oder Markup aendern ohne Grund, das CSS haengt an konkreten Klassen und Struktur.

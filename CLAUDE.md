# Casa Bellucci Website

## Stack
- Next.js 16.2.6 (Static Export)
- Tailwind CSS 4.3 (CSS-basierte @theme Config)
- GSAP 3.15 + ScrollTrigger (Scroll-Animationen)
- Framer Motion 12.39 (UI-Transitions)
- TypeScript 6.0

## Farben (nur 4)
- cream: #FAF5EF
- charcoal: #1A1A1A
- terracotta: #C67B5C
- olive: #5C6B3C

## Fonts
- Headings: Playfair Display
- Body: Cormorant Garamond

## Befehle
- `npm run dev` - Lokaler Dev-Server
- `npm run build` - Static Export nach /out
- `npm run lint` - ESLint

## Hosting
- Hostinger (Static Files)
- Deploy: `npm run build && scp -r out/* user@server:/public_html/`

## Struktur
- `src/app/` - Seiten (DE root, /en/, /it/)
- `src/components/sections/` - Section-Komponenten
- `src/components/layout/` - Header, Footer, MobileNav
- `src/components/animations/` - ScrollReveal, TextReveal
- `src/components/ui/` - CookieBanner, PdfViewer
- `src/lib/` - Utilities (i18n, schema, site, fonts, analytics)
- `src/hooks/` - Custom Hooks (useGsap, useReducedMotion)
- `src/data/` - JSON Content (menus, press, events)
- `src/i18n/` - Übersetzungen
- `public/` - Statische Assets (images, videos, menus)

## i18n
- DE: / (default)
- EN: /en/
- IT: /it/
- Ordner-basiertes Routing, kein Middleware

## SEO
- Schema.org: Restaurant, LocalBusiness, Event, BreadcrumbList, FAQ
- Sitemap mit hreflang Alternates
- Open Graph + Twitter Cards
- Canonical URLs pro Sprache

## Reservierung
- TheFork Widget (iframe)
- Telefon-Fallback

## Content pflegen
- Menüs: src/data/menus.json
- Presse: src/data/press.json
- Events: src/data/events.json
- Übersetzungen: src/i18n/translations.ts

## Regeln
- KEINE Em-Dashes oder En-Dashes
- KEINE Kommentare im Code (ausser WHY nicht offensichtlich)
- Tailwind v4: Theme in globals.css via @theme, NICHT in tailwind.config.js
- Next.js 16: IMMER Context7 checken vor Framework-Code
- Static Export: kein serverseitiger Code, keine API Routes

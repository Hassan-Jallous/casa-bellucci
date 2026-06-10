import type { Metadata, Viewport } from 'next';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';
import {
  restaurantJsonLd,
  webSiteJsonLd,
  SEO,
  IS_PREVIEW_BUILD,
} from '@/lib/seo';

// Content hash of each non-fingerprinted stylesheet, computed at build time.
// Appended as ?v= so returning visitors fetch a changed CSS immediately instead
// of being stuck on a long-cached copy (LiteSpeed serves these with a 7d max-age).
function cssVersion(file: string): string {
  try {
    const buf = readFileSync(join(process.cwd(), 'public', 'styles', file));
    return createHash('md5').update(buf).digest('hex').slice(0, 8);
  } catch {
    return '1';
  }
}
const STYLES_V = cssVersion('styles.css');
const VIVID_V = cssVersion('vivid.css');

// The prototype stylesheets use relative url() references ("../images/...",
// "../fonts/...") that point outside the styles folder. Pulling them through
// the JS import pipeline would force the bundler to resolve those urls as
// modules, which fails. To keep styles.css / vivid.css byte-for-byte unchanged
// and let the browser resolve those relative urls correctly, the CSS lives in
// public/styles and is referenced via <link> (matching the original
// index.html). At runtime "/styles/styles.css" resolves "../images/x" to
// "/images/x" and "../fonts/x" to "/fonts/x", both served from public/.
//
// Fonts: the prototype CSS targets concrete family names ("Playfair Display",
// "Montserrat", "Allura"), not next/font CSS variables. next/font was therefore
// redundant (it loaded the families a second time) and has been removed. The
// Google Fonts stylesheet link below, copied verbatim from index.html, is the
// single source so those CSS rules resolve identically.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

// Selbst gehostete @font-face-Regeln (woff2, latin-Subset) werden als <style> in
// den <head> inline eingebunden, damit kein render-blockierender Extra-Request zu
// fonts.googleapis.com noetig ist. fonts.css nutzt absolute /fonts/-Pfade, die hier
// basePath-aware umgeschrieben werden. Quelle/Generator: scripts/fetch-fonts.mjs.
function readFontCss(): string {
  try {
    const css = readFileSync(join(process.cwd(), 'public', 'styles', 'fonts.css'), 'utf8');
    return BASE ? css.replaceAll('url(/fonts/', `url(${BASE}/fonts/`) : css;
  } catch {
    return '';
  }
}
const FONT_CSS = readFontCss();

// Critical-CSS-Strategie (nur Production): Das Above-the-fold-CSS der Startseite
// (Mobile-Viewport, inkl. aller @font-face) wird inline in den <head> gelegt, damit
// der erste Paint NICHT auf die render-blockierenden Stylesheets warten muss. Das
// mobile LCP-Element ist der Hero-Lede-Text, dessen Render-Delay genau diese
// Blockade war. styles.css/vivid.css werden danach per Inline-Script nicht-
// render-blockierend nachgeladen (media="print"-Swap), <noscript> als Fallback.
// critical.css wird von scripts/gen-critical.mjs erzeugt (bei groesseren
// Above-the-fold-Aenderungen neu generieren). In dev: normale <link>, editierbar.
const IS_PROD = process.env.NODE_ENV === 'production';
function readCriticalCss(): string {
  try {
    let css = readFileSync(join(process.cwd(), 'public', 'styles', 'critical.css'), 'utf8');
    if (BASE) {
      css = css
        .replaceAll('url("/fonts/', `url("${BASE}/fonts/`)
        .replaceAll('url("/images/', `url("${BASE}/images/`);
    }
    return css;
  } catch {
    return '';
  }
}
const CRITICAL_CSS = readCriticalCss();
const CSS_HREFS = [
  `${BASE}/styles/styles.css?v=${STYLES_V}`,
  `${BASE}/styles/vivid.css?v=${VIVID_V}`,
];
// Laedt die vollstaendigen Stylesheets nicht-render-blockierend (media=print ->
// onload media=all). Critical-CSS ist da bereits inline, also kein FOUC.
const ASYNC_CSS_SCRIPT = `(function(){var h=${JSON.stringify(CSS_HREFS)};for(var i=0;i<h.length;i++){var l=document.createElement('link');l.rel='stylesheet';l.media='print';l.href=h[i];l.onload=function(){this.media='all'};document.head.appendChild(l);}})();`;

// Farbe der mobilen Browser-Leiste, passend zum cremefarbenen Header-Hintergrund.
export const viewport: Viewport = {
  themeColor: '#FFF9F0',
};

export const metadata: Metadata = {
  metadataBase: new URL(SEO.siteUrl),
  title: {
    default: SEO.title,
    template: '%s · Casa Bellucci',
  },
  description: SEO.description,
  applicationName: 'Casa Bellucci',
  keywords: [...SEO.keywords],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    url: SEO.siteUrl,
    siteName: 'Casa Bellucci',
    type: 'website',
    locale: 'de_DE',
    images: [
      {
        url: SEO.ogImage,
        width: 1200,
        height: 630,
        alt: 'Casa Bellucci, italienisches Restaurant am Kurfürstendamm in Berlin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO.title,
    description: SEO.description,
    images: [SEO.ogImage],
  },
  robots: {
    index: !IS_PREVIEW_BUILD,
    follow: true,
    googleBot: {
      index: !IS_PREVIEW_BUILD,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const structuredData = restaurantJsonLd();
  const webSiteData = webSiteJsonLd();

  return (
    <html
      lang="de"
      data-accent="lemon"
      data-font="classic"
      suppressHydrationWarning
    >
      <head>
        {/*
          Selbst gehostete Schriften + Above-the-fold-CSS: in Production inline als
          Critical-CSS (enthaelt alle @font-face), damit der erste Paint nicht
          render-blockiert. styles.css/vivid.css laden danach asynchron nach. KEINE
          Font-Preloads (mobiles LCP ist Text, der via font-display:swap sofort im
          Fallback rendert). In dev: @font-face inline + normale Stylesheet-Links.
        */}
        {IS_PROD ? (
          <>
            <style dangerouslySetInnerHTML={{ __html: CRITICAL_CSS }} />
            {/* Nur das winzige Logo-Font (Billion Miracles, auf Logo-Glyphen
                subsettet ~8KB) vorladen. Playfair/Montserrat NICHT vorladen (wuerde
                den FCP bremsen) - deren Font-Swap-CLS faengt der metrik-angepasste
                Fallback-Font (size-adjust) ab. */}
            <link rel="preload" as="font" type="font/woff2" crossOrigin="anonymous" href={`${BASE}/fonts/BillionMiracles.woff2`} />
            <script dangerouslySetInnerHTML={{ __html: ASYNC_CSS_SCRIPT }} />
            <noscript>
              <link rel="stylesheet" href={CSS_HREFS[0]} />
              <link rel="stylesheet" href={CSS_HREFS[1]} />
            </noscript>
          </>
        ) : (
          <>
            <style dangerouslySetInnerHTML={{ __html: FONT_CSS }} />
            <link rel="stylesheet" href={CSS_HREFS[0]} />
            <link rel="stylesheet" href={CSS_HREFS[1]} />
          </>
        )}
        {/*
          The language is fixed per route at build time. This script runs
          synchronously pre-paint and sets <html lang> from the URL path so the
          attribute matches the build-time language before first paint. German
          ('/') stays the default; '/en/...' and '/it/...' override it.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var m=location.pathname.match(/\\/(en|it)(\\/|$)/);document.documentElement.lang=m?m[1]:'de';}catch(e){}})();",
          }}
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteData).replace(/</g, '\\u003c'),
          }}
        />
        {children}
      </body>
    </html>
  );
}

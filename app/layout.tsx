import type { Metadata } from 'next';
import { restaurantJsonLd, webSiteJsonLd, SEO } from '@/lib/seo';

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
        width: 1600,
        height: 1067,
        alt: 'Casa Bellucci Terrasse am Kudamm in Berlin',
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
    index: true,
    follow: true,
    googleBot: {
      index: true,
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
    >
      <head>
        {/*
          The original prototype CSS targets concrete font-family names
          (e.g. "Playfair Display"), not the next/font CSS variables. We keep
          the exact Google Fonts stylesheet from index.html so those CSS rules
          resolve identically without modifying styles.css.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Allura&family=Montserrat:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        {/* Prototype CSS served from public/, order matters: styles then vivid. */}
        <link rel="stylesheet" href={`${BASE}/styles/styles.css`} />
        <link rel="stylesheet" href={`${BASE}/styles/vivid.css`} />
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

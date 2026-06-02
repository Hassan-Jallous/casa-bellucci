import type { Metadata } from 'next';
import { SITE } from './site';

const SITE_URL = SITE.canonicalUrl;

export const SEO = {
  siteUrl: SITE_URL,
  title:
    'Casa Bellucci · Italienisches Restaurant am Kurfürstendamm in Berlin',
  description:
    'Casa Bellucci ist ein italienisches Restaurant und eine Bar am Kurfürstendamm 63 in Berlin-Charlottenburg mit Terrasse, Frühstück, Lunch, Dinner und Online-Reservierung.',
  keywords: [
    'Casa Bellucci',
    'Casa Bellucci Berlin',
    'italienisches Restaurant Berlin',
    'italienisches Restaurant Charlottenburg',
    'Restaurant Kurfürstendamm',
    'Bar Kurfürstendamm',
    'Frühstück Kurfürstendamm',
  ],
  ogImage: '/images/hero-summer-desktop.jpg',
} as const;

export function canonicalUrl(path = '/'): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return new URL(cleanPath, SITE_URL).toString();
}

export function pageMetadata({
  title,
  description,
  path = '/',
  index = true,
}: {
  title: string;
  description: string;
  path?: string;
  index?: boolean;
}): Metadata {
  const url = canonicalUrl(path);
  const imageUrl = canonicalUrl(SEO.ogImage);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: {
      index,
      follow: true,
      googleBot: {
        index,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      type: 'website',
      locale: 'de_DE',
      images: [
        {
          url: imageUrl,
          width: 1600,
          height: 1067,
          alt: 'Casa Bellucci Terrasse am Kurfürstendamm in Berlin',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function restaurantJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${SITE_URL}/#restaurant`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE_URL,
    image: [
      canonicalUrl('/images/hero-summer-desktop.jpg'),
      canonicalUrl('/images/terrace.jpg'),
      canonicalUrl('/images/gallery/1.jpg'),
    ],
    description: SEO.description,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      postalCode: '10707',
      addressLocality: 'Berlin',
      addressRegion: 'Berlin',
      addressCountry: 'DE',
    },
    servesCuisine: ['Italienisch', 'Sizilianisch', 'Mediterran'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '00:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: [SITE.instagram],
    hasMap: SITE.mapsUrl,
    menu: canonicalUrl('/#menu'),
    acceptsReservations: true,
    potentialAction: {
      '@type': 'ReserveAction',
      target: canonicalUrl('/reservierung/'),
    },
  };
}

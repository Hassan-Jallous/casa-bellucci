import type { Metadata } from 'next';
import { SITE } from './site';

const SITE_URL = SITE.canonicalUrl;

export const SEO = {
  siteUrl: SITE_URL,
  title:
    'Casa Bellucci · Italienisches & sizilianisches Restaurant Berlin',
  description:
    'Casa Bellucci ist ein italienisches und sizilianisches Restaurant mit Bar am Kurfürstendamm 63 in Berlin-Charlottenburg. Frühstück, Lunch, Dinner, Aperitivo und Sommerterrasse, mit Online-Reservierung.',
  keywords: [
    'Casa Bellucci',
    'Casa Bellucci Berlin',
    'italienisches Restaurant Berlin',
    'sizilianisches Restaurant Berlin',
    'italienisches Restaurant Charlottenburg',
    'Restaurant Charlottenburg',
    'Restaurant Kurfürstendamm',
    'Bar Charlottenburg',
    'Frühstück Charlottenburg',
    'Brunch Charlottenburg',
    'Weinbar Berlin',
    'Aperitivo Berlin',
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
    priceRange: '€€€',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.5007367,
      longitude: 13.3112327,
    },
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Credit Card, Debit Card, NFC Mobile Payment',
    areaServed: ['Charlottenburg', 'Berlin-Charlottenburg', 'Berlin'],
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
    hasMenu: canonicalUrl('/#menu'),
    acceptsReservations: true,
    amenityFeature: [
      'Sommerterrasse',
      'Bar',
      'Frühstück',
      'Reservierung',
      'Rollstuhlgerecht',
      'Vegetarische Optionen',
      'Vegane Optionen',
      'Hunde willkommen',
    ].map((name) => ({
      '@type': 'LocationFeatureSpecification',
      name,
      value: true,
    })),
    potentialAction: {
      '@type': 'ReserveAction',
      target: canonicalUrl('/reservierung/'),
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function webPageJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  const url = canonicalUrl(path);
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
    },
    inLanguage: 'de-DE',
  };
}

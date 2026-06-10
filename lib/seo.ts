import type { Metadata } from 'next';
import { SITE } from './site';
import { localizedPath, OG_LOCALE, IN_LANGUAGE } from '@/lib/i18n/localize';
import type { Lang } from '@/lib/i18n/config';

const SITE_URL = SITE.canonicalUrl;
export const IS_PREVIEW_BUILD = Boolean(process.env.NEXT_PUBLIC_BASE_PATH);

export const SEO = {
  siteUrl: SITE_URL,
  title:
    'Casa Bellucci · Italienisches Restaurant Berlin',
  description:
    'Casa Bellucci ist ein italienisches Restaurant mit Bar am Kurfürstendamm 63 in Berlin-Charlottenburg. Frühstück, Lunch, Dinner, Aperitivo und Sommerterrasse, mit Online-Reservierung.',
  keywords: [
    'Casa Bellucci',
    'Casa Bellucci Berlin',
    'italienisches Restaurant Berlin',
    'italienisches Restaurant Charlottenburg',
    'Restaurant Charlottenburg',
    'Restaurant Kudamm',
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
  image,
  lang = 'de',
}: {
  title: string;
  description: string;
  path?: string;
  index?: boolean;
  image?: string;
  lang?: Lang;
}): Metadata {
  const localized = localizedPath(path, lang);
  const url = canonicalUrl(localized);
  const imageUrl = canonicalUrl(image ?? SEO.ogImage);
  const shouldIndex = index && !IS_PREVIEW_BUILD;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages: {
        de: canonicalUrl(localizedPath(path, 'de')),
        en: canonicalUrl(localizedPath(path, 'en')),
        it: canonicalUrl(localizedPath(path, 'it')),
        'x-default': canonicalUrl(localizedPath(path, 'de')),
      },
    },
    robots: {
      index: shouldIndex,
      follow: true,
      googleBot: {
        index: shouldIndex,
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
      locale: OG_LOCALE[lang],
      images: [
        {
          url: imageUrl,
          width: 1600,
          height: 1067,
          alt: 'Casa Bellucci Terrasse am Kudamm in Berlin',
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
    servesCuisine: ['Italienisch', 'Mediterran'],
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

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
  lang: Lang = 'de'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: canonicalUrl(localizedPath(item.path, lang)),
    })),
  };
}

export function faqJsonLd(
  faqs: { question: string; answer: string }[],
  lang: Lang = 'de'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: IN_LANGUAGE[lang],
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
  lang = 'de',
}: {
  name: string;
  description: string;
  path: string;
  lang?: Lang;
}) {
  const url = canonicalUrl(localizedPath(path, lang));
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
    inLanguage: IN_LANGUAGE[lang],
  };
}

export function placeJsonLd({
  type,
  name,
  description,
  path,
  servesCuisine,
  lang = 'de',
}: {
  type: 'Restaurant' | 'BarOrPub' | 'CafeOrCoffeeShop';
  name: string;
  description: string;
  path: string;
  servesCuisine?: string[];
  lang?: Lang;
}) {
  const url = canonicalUrl(localizedPath(path, lang));
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#place`,
    name,
    description,
    url,
    isPartOf: { '@id': `${SITE_URL}/#restaurant` },
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      postalCode: '10707',
      addressLocality: 'Berlin',
      addressRegion: 'Berlin',
      addressCountry: 'DE',
    },
    telephone: SITE.phone,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.5007367,
      longitude: 13.3112327,
    },
    ...(servesCuisine ? { servesCuisine } : {}),
    priceRange: '€€€',
    acceptsReservations: true,
  };
}

export function webSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE.name,
    inLanguage: 'de-DE',
    publisher: { '@id': `${SITE_URL}/#restaurant` },
  };
}

import { siteConfig } from './site';

export function generateRestaurantSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    servesCuisine: siteConfig.cuisine,
    priceRange: siteConfig.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.zip,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.district,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: siteConfig.hours.weekday.open,
        closes: siteConfig.hours.weekday.close,
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: siteConfig.hours.sunday.open,
        closes: siteConfig.hours.sunday.close,
      },
    ],
    image: `${siteConfig.url}/images/restaurant.jpg`,
    menu: `${siteConfig.url}/menu`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.5',
      reviewCount: '120',
    },
    sameAs: [siteConfig.social.instagram],
  };
}

export function generateLocalBusinessSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: siteConfig.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.zip,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.district,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: siteConfig.hours.weekday.open,
        closes: siteConfig.hours.weekday.close,
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: siteConfig.hours.sunday.open,
        closes: siteConfig.hours.sunday.close,
      },
    ],
    image: `${siteConfig.url}/images/restaurant.jpg`,
    sameAs: [siteConfig.social.instagram],
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(
  items: { question: string; answer: string }[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function generateEventSchema(events: {
  name: string;
  description: string;
  startDate?: string;
  location?: string;
}[]): Record<string, unknown>[] {
  return events.map((event) => ({
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: siteConfig.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        postalCode: siteConfig.address.zip,
        addressLocality: siteConfig.address.city,
        addressCountry: siteConfig.address.country,
      },
    },
    organizer: {
      '@type': 'Restaurant',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  }));
}

export function generateWebPageSchema(
  name: string,
  description: string,
  url: string
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

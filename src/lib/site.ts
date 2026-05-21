export const siteConfig = {
  name: 'Casa Bellucci',
  url: 'https://casabellucci.de',
  address: {
    street: 'Kurfürstendamm 63',
    zip: '10707',
    city: 'Berlin',
    district: 'Charlottenburg',
    country: 'DE',
  },
  phone: '+49 30 88629828',
  email: 'info@casabellucci.de',
  social: {
    instagram: 'https://www.instagram.com/casabellucci_berlin/',
  },
  hours: {
    weekday: { open: '09:00', close: '00:00', days: 'Mo-Sa' },
    sunday: { open: '09:00', close: '18:00', days: 'So' },
  },
  cuisine: 'Italian',
  priceRange: '€€€',
  reservation: {
    provider: 'thefork',
    url: '',
  },
  geo: {
    lat: 52.4985,
    lng: 13.3096,
  },
} as const;

export type SiteConfig = typeof siteConfig;

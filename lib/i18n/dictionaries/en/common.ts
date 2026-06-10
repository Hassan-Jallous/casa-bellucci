// Shared, repeated labels and CTAs used across multiple components
// (Contact, Footer, every *Landing). English translation of the German
// source of truth. Same structure, translated values.
export const common = {
  // From lib/site.ts -> SITE.openingHours (rendered in Contact, Footer, landings)
  hours: {
    weekdays: 'Monday - Saturday · 09:00 - 00:00',
    sunday: 'Sunday · 09:00 - 18:00',
  },
  // Repeated CTA button labels
  actions: {
    reserve: 'Reserve',
    reserveTable: 'Reserve a table',
    call: 'Call',
    bookOnline: 'Book online',
    openMaps: 'Open in maps →',
    openRoute: 'Open route',
    viewTerrace: 'View terrace →',
  },
  // Contact / landing info-block labels (the ".k" headings)
  info: {
    address: 'Address',
    reservation: 'Reservation',
    hours: 'Opening hours',
  },
  // Map widget corner label + pin label (Contact, landings)
  mapCorner: {
    area: 'Kudamm · Charlottenburg',
    name: 'Casa Bellucci',
  },
} as const;

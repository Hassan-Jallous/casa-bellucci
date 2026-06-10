// Shared, repeated labels and CTAs used across multiple components
// (Contact, Footer, every *Landing). German source of truth. EN/IT slices
// re-export this until translated. Page-specific copy lives in the per-page
// slices, not here. Values are copied verbatim from the components / site.ts.
export const common = {
  // From lib/site.ts -> SITE.openingHours (rendered in Contact, Footer, landings)
  hours: {
    weekdays: 'Montag - Samstag · 09:00 - 00:00',
    sunday: 'Sonntag · 09:00 - 18:00',
  },
  // Repeated CTA button labels
  actions: {
    reserve: 'Reservieren',
    reserveTable: 'Tisch reservieren',
    call: 'Anrufen',
    bookOnline: 'Online reservieren',
    openMaps: 'Auf Karte öffnen →',
    openRoute: 'Route öffnen',
    viewTerrace: 'Terrasse ansehen →',
  },
  // Contact / landing info-block labels (the ".k" headings)
  info: {
    address: 'Adresse',
    reservation: 'Reservierung',
    hours: 'Öffnungszeiten',
  },
  // Map widget corner label + pin label (Contact, landings)
  mapCorner: {
    area: 'Kudamm · Charlottenburg',
    name: 'Casa Bellucci',
  },
} as const;

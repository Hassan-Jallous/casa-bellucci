// Shared, repeated labels and CTAs used across multiple components
// (Contact, Footer, every *Landing). Italian translation of the German
// source of truth. Same structure, translated values.
export const common = {
  // From lib/site.ts -> SITE.openingHours (rendered in Contact, Footer, landings)
  hours: {
    weekdays: 'Lunedì - Sabato · 09:00 - 00:00',
    sunday: 'Domenica · 09:00 - 18:00',
  },
  // Repeated CTA button labels
  actions: {
    reserve: 'Prenota',
    reserveTable: 'Prenota un tavolo',
    call: 'Chiama',
    bookOnline: 'Prenota online',
    openMaps: 'Apri sulla mappa →',
    openRoute: 'Apri il percorso',
    viewTerrace: 'Vedi la terrazza →',
  },
  // Contact / landing info-block labels (the ".k" headings)
  info: {
    address: 'Indirizzo',
    reservation: 'Prenotazione',
    hours: 'Orari di apertura',
  },
  // Map widget corner label + pin label (Contact, landings)
  mapCorner: {
    area: 'Kudamm · Charlottenburg',
    name: 'Casa Bellucci',
  },
} as const;

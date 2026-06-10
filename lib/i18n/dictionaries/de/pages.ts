// Page-specific copy for the standalone pages (reservation + thank-you).
// German source of truth, copied VERBATIM from the page components. EN/IT slices
// re-export this until translated.
export const pages = {
  reservierung: {
    eyebrow: 'Tischreservierung',
    h1Pre: 'Ein Tisch bei ',
    h1Em: 'Casa Bellucci',
    lede:
      'Reserviere direkt online über unser offizielles Quandoo-Modul oder erreiche uns telefonisch für spontane Wünsche und größere Gruppen.',
  },
  danke: {
    eyebrow: 'Reservierung',
    h1: 'Danke für Ihre Reservierung',
    p1: 'Vielen Dank für Ihre Reservierung bei Casa Bellucci. Wir freuen uns darauf, Sie bald bei uns am Kudamm begrüßen zu dürfen.',
    p2: 'Reservierungsdetails werden über das Reservierungssystem bestätigt. Bei Rückfragen erreichen Sie uns direkt telefonisch.',
    findUs: 'So finden Sie uns:',
    hours: 'Öffnungszeiten:',
  },
} as const;

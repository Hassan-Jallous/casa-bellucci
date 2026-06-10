// Page-specific copy for the standalone pages (reservation + thank-you).
// English translation. Composed into the `en` dictionary in ./index.ts, where
// the `: Dict` annotation enforces structural parity with the German source.
export const pages = {
  reservierung: {
    eyebrow: 'Table reservation',
    h1Pre: 'A table at ',
    h1Em: 'Casa Bellucci',
    lede:
      'Reserve directly online through our official Quandoo module, or reach us by phone for last-minute requests and larger groups.',
  },
  danke: {
    eyebrow: 'Reservation',
    h1: 'Thank you for your reservation',
    p1: 'Thank you very much for your reservation at Casa Bellucci. We look forward to welcoming you soon at our place on the Kudamm.',
    p2: 'Reservation details are confirmed through the reservation system. If you have any questions, you can reach us directly by phone.',
    findUs: 'How to find us:',
    hours: 'Opening hours:',
  },
} as const;

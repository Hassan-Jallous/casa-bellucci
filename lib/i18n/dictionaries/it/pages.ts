// Page-specific copy for the standalone pages (reservation + thank-you).
// Italian translation. Composed into the `it` dictionary in ./index.ts, where
// the `: Dict` annotation enforces structural parity with the German source.
export const pages = {
  reservierung: {
    eyebrow: 'Prenotazione tavolo',
    h1Pre: 'Un tavolo da ',
    h1Em: 'Casa Bellucci',
    lede:
      'Prenota direttamente online tramite il nostro modulo ufficiale Quandoo, oppure contattaci per telefono per richieste spontanee e gruppi numerosi.',
  },
  danke: {
    eyebrow: 'Prenotazione',
    h1: 'Grazie per la tua prenotazione',
    p1: 'Grazie di cuore per la tua prenotazione da Casa Bellucci. Saremo lieti di accoglierti presto da noi, sul Kudamm.',
    p2: 'I dettagli della prenotazione vengono confermati tramite il sistema di prenotazione. Per qualsiasi domanda puoi contattarci direttamente per telefono.',
    findUs: 'Come trovarci:',
    hours: 'Orari di apertura:',
  },
} as const;

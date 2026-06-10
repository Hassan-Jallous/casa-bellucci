// Page-specific copy for the Terrazza landing page.
// Italian translation of the German source of truth in ../de/landingTerrasse.ts.
// Same structure, keys and array lengths. Shared labels (hours, info, actions,
// mapCorner) live in `common`.
export const landingTerrasse = {
  // 1. Hero / Intro
  hero: {
    eyebrow: 'Terrazza sul Kudamm',
    h1: {
      pre: 'Ristorante con terrazza a Berlino-',
      em: 'Charlottenburg',
      post: '',
    },
    lede:
      'Casa Bellucci ha una terrazza estiva al Kurfürstendamm 63 a Berlino-Charlottenburg. Chi cerca un ristorante con terrazza a Berlino siede all\'aperto qui sul Kudamm, dal primo sole del mattino all\'ultimo bicchiere di vino la sera.',
    para:
      'La terrazza si affaccia direttamente sul boulevard, abbastanza tranquilla per parlare e abbastanza vicina al via vai del Kurfürstendamm. Con il bel tempo è il nostro posto più bello, un pezzo di piazza italiana a Charlottenburg-Wilmersdorf.',
    viewMenu: 'Vedi il menu →',
    mediaLabel: 'Terrazza estiva di Casa Bellucci sul Kudamm',
    photos: {
      tag: {
        alt: 'Terrazza al sole di Casa Bellucci sul Kurfürstendamm a Berlino-Charlottenburg di giorno',
        caption: 'Terrazza',
      },
      mittag: {
        alt: 'Tavolo apparecchiato sulla terrazza di Casa Bellucci sul Kudamm nel sole di mezzogiorno',
        caption: 'Mezzogiorno',
      },
      abend: {
        alt: 'Terrazza di Casa Bellucci sul Kurfürstendamm nella calda luce della sera',
        caption: 'Sera',
      },
    },
  },

  // 2. L'esperienza della terrazza nel corso della giornata (dayline)
  experience: {
    eyebrow: 'Mangiare all\'aperto a Berlino',
    h2: {
      pre: 'Terrazza al sole sul ',
      em: 'Kurfürstendamm',
      post: '',
    },
    para1:
      'Una buona terrazza vive di luce. Al mattino il sole è morbido sul Kudamm, ideale per la colazione e un primo Caffè all\'aperto. Nelle ore di mezzogiorno la terrazza al sole diventa il posto più luminoso, con l\'ombra sotto le tende per chi la preferisce più fresca.',
    para2:
      'Nel tardo pomeriggio arriva l\'ora dorata. È il momento migliore per un aperitivo all\'aperto, quando la luce si fa più morbida e il boulevard si riempie. Chi vuole mangiare all\'aperto a Berlino trova il momento giusto sulla terrazza sul Kudamm, dal mattino alla sera.',
    daylineLabel: 'I momenti migliori della giornata in terrazza',
    moments: [
      {
        time: 'Mattina',
        title: 'Sole al mattino',
        copy: 'Luce mattutina morbida sul Kudamm. Colazione, un Cornetto e il primo Espresso Bellucci all\'aperto, prima che il boulevard si svegli.',
      },
      {
        time: 'Pomeriggio',
        title: 'Mezzogiorno e ombra',
        copy: 'Le ore più luminose sulla terrazza al sole. Chi la preferisce più fresca siede sotto le tende, gli altri godono del pieno sole di Berlino.',
      },
      {
        time: 'Tramonto',
        title: 'Ora dorata',
        copy: 'Luce serale morbida e ora dell\'aperitivo. Spritz, vino e una lunga serata all\'aperto, quando la terrazza sul Kudamm dà il meglio.',
      },
    ],
    mediaLabel: 'I momenti della giornata sulla terrazza di Casa Bellucci',
    photos: {
      hell: {
        alt: 'Terrazza estiva luminosa di Casa Bellucci sul Kudamm nel sole di mezzogiorno',
        caption: 'Sole',
      },
      schatten: {
        alt: 'Posti all\'ombra sotto le tende sulla terrazza di Casa Bellucci a Charlottenburg',
        caption: 'Ombra',
      },
      italia: {
        alt: 'Atmosfera italiana in terrazza da Casa Bellucci sul Kurfürstendamm a Berlino',
        caption: 'Italia',
      },
    },
  },

  // 3. Aperitivo e vino all'aperto in estate
  aperitivo: {
    eyebrow: 'Aperitivo all\'aperto',
    h2: {
      pre: 'Aperitivo e vino in ',
      em: 'terrazza',
      post: '',
    },
    para1:
      'L\'estate a Berlino è dedicata all\'aperitivo. Sulla terrazza sul Kudamm la sera inizia con uno Spritz, fresco e leggero, accompagnato da piccoli stuzzichini. È il modo italiano di lasciar finire la giornata, all\'aperto e senza fretta.',
    para2:
      'Poi arriva il vino. In carta ci sono etichette dalla Sicilia e da tutta Italia, molte servite al calice, così la serata resta leggera. Vino all\'aperto in estate, con vista sul boulevard, è il motivo per cui la terrazza al sole si riempie la sera. Per un posto la sera consigliamo una prenotazione specifica per la terrazza.',
    mediaLabel: 'Aperitivo e vino sulla terrazza di Casa Bellucci',
    photos: {
      spritz: {
        alt: 'Aperitivo Spritz sulla terrazza estiva di Casa Bellucci sul Kudamm a Berlino-Charlottenburg',
        caption: 'Spritz',
      },
      abend: {
        alt: 'Vino e aperitivo sulla terrazza di Casa Bellucci sul Kurfürstendamm la sera',
        caption: 'Vino',
      },
      terrace: {
        alt: 'Terrazza serale di Casa Bellucci sul Kudamm con ospiti all\'aperitivo',
        caption: 'Sera',
      },
    },
  },

  // 4. Orari e prenotazione
  reservation: {
    eyebrow: 'Prenota la terrazza',
    h2: {
      pre: 'Terrazza sul ',
      em: 'Kudamm',
      post: '',
    },
    lede:
      'Casa Bellucci si trova al Kurfürstendamm 63 a Berlino-Charlottenburg. La terrazza estiva apre dal mattino con il bel tempo. Prenota online tramite Quandoo o per telefono e indica pure che desideri un tavolo all\'aperto.',
    addressLine1: 'Kurfürstendamm 63',
    addressLine2: '10707 Berlin · Charlottenburg',
    terraceLabel: 'Terrazza',
    terraceTime: 'Terrazza dalle 09:00',
    terraceNote: 'Con il bel tempo, indica un tavolo desiderato all\'aperto',
    mapLabel: 'Posizione di Casa Bellucci sulla mappa',
  },

  // 5. FAQ
  faqEyebrow: 'Domande frequenti',
  faqHeading: {
    pre: 'Domande ',
    em: 'frequenti',
    post: '',
  },
  faqs: [
    {
      question: 'Il ristorante sul Kurfürstendamm ha una terrazza?',
      answer:
        'Sì. Casa Bellucci ha una terrazza estiva proprio sul Kurfürstendamm 63 a Berlino-Charlottenburg. Con il bel tempo si siede all\'aperto qui sul boulevard, dalla colazione del mattino all\'aperitivo della sera.',
    },
    {
      question: 'Si può prenotare la terrazza?',
      answer:
        'Sì. Puoi prenotare un tavolo online tramite Quandoo o per telefono al +49 162 3009925. Indica pure che desideri un posto in terrazza, così prenotiamo all\'aperto appositamente per te. Soprattutto nelle sere calde consigliamo una prenotazione anticipata.',
    },
    {
      question: 'Ci sono posti all\'ombra all\'aperto?',
      answer:
        'Sì. La terrazza ha posti al sole e posti all\'ombra sotto le tende. Così puoi sederti nel sole di mezzogiorno o più fresco all\'ombra, come preferisci. Indica la tua preferenza al momento della prenotazione e teniamo libero il tavolo giusto.',
    },
    {
      question: 'Qual è il momento migliore per la terrazza al sole?',
      answer:
        'Al mattino la luce sul Kudamm è morbida e tranquilla, ideale per la colazione. Le ore di mezzogiorno sono le più luminose e soleggiate. Nel tardo pomeriggio arriva l\'ora dorata, il momento migliore per un aperitivo all\'aperto. La terrazza è quindi adatta dal mattino alla sera.',
    },
    {
      question: 'Si può mangiare all\'aperto in terrazza a Berlino?',
      answer:
        'Sì. Sulla terrazza di Casa Bellucci si mangia all\'aperto sul Kudamm, nel cuore di Charlottenburg-Wilmersdorf. È disponibile l\'intera offerta, dalla colazione al pranzo fino alla cena, insieme ad aperitivo e vino. Con il maltempo basta spostarsi all\'interno.',
    },
    {
      question: 'Dove si trova la terrazza e come ci si arriva?',
      answer:
        'La terrazza si trova al Kurfürstendamm 63, 10707 Berlino-Charlottenburg, a Charlottenburg-Wilmersdorf. È centrale sul Kudamm e facilmente raggiungibile con autobus e metropolitana. La posizione sul boulevard rende la terrazza al sole un posto tranquillo nel cuore della città.',
    },
  ],

  // The page-related cross-links sentence (the leading/trailing prose between links)
  related: {
    pre: 'A mezzogiorno in terrazza per il ',
    lunchLink: 'business lunch a Charlottenburg',
    afterLunch: '. La sera un ',
    barLink: 'aperitivo sul Kudamm',
    afterBar: ' e insieme il nostro ',
    italienischLink: 'ristorante italiano a Charlottenburg',
    afterItalienisch: '.',
  },
} as const;

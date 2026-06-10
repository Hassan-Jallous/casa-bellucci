// Page-specific copy for the Breakfast & Brunch landing page.
// Italian translation of the German source of truth in ../de/landingFruehstueck.ts.
// Same structure, keys and array lengths. Shared labels (hours, info, actions,
// mapCorner) live in `common`.
export const landingFruehstueck = {
  // 1. Hero / Intro
  hero: {
    eyebrow: 'Colazione sul Kudamm',
    h1: {
      pre: 'Colazione e brunch a ',
      em: 'Charlottenburg',
      post: '',
    },
    lede:
      'Casa Bellucci serve una colazione all\'italiana a Berlino-Charlottenburg, al Kurfürstendamm 63. "La Dolce Mattina" è il nome di un inizio di giornata tranquillo, con il Cornetto al posto del croissant, l\'Espresso Bellucci e una nota fruttata di limoni di Amalfi e arance Tarocco.',
    para:
      'Chi cerca una colazione sul Kudamm a Charlottenburg-Wilmersdorf trova qui un posto all\'interno o sulla terrazza estiva al mattino.',
    viewMenu: 'Vedi il menu →',
    mediaLabel: 'Colazione all\'italiana da Casa Bellucci',
    photos: {
      colazione: {
        alt: 'Colazione all\'italiana da Casa Bellucci a Berlino-Charlottenburg con Cornetto ed espresso',
        caption: 'Colazione',
      },
      mattina: {
        alt: 'Tavolo della colazione sul Kudamm da Casa Bellucci al mattino',
        caption: 'Mattina',
      },
      terrazza: {
        alt: 'Terrazza estiva di Casa Bellucci sul Kudamm nella luce del mattino',
        caption: 'Terrazza',
      },
    },
  },

  // 2. Colazione all'italiana
  italian: {
    eyebrow: 'Colazione all\'italiana',
    h2: {
      pre: 'La Dolce Mattina, ',
      em: 'all\'italiana',
      post: '',
    },
    para1:
      'Una colazione all\'italiana è leggera e dolce. Invece di un grande piatto, da noi ci sono Cornetto e Caffè, accompagnati da piccoli piatti caldi. Il Cornetto è la versione italiana del croissant, fatto in casa e sfornato fresco ogni giorno. Insieme l\'Espresso Bellucci o un Cappuccino.',
    para2:
      'Chi desidera di più sceglie Uova alla Fiorentina con uova in camicia, spinaci e salsa olandese, un Avocado Toast Mediterraneo o Pancakes con Frutti di Bosco. Spremuta fresca, la Spremuta d\'Arancia è di arance Tarocco, accompagnata dalla Limonata Siciliana con limoni di Amalfi. Questo rende la colazione all\'italiana a Berlino un inizio tranquillo sul Kudamm.',
    daylineLabel: 'Piatti della colazione all\'italiana',
    moments: [
      {
        time: 'Uova',
        title: 'Uova al mattino',
        copy: 'Uova alla Fiorentina con uova in camicia, spinaci e salsa olandese. Insieme l\'Avocado Toast Mediterraneo, appena guarnito.',
      },
      {
        time: 'Dolce',
        title: 'Dolce e caldo',
        copy: 'Pancakes con Frutti di Bosco con frutti di bosco e il nostro Cornetto, fatto in casa e sfornato fresco ogni giorno.',
      },
      {
        time: 'Caffè',
        title: 'Caffè italiano',
        copy: 'Espresso Bellucci e Cappuccino, insieme alla Spremuta d\'Arancia di arance Tarocco e alla Limonata Siciliana con limoni di Amalfi.',
      },
    ],
    mediaLabel: 'Piatti della colazione da Casa Bellucci',
    photos: {
      cornetto: {
        alt: 'Drink Spritz ai frutti di bosco sul tavolo della colazione da Casa Bellucci sul Kudamm a Berlino-Charlottenburg',
        caption: 'Spritz',
      },
      caffe: {
        alt: 'Pasticceria fresca e caffè per la colazione da Casa Bellucci sul Kudamm',
        caption: 'Caffè',
      },
      sala: {
        alt: 'Atmosfera tranquilla per la colazione nella sala interna di Casa Bellucci a Charlottenburg',
        caption: 'Sala',
      },
    },
  },

  // 3. Brunch nel weekend
  brunch: {
    eyebrow: 'Brunch nel weekend',
    h2: {
      pre: 'Brunch a ',
      em: 'Charlottenburg',
      post: '',
    },
    para1:
      'Nel weekend la colazione dura più a lungo e diventa brunch. Invece che fino alle 12:00 serviamo fino alle 14:00, con calma e senza fretta. Così rimane il tempo per un secondo Cappuccino e una lunga mattinata a Charlottenburg.',
    para2:
      'Con il bel tempo la terrazza estiva sul Kudamm apre già al mattino. Brunch all\'aperto, con Cornetto, uova e spremuta d\'arancia fresca, è un buon motivo per iniziare il weekend sul Kudamm. Per un tavolo per il brunch consigliamo una prenotazione.',
    mediaLabel: 'Brunch nel weekend da Casa Bellucci',
    photos: {
      terrasse: {
        alt: 'Brunch sulla terrazza estiva di Casa Bellucci sul Kudamm a Charlottenburg',
        caption: 'Giardino',
      },
      weekend: {
        alt: 'Frullati e una veggie bowl al brunch di Casa Bellucci sul Kudamm a Berlino-Charlottenburg',
        caption: 'Frullati',
      },
      brunch: {
        alt: 'Brunch italiano a Berlino-Charlottenburg da Casa Bellucci',
        caption: 'Bowl',
      },
    },
  },

  // 4. Orari e prenotazione
  reservation: {
    eyebrow: 'Orari e prenotazione',
    h2: {
      pre: 'Colazione sul ',
      em: 'Kudamm',
      post: '',
    },
    lede:
      'Casa Bellucci si trova al Kurfürstendamm 63 a Berlino-Charlottenburg. La colazione è servita ogni giorno dalle 09:00, nel weekend come brunch fino alle 14:00. Prenota online tramite Quandoo o per telefono.',
    addressLine1: 'Kurfürstendamm 63',
    addressLine2: '10707 Berlin · Charlottenburg',
    breakfastLabel: 'Colazione',
    breakfastTime: 'Colazione 09:00 - 12:00',
    breakfastNote: 'Brunch nel weekend fino alle 14:00',
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
      question: 'Quando si fa colazione da Casa Bellucci?',
      answer:
        'La colazione da Casa Bellucci è servita ogni giorno dalle 09:00 alle 12:00. Nel weekend la colazione dura più a lungo e diventa brunch, e allora serviamo fino alle 14:00. Casa Bellucci si trova al Kurfürstendamm 63 a Berlino-Charlottenburg.',
    },
    {
      question: 'Nel weekend c\'è il brunch a Charlottenburg?',
      answer:
        'Sì. Nel weekend la colazione diventa brunch, con orari più lunghi fino alle 14:00. Con il bel tempo la terrazza estiva sul Kudamm apre già al mattino, così il brunch a Charlottenburg può svolgersi anche all\'aperto.',
    },
    {
      question: 'Che cos\'è la colazione all\'italiana?',
      answer:
        'Una colazione all\'italiana è leggera e dolce. Invece di un grande piatto ci sono Cornetto e Caffè, cioè la versione italiana del croissant con espresso o Cappuccino. Da Casa Bellucci, Uova alla Fiorentina, Avocado Toast Mediterraneo e Pancakes con Frutti di Bosco completano l\'offerta, insieme ad arance Tarocco spremute fresche e alla Limonata Siciliana con limoni di Amalfi.',
    },
    {
      question: 'Si può prenotare per la colazione?',
      answer:
        'Sì. Puoi prenotare un tavolo per la colazione o il brunch online tramite Quandoo oppure raggiungerci per telefono al +49 162 3009925. Soprattutto nel weekend consigliamo una prenotazione.',
    },
    {
      question: 'Dove sul Kudamm si può fare colazione?',
      answer:
        'La colazione sul Kudamm si fa da Casa Bellucci al Kurfürstendamm 63, 10707 Berlino-Charlottenburg, a Charlottenburg-Wilmersdorf. Il ristorante si trova in posizione centrale sul Kudamm ed è facilmente raggiungibile con autobus e metropolitana.',
    },
  ],

  // The page-related cross-links sentence (the leading/trailing prose between links)
  related: {
    pre: 'Scopri di più sulla casa nella home page, ',
    homeLink: 'Casa Bellucci',
    afterHome: '. Di giorno il ',
    italienischLink: 'ristorante italiano a Charlottenburg',
    afterItalienisch: ' e per il drink dopo il nostro ',
    barLink: 'bar con aperitivo sul Kudamm',
    afterBar: '.',
  },
} as const;

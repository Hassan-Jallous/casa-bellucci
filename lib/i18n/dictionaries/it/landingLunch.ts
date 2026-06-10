// Page-specific copy for the Pranzo & Business Lunch landing page.
// Italian translation of the German source of truth in ../de/landingLunch.ts.
// Same structure, keys and array lengths. Shared labels (hours, info, actions,
// mapCorner) live in `common`.
export const landingLunch = {
  // 1. Hero / Intro
  hero: {
    eyebrow: 'Pranzo sul Kudamm',
    h1: {
      pre: 'Pranzo e business lunch a ',
      em: 'Charlottenburg',
      post: '',
    },
    lede:
      'Casa Bellucci è il pranzo a Berlino-Charlottenburg, al Kurfürstendamm 63. Dalle 12:00 alle 16:00 serviamo il "Pranzo", un pranzo italiano fresco con Pasta fatta a mano, pesce freschissimo e Burrata di Andria. Abbastanza veloce per la pausa pranzo, abbastanza buono per un business lunch.',
    para:
      'Chi cerca un pranzo sul Kudamm a Charlottenburg-Wilmersdorf trova qui un tavolo tranquillo nella sala oppure, col bel tempo, sulla terrazza estiva. Ideale per gli uffici intorno al Ku\'damm, per un pranzo di lavoro e per la pausa pranzo veloce e di qualità.',
    viewMenu: 'Vedi il menu di pranzo →',
    mediaLabel: 'Pranzo da Casa Bellucci',
    photos: {
      pranzo: {
        alt: 'Pranzo da Casa Bellucci a Berlino-Charlottenburg con pasta fresca per la pausa pranzo',
        caption: 'Pranzo',
      },
      schnell: {
        alt: 'Pranzo italiano veloce sul Kudamm da Casa Bellucci a Charlottenburg',
        caption: 'Pranzo',
      },
      business: {
        alt: 'Tavolo apparecchiato per un business lunch da Casa Bellucci sul Kurfürstendamm',
        caption: 'Lunch',
      },
    },
  },

  // 2. Menu di pranzo / Pranzo
  pranzo: {
    eyebrow: 'Il menu di pranzo',
    h2: {
      pre: 'Pranzo, ',
      em: 'fresco e veloce',
      post: '',
    },
    para1:
      'Il nostro menu di pranzo segue la logica del mercato. Ciò che al mattino è fresco al banco, a mezzogiorno arriva nel piatto. La Pasta fatta a mano la prepariamo a mano ogni giorno, il pesce arriva freschissimo dal mercato all\'ingrosso. Così il pranzo resta leggero, sincero e sempre in movimento.',
    para2:
      'Per iniziare la Burrata di Andria con Pomodorino confit e basilico, oppure il Vitello Tonnato. Poi Tagliatelle al Tartufo con tartufo nero d\'Umbria, Spaghetti alle Vongole o la Lasagne della Casa. Chi a pranzo ama il pesce sceglie il Branzino alla Griglia. Per finire, il Tiramisù della Casa. Un business lunch che è buono e non fa perdere tempo.',
    daylineLabel: 'Piatti del menu di pranzo',
    moments: [
      {
        time: 'Antipasti',
        title: 'Burrata di Andria',
        copy: 'Burrata di Andria con Pomodorino confit, basilico e olio, 16,00. Insieme al Vitello Tonnato con capperi di Pantelleria, 18,00.',
      },
      {
        time: 'Primi',
        title: 'Pasta fatta a mano',
        copy: 'Tagliatelle al Tartufo con tartufo nero d\'Umbria, 24,00. Spaghetti alle Vongole con vongole, 22,00. Lasagne della Casa, 19,00.',
      },
      {
        time: 'Secondi',
        title: 'Pesce freschissimo',
        copy: 'Branzino alla Griglia con limone, olio e erbe, 29,00. Per finire, Tiramisù della Casa, 12,00.',
      },
    ],
    mediaLabel: 'Piatti del menu di pranzo da Casa Bellucci',
    photos: {
      pasta: {
        alt: 'Pasta fatta a mano fresca dal menu di pranzo da Casa Bellucci sul Kudamm a Berlino-Charlottenburg',
        caption: 'Pasta',
      },
      pesce: {
        alt: 'Pesce freschissimo e antipasti per il pranzo da Casa Bellucci a Charlottenburg',
        caption: 'Pesce',
      },
      dolce: {
        alt: 'Dessert leggero per il business lunch da Casa Bellucci sul Kurfürstendamm',
        caption: 'Dolce',
      },
    },
  },

  // 3. Business lunch / Ufficio
  business: {
    eyebrow: 'Business lunch sul Kudamm',
    h2: {
      pre: 'Pranzo di lavoro a ',
      em: 'Charlottenburg',
      post: '',
    },
    para1:
      'Intorno al Kurfürstendamm ci sono uffici, studi legali e agenzie. Per un pranzo di lavoro a mezzogiorno Casa Bellucci è vicina, tranquilla e affidabile. La sala è una cornice piacevole per una conversazione, il ritmo si adatta alla pausa pranzo e la cucina resta al livello della sera.',
    para2:
      'Un business lunch a Charlottenburg non deve durare in eterno. Portiamo antipasti e primi al tavolo con prontezza, così che un pranzo a Charlottenburg funzioni bene anche in un\'ora. Per un orario fisso o un gruppo più grande consigliamo una prenotazione tramite Quandoo o per telefono.',
    mediaLabel: 'Business lunch da Casa Bellucci',
    photos: {
      saal: {
        alt: 'Sala tranquilla per un business lunch da Casa Bellucci sul Kudamm a Charlottenburg',
        caption: 'Sala',
      },
      terrasse: {
        alt: 'Pranzo sulla terrazza estiva di Casa Bellucci sul Kudamm a Berlino-Charlottenburg',
        caption: 'Terrazza',
      },
      aperitivo: {
        alt: 'Spritz a pranzo sulla terrazza di Casa Bellucci sul Kurfürstendamm',
        caption: 'Pranzo',
      },
    },
  },

  // 4. Orari e prenotazione
  reservation: {
    eyebrow: 'Orari e prenotazione',
    h2: {
      pre: 'Pranzo sul ',
      em: 'Kudamm',
      post: '',
    },
    lede:
      'Casa Bellucci si trova al Kurfürstendamm 63 a Berlino-Charlottenburg. Il pranzo è servito ogni giorno dalle 12:00 alle 16:00, all\'interno o sulla terrazza. Prenota online tramite Quandoo o per telefono.',
    addressLine1: 'Kurfürstendamm 63',
    addressLine2: '10707 Berlin · Charlottenburg',
    lunchLabel: 'Pranzo',
    lunchTime: 'Pranzo 12:00 - 16:00',
    lunchNote: 'Business lunch ogni giorno',
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
      question: 'C\'è un pranzo a Charlottenburg?',
      answer:
        'Sì. Casa Bellucci serve il pranzo ogni giorno dalle 12:00 alle 16:00 a Berlino-Charlottenburg, al Kurfürstendamm 63. "Pranzo" è il nome del nostro menu di pranzo con Pasta fatta a mano, pesce freschissimo e antipasti come la Burrata di Andria. Si siede all\'interno nella sala oppure, col bel tempo, sulla terrazza estiva sul Kudamm.',
    },
    {
      question: 'Casa Bellucci è adatta per un business lunch?',
      answer:
        'Sì. Casa Bellucci si trova in posizione centrale sul Kurfürstendamm ed è adatta per un business lunch a Charlottenburg. La sala è abbastanza tranquilla per un pranzo di lavoro, la cucina serve con prontezza e il menu spazia dai primi leggeri al Branzino alla griglia. Per un orario fisso o un gruppo più grande consigliamo una prenotazione.',
    },
    {
      question: 'Quanto è veloce il pranzo?',
      answer:
        'Durante la pausa pranzo portiamo antipasti e primi al tavolo con prontezza, così che un pranzo a Charlottenburg funzioni bene in un\'ora. Se hai poco tempo, basta dircelo al momento dell\'ordine e adattiamo il ritmo. La Pasta fatta a mano e il pesce freschissimo a mezzogiorno si preparano comunque in fretta.',
    },
    {
      question: 'Quanto costa il pranzo da Casa Bellucci?',
      answer:
        'A pranzo ordini à la carte dal menu Pranzo. Gli antipasti come la Burrata di Andria sono intorno a 16,00 euro, un primo come gli Spaghetti alle Vongole intorno a 22,00 euro, il Branzino alla Griglia intorno a 29,00 euro. Così componi il tuo pranzo sul Kudamm in base alla fame e al tempo che hai.',
    },
    {
      question: 'Si può pranzare in terrazza?',
      answer:
        'Sì. Col bel tempo la terrazza estiva sul Kudamm è aperta anche a pranzo. Il pranzo in terrazza a Charlottenburg è un posto tranquillo per la pausa pranzo o per un business lunch rilassato all\'aria aperta. Nelle giornate di sole consigliamo una prenotazione, perché la terrazza è molto richiesta.',
    },
    {
      question: 'Bisogna prenotare per il pranzo?',
      answer:
        'Spontaneamente a mezzogiorno di solito c\'è un tavolo libero. Per un orario fisso, un business lunch con i colleghi o un tavolo in terrazza consigliamo una prenotazione. Puoi prenotare online tramite Quandoo o per telefono al +49 162 3009925. Casa Bellucci si trova al Kurfürstendamm 63 a Berlino-Charlottenburg.',
    },
  ],

  // The page-related cross-links sentence (the leading/trailing prose between links)
  related: {
    pre: 'A pranzo anche all\'aperto sulla ',
    terrasseLink: 'terrazza a Charlottenburg',
    afterTerrasse: '. La sera diventa il ',
    italienischLink: 'ristorante italiano sul Kudamm',
    afterItalienisch: ', e la giornata inizia con ',
    fruehstueckLink: 'colazione e brunch sul Kudamm',
    afterFruehstueck: '.',
  },
} as const;

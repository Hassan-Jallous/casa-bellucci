// Page-specific copy for the Events landing page (feste aziendali, feste di
// Natale, compleanni, feste private). Italian translation of the German source
// of truth in ../de/landingEvents.ts. Same structure, keys and array lengths.
// Shared labels (hours, info, actions, mapCorner) live in `common`.
export const landingEvents = {
  // 1. Hero / Intro
  hero: {
    eyebrow: 'Festeggiare sul Kudamm',
    h1: {
      pre: 'Feste aziendali, eventi e feste private a ',
      em: 'Berlino',
      post: '',
    },
    lede:
      'Casa Bellucci è il posto giusto per feste aziendali, eventi e feste private a Berlino-Charlottenburg, al Kurfürstendamm 63. Dalla cena di lavoro alla festa di Natale fino al compleanno con gli amici, qui ogni occasione si festeggia all\'italiana, con buon cibo, vino e un\'atmosfera calda.',
    para:
      'Nel cuore della City West, a un passo dal Kurfürstendamm, Casa Bellucci riunisce ristorante, bar e terrazza estiva sotto lo stesso tetto. Così una festa a Charlottenburg si organizza in modo flessibile, che sia una piccola cena in famiglia o una festa aziendale con i colleghi.',
    viewMenu: 'Vedi il menù →',
    mediaLabel: 'Feste ed eventi a Casa Bellucci',
    photos: {
      abend: {
        alt: 'Terrazza estiva di Casa Bellucci sul Kudamm apparecchiata a festa la sera per una celebrazione a Berlino-Charlottenburg',
        caption: 'Sera',
      },
      sala: {
        alt: 'Sala di Casa Bellucci a Charlottenburg apparecchiata per una festa aziendale a Berlino',
        caption: 'Sala',
      },
      brindisi: {
        alt: 'Brindisi con cocktail al bar di Casa Bellucci durante una festa privata sul Kudamm',
        caption: 'Brindisi',
      },
    },
  },

  // 2. Occasioni
  occasions: {
    eyebrow: 'Occasioni',
    h2: {
      pre: 'Ogni occasione, ',
      em: 'all\'italiana',
      post: '',
    },
    para1:
      'Una bella festa non richiede grandi sforzi, ma il posto giusto. Da Casa Bellucci festeggiate la festa aziendale, la festa di Natale, il compleanno e le feste private a un tavolo o in compagnia più numerosa. Apparecchiamo la tavola, vi consigliamo sul menù e ci occupiamo dei vostri ospiti durante la serata, così non dovete fare altro che festeggiare.',
    para2:
      'Invitate i partner di lavoro a una cena, la squadra a una festa estiva o di Natale, amici e familiari a un compleanno o a un anniversario importante. Casa Bellucci si trova in posizione centrale a Charlottenburg, ben raggiungibile con autobus e metropolitana, quindi un punto d\'incontro adatto per ospiti da tutta Berlino. I dettagli della vostra festa li discutiamo volentieri di persona, tutto il resto su richiesta.',
    daylineLabel: 'Occasioni per una festa a Casa Bellucci',
    moments: [
      {
        time: 'Lavoro',
        title: 'Festa aziendale',
        copy: 'Una cena di lavoro, una serata di squadra o una festa estiva. Una festa aziendale a Berlino trova da Casa Bellucci sul Kudamm una cornice tranquilla e rappresentativa.',
      },
      {
        time: 'Natale',
        title: 'Festa di Natale',
        copy: 'Una festa di Natale nel ristorante, con luce calda, cucina italiana e spazio per tutta la squadra. La stagione invernale conviene pianificarla per tempo.',
      },
      {
        time: 'Festa',
        title: 'Compleanno e feste private',
        copy: 'Un compleanno, un anniversario, un battesimo o una cena in piccola compagnia. Le feste private da Casa Bellucci si festeggiano con calma e senza fretta.',
      },
    ],
    mediaLabel: 'Occasioni e feste a Casa Bellucci',
    photos: {
      tavola: {
        alt: 'Lunga tavola apparecchiata nel ristorante di Casa Bellucci per un compleanno a Berlino-Charlottenburg',
        caption: 'Tavola',
      },
      cocktail: {
        alt: 'Cocktail al bar di Casa Bellucci sul Kudamm per iniziare una festa aziendale a Berlino',
        caption: 'Aperitivo',
      },
      terrazza: {
        alt: 'Terrazza estiva di Casa Bellucci sul Kurfürstendamm la sera per una festa privata',
        caption: 'Terrazza',
      },
    },
  },

  // 3. Spazi
  spaces: {
    eyebrow: 'Spazi',
    h2: {
      pre: 'Terrazza, bar e ',
      em: 'ristorante',
      post: '',
    },
    para1:
      'Per una festa, Casa Bellucci offre più atmosfere sotto lo stesso tetto. La terrazza estiva sul Kurfürstendamm è adatta dalla primavera all\'autunno per una festa all\'aperto, con ulivi, luci e il viavai del Kudamm sullo sfondo. All\'interno, il ristorante con legno caldo e luce soffusa crea la cornice per una cena di festa.',
    para2:
      'Il bar è il naturale inizio di ogni festa. Qui accogliamo i vostri ospiti con un aperitivo, uno spritz o un bicchiere di vino, prima di passare a tavola. Se la festa comincia in terrazza, nel ristorante o con un ricevimento al bar lo decidiamo insieme, a seconda dell\'occasione, della stagione e del tempo. Come location per eventi a Charlottenburg, Casa Bellucci resta flessibile.',
    mediaLabel: 'Spazi per le feste a Casa Bellucci',
    photos: {
      terrasse: {
        alt: 'Terrazza estiva illuminata di Casa Bellucci sul Kudamm come location per eventi a Charlottenburg la sera',
        caption: 'Terrazza',
      },
      bar: {
        alt: 'Bar di Casa Bellucci sul Kurfürstendamm come punto d\'incontro per l\'aperitivo prima di una festa',
        caption: 'Bar',
      },
      saal: {
        alt: 'Sala dalla luce calda di Casa Bellucci a Berlino-Charlottenburg per una festa di Natale',
        caption: 'Ristorante',
      },
    },
  },

  // 4. Menù e musica
  menu: {
    eyebrow: 'Menù e musica',
    h2: {
      pre: 'Menù flessibile, ',
      em: 'à la carte',
      post: '',
    },
    para1:
      'Con il cibo restate flessibili. I vostri ospiti scelgono à la carte dal menù italiano, oppure componiamo per la vostra festa un menù su misura, adatto all\'occasione e al gruppo. Dagli antipasti alla pasta fatta in casa fino ai dolci e all\'espresso, la cucina di Casa Bellucci lavora con ingredienti freschi e una mano mediterranea.',
    para2:
      'Teniamo conto delle richieste vegetariane e vegane così come di una selezione di vini italiani in abbinamento. Nel fine settimana un DJ dal vivo crea l\'atmosfera, così la cena può diventare una lunga serata. Cosa si addice alla vostra festa aziendale o privata lo concordiamo prima. Proposte concrete e tutti i dettagli su richiesta.',
    crossPre: 'Di più sulla cucina lo racconta il nostro ',
    crossLinkItalienisch: 'ristorante italiano a Charlottenburg',
    crossPost: ', l\'inizio al bar si addice all\'aperitivo sul Kudamm.',
    mediaLabel: 'Menù e musica a Casa Bellucci',
    photos: {
      piatti: {
        alt: 'Piatti italiani in tavola durante una festa nel ristorante Casa Bellucci sul Kudamm',
        caption: 'Piatti',
      },
      vino: {
        alt: 'Cocktail e drink al bar di Casa Bellucci durante una festa aziendale a Berlino-Charlottenburg',
        caption: 'Drink',
      },
      festa: {
        alt: 'Terrazza estiva di Casa Bellucci sul Kudamm la sera in atmosfera di festa',
        caption: 'Festa',
      },
    },
  },

  // 5. Contatto / nota richiesta
  contact: {
    eyebrow: 'Posizione e richiesta',
    h2: {
      pre: 'Festeggiare a ',
      em: 'Charlottenburg',
      post: '',
    },
    lede:
      'Casa Bellucci si trova al Kurfürstendamm 63 a Berlino-Charlottenburg, nel cuore della City West. Per una festa aziendale, una festa di Natale o una festa privata, inviate qui sotto una richiesta senza impegno, oppure contattateci per telefono.',
    addressLine1: 'Kurfürstendamm 63',
    addressLine2: '10707 Berlino · Charlottenburg',
    eventsLabel: 'Feste ed eventi',
    eventsLine1: 'Festa aziendale, festa di Natale, compleanno',
    eventsLine2: 'Terrazza, bar e ristorante, dettagli su richiesta',
    mapLabel: 'Posizione di Casa Bellucci sulla mappa',
  },

  // 6. FAQ
  faqEyebrow: 'Domande frequenti',
  faqHeading: {
    pre: 'Domande ',
    em: 'frequenti',
    post: '',
  },
  faqs: [
    {
      question: 'Si può organizzare una festa aziendale da Casa Bellucci?',
      answer:
        'Sì. Casa Bellucci al Kurfürstendamm 63 a Berlino-Charlottenburg è adatta alle feste aziendali, dalla cena di lavoro alla serata di squadra fino alla festa estiva. Ristorante, bar e terrazza estiva sono disponibili a seconda dell\'occasione e della stagione. Inviate una richiesta senza impegno tramite il modulo, i dettagli li discutiamo di persona.',
    },
    {
      question: 'Il ristorante è adatto a una festa di Natale a Berlino?',
      answer:
        'Molto. Il ristorante dalla luce calda e dalla cucina italiana offre una cornice adatta a una festa di Natale a Berlino. La stagione invernale è richiesta, perciò conviene pianificare la festa di Natale per tempo. Inviateci la data desiderata e il numero indicativo di ospiti tramite il modulo di richiesta.',
    },
    {
      question: 'Si può prenotare la terrazza per una festa?',
      answer:
        'La terrazza estiva sul Kudamm si può usare per una festa dalla primavera all\'autunno. Se si addice di più la terrazza, il ristorante o un ricevimento al bar lo decidiamo insieme, a seconda del numero di ospiti, della stagione e del tempo. Dettagli e disponibilità su richiesta.',
    },
    {
      question: 'C\'è un menù fisso o à la carte?',
      answer:
        'Entrambi sono possibili. I vostri ospiti possono scegliere à la carte dal menù italiano, oppure componiamo un menù su misura per la festa. Teniamo conto delle richieste vegetariane e vegane e di una selezione di vini in abbinamento. Quale soluzione si addice alla vostra festa lo concordiamo prima.',
    },
    {
      question: 'Come invio una richiesta per una festa?',
      answer:
        'Il modo più semplice è il modulo di richiesta in questa pagina. Indicate nome, contatto, data desiderata, numero indicativo di ospiti e l\'occasione, e vi rispondiamo con proposte concrete. In alternativa potete contattarci per telefono al +49 162 3009925.',
    },
    {
      question: 'Dove si trova Casa Bellucci a Berlino?',
      answer:
        'Casa Bellucci si trova al Kurfürstendamm 63, 10707 Berlino, nel quartiere di Charlottenburg, all\'interno di Charlottenburg-Wilmersdorf. La posizione nella City West sul Kudamm è centrale e ben raggiungibile con autobus e metropolitana, un punto d\'incontro adatto per ospiti da tutta Berlino.',
    },
  ],

  // Modulo di richiesta
  form: {
    eyebrow: 'Richiesta',
    heading: {
      pre: 'Richiedi una ',
      em: 'festa',
      post: '',
    },
    intro:
      'Raccontateci brevemente la vostra occasione, vi rispondiamo con delle proposte. La richiesta è senza impegno.',
    labels: {
      name: 'Nome',
      email: 'E-mail',
      phone: 'Telefono',
      date: 'Data desiderata',
      guests: 'Numero di ospiti',
      occasion: 'Occasione',
      message: 'Messaggio',
    },
    placeholders: {
      name: 'Il vostro nome',
      email: 'nome@esempio.it',
      phone: 'Facoltativo',
      guests: 'es. 12',
      message: 'Di cosa si tratta? Occasione, desideri, domande.',
    },
    optional: 'facoltativo',
    occasionOptions: {
      placeholder: 'Scegliere',
      firmenfeier: 'Festa aziendale',
      geburtstag: 'Compleanno',
      weihnachtsfeier: 'Festa di Natale',
      private: 'Festa privata',
      sonstiges: 'Altro',
    },
    submit: 'Invia richiesta',
    submitting: 'Invio in corso…',
    success: {
      title: 'Grazie per la vostra richiesta',
      body: 'Abbiamo ricevuto la vostra richiesta e vi risponderemo a breve. Per domande urgenti potete contattarci per telefono al +49 162 3009925.',
    },
    error:
      'Purtroppo non ha funzionato. Riprovate oppure chiamateci al +49 162 3009925.',
    validation: {
      required: 'Compilate i campi obbligatori.',
      email: 'Inserite un indirizzo e-mail valido.',
    },
  },

  // Link correlati
  related: {
    pre: 'Di più sulla ',
    terrasseLink: 'terrazza estiva sul Kudamm',
    afterTerrasse: ', l\'inizio al ',
    barLink: 'bar con aperitivo',
    afterBar: ' e, di giorno, il ',
    italienischLink: 'ristorante italiano a Charlottenburg',
    afterItalienisch: '.',
  },
} as const;

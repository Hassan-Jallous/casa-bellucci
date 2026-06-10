// Page-specific copy for the Italienisch landing
// (/italienisches-restaurant-berlin-charlottenburg/).
// Italian translation of the German source of truth in ../de/landingItalienisch.ts.
// Same structure, keys and array lengths. Shared, repeated labels live in `common`.
export const landingItalienisch = {
  // 1. Hero / Intro
  hero: {
    eyebrow: 'Italiano sul Kudamm',
    h1Pre: 'Ristorante italiano a ',
    h1Em: 'Berlin-Charlottenburg',
    lede:
      'Casa Bellucci al Kurfürstendamm 63 è un ristorante italiano per tutto il giorno. Colazione, pranzo in terrazza, cena e bar, nel cuore della City West. Dal primo espresso fino al tardo aperitivo, in un unico luogo.',
    viewMenu: 'Vedi il menu →',
    mediaLabel: 'Colazione, pranzo e sera da Casa Bellucci sul Kudamm',
    morningAlt: 'Colazione italiana da Casa Bellucci sul Kudamm a Berlin-Charlottenburg',
    morningCaption: 'Colazione',
    middayAlt: 'Pasta fatta a mano per il pranzo nel ristorante italiano Casa Bellucci',
    middayCaption: 'Pranzo',
    eveningAlt: 'Tavolo apparecchiato in terrazza con lampada da tavolo dorata accesa nella calda luce serale del ristorante italiano Casa Bellucci sul Kudamm a Berlin-Charlottenburg',
    eveningCaption: 'Sera',
  },

  // 2. Lage und Konzept
  location: {
    eyebrow: 'Posizione e concetto',
    h2Pre: 'Nel cuore del ',
    h2Em: 'Kudamm',
    h2Post: ', a Charlottenburg',
    p1:
      'Il nostro ristorante italiano a Berlin-Charlottenburg si trova al Kurfürstendamm 63, 10707 Berlin, nel cuore della City West. Tra lo shopping sul Kudamm e un posto tranquillo in terrazza, Casa Bellucci è un indirizzo per tutto il giorno, dalla colazione fino a tarda sera.',
    p2:
      'Il concetto all-day unisce quattro momenti sotto lo stesso tetto. Colazione e brunch al mattino, pranzo sulla terrazza estiva, cena alla sera e in più un bar dedicato per l\'aperitivo e un drink dopo. Che si tratti di un pranzo di lavoro a mezzogiorno, di una cena rilassata in famiglia o di un calice di vino da soli al bancone, qui ogni occasione trova posto sul Kudamm.',
    photoAlt: 'Interno di Casa Bellucci, un italiano nella City West sul Kudamm a Charlottenburg',
    captionSpan: 'Charlottenburg',
    captionStrong: 'Ambiente',
  },

  // 3. Küche
  kitchen: {
    eyebrow: 'Dalla cucina',
    h2Pre: 'Cucina italiana, ',
    h2Em: 'italiana e mediterranea',
    dishes: [
      {
        namePre: 'Pasta fatta a ',
        nameEm: 'mano',
        namePost: '',
        desc:
          'La pasta fresca la facciamo a mano ogni giorno. In abbinamento, pesce freschissimo dal mercato, interpretato in chiave italiana e mediterranea.',
      },
      {
        namePre: 'Tagliatelle al ',
        nameEm: 'Tartufo',
        namePost: '',
        desc: 'Tagliatelle fresche al tartufo, un classico del menu.',
      },
      {
        namePre: 'Spaghetti alle ',
        nameEm: 'Vongole',
        namePost: '',
        desc: 'Vongole, aglio, prezzemolo e una spruzzata di vino bianco.',
      },
      {
        namePre: 'Branzino alla ',
        nameEm: 'Griglia',
        namePost: '',
        desc: 'Branzino alla griglia, preparato in modo semplice e perfetto.',
      },
      {
        namePre: 'Burrata di ',
        nameEm: 'Andria',
        namePost: '',
        desc: 'Burrata cremosa come inizio leggero del pasto italiano.',
      },
      {
        namePre: 'Vitello ',
        nameEm: 'Tonnato',
        namePost: ' e Tiramisù della Casa',
        desc: 'Vitello Tonnato come antipasto e, per concludere, il nostro tiramisù fatto in casa.',
      },
    ],
    toMenu: 'Vedi il menu',
    photoAlt: 'Piatto italiano della cucina italiana da Casa Bellucci sul Kudamm',
    captionSpan: 'Fatto a mano',
    captionStrong: 'Pasta con Caviale',
  },

  // 3b. Vino e Italia
  wine: {
    eyebrow: 'Carta dei vini',
    headingPre: 'Vini da tutta ',
    headingEm: 'Italia',
    headingPost: '',
    lede: 'La nostra carta dei vini punta sul Sud Italia, circa il 65 percento dei vini viene da lì. Curata dal sommelier Marco, al bicchiere e con rotazione quotidiana.',
    pdfLink: 'Vedi la carta dei vini',
    regions: [
      {
        label: 'Sicilia',
        name: 'Rossi e vini vulcanici',
        copy: 'Mineralità vulcanica dall\'Etna, uve rosse intense e dolci classici. L\'isola definisce il carattere della carta.',
        list: [
          { name: 'Etna Bianco DOC, Planeta', v: '2022 · Sicilia' },
          { name: "Nero d'Avola, Donnafugata", v: '2021 · Sicilia' },
          { name: 'Etna Rosso, Terre Nere', v: '2021 · Sicilia' },
        ],
      },
      {
        label: 'Dolci & Liquorosi',
        name: 'Vini dolci per finire',
        copy: 'Vini dolci e liquorosi, come arrivano dal Sud Italia. Dal Passito dell\'isola di Pantelleria fino al Marsala dell\'ovest.',
        list: [
          { name: 'Passito di Pantelleria, Ben Ryé', v: 'Donnafugata · vino dolce' },
          { name: 'Marsala Superiore, Florio', v: 'Sicilia' },
          { name: 'Limonata Siciliana', v: 'limoni di Amalfi, analcolica' },
        ],
      },
      {
        label: 'Bollicine & Norditalia',
        name: 'Bollicine e vini bianchi',
        copy: 'La carta arriva fino al Nord Italia. Spumanti e vini bianchi freschi completano la base del Sud Italia.',
        list: [
          { name: 'Franciacorta Brut', v: "Ca' del Bosco" },
          { name: 'Falanghina del Sannio', v: 'Mustilli · 2022, Campania' },
          { name: 'Vermentino di Sardegna', v: 'Argiolas · 2023' },
        ],
      },
    ],
  },

  // 4. Atmosphäre und Angebot
  atmosphere: {
    photoAlt: 'Atmosfera accogliente e raffinata nel ristorante italiano Casa Bellucci a Berlin-Charlottenburg',
    captionSpan: 'Sul Kudamm',
    captionStrong: 'Terrazza',
    eyebrow: 'Atmosfera e offerta',
    h2Pre: 'Raffinato e ',
    h2Em: 'accogliente',
    h2Post: ' allo stesso tempo',
    p1:
      'Casa Bellucci è raffinato e accogliente allo stesso tempo, abbastanza casual per la quotidianità e abbastanza bello per la serata speciale. Sia all\'interno sia sulla terrazza estiva sul Kudamm siedono gruppi, famiglie e ospiti che passano da soli per un aperitivo.',
    p2:
      'Il bar dedicato è il punto d\'incontro per aperitivo e drink, dal mattino presto fino a tardi. Nel menu trovano spazio opzioni vegetariane e vegane. Il ristorante italiano è accessibile in sedia a rotelle e i cani sono i benvenuti, ideale per gruppi e per un pasto rilassato a Charlottenburg.',
    p3:
      'La sera la casa si veste di un\'atmosfera tranquilla e raffinata con luce di candela. Si addice a una cena a due così come a compleanni, anniversari e occasioni speciali.',
    viewTerrace: 'Vedi la terrazza →',
  },

  // 5. Galerie
  gallery: {
    eyebrow: 'Galleria sul Kudamm',
    h2Pre: 'Uno sguardo al ',
    h2Em: 'ristorante italiano',
    lede:
      'Impressioni dal nostro ristorante italiano sul Kurfürstendamm a Berlin-Charlottenburg, dalla Sala alla terrazza fino al bar.',
    toGallery: 'Alla galleria completa →',
  },

  // 6. Öffnungszeiten und Anfahrt
  directions: {
    eyebrow: 'Orari e come arrivare',
    h2Pre: 'Una visita sul ',
    h2Em: 'Kudamm',
    lede:
      'L\'italiano nel cuore della City West. Prenota online o per telefono, i walk-in sono particolarmente benvenuti al bar.',
    addressLine1: 'Kurfürstendamm 63',
    addressLine2: '10707 Berlin · Charlottenburg',
    mapLabel: 'Apri sulla mappa',
  },

  // 7. FAQ
  faqHeadingEyebrow: 'Domande frequenti',
  faqHeadingPre: 'Domande ',
  faqHeadingEm: 'frequenti',
  faqs: [
    {
      question: 'Dove si trova Casa Bellucci a Charlottenburg?',
      answer:
        'Casa Bellucci si trova al Kurfürstendamm 63, 10707 Berlin-Charlottenburg, nel cuore della City West proprio sul Kudamm. Il ristorante italiano è facilmente raggiungibile a piedi, in autobus e in U-Bahn ed è accessibile in sedia a rotelle.',
    },
    {
      question: 'Il ristorante italiano sul Kudamm ha una terrazza?',
      answer:
        'Sì. Casa Bellucci ha una terrazza estiva proprio sul Kudamm, aperta quando il tempo è bello. Lì si possono gustare colazione, pranzo e, alla sera, l\'aperitivo. All\'interno vi attende inoltre un bar dedicato.',
    },
    {
      question: 'C\'è la colazione da Casa Bellucci?',
      answer:
        'Sì. Come ristorante all-day serviamo la colazione dalle 09:00, oltre a pranzo, cena e aperitivo. Espresso, croissant e piatti leggeri al mattino, pasta e pesce durante la giornata.',
    },
    {
      question: 'Si può prenotare online da Casa Bellucci?',
      answer:
        'Sì. Puoi prenotare comodamente un tavolo online tramite il nostro modulo di prenotazione oppure contattarci per telefono al +49 162 3009925, ad esempio per gruppi più numerosi o richieste dell\'ultimo minuto.',
    },
    {
      question: 'Quali vini ci sono da Casa Bellucci?',
      answer:
        'La carta dei vini è curata dal Sommelier Marco e mette al centro il Sud Italia. Tra questi figurano, tra gli altri, Etna Bianco di Planeta, Nero d\'Avola, Etna Rosso, Passito di Pantelleria e Marsala. Circa il 65 percento della selezione proviene dal Sud Italia, completata da vini dal resto d\'Italia.',
    },
    {
      question: 'Casa Bellucci è adatta a una cena romantica o a occasioni speciali?',
      answer:
        'Sì. La sera, Casa Bellucci ha un\'atmosfera tranquilla e raffinata con luce di candela. È adatta a una cena romantica a due, a un appuntamento a Berlino e a occasioni speciali come compleanni o anniversari.',
    },
    {
      question: 'Quando è aperto Casa Bellucci?',
      answer:
        'Casa Bellucci è aperto dal lunedì al sabato dalle 09:00 alle 00:00 e la domenica dalle 09:00 alle 18:00.',
    },
  ],

  // Related links footer (subpage-related)
  related: {
    pre: 'Scopri di più sul locale nella homepage,',
    homeLink: 'Casa Bellucci',
    mid2: '. Al mattino la',
    fruehstueckLink: 'colazione e il brunch sul Kudamm',
    mid3: 'e per l\'aperitivo il nostro',
    barLink: 'bar sul Kudamm',
    post: '.',
  },
} as const;

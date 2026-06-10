// Page-specific copy for the Italienisch landing
// (/italienisches-restaurant-berlin-charlottenburg/).
// English translation of the German source of truth in ../de/landingItalienisch.ts.
// Same structure, keys and array lengths. Shared, repeated labels live in `common`.
export const landingItalienisch = {
  // 1. Hero / Intro
  hero: {
    eyebrow: 'Italian on the Kudamm',
    h1Pre: 'Italian restaurant in ',
    h1Em: 'Berlin-Charlottenburg',
    lede:
      'Casa Bellucci at Kurfürstendamm 63 is an all-day Italian restaurant. Breakfast, lunch on the terrace, dinner and bar, right in the heart of City West. From the first espresso to a late aperitivo, all in one place.',
    viewMenu: 'View menu →',
    mediaLabel: 'Breakfast, lunch and evening at Casa Bellucci on the Kudamm',
    morningAlt: 'Italian breakfast at Casa Bellucci on the Kudamm in Berlin-Charlottenburg',
    morningCaption: 'Breakfast',
    middayAlt: 'Handmade pasta for lunch at the Italian restaurant Casa Bellucci',
    middayCaption: 'Lunch',
    eveningAlt: 'Laid terrace table with a lit golden table lamp in warm evening light at the Italian restaurant Casa Bellucci on the Kudamm in Berlin-Charlottenburg',
    eveningCaption: 'Evening',
  },

  // 2. Lage und Konzept
  location: {
    eyebrow: 'Location and concept',
    h2Pre: 'Right on the ',
    h2Em: 'Kudamm',
    h2Post: ', in Charlottenburg',
    p1:
      'Our Italian restaurant in Berlin-Charlottenburg sits at Kurfürstendamm 63, 10707 Berlin, in the heart of City West. Between shopping on the Kudamm and a quiet spot on the terrace, Casa Bellucci is an address for the whole day, from breakfast to late evening.',
    p2:
      'The all-day concept brings together four moments under one roof. Breakfast and brunch in the morning, lunch on the summer terrace, dinner in the evening, plus a dedicated bar for aperitivo and a drink afterwards. Whether a business lunch at midday, a relaxed meal with family or a glass of wine solo at the bar, every occasion fits here on the Kudamm.',
    photoAlt: 'Interior of Casa Bellucci, an Italian restaurant in City West on the Kudamm in Charlottenburg',
    captionSpan: 'Charlottenburg',
    captionStrong: 'Ambiance',
  },

  // 3. Küche
  kitchen: {
    eyebrow: 'From the kitchen',
    h2Pre: 'Italian cuisine, ',
    h2Em: 'Italian & Mediterranean',
    dishes: [
      {
        namePre: 'Pasta fatta a ',
        nameEm: 'mano',
        namePost: '',
        desc:
          'We make fresh pasta by hand every day. Served with fresh fish from the market, interpreted in an Italian and Mediterranean style.',
      },
      {
        namePre: 'Tagliatelle al ',
        nameEm: 'Tartufo',
        namePost: '',
        desc: 'Fresh ribbon pasta with truffle, a classic on the menu.',
      },
      {
        namePre: 'Spaghetti alle ',
        nameEm: 'Vongole',
        namePost: '',
        desc: 'Clams, garlic, parsley and a splash of white wine.',
      },
      {
        namePre: 'Branzino alla ',
        nameEm: 'Griglia',
        namePost: '',
        desc: 'Grilled sea bass, prepared simply and right on point.',
      },
      {
        namePre: 'Burrata di ',
        nameEm: 'Andria',
        namePost: '',
        desc: 'Creamy burrata as a light start to the Italian meal.',
      },
      {
        namePre: 'Vitello ',
        nameEm: 'Tonnato',
        namePost: ' and Tiramisù della Casa',
        desc: 'Vitello Tonnato as a starter and, to finish, our homemade tiramisù.',
      },
    ],
    toMenu: 'View menu',
    photoAlt: 'Italian dish from the Italian kitchen at Casa Bellucci on the Kudamm',
    captionSpan: 'Handmade',
    captionStrong: 'Pasta with caviar',
  },

  // 3b. Wine and Italy
  wine: {
    eyebrow: 'Wine list',
    headingPre: 'Wines from all of ',
    headingEm: 'Italy',
    headingPost: '',
    lede: 'Our wine list focuses on southern Italy, around 65 percent of the wines come from there. Curated by sommelier Marco, by the glass and changing daily.',
    pdfLink: 'View wine list',
    regions: [
      {
        label: 'Sicilia',
        name: 'Reds and volcanic wines',
        copy: 'Volcanic minerality from Etna, powerful red grapes and sweet classics. The island defines the character of the list.',
        list: [
          { name: 'Etna Bianco DOC, Planeta', v: '2022 · Sicilia' },
          { name: "Nero d'Avola, Donnafugata", v: '2021 · Sicilia' },
          { name: 'Etna Rosso, Terre Nere', v: '2021 · Sicilia' },
        ],
      },
      {
        label: 'Dolci & Liquorosi',
        name: 'Sweet wines to finish',
        copy: 'Sweet wines and liquorosi, as they come from the south of Italy. From the Passito of the island of Pantelleria to the Marsala from the west.',
        list: [
          { name: 'Passito di Pantelleria, Ben Ryé', v: 'Donnafugata · sweet wine' },
          { name: 'Marsala Superiore, Florio', v: 'Sicilia' },
          { name: 'Limonata Siciliana', v: 'Amalfi lemons, non-alcoholic' },
        ],
      },
      {
        label: 'Bollicine & Norditalia',
        name: 'Sparkling and white wines',
        copy: 'The list reaches up into the north of Italy. Sparkling wines and fresh whites complement the southern Italian base.',
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
    photoAlt: 'Cosy and refined atmosphere at the Italian restaurant Casa Bellucci in Berlin-Charlottenburg',
    captionSpan: 'On the Kudamm',
    captionStrong: 'Terrace',
    eyebrow: 'Atmosphere and offering',
    h2Pre: 'Refined and ',
    h2Em: 'cosy',
    h2Post: ' at once',
    p1:
      'Casa Bellucci is refined yet cosy, casual enough for everyday life and elegant enough for a special evening. Inside as well as on the summer terrace on the Kudamm, you will find groups, families and guests who drop by solo for an aperitivo.',
    p2:
      'The dedicated bar is the meeting point for aperitivo and drinks, from early until late. The menu includes vegetarian and vegan options. The Italian restaurant is wheelchair accessible and dog friendly, well suited for groups and a relaxed meal in Charlottenburg.',
    p3:
      'In the evening, the house carries a calm, refined atmosphere with candlelight. It is a fit for a dinner for two as well as for birthdays, anniversaries and special occasions.',
    viewTerrace: 'View terrace →',
  },

  // 5. Galerie
  gallery: {
    eyebrow: 'Gallery on the Kudamm',
    h2Pre: 'Glimpses of the ',
    h2Em: 'Italian restaurant',
    lede:
      'Impressions from our Italian restaurant on the Kurfürstendamm in Berlin-Charlottenburg, from the Sala and the terrace to the bar.',
    toGallery: 'To the full gallery →',
  },

  // 6. Öffnungszeiten und Anfahrt
  directions: {
    eyebrow: 'Opening hours and directions',
    h2Pre: 'A visit on the ',
    h2Em: 'Kudamm',
    lede:
      'The Italian restaurant right in the heart of City West. Reserve online or by phone, walk-ins are especially welcome at the bar.',
    addressLine1: 'Kurfürstendamm 63',
    addressLine2: '10707 Berlin · Charlottenburg',
    mapLabel: 'Open in maps',
  },

  // 7. FAQ
  faqHeadingEyebrow: 'Frequently asked questions',
  faqHeadingPre: 'Frequently asked ',
  faqHeadingEm: 'questions',
  faqs: [
    {
      question: 'Where is Casa Bellucci in Charlottenburg?',
      answer:
        'Casa Bellucci is located at Kurfürstendamm 63, 10707 Berlin-Charlottenburg, in the heart of City West right on the Kudamm. The Italian restaurant is easy to reach on foot, by bus and by U-Bahn, and is wheelchair accessible.',
    },
    {
      question: 'Does the Italian restaurant on the Kudamm have a terrace?',
      answer:
        'Yes. Casa Bellucci has a summer terrace right on the Kudamm that is open in good weather. There you can enjoy breakfast, lunch and an aperitivo in the evening. Inside, a dedicated bar awaits you as well.',
    },
    {
      question: 'Is there breakfast at Casa Bellucci?',
      answer:
        'Yes. As an all-day restaurant we serve breakfast from 09:00, along with lunch, dinner and aperitivo. Espresso, croissants and light plates in the morning, pasta and fish throughout the day.',
    },
    {
      question: 'Can you reserve online at Casa Bellucci?',
      answer:
        'Yes. You can conveniently book a table online via our reservation module or reach us by phone at +49 162 3009925, for example for larger groups or short-notice requests.',
    },
    {
      question: 'Which wines are there at Casa Bellucci?',
      answer:
        'The wine list is curated by Sommelier Marco and places its focus on southern Italy. It includes, among others, Etna Bianco from Planeta, Nero d\'Avola, Etna Rosso, Passito di Pantelleria and Marsala. Around 65 percent of the selection comes from southern Italy, complemented by wines from the rest of Italy.',
    },
    {
      question: 'Is Casa Bellucci suitable for a romantic dinner or special occasions?',
      answer:
        'Yes. In the evening, Casa Bellucci has a calm, refined atmosphere with candlelight. It is a fit for a romantic dinner for two, for a date in Berlin and for special occasions such as birthdays or anniversaries.',
    },
    {
      question: 'When is Casa Bellucci open?',
      answer:
        'Casa Bellucci is open Monday to Saturday from 09:00 to 00:00 and Sunday from 09:00 to 18:00.',
    },
  ],

  // Related links footer (subpage-related)
  related: {
    pre: 'More about the restaurant on the homepage,',
    homeLink: 'Casa Bellucci',
    mid2: '. In the morning',
    fruehstueckLink: 'breakfast and brunch on the Kudamm',
    mid3: 'and for the aperitivo our',
    barLink: 'bar on the Kudamm',
    post: '.',
  },
} as const;

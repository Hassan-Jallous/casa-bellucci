// Page-specific copy for the Lunch & Business Lunch landing page.
// English translation of the German source of truth in ../de/landingLunch.ts.
// Same structure, keys and array lengths. Shared labels (hours, info, actions,
// mapCorner) live in `common`.
export const landingLunch = {
  // 1. Hero / Intro
  hero: {
    eyebrow: 'Pranzo on the Kudamm',
    h1: {
      pre: 'Lunch and business lunch in ',
      em: 'Charlottenburg',
      post: '',
    },
    lede:
      'Casa Bellucci is the lunch spot in Berlin-Charlottenburg, at Kurfürstendamm 63. From 12:00 to 16:00 we serve "Pranzo", a fresh Italian lunch with Pasta fatta a mano, freshly caught fish and Burrata di Andria. Fast enough for the lunch break, good enough for a business lunch.',
    para:
      'Anyone looking for a lunch spot on the Kudamm in Charlottenburg-Wilmersdorf will find a calm table in the dining room here, or in good weather on the summer terrace. Ideal for the offices around the Ku\'damm, for a business meal and for the quick, high-quality lunch break.',
    viewMenu: 'View lunch menu →',
    mediaLabel: 'Lunch at Casa Bellucci',
    photos: {
      pranzo: {
        alt: 'Lunch at Casa Bellucci in Berlin-Charlottenburg with fresh pasta for the lunch break',
        caption: 'Pranzo',
      },
      schnell: {
        alt: 'Quick Italian lunch on the Kudamm at Casa Bellucci in Charlottenburg',
        caption: 'Lunch',
      },
      business: {
        alt: 'Set table for a business lunch at Casa Bellucci on the Kurfürstendamm',
        caption: 'Lunch',
      },
    },
  },

  // 2. Lunch menu / Pranzo
  pranzo: {
    eyebrow: 'The lunch menu',
    h2: {
      pre: 'Pranzo, ',
      em: 'fresh and fast',
      post: '',
    },
    para1:
      'Our lunch menu follows the logic of the market. Whatever is fresh at the stall in the morning ends up on the plate at midday. We make Pasta fatta a mano by hand every day, and the fish comes freshly caught from the wholesale market. That keeps the lunch light, honest and always in motion.',
    para2:
      'To start, the Burrata di Andria with Pomodorino confit and basil, or the Vitello Tonnato. Then Tagliatelle al Tartufo with black truffle from Umbria, Spaghetti alle Vongole or the Lasagne della Casa. Anyone who likes fish at lunch chooses the grilled Branzino alla Griglia. To finish, the Tiramisù della Casa. A business lunch that tastes good and does not hold you up.',
    daylineLabel: 'Dishes from the lunch menu',
    moments: [
      {
        time: 'Antipasti',
        title: 'Burrata di Andria',
        copy: 'Burrata di Andria with Pomodorino confit, basil and olive oil, 16,00. Plus Vitello Tonnato with capers from Pantelleria, 18,00.',
      },
      {
        time: 'Primi',
        title: 'Pasta fatta a mano',
        copy: 'Tagliatelle al Tartufo with black truffle from Umbria, 24,00. Spaghetti alle Vongole with clams, 22,00. Lasagne della Casa, 19,00.',
      },
      {
        time: 'Secondi',
        title: 'Freshly caught fish',
        copy: 'Branzino alla Griglia with lemon, olive oil and herbs, 29,00. To finish, Tiramisù della Casa, 12,00.',
      },
    ],
    mediaLabel: 'Dishes from the lunch menu at Casa Bellucci',
    photos: {
      pasta: {
        alt: 'Fresh Pasta fatta a mano from the lunch menu at Casa Bellucci on the Kudamm in Berlin-Charlottenburg',
        caption: 'Pasta',
      },
      pesce: {
        alt: 'Freshly caught fish and antipasti for lunch at Casa Bellucci in Charlottenburg',
        caption: 'Pesce',
      },
      dolce: {
        alt: 'Light dessert for the business lunch at Casa Bellucci on the Kurfürstendamm',
        caption: 'Dolce',
      },
    },
  },

  // 3. Business lunch / Office
  business: {
    eyebrow: 'Business lunch on the Kudamm',
    h2: {
      pre: 'Business meal in ',
      em: 'Charlottenburg',
      post: '',
    },
    para1:
      'Around the Kurfürstendamm there are offices, law firms and agencies. For a business meal at midday Casa Bellucci is close, calm and reliable. The dining room is a pleasant setting for a conversation, the pace suits the lunch break, and the kitchen stays at evening level.',
    para2:
      'A business lunch in Charlottenburg should not take forever. We bring antipasti and primi to the table promptly, so that a lunch in Charlottenburg also works well within an hour. For a fixed time or a larger group we recommend a reservation via Quandoo or by phone.',
    mediaLabel: 'Business lunch at Casa Bellucci',
    photos: {
      saal: {
        alt: 'Calm dining room for a business lunch at Casa Bellucci on the Kudamm in Charlottenburg',
        caption: 'Room',
      },
      terrasse: {
        alt: 'Lunch on the summer terrace of Casa Bellucci on the Kudamm in Berlin-Charlottenburg',
        caption: 'Terrace',
      },
      aperitivo: {
        alt: 'Spritz with lunch on the terrace of Casa Bellucci on the Kurfürstendamm',
        caption: 'Lunch',
      },
    },
  },

  // 4. Times and reservation
  reservation: {
    eyebrow: 'Times and reservation',
    h2: {
      pre: 'Lunch on the ',
      em: 'Kudamm',
      post: '',
    },
    lede:
      'Casa Bellucci is located at Kurfürstendamm 63 in Berlin-Charlottenburg. Lunch is served daily from 12:00 to 16:00, inside or on the terrace. Book online via Quandoo or by phone.',
    addressLine1: 'Kurfürstendamm 63',
    addressLine2: '10707 Berlin · Charlottenburg',
    lunchLabel: 'Lunch',
    lunchTime: 'Pranzo 12:00 - 16:00',
    lunchNote: 'Business lunch daily',
    mapLabel: 'Location of Casa Bellucci on the map',
  },

  // 5. FAQ
  faqEyebrow: 'Frequently asked questions',
  faqHeading: {
    pre: 'Frequently asked ',
    em: 'questions',
    post: '',
  },
  faqs: [
    {
      question: 'Is there a lunch spot in Charlottenburg?',
      answer:
        'Yes. Casa Bellucci serves lunch daily from 12:00 to 16:00 in Berlin-Charlottenburg, at Kurfürstendamm 63. "Pranzo" is the name of our lunch menu with Pasta fatta a mano, freshly caught fish and antipasti such as the Burrata di Andria. You sit inside in the dining room or, in good weather, on the summer terrace on the Kudamm.',
    },
    {
      question: 'Is Casa Bellucci suitable for a business lunch?',
      answer:
        'Yes. Casa Bellucci is centrally located on the Kurfürstendamm and is well suited for a business lunch in Charlottenburg. The dining room is calm enough for a business meal, the kitchen serves promptly, and the menu ranges from light primi to the grilled Branzino. For a fixed time or a larger group we recommend a reservation.',
    },
    {
      question: 'How fast is lunch?',
      answer:
        'During the lunch break we bring antipasti and primi to the table promptly, so that a lunch in Charlottenburg works well within an hour. If time is short, just tell us when you order and we will adjust the pace accordingly. Pasta fatta a mano and freshly caught fish are quick to prepare at midday anyway.',
    },
    {
      question: 'What does lunch cost at Casa Bellucci?',
      answer:
        'For lunch you order à la carte from the Pranzo menu. Antipasti such as the Burrata di Andria are around 16,00 euros, a primo like Spaghetti alle Vongole around 22,00 euros, the grilled Branzino alla Griglia around 29,00 euros. That way you put together your lunch on the Kudamm to match your hunger and your time.',
    },
    {
      question: 'Can you sit on the terrace at lunchtime?',
      answer:
        'Yes. In good weather the summer terrace on the Kudamm is also open at lunchtime. Lunch on the terrace in Charlottenburg is a calm spot for the lunch break or a relaxed business lunch in the fresh air. On sunny days we recommend a reservation, as the terrace is popular.',
    },
    {
      question: 'Do you need to reserve for lunch?',
      answer:
        'Spontaneously there is usually a table free at midday. For a fixed time, a business lunch with colleagues or a table on the terrace we recommend a reservation. You can book online via Quandoo or by phone at +49 162 3009925. Casa Bellucci is located at Kurfürstendamm 63 in Berlin-Charlottenburg.',
    },
  ],

  // The page-related cross-links sentence (the leading/trailing prose between links)
  related: {
    pre: 'At lunch also outside on the ',
    terrasseLink: 'terrace in Charlottenburg',
    afterTerrasse: '. In the evening it becomes the ',
    italienischLink: 'Italian restaurant on the Kudamm',
    afterItalienisch: ', and the day begins with ',
    fruehstueckLink: 'breakfast and brunch on the Kudamm',
    afterFruehstueck: '.',
  },
} as const;

// Page-specific copy for the Terrace landing page.
// English translation of the German source of truth in ../de/landingTerrasse.ts.
// Same structure, keys and array lengths. Shared labels (hours, info, actions,
// mapCorner) live in `common`.
export const landingTerrasse = {
  // 1. Hero / Intro
  hero: {
    eyebrow: 'Terrazza on the Kudamm',
    h1: {
      pre: 'Restaurant with a terrace in Berlin-',
      em: 'Charlottenburg',
      post: '',
    },
    lede:
      'Casa Bellucci has a summer terrace at Kurfürstendamm 63 in Berlin-Charlottenburg. Anyone looking for a restaurant with a terrace in Berlin sits outside here on the Kudamm, from the first sun in the morning to the last glass of wine in the evening.',
    para:
      'The terrace sits right on the boulevard, calm enough to talk and close enough to the buzz of the Kurfürstendamm. In good weather it is our finest spot, a piece of Italian piazza in Charlottenburg-Wilmersdorf.',
    viewMenu: 'View menu →',
    mediaLabel: 'Summer terrace of Casa Bellucci on the Kudamm',
    photos: {
      tag: {
        alt: 'Sun terrace of Casa Bellucci on the Kurfürstendamm in Berlin-Charlottenburg by day',
        caption: 'Terrace',
      },
      mittag: {
        alt: 'Laid table on the terrace of Casa Bellucci on the Kudamm in the midday sun',
        caption: 'Midday',
      },
      abend: {
        alt: 'Terrace of Casa Bellucci on the Kurfürstendamm in warm evening light',
        caption: 'Evening',
      },
    },
  },

  // 2. The terrace experience across the day (dayline)
  experience: {
    eyebrow: 'Dining outdoors in Berlin',
    h2: {
      pre: 'Sun terrace on the ',
      em: 'Kurfürstendamm',
      post: '',
    },
    para1:
      'A good terrace lives on light. In the morning the sun stands soft over the Kudamm, ideal for breakfast and a first Caffè in the open air. Through the midday hours the sun terrace becomes the brightest spot, with shade under the awnings for anyone who prefers it cooler.',
    para2:
      'In the late afternoon comes the golden hour. That is the best time for an aperitivo outside, when the light softens and the boulevard fills up. Anyone who wants to dine outdoors in Berlin finds the right moment on the terrace on the Kudamm, from morning to evening.',
    daylineLabel: 'The best times of day on the terrace',
    moments: [
      {
        time: 'Mattina',
        title: 'Sun in the morning',
        copy: 'Soft morning light over the Kudamm. Breakfast, a Cornetto and the first Espresso Bellucci in the open air, before the boulevard wakes up.',
      },
      {
        time: 'Pomeriggio',
        title: 'Midday and shade',
        copy: 'The brightest hours on the sun terrace. Those who prefer it cooler sit under the awnings, the rest enjoy the full Berlin sun.',
      },
      {
        time: 'Tramonto',
        title: 'Golden hour',
        copy: 'Soft evening light and aperitivo time. Spritz, wine and a long evening outside, when the terrace on the Kudamm is at its finest.',
      },
    ],
    mediaLabel: 'Times of day on the terrace of Casa Bellucci',
    photos: {
      hell: {
        alt: 'Bright summer terrace of Casa Bellucci on the Kudamm in the midday sun',
        caption: 'Sun',
      },
      schatten: {
        alt: 'Shaded seats under the awnings on the terrace of Casa Bellucci in Charlottenburg',
        caption: 'Shade',
      },
      italia: {
        alt: 'Italian terrace atmosphere at Casa Bellucci on the Kurfürstendamm in Berlin',
        caption: 'Italia',
      },
    },
  },

  // 3. Aperitivo and wine outdoors in summer
  aperitivo: {
    eyebrow: 'Aperitivo in the open air',
    h2: {
      pre: 'Aperitivo and wine on the ',
      em: 'terrace',
      post: '',
    },
    para1:
      'Summer in Berlin belongs to the aperitivo. On the terrace on the Kudamm the evening begins with a Spritz, cool and light, with small bites alongside. It is the Italian way to let the day fade out, outside and without any rush.',
    para2:
      'Then comes the wine. The list offers bottles from Sicily and across Italy, many of them open by the glass, so the evening stays light. Wine outdoors in summer, with a view over the boulevard, is the reason the sun terrace fills up in the evening. For an evening seat we recommend a reservation specifically for the terrace.',
    mediaLabel: 'Aperitivo and wine on the terrace of Casa Bellucci',
    photos: {
      spritz: {
        alt: 'Aperitivo Spritz on the summer terrace of Casa Bellucci on the Kudamm in Berlin-Charlottenburg',
        caption: 'Spritz',
      },
      abend: {
        alt: 'Wine and aperitivo on the terrace of Casa Bellucci on the Kurfürstendamm in the evening',
        caption: 'Vino',
      },
      terrace: {
        alt: 'Evening terrace of Casa Bellucci on the Kudamm with guests over an aperitivo',
        caption: 'Sera',
      },
    },
  },

  // 4. Times and reservation
  reservation: {
    eyebrow: 'Reserve the terrace',
    h2: {
      pre: 'Terrace on the ',
      em: 'Kudamm',
      post: '',
    },
    lede:
      'Casa Bellucci is located at Kurfürstendamm 63 in Berlin-Charlottenburg. The summer terrace opens from the morning in good weather. Book online via Quandoo or by phone and feel free to note that you would like a table outside.',
    addressLine1: 'Kurfürstendamm 63',
    addressLine2: '10707 Berlin · Charlottenburg',
    terraceLabel: 'Terrace',
    terraceTime: 'Terrazza from 09:00',
    terraceNote: 'In good weather, please note a preferred table outside',
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
      question: 'Does the restaurant on the Kurfürstendamm have a terrace?',
      answer:
        'Yes. Casa Bellucci has a summer terrace right on the Kurfürstendamm 63 in Berlin-Charlottenburg. In good weather you sit outside here on the boulevard, from breakfast in the morning to aperitivo in the evening.',
    },
    {
      question: 'Can you reserve the terrace?',
      answer:
        'Yes. You can book a table online via Quandoo or by phone at +49 162 3009925. Please note that you would like a seat on the terrace, then we reserve outside for you specifically. On warm evenings in particular we recommend an early reservation.',
    },
    {
      question: 'Are there shaded seats outside?',
      answer:
        'Yes. The terrace has sunny seats and shaded seats under the awnings. So you can sit in the midday sun or cooler in the shade, just as you prefer. State your preference when you reserve and we will keep the right table free.',
    },
    {
      question: 'When is the best time for the sun terrace?',
      answer:
        'In the morning the light over the Kudamm is soft and calm, ideal for breakfast. The midday hours are the brightest and sunniest. In the late afternoon comes the golden hour, the best time for an aperitivo outside. So the terrace suits any moment from morning to evening.',
    },
    {
      question: 'Can you dine outdoors on the terrace in Berlin?',
      answer:
        'Yes. On the terrace of Casa Bellucci you dine outdoors on the Kudamm, in the middle of Charlottenburg-Wilmersdorf. The full offer is available, from breakfast through lunch to dinner, along with aperitivo and wine. In poor weather you simply move inside.',
    },
    {
      question: 'Where is the terrace and how do I get there?',
      answer:
        'The terrace is at Kurfürstendamm 63, 10707 Berlin-Charlottenburg, in Charlottenburg-Wilmersdorf. It is central on the Kudamm and easy to reach by bus and underground. The location on the boulevard makes the sun terrace a calm spot in the middle of the city.',
    },
  ],

  // The page-related cross-links sentence (the leading/trailing prose between links)
  related: {
    pre: 'At midday on the terrace for the ',
    lunchLink: 'business lunch in Charlottenburg',
    afterLunch: '. In the evening an ',
    barLink: 'aperitivo on the Kudamm',
    afterBar: ' and alongside it our ',
    italienischLink: 'Italian restaurant in Charlottenburg',
    afterItalienisch: '.',
  },
} as const;

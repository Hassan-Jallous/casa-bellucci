// Page-specific copy for the Bar & Aperitivo landing
// (components/sections/BarLanding.tsx). English translation of the German
// source of truth in ../de/landingBar.ts. Same structure, keys and array
// lengths. Shared, repeated labels live in `common`.
export const landingBar = {
  // 1. Hero / Intro
  hero: {
    eyebrow: 'Bar & Aperitivo on the Kudamm',
    h1Pre: 'Bar, wine bar and aperitivo on the ',
    h1It: 'Kudamm',
    h1Post: '',
    lede:
      'Casa Bellucci is a restaurant bar at Kurfürstendamm 63 in Berlin-Charlottenburg. At the bar you will find aperitivo, cocktails and Italian wine, from morning to night. A relaxed address for a glass in City West, at the counter or on the summer terrace.',
    p2: 'Refined and cosy at the same time, casual enough for after work and elegant enough for a long evening.',
    mediaAria: 'Bar, aperitivo and terrace at Casa Bellucci',
    photo1Alt:
      'Bottle of Champagne in a silver ice bucket at the bar of Casa Bellucci on the Kudamm in Berlin-Charlottenburg',
    photo1Caption: 'Champagne',
    photo2Alt: 'Glass of Italian wine at the bar of Casa Bellucci in Charlottenburg',
    photo2Caption: 'Wine',
    photo3Alt: 'Summer terrace of Casa Bellucci on the Kudamm in the evening',
    photo3Caption: 'Terrace',
  },

  // drinks-moments array (the .dayline)
  drinks: [
    {
      time: 'Aperitivo',
      title: 'Aperitivo Bellucci',
      copy: 'Our house aperitivo of bitter, citrus and Prosecco. Sparkling, lightly bitter, made for the early evening at the bar or on the terrace.',
    },
    {
      time: 'Cocktails',
      title: 'Classically mixed',
      copy: 'Cocktails from Negroni to Spritz, plus wine, beer and coffee. The bar is a meeting point from morning to night, casual and inviting.',
    },
    {
      time: 'Vino',
      title: 'By the glass from Italy',
      copy: 'Wines by the glass that change daily. The focus is on southern Italy, curated by Sommelier Marco.',
    },
  ],

  // 2. Aperitivo und Cocktails
  aperitivo: {
    eyebrow: 'Aperitivo and cocktails',
    h2Pre: 'Aperitivo Bellucci and the ',
    h2It: 'bar',
    h2Post: '',
    p1: 'Aperitivo Berlin begins with us in the early evening. The Aperitivo Bellucci combines bitter, citrus and Prosecco into a lightly bitter, sparkling opening. Alongside, the bar serves cocktails, wine, beer and coffee, so everything for the aperitivo on the Kudamm and the drink afterwards.',
    p2: 'As a cocktail bar in Charlottenburg, we stick to clear classics rather than show. Negroni, Spritz and seasonal drinks, cleanly mixed. So the bar is a place for a quick glass at the counter just as much as for a long evening on the Kudamm.',
    daylineAria: 'At the bar of Casa Bellucci',
    mediaAria: 'Aperitivo and cocktails at Casa Bellucci',
    photo1Alt:
      'Aperitivo Bellucci, house aperitivo of bitter, citrus and Prosecco at Casa Bellucci',
    photo1Caption: 'Spritz',
    photo2Alt: 'Aperol Spritz and aperitivo drinks on the summer terrace of Casa Bellucci in Berlin-Charlottenburg',
    photo2Caption: 'Aperitif',
    photo3Alt: 'Cosy bar atmosphere at Casa Bellucci on the Kudamm',
    photo3Caption: 'Bar',
  },

  // 3. Wein (Weinbar)
  wine: {
    eyebrow: 'Wine list',
    h2Pre: 'Wine bar on the ',
    h2It: 'Kudamm',
    h2Post: '',
    lede:
      'As a wine bar in Charlottenburg, we put the focus on southern Italy. Curated by Sommelier Marco, by the glass and changing daily.',
    pdfLink: 'View wine list',
    regions: {
      sicilia: {
        label: 'Sicilia',
        title: 'Reds and volcanic wines',
        copy: 'Volcanic minerality from Etna and powerful red grapes. The island defines the character of our wines by the glass.',
        rows: [
          { name: 'Etna Bianco DOC', note: 'Sicilia · by the glass' },
          { name: "Nero d'Avola", note: 'Sicilia · by the glass' },
          { name: 'Etna Rosso', note: 'Sicilia · by the glass' },
        ],
      },
      dolci: {
        label: 'Dolci & Liquorosi',
        title: 'Sweet wines to finish',
        copy: 'Sweet wines and liquorosi, just as they come from the south of Italy. From the Passito of the island of Pantelleria to the Marsala from the west.',
        rows: [
          { name: 'Passito di Pantelleria', note: 'Sicilia · sweet wine' },
          { name: 'Marsala Superiore', note: 'Sicilia' },
        ],
      },
      bollicine: {
        label: 'Bollicine',
        title: 'For the aperitivo',
        copy: 'Sparkling wines as a sparkling opening. They suit the aperitivo at the bar and the toast on the terrace.',
        rows: [
          { name: 'Franciacorta Brut', note: 'Lombardia · Spumante' },
          { name: 'Prosecco by the glass', note: 'Veneto · by the glass' },
        ],
      },
    },
  },

  // 4. Live-DJ und Wochenende
  music: {
    eyebrow: 'Live DJ and weekend',
    h2Pre: 'Bar with music in ',
    h2It: 'Berlin',
    h2Post: '',
    p1: 'On the weekend a Live DJ plays at our place. Anyone looking for a bar with music in Berlin finds calm sounds here for the aperitivo and in the evening. It stays a restaurant bar mood, not a club. The music carries the evening without drowning out the conversation.',
    p2: 'So Casa Bellucci becomes a bar with DJ on the Kudamm at the weekend, casual and relaxed. In summer the aperitivo moves out onto the terrace, under umbrellas by day and by candlelight in the evening. As a restaurant with music in Berlin too, the house is right for a long evening for two or in a group.',
    crossPre: 'More about the kitchen in the evening on our page about the ',
    crossLinkItalienisch: 'Italian restaurant in Charlottenburg',
    crossPost: '.',
    mediaAria: 'Weekend, music and terrace at Casa Bellucci',
    photo1Alt: 'Yellow Limoncello digestif in the evening at the bar of Casa Bellucci on the Kudamm',
    photo1Caption: 'Limoncello',
    photo2Alt:
      'Warm evening bar atmosphere at Casa Bellucci with crystal chandelier, green velvet bench and counter in Berlin-Charlottenburg',
    photo2Caption: 'Evening',
    photo3Alt:
      'Aperitivo on the summer terrace of Casa Bellucci on the Kudamm',
    photo3Caption: 'Outdoors',
  },

  // 5. Öffnungszeiten und Reservierung (Contact)
  contact: {
    eyebrow: 'Opening hours and reservation',
    h2Pre: 'To the bar on the ',
    h2It: 'Kudamm',
    h2Post: '',
    lede:
      'Casa Bellucci is located at Kurfürstendamm 63 in Berlin-Charlottenburg, open daily from 09:00, Monday to Saturday until 00:00. Reserve online or by phone, walk-ins are especially welcome at the bar.',
    addressLine1: 'Kurfürstendamm 63',
    addressLine2: '10707 Berlin · Charlottenburg',
    barLabel: 'At the bar',
    barLine1: 'Aperitivo from the early evening',
    barLine2: 'Live DJ on the weekend',
    mapAria: 'Location of Casa Bellucci on the map',
  },

  // 6. FAQ
  faqHeadingEyebrow: 'Frequently asked questions',
  faqHeadingPre: 'Frequently asked ',
  faqHeadingIt: 'questions',
  faqHeadingPost: '',
  related: {
    pre: 'More about the house on the home page, ',
    linkHome: 'Casa Bellucci',
    mid1: '. Discover our ',
    linkItalienisch: 'Italian restaurant in Charlottenburg',
    mid2: ' and ',
    linkFruehstueck: 'breakfast and brunch on the Kudamm',
    post: '.',
  },

  faqs: [
    {
      question: 'Does Casa Bellucci have a bar in Charlottenburg?',
      answer:
        'Yes. Casa Bellucci is a restaurant bar at Kurfürstendamm 63 in Berlin-Charlottenburg. Its own bar serves aperitivo, cocktails, wine, beer and coffee, from morning to night. The atmosphere is refined and cosy at the same time, casual enough for a quick glass at the counter.',
    },
    {
      question: 'Is there aperitivo on the Kudamm?',
      answer:
        'Yes. Aperitivo is part of the early evening with us. The Aperitivo Bellucci combines bitter, citrus and Prosecco into a lightly bitter, sparkling opening. It pairs well with Spritz, Negroni and wines by the glass, at the bar or on the summer terrace on the Kudamm.',
    },
    {
      question: 'Where is there a good bar on the Kudamm?',
      answer:
        'Casa Bellucci is a restaurant bar at Kurfürstendamm 63 in Berlin-Charlottenburg. At the bar there is aperitivo, cocktails, Italian wine, beer and coffee, from morning to night. As a cocktail bar in Charlottenburg it sticks to clear classics like Negroni and Spritz, with calm live music on the weekend. Walk-ins are especially welcome at the bar.',
    },
    {
      question: 'Which wines are available at the bar?',
      answer:
        'Our wine list puts the focus on southern Italy and is curated by Sommelier Marco. By the glass and changing daily there is, among others, Etna Bianco, Nero d\'Avola, Etna Rosso, plus Franciacorta, Prosecco as well as sweet wines like Passito di Pantelleria and Marsala.',
    },
    {
      question: 'Can you come to the bar without a reservation?',
      answer:
        'Yes. Walk-ins are especially welcome at the bar. For a table in the evening we recommend a reservation, by phone at +49 162 3009925 or online via Quandoo. Casa Bellucci is open daily from 09:00, Monday to Saturday until 00:00.',
    },
  ],
} as const;

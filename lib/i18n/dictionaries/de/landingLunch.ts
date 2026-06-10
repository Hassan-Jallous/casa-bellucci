// Page-specific copy for the Mittagstisch & Business Lunch landing page.
// German source of truth, authored `as const`. EN/IT slices translate this with
// the same keys and array lengths. Shared labels (hours, info, actions,
// mapCorner) live in `common`.
export const landingLunch = {
  // 1. Hero / Intro
  hero: {
    eyebrow: 'Pranzo am Kudamm',
    h1: {
      pre: 'Mittagstisch und Business Lunch in ',
      em: 'Charlottenburg',
      post: '',
    },
    lede:
      'Casa Bellucci ist der Mittagstisch in Berlin-Charlottenburg, am Kurfürstendamm 63. Von 12:00 bis 16:00 Uhr servieren wir „Pranzo“, ein frisches italienisches Mittagessen mit Pasta fatta a mano, fangfrischem Fisch und Burrata di Andria. Schnell genug für die Mittagspause, gut genug für ein Business Lunch.',
    para:
      'Wer in Charlottenburg-Wilmersdorf einen Mittagstisch am Kudamm sucht, findet hier einen ruhigen Tisch im Saal oder bei gutem Wetter auf der Sommerterrasse. Ideal für das Büro um den Kudamm, für ein Geschäftsessen und für die schnelle, hochwertige Mittagspause.',
    viewMenu: 'Mittagskarte ansehen →',
    mediaLabel: 'Mittagstisch bei Casa Bellucci',
    photos: {
      pranzo: {
        alt: 'Mittagstisch bei Casa Bellucci in Berlin-Charlottenburg mit frischer Pasta zur Mittagspause',
        caption: 'Pranzo',
      },
      schnell: {
        alt: 'Schnelles italienisches Mittagessen am Kudamm bei Casa Bellucci in Charlottenburg',
        caption: 'Mittag',
      },
      business: {
        alt: 'Gedeckter Tisch für ein Business Lunch bei Casa Bellucci am Kurfürstendamm',
        caption: 'Lunch',
      },
    },
  },

  // 2. Mittagskarte / Pranzo
  pranzo: {
    eyebrow: 'Die Mittagskarte',
    h2: {
      pre: 'Pranzo, ',
      em: 'frisch und schnell',
      post: '',
    },
    para1:
      'Unsere Mittagskarte folgt der Markt-Logik. Was am Morgen am Stand frisch ist, kommt mittags auf den Teller. Pasta fatta a mano machen wir täglich von Hand, der Fisch kommt fangfrisch vom Großmarkt. So bleibt der Mittagstisch leicht, ehrlich und immer in Bewegung.',
    para2:
      'Zum Start die Burrata di Andria mit Pomodorino confit und Basilikum oder das Vitello Tonnato. Danach Tagliatelle al Tartufo mit schwarzem Trüffel aus Umbrien, Spaghetti alle Vongole oder die Lasagne della Casa. Wer mittags Fisch mag, wählt das gegrillte Branzino alla Griglia. Zum Abschluss das Tiramisù della Casa. Ein Business Lunch, der schmeckt und nicht aufhält.',
    daylineLabel: 'Gerichte vom Mittagstisch',
    moments: [
      {
        time: 'Antipasti',
        title: 'Burrata di Andria',
        copy: 'Burrata di Andria mit Pomodorino confit, Basilikum und Olivenöl, 16,00. Dazu Vitello Tonnato mit Kapern aus Pantelleria, 18,00.',
      },
      {
        time: 'Primi',
        title: 'Pasta fatta a mano',
        copy: 'Tagliatelle al Tartufo mit schwarzem Trüffel aus Umbrien, 24,00. Spaghetti alle Vongole mit Venusmuscheln, 22,00. Lasagne della Casa, 19,00.',
      },
      {
        time: 'Secondi',
        title: 'Fangfrischer Fisch',
        copy: 'Branzino alla Griglia mit Zitrone, Olivenöl und Kräutern, 29,00. Zum Abschluss Tiramisù della Casa, 12,00.',
      },
    ],
    mediaLabel: 'Gerichte vom Mittagstisch bei Casa Bellucci',
    photos: {
      pasta: {
        alt: 'Frische Pasta fatta a mano vom Mittagstisch bei Casa Bellucci am Kudamm in Berlin-Charlottenburg',
        caption: 'Pasta',
      },
      pesce: {
        alt: 'Fangfrischer Fisch und Antipasti zum Mittagessen bei Casa Bellucci in Charlottenburg',
        caption: 'Pesce',
      },
      dolce: {
        alt: 'Leichtes Dessert zum Business Lunch bei Casa Bellucci am Kurfürstendamm',
        caption: 'Dolce',
      },
    },
  },

  // 3. Business Lunch / Office
  business: {
    eyebrow: 'Business Lunch am Kudamm',
    h2: {
      pre: 'Geschäftsessen in ',
      em: 'Charlottenburg',
      post: '',
    },
    para1:
      'Rund um den Kurfürstendamm sitzen Büros, Kanzleien und Agenturen. Für das Geschäftsessen mittags ist Casa Bellucci nah, ruhig und zuverlässig. Der Saal ist ein angenehmer Rahmen für ein Gespräch, das Tempo passt zur Mittagspause, und die Küche bleibt auf Abendniveau.',
    para2:
      'Ein Business Lunch in Charlottenburg darf nicht ewig dauern. Wir bringen Antipasti und Primi zügig an den Tisch, sodass ein Mittagessen in Charlottenburg auch in einer Stunde gut funktioniert. Für eine feste Uhrzeit oder eine größere Runde empfehlen wir eine Reservierung über Quandoo oder telefonisch.',
    mediaLabel: 'Business Lunch bei Casa Bellucci',
    photos: {
      saal: {
        alt: 'Ruhiger Innenraum für ein Business Lunch bei Casa Bellucci am Kudamm in Charlottenburg',
        caption: 'Saal',
      },
      terrasse: {
        alt: 'Mittag auf der Sommerterrasse von Casa Bellucci am Kudamm in Berlin-Charlottenburg',
        caption: 'Terrasse',
      },
      aperitivo: {
        alt: 'Spritz zum Mittagessen auf der Terrasse von Casa Bellucci am Kurfürstendamm',
        caption: 'Mittag',
      },
    },
  },

  // 4. Zeiten und Reservierung
  reservation: {
    eyebrow: 'Zeiten und Reservierung',
    h2: {
      pre: 'Mittagstisch am ',
      em: 'Kudamm',
      post: '',
    },
    lede:
      'Casa Bellucci liegt am Kurfürstendamm 63 in Berlin-Charlottenburg. Den Mittagstisch gibt es täglich von 12:00 bis 16:00 Uhr, drinnen oder auf der Terrasse. Reservieren Sie online über Quandoo oder telefonisch.',
    addressLine1: 'Kurfürstendamm 63',
    addressLine2: '10707 Berlin · Charlottenburg',
    lunchLabel: 'Mittagstisch',
    lunchTime: 'Pranzo 12:00 - 16:00 Uhr',
    lunchNote: 'Business Lunch täglich',
    mapLabel: 'Lage von Casa Bellucci auf der Karte',
  },

  // 5. FAQ
  faqEyebrow: 'Häufige Fragen',
  faqHeading: {
    pre: 'Häufige ',
    em: 'Fragen',
    post: '',
  },
  faqs: [
    {
      question: 'Gibt es einen Mittagstisch in Charlottenburg?',
      answer:
        'Ja. Casa Bellucci hat täglich von 12:00 bis 16:00 Uhr einen Mittagstisch in Berlin-Charlottenburg, am Kurfürstendamm 63. „Pranzo“ heißt unsere Mittagskarte mit Pasta fatta a mano, fangfrischem Fisch und Antipasti wie der Burrata di Andria. Sie sitzen drinnen im Saal oder bei gutem Wetter auf der Sommerterrasse am Kudamm.',
    },
    {
      question: 'Eignet sich Casa Bellucci für ein Business Lunch?',
      answer:
        'Ja. Casa Bellucci liegt zentral am Kurfürstendamm und ist für ein Business Lunch in Charlottenburg gut geeignet. Der Saal ist ruhig genug für ein Geschäftsessen, die Küche serviert zügig und die Karte reicht von leichten Primi bis zum gegrillten Branzino. Für eine feste Uhrzeit oder eine größere Runde empfehlen wir eine Reservierung.',
    },
    {
      question: 'Wie schnell geht das Mittagessen?',
      answer:
        'In der Mittagspause bringen wir Antipasti und Primi zügig an den Tisch, sodass ein Mittagessen in Charlottenburg gut in einer Stunde funktioniert. Wenn die Zeit knapp ist, sagen Sie es uns bei der Bestellung, dann stimmen wir das Tempo darauf ab. Pasta fatta a mano und fangfrischer Fisch sind mittags ohnehin schnell zubereitet.',
    },
    {
      question: 'Was kostet der Mittagstisch bei Casa Bellucci?',
      answer:
        'Beim Mittagstisch bestellen Sie à la carte von der Pranzo-Karte. Antipasti wie die Burrata di Andria liegen bei 16,00 Euro, ein Primo wie Spaghetti alle Vongole bei 22,00 Euro, das gegrillte Branzino alla Griglia bei 29,00 Euro. So stellen Sie sich Ihr Mittagessen am Kudamm passend zu Hunger und Zeit zusammen.',
    },
    {
      question: 'Kann man mittags auf der Terrasse sitzen?',
      answer:
        'Ja. Bei gutem Wetter ist die Sommerterrasse am Kudamm auch mittags geöffnet. Der Mittagstisch auf der Terrasse in Charlottenburg ist ein ruhiger Platz für die Mittagspause oder ein entspanntes Business Lunch an der frischen Luft. An sonnigen Tagen empfehlen wir eine Reservierung, da die Terrasse beliebt ist.',
    },
    {
      question: 'Muss man für den Mittagstisch reservieren?',
      answer:
        'Spontan ist mittags meist ein Platz frei. Für eine feste Uhrzeit, ein Business Lunch mit Kollegen oder einen Tisch auf der Terrasse empfehlen wir eine Reservierung. Sie buchen online über Quandoo oder telefonisch unter +49 162 3009925. Casa Bellucci liegt am Kurfürstendamm 63 in Berlin-Charlottenburg.',
    },
  ],

  // The page-related cross-links sentence (the leading/trailing prose between links)
  related: {
    pre: 'Mittags auch draußen auf der ',
    terrasseLink: 'Terrasse in Charlottenburg',
    afterTerrasse: '. Abends wird daraus das ',
    italienischLink: 'italienische Restaurant am Kudamm',
    afterItalienisch: ', und der Tag beginnt mit ',
    fruehstueckLink: 'Frühstück und Brunch am Kudamm',
    afterFruehstueck: '.',
  },
} as const;

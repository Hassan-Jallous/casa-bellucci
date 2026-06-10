// Page-specific copy for the Terrasse landing page.
// German source of truth, authored `as const`. EN/IT slices translate this with
// the same structure, keys and array lengths. Shared labels (hours, info,
// actions, mapCorner) live in `common`.
export const landingTerrasse = {
  // 1. Hero / Intro
  hero: {
    eyebrow: 'Terrazza am Kudamm',
    h1: {
      pre: 'Restaurant mit Terrasse in Berlin-',
      em: 'Charlottenburg',
      post: '',
    },
    lede:
      'Casa Bellucci hat eine Sommerterrasse am Kurfürstendamm 63 in Berlin-Charlottenburg. Wer in Berlin ein Restaurant mit Terrasse sucht, sitzt hier draußen am Kudamm, von der ersten Sonne am Morgen bis zum letzten Glas Wein am Abend.',
    para:
      'Die Terrasse liegt direkt am Boulevard, ruhig genug zum Reden und nah genug am Trubel des Kurfürstendamms. Bei gutem Wetter ist sie unser schönster Platz, ein Stück italienische Piazza in Charlottenburg-Wilmersdorf.',
    viewMenu: 'Karte ansehen →',
    mediaLabel: 'Sommerterrasse von Casa Bellucci am Kudamm',
    photos: {
      tag: {
        alt: 'Sonnenterrasse von Casa Bellucci am Kurfürstendamm in Berlin-Charlottenburg bei Tag',
        caption: 'Terrasse',
      },
      mittag: {
        alt: 'Gedeckter Tisch auf der Terrasse von Casa Bellucci am Kudamm in der Mittagssonne',
        caption: 'Mittag',
      },
      abend: {
        alt: 'Terrasse von Casa Bellucci am Kurfürstendamm im warmen Abendlicht',
        caption: 'Abend',
      },
    },
  },

  // 2. Das Terrassen-Erlebnis ueber den Tag (dayline)
  experience: {
    eyebrow: 'Draußen essen in Berlin',
    h2: {
      pre: 'Sonnenterrasse am ',
      em: 'Kurfürstendamm',
      post: '',
    },
    para1:
      'Eine gute Terrasse lebt vom Licht. Am Vormittag steht die Sonne mild über dem Kudamm, ideal für Frühstück und einen ersten Caffè im Freien. Über die Mittagsstunden wird die Sonnenterrasse zum hellsten Platz, mit Schatten unter den Markisen für alle, die es lieber kühler mögen.',
    para2:
      'Am späten Nachmittag kommt die goldene Stunde. Das ist die beste Zeit für einen Aperitivo draußen, wenn das Licht weicher wird und der Boulevard sich füllt. Wer in Berlin draußen essen möchte, findet auf der Terrasse am Kudamm vom Morgen bis zum Abend den passenden Moment.',
    daylineLabel: 'Die besten Tageszeiten auf der Terrasse',
    moments: [
      {
        time: 'Mattina',
        title: 'Sonne am Morgen',
        copy: 'Mildes Vormittagslicht über dem Kudamm. Frühstück, Cornetto und der erste Espresso Bellucci im Freien, bevor der Boulevard erwacht.',
      },
      {
        time: 'Pomeriggio',
        title: 'Mittag und Schatten',
        copy: 'Die hellsten Stunden auf der Sonnenterrasse. Wer es kühler mag, sitzt unter den Markisen, der Rest genießt die volle Berliner Sonne.',
      },
      {
        time: 'Tramonto',
        title: 'Goldene Stunde',
        copy: 'Weiches Abendlicht und Aperitivo-Zeit. Spritz, Wein und ein langer Abend draußen, wenn die Terrasse am Kudamm am schönsten ist.',
      },
    ],
    mediaLabel: 'Tageszeiten auf der Terrasse von Casa Bellucci',
    photos: {
      hell: {
        alt: 'Helle Sommerterrasse von Casa Bellucci am Kudamm in der Mittagssonne',
        caption: 'Sonne',
      },
      schatten: {
        alt: 'Schattige Plätze unter den Markisen auf der Terrasse von Casa Bellucci in Charlottenburg',
        caption: 'Schatten',
      },
      italia: {
        alt: 'Italienische Terrassenatmosphäre bei Casa Bellucci am Kurfürstendamm in Berlin',
        caption: 'Italia',
      },
    },
  },

  // 3. Aperitivo und Wein draussen im Sommer
  aperitivo: {
    eyebrow: 'Aperitivo im Freien',
    h2: {
      pre: 'Aperitivo und Wein auf der ',
      em: 'Terrasse',
      post: '',
    },
    para1:
      'Der Sommer in Berlin gehört dem Aperitivo. Auf der Terrasse am Kudamm beginnt der Abend mit einem Spritz, kühl und leicht, dazu kleine Häppchen. Es ist die italienische Art, den Tag ausklingen zu lassen, draußen und ohne Eile.',
    para2:
      'Dazu kommt der Wein. Auf der Karte stehen Tropfen aus Sizilien und ganz Italien, viele davon offen im Glas, damit der Abend leicht bleibt. Wein draußen im Sommer, mit Blick auf den Boulevard, ist der Grund, warum die Sonnenterrasse abends voll wird. Für einen Platz am Abend empfehlen wir eine Reservierung gezielt für die Terrasse.',
    mediaLabel: 'Aperitivo und Wein auf der Terrasse von Casa Bellucci',
    photos: {
      spritz: {
        alt: 'Aperitivo Spritz auf der Sommerterrasse von Casa Bellucci am Kudamm in Berlin-Charlottenburg',
        caption: 'Spritz',
      },
      abend: {
        alt: 'Wein und Aperitivo auf der Terrasse von Casa Bellucci am Kurfürstendamm am Abend',
        caption: 'Vino',
      },
      terrace: {
        alt: 'Abendliche Terrasse von Casa Bellucci am Kudamm mit Gästen beim Aperitivo',
        caption: 'Sera',
      },
    },
  },

  // 4. Zeiten und Reservierung
  reservation: {
    eyebrow: 'Terrasse reservieren',
    h2: {
      pre: 'Terrasse am ',
      em: 'Kudamm',
      post: '',
    },
    lede:
      'Casa Bellucci liegt am Kurfürstendamm 63 in Berlin-Charlottenburg. Die Sommerterrasse öffnet bei gutem Wetter ab dem Morgen. Reservieren Sie online über Quandoo oder telefonisch und vermerken Sie gern Ihren Wunsch nach einem Tisch draußen.',
    addressLine1: 'Kurfürstendamm 63',
    addressLine2: '10707 Berlin · Charlottenburg',
    terraceLabel: 'Terrasse',
    terraceTime: 'Terrazza ab 09:00 Uhr',
    terraceNote: 'Bei gutem Wetter, Wunschtisch draußen angeben',
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
      question: 'Hat das Restaurant am Kurfürstendamm eine Terrasse?',
      answer:
        'Ja. Casa Bellucci hat eine Sommerterrasse direkt am Kurfürstendamm 63 in Berlin-Charlottenburg. Bei gutem Wetter sitzen Sie hier draußen am Boulevard, vom Frühstück am Morgen bis zum Aperitivo am Abend.',
    },
    {
      question: 'Kann man die Terrasse reservieren?',
      answer:
        'Ja. Sie können online über Quandoo oder telefonisch unter +49 162 3009925 einen Tisch reservieren. Vermerken Sie dabei gern Ihren Wunsch nach einem Platz auf der Terrasse, dann reservieren wir gezielt draußen. Besonders an warmen Abenden empfehlen wir eine frühe Reservierung.',
    },
    {
      question: 'Gibt es draußen Plätze im Schatten?',
      answer:
        'Ja. Die Terrasse hat sonnige Plätze und schattige Plätze unter den Markisen. So sitzen Sie in der Mittagssonne oder kühler im Schatten, ganz nach Wunsch. Geben Sie Ihren Wunsch bei der Reservierung an, dann halten wir den passenden Tisch frei.',
    },
    {
      question: 'Wann ist die beste Zeit für die Sonnenterrasse?',
      answer:
        'Am Vormittag ist das Licht über dem Kudamm mild und ruhig, ideal zum Frühstück. Die Mittagsstunden sind am hellsten und sonnigsten. Am späten Nachmittag kommt die goldene Stunde, die beste Zeit für einen Aperitivo draußen. Die Terrasse passt also vom Morgen bis zum Abend.',
    },
    {
      question: 'Kann man auf der Terrasse draußen essen in Berlin?',
      answer:
        'Ja. Auf der Terrasse von Casa Bellucci essen Sie draußen am Kudamm, mitten in Charlottenburg-Wilmersdorf. Es gibt das volle Angebot von Frühstück über Mittagstisch bis zum Dinner, dazu Aperitivo und Wein. Bei schlechtem Wetter wechseln Sie einfach in den Innenraum.',
    },
    {
      question: 'Wo ist die Terrasse und wie komme ich hin?',
      answer:
        'Die Terrasse liegt am Kurfürstendamm 63, 10707 Berlin-Charlottenburg, in Charlottenburg-Wilmersdorf. Sie ist zentral am Kudamm und gut mit Bus und U-Bahn erreichbar. Die Lage am Boulevard macht die Sonnenterrasse zu einem ruhigen Platz mitten in der Stadt.',
    },
  ],

  // The page-related cross-links sentence (the leading/trailing prose between links)
  related: {
    pre: 'Mittags auf der Terrasse zum ',
    lunchLink: 'Business Lunch in Charlottenburg',
    afterLunch: '. Abends ein ',
    barLink: 'Aperitivo am Kudamm',
    afterBar: ' und dazu unser ',
    italienischLink: 'italienisches Restaurant in Charlottenburg',
    afterItalienisch: '.',
  },
} as const;

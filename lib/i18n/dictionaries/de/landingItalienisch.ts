// Page-specific copy for the Italienisch landing
// (/italienisches-restaurant-berlin-charlottenburg/).
// German source of truth; EN/IT slices re-export this until translated.
// Shared hours/info/actions/mapCorner live in `common`, not here.
export const landingItalienisch = {
  // 1. Hero / Intro
  hero: {
    eyebrow: 'Italienisch am Kudamm',
    h1Pre: 'Italienisches Restaurant in ',
    h1Em: 'Berlin-Charlottenburg',
    lede:
      'Casa Bellucci am Kurfürstendamm 63 ist ein italienisches Restaurant für den ganzen Tag. Frühstück, Lunch auf der Terrasse, Dinner und Bar, mitten in der City West. Vom ersten Espresso bis zum späten Aperitivo, an einem Ort.',
    viewMenu: 'Karte ansehen →',
    mediaLabel: 'Frühstück, Lunch und Abend bei Casa Bellucci am Kudamm',
    morningAlt: 'Italienisches Frühstück bei Casa Bellucci am Kudamm in Berlin-Charlottenburg',
    morningCaption: 'Frühstück',
    middayAlt: 'Hausgemachte Pasta zum Lunch im italienischen Restaurant Casa Bellucci',
    middayCaption: 'Mittag',
    eveningAlt: 'Gedeckter Terrassentisch mit goldener Tischlampe in warmer Abendstimmung im italienischen Restaurant Casa Bellucci am Kudamm in Berlin-Charlottenburg',
    eveningCaption: 'Abend',
  },

  // 2. Lage und Konzept
  location: {
    eyebrow: 'Lage und Konzept',
    h2Pre: 'Mitten am ',
    h2Em: 'Kudamm',
    h2Post: ', in Charlottenburg',
    p1:
      'Unser italienisches Restaurant in Berlin-Charlottenburg liegt am Kurfürstendamm 63, 10707 Berlin, im Herzen der City West. Zwischen Shopping am Kudamm und einem ruhigen Platz auf der Terrasse ist Casa Bellucci eine Adresse für den ganzen Tag, vom Frühstück bis zum späten Abend.',
    p2:
      'Das All-Day-Konzept verbindet vier Momente unter einem Dach. Frühstück und Brunch am Morgen, Lunch auf der Sommerterrasse, Dinner am Abend und dazu eine eigene Bar für Aperitivo und einen Drink danach. Ob Geschäftsessen am Mittag, ein gemütliches Essen mit Familie oder ein Glas Wein solo an der Bar, hier passt jeder Anlass am Kudamm.',
    photoAlt: 'Innenraum von Casa Bellucci, einem Italiener in der City West am Kudamm in Charlottenburg',
    captionSpan: 'Charlottenburg',
    captionStrong: 'Ambiente',
  },

  // 3. Küche
  kitchen: {
    eyebrow: 'Aus der Küche',
    h2Pre: 'Italienische Küche, ',
    h2Em: 'italienisch & mediterran',
    dishes: [
      {
        namePre: 'Pasta fatta a ',
        nameEm: 'mano',
        namePost: '',
        desc:
          'Frische Pasta machen wir täglich von Hand. Dazu fangfrischen Fisch vom Großmarkt, italienisch und mediterran interpretiert.',
      },
      {
        namePre: 'Tagliatelle al ',
        nameEm: 'Tartufo',
        namePost: '',
        desc: 'Frische Bandnudeln mit Trüffel, ein Klassiker der Karte.',
      },
      {
        namePre: 'Spaghetti alle ',
        nameEm: 'Vongole',
        namePost: '',
        desc: 'Venusmuscheln, Knoblauch, Petersilie und ein Spritzer Weißwein.',
      },
      {
        namePre: 'Branzino alla ',
        nameEm: 'Griglia',
        namePost: '',
        desc: 'Gegrillter Wolfsbarsch, schlicht und auf den Punkt zubereitet.',
      },
      {
        namePre: 'Burrata di ',
        nameEm: 'Andria',
        namePost: '',
        desc: 'Cremige Burrata als leichter Start in das italienische Essen.',
      },
      {
        namePre: 'Vitello ',
        nameEm: 'Tonnato',
        namePost: ' und Tiramisù della Casa',
        desc: 'Vitello Tonnato als Vorspeise und zum Abschluss unser hausgemachtes Tiramisù.',
      },
    ],
    toMenu: 'Karte ansehen',
    photoAlt: 'Italienisches Gericht der italienischen Küche bei Casa Bellucci am Kudamm',
    captionSpan: 'Handgemacht',
    captionStrong: 'Pasta mit Kaviar',
  },

  // 3b. Wein und Italien
  wine: {
    eyebrow: 'Weinkarte',
    headingPre: 'Weine aus ganz ',
    headingEm: 'Italien',
    headingPost: '',
    lede: 'Unsere Weinkarte hat ihren Schwerpunkt in Süditalien, rund 65 Prozent der Weine kommen von dort. Kuratiert von Sommelier Marco, glasweise und täglich wechselnd.',
    pdfLink: 'Weinkarte ansehen',
    regions: [
      {
        label: 'Sicilia',
        name: 'Rotweine und Vulkanweine',
        copy: 'Vulkanische Mineralität vom Ätna, kräftige rote Trauben und süße Klassiker. Die Insel bestimmt den Charakter der Karte.',
        list: [
          { name: 'Etna Bianco DOC, Planeta', v: '2022 · Sicilia' },
          { name: "Nero d'Avola, Donnafugata", v: '2021 · Sicilia' },
          { name: 'Etna Rosso, Terre Nere', v: '2021 · Sicilia' },
        ],
      },
      {
        label: 'Dolci & Liquorosi',
        name: 'Süßweine zum Abschluss',
        copy: 'Süßweine und Liquorosi, wie sie aus dem Süden Italiens kommen. Vom Passito der Insel Pantelleria bis zum Marsala aus dem Westen.',
        list: [
          { name: 'Passito di Pantelleria, Ben Ryé', v: 'Donnafugata · Süßwein' },
          { name: 'Marsala Superiore, Florio', v: 'Sicilia' },
          { name: 'Limonata Siciliana', v: 'Amalfi-Zitronen, alkoholfrei' },
        ],
      },
      {
        label: 'Bollicine & Norditalia',
        name: 'Schaumweine und Weißweine',
        copy: 'Die Karte reicht bis in den Norden Italiens. Schaumweine und frische Weißweine ergänzen die süditalienische Basis.',
        list: [
          { name: 'Franciacorta Brut', v: "Ca' del Bosco" },
          { name: 'Falanghina del Sannio', v: 'Mustilli · 2022, Kampanien' },
          { name: 'Vermentino di Sardegna', v: 'Argiolas · 2023' },
        ],
      },
    ],
  },

  // 4. Atmosphäre und Angebot
  atmosphere: {
    photoAlt: 'Gemütliche und gehobene Atmosphäre im italienischen Restaurant Casa Bellucci in Berlin-Charlottenburg',
    captionSpan: 'Am Kudamm',
    captionStrong: 'Terrasse',
    eyebrow: 'Atmosphäre und Angebot',
    h2Pre: 'Gehoben und ',
    h2Em: 'gemütlich',
    h2Post: ' zugleich',
    p1:
      'Casa Bellucci ist gehoben und gemütlich zugleich, casual genug für den Alltag und schön genug für den besonderen Abend. Drinnen wie auf der Sommerterrasse am Kudamm sitzen Gruppen, Familien und Gäste, die solo auf einen Aperitivo vorbeikommen.',
    p2:
      'Die eigene Bar ist der Treffpunkt für Aperitivo und Drinks, von früh bis spät. Auf der Speisekarte stehen vegetarische und vegane Optionen. Das italienische Restaurant ist rollstuhlgerecht und hundefreundlich, gut geeignet für Gruppen und ein entspanntes Essen in Charlottenburg.',
    p3:
      'Am Abend trägt das Haus eine ruhige, gehobene Atmosphäre mit Kerzenlicht. Das passt für ein Dinner zu zweit ebenso wie für Geburtstage, Jubiläen und besondere Anlässe.',
    viewTerrace: 'Terrasse ansehen →',
  },

  // 5. Galerie
  gallery: {
    eyebrow: 'Galerie am Kudamm',
    h2Pre: 'Einblicke ins ',
    h2Em: 'italienische Restaurant',
    lede:
      'Eindrücke aus unserem italienischen Restaurant am Kurfürstendamm in Berlin-Charlottenburg, von der Sala über die Terrasse bis zur Bar.',
    toGallery: 'Zur ganzen Galerie →',
  },

  // 6. Öffnungszeiten und Anfahrt
  directions: {
    eyebrow: 'Öffnungszeiten und Anfahrt',
    h2Pre: 'Besuch am ',
    h2Em: 'Kudamm',
    lede:
      'Der Italiener mitten in der City West. Reservieren Sie online oder telefonisch, Walk-ins sind besonders an der Bar willkommen.',
    addressLine1: 'Kurfürstendamm 63',
    addressLine2: '10707 Berlin · Charlottenburg',
    mapLabel: 'Lage auf Karte',
  },

  // 7. FAQ
  faqHeadingEyebrow: 'Häufige Fragen',
  faqHeadingPre: 'Häufige ',
  faqHeadingEm: 'Fragen',
  faqs: [
    {
      question: 'Wo ist Casa Bellucci in Charlottenburg?',
      answer:
        'Casa Bellucci liegt am Kurfürstendamm 63, 10707 Berlin-Charlottenburg, mitten in der City West direkt am Kudamm. Das italienische Restaurant ist gut zu Fuß, mit Bus und U-Bahn erreichbar und rollstuhlgerecht.',
    },
    {
      question: 'Hat das italienische Restaurant am Kudamm eine Terrasse?',
      answer:
        'Ja. Casa Bellucci hat eine Sommerterrasse direkt am Kudamm, die bei gutem Wetter geöffnet ist. Dort gibt es Frühstück, Lunch und am Abend Aperitivo. Im Haus erwartet Sie zusätzlich eine eigene Bar.',
    },
    {
      question: 'Gibt es Frühstück bei Casa Bellucci?',
      answer:
        'Ja. Als All-Day-Restaurant servieren wir Frühstück ab 09:00 Uhr, dazu Lunch, Dinner und Aperitivo. Espresso, Croissants und leichte Teller am Morgen, Pasta und Fisch über den Tag.',
    },
    {
      question: 'Kann man bei Casa Bellucci online reservieren?',
      answer:
        'Ja. Sie können bequem online über unser Reservierungsmodul einen Tisch buchen oder uns telefonisch unter +49 162 3009925 erreichen, etwa für größere Gruppen oder kurzfristige Wünsche.',
    },
    {
      question: 'Welche Weine gibt es bei Casa Bellucci?',
      answer:
        'Die Weinkarte ist von Sommelier Marco kuratiert und legt den Schwerpunkt auf Süditalien. Dazu gehören unter anderem Etna Bianco von Planeta, Nero d\'Avola, Etna Rosso, Passito di Pantelleria und Marsala. Rund 65 Prozent der Auswahl stammen aus Süditalien, ergänzt um Weine aus dem übrigen Italien.',
    },
    {
      question: 'Eignet sich Casa Bellucci für ein romantisches Dinner oder besondere Anlässe?',
      answer:
        'Ja. Am Abend hat Casa Bellucci eine ruhige, gehobene Atmosphäre mit Kerzenlicht. Das passt für ein romantisches Dinner zu zweit, für ein Date in Berlin und für besondere Anlässe wie Geburtstage oder Jubiläen.',
    },
    {
      question: 'Wann hat Casa Bellucci geöffnet?',
      answer:
        'Casa Bellucci ist Montag bis Samstag von 09:00 bis 00:00 Uhr geöffnet und Sonntag von 09:00 bis 18:00 Uhr.',
    },
  ],

  // Related links footer (subpage-related)
  related: {
    pre: 'Mehr zum Haus auf der Startseite,',
    homeLink: 'Casa Bellucci',
    mid2: '. Am Morgen',
    fruehstueckLink: 'Frühstück und Brunch am Kudamm',
    mid3: 'und für den Aperitivo unsere',
    barLink: 'Bar am Kudamm',
    post: '.',
  },
} as const;

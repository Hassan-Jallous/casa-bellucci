// Page-specific copy for the Frühstück & Brunch landing page.
// German source of truth, authored `as const`. EN/IT slices re-export this until
// translated. Shared labels (hours, info, actions, mapCorner) live in `common`.
export const landingFruehstueck = {
  // 1. Hero / Intro
  hero: {
    eyebrow: 'Colazione am Kudamm',
    h1: {
      pre: 'Frühstück und Brunch in ',
      em: 'Charlottenburg',
      post: '',
    },
    lede:
      'Casa Bellucci serviert italienisches Frühstück in Berlin-Charlottenburg, am Kurfürstendamm 63. „La Dolce Mattina“ heißt der ruhige Start in den Tag, mit Cornetto statt Croissant, Espresso Bellucci und einer fruchtigen Note aus Amalfi-Zitronen und Tarocco-Orangen.',
    para:
      'Wer in Charlottenburg-Wilmersdorf ein Frühstück am Kudamm sucht, findet hier einen Platz drinnen oder auf der Sommerterrasse am Morgen.',
    viewMenu: 'Karte ansehen →',
    mediaLabel: 'Italienisches Frühstück bei Casa Bellucci',
    photos: {
      colazione: {
        alt: 'Italienisches Frühstück bei Casa Bellucci in Berlin-Charlottenburg mit Cornetto und Espresso',
        caption: 'Frühstück',
      },
      mattina: {
        alt: 'Frühstückstisch am Kudamm bei Casa Bellucci am Morgen',
        caption: 'Morgen',
      },
      terrazza: {
        alt: 'Sommerterrasse von Casa Bellucci am Kudamm im Morgenlicht',
        caption: 'Terrasse',
      },
    },
  },

  // 2. Italienisches Frühstück
  italian: {
    eyebrow: 'Italienisches Frühstück',
    h2: {
      pre: 'La Dolce Mattina, ',
      em: 'italienisch',
      post: '',
    },
    para1:
      'Ein italienisches Frühstück ist leicht und süß. Statt großem Teller gibt es bei uns Cornetto und Caffè, dazu kleine warme Gerichte. Der Cornetto ist die italienische Variante des Croissants, hausgemacht und täglich frisch gebacken. Dazu der Espresso Bellucci oder ein Cappuccino.',
    para2:
      'Wer mehr mag, wählt Uova alla Fiorentina mit pochierten Eiern, Spinat und Sauce Hollandaise, einen Avocado Toast Mediterraneo oder Pancakes con Frutti di Bosco. Frisch gepresst kommt die Spremuta d\'Arancia aus Tarocco-Orangen, dazu die Limonata Siciliana mit Amalfi-Zitronen. Das macht das italienische Frühstück in Berlin zu einem ruhigen Start am Kudamm.',
    daylineLabel: 'Gerichte vom italienischen Frühstück',
    moments: [
      {
        time: 'Uova',
        title: 'Eier am Morgen',
        copy: 'Uova alla Fiorentina mit pochierten Eiern, Spinat und Sauce Hollandaise. Dazu Avocado Toast Mediterraneo, frisch belegt.',
      },
      {
        time: 'Dolce',
        title: 'Süß und warm',
        copy: 'Pancakes con Frutti di Bosco mit Waldbeeren und unser Cornetto, hausgemacht und täglich frisch gebacken.',
      },
      {
        time: 'Caffè',
        title: 'Italienischer Kaffee',
        copy: 'Espresso Bellucci und Cappuccino, dazu Spremuta d\'Arancia aus Tarocco-Orangen und Limonata Siciliana mit Amalfi-Zitronen.',
      },
    ],
    mediaLabel: 'Gerichte vom Frühstück bei Casa Bellucci',
    photos: {
      cornetto: {
        alt: 'Beeren-Spritz-Drinks auf dem Frühstückstisch bei Casa Bellucci am Kudamm in Berlin-Charlottenburg',
        caption: 'Spritz',
      },
      caffe: {
        alt: 'Frisches Gebäck und Kaffee zum Frühstück bei Casa Bellucci am Kudamm',
        caption: 'Kaffee',
      },
      sala: {
        alt: 'Ruhige Atmosphäre zum Frühstück im Innenraum von Casa Bellucci in Charlottenburg',
        caption: 'Saal',
      },
    },
  },

  // 3. Brunch am Wochenende
  brunch: {
    eyebrow: 'Brunch am Wochenende',
    h2: {
      pre: 'Brunch in ',
      em: 'Charlottenburg',
      post: '',
    },
    para1:
      'Am Wochenende läuft das Frühstück länger und wird zum Brunch. Statt bis 12:00 Uhr servieren wir bis 14:00 Uhr, in Ruhe und ohne Eile. So bleibt Zeit für einen zweiten Cappuccino und einen langen Vormittag in Charlottenburg.',
    para2:
      'Bei gutem Wetter öffnet die Sommerterrasse am Kudamm schon am Morgen. Brunch draußen, mit Cornetto, Eiern und frisch gepresstem Orangensaft, ist ein guter Grund, das Wochenende am Kudamm zu beginnen. Für einen Tisch zum Brunch empfehlen wir eine Reservierung.',
    mediaLabel: 'Brunch am Wochenende bei Casa Bellucci',
    photos: {
      terrasse: {
        alt: 'Brunch auf der Sommerterrasse von Casa Bellucci am Kudamm in Charlottenburg',
        caption: 'Garten',
      },
      weekend: {
        alt: 'Smoothies und eine Veggie-Bowl beim Brunch bei Casa Bellucci am Kudamm in Berlin-Charlottenburg',
        caption: 'Smoothies',
      },
      brunch: {
        alt: 'Italienischer Brunch in Berlin-Charlottenburg bei Casa Bellucci',
        caption: 'Bowl',
      },
    },
  },

  // 4. Zeiten und Reservierung
  reservation: {
    eyebrow: 'Zeiten und Reservierung',
    h2: {
      pre: 'Frühstück am ',
      em: 'Kudamm',
      post: '',
    },
    lede:
      'Casa Bellucci liegt am Kurfürstendamm 63 in Berlin-Charlottenburg. Frühstück gibt es täglich ab 09:00 Uhr, am Wochenende als Brunch bis 14:00 Uhr. Reservieren Sie online über Quandoo oder telefonisch.',
    addressLine1: 'Kurfürstendamm 63',
    addressLine2: '10707 Berlin · Charlottenburg',
    breakfastLabel: 'Frühstück',
    breakfastTime: 'Colazione 09:00 - 12:00 Uhr',
    breakfastNote: 'Wochenende Brunch bis 14:00 Uhr',
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
      question: 'Wann gibt es Frühstück bei Casa Bellucci?',
      answer:
        'Frühstück gibt es bei Casa Bellucci täglich von 09:00 bis 12:00 Uhr. Am Wochenende läuft das Frühstück länger und wird zum Brunch, dann servieren wir bis 14:00 Uhr. Casa Bellucci liegt am Kurfürstendamm 63 in Berlin-Charlottenburg.',
    },
    {
      question: 'Gibt es am Wochenende Brunch in Charlottenburg?',
      answer:
        'Ja. Am Wochenende wird aus dem Frühstück ein Brunch, mit längeren Zeiten bis 14:00 Uhr. Bei gutem Wetter öffnet die Sommerterrasse am Kudamm schon am Morgen, sodass der Brunch in Charlottenburg auch draußen stattfinden kann.',
    },
    {
      question: 'Was ist italienisches Frühstück?',
      answer:
        'Ein italienisches Frühstück ist leicht und süß. Statt einem großen Teller gibt es Cornetto und Caffè, also die italienische Variante des Croissants mit Espresso oder Cappuccino. Bei Casa Bellucci ergänzen Uova alla Fiorentina, Avocado Toast Mediterraneo und Pancakes con Frutti di Bosco das Angebot, dazu frisch gepresste Tarocco-Orangen und Limonata Siciliana mit Amalfi-Zitronen.',
    },
    {
      question: 'Kann man fürs Frühstück reservieren?',
      answer:
        'Ja. Sie können online über Quandoo einen Tisch zum Frühstück oder Brunch reservieren oder uns telefonisch unter +49 162 3009925 erreichen. Besonders am Wochenende empfehlen wir eine Reservierung.',
    },
    {
      question: 'Wo am Kudamm gibt es Frühstück?',
      answer:
        'Frühstück am Kudamm gibt es bei Casa Bellucci am Kurfürstendamm 63, 10707 Berlin-Charlottenburg, in Charlottenburg-Wilmersdorf. Das Restaurant liegt zentral am Kudamm und ist gut mit Bus und U-Bahn erreichbar.',
    },
  ],

  // The page-related cross-links sentence (the leading/trailing prose between links)
  related: {
    pre: 'Mehr zum Haus auf der Startseite, ',
    homeLink: 'Casa Bellucci',
    afterHome: '. Tagsüber das ',
    italienischLink: 'italienische Restaurant in Charlottenburg',
    afterItalienisch: ' und für den Drink danach unsere ',
    barLink: 'Bar mit Aperitivo am Kudamm',
    afterBar: '.',
  },
} as const;

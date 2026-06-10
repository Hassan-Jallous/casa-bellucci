// Page-specific copy for the Bar & Aperitivo landing
// (components/sections/BarLanding.tsx). German source of truth. EN/IT slices
// re-export this until translated. Shared, repeated labels live in `common`.
// Values copied verbatim from the component.
export const landingBar = {
  // 1. Hero / Intro
  hero: {
    eyebrow: 'Bar & Aperitivo am Kudamm',
    h1Pre: 'Bar, Weinbar und Aperitivo am ',
    h1It: 'Kudamm',
    h1Post: '',
    lede:
      'Casa Bellucci ist eine Restaurant-Bar am Kurfürstendamm 63 in Berlin-Charlottenburg. An der Bar gibt es Aperitivo, Cocktails und italienischen Wein, von früh bis spät. Eine entspannte Adresse für ein Glas in der City West, am Tresen oder auf der Sommerterrasse.',
    p2: 'Gehoben und gemütlich zugleich, casual genug für nach der Arbeit und schön genug für den langen Abend.',
    mediaAria: 'Bar, Aperitivo und Terrasse bei Casa Bellucci',
    photo1Alt:
      'Champagner im Eiskübel an der Bar von Casa Bellucci am Kudamm in Berlin-Charlottenburg',
    photo1Caption: 'Champagner',
    photo2Alt: 'Glas italienischer Wein an der Bar von Casa Bellucci in Charlottenburg',
    photo2Caption: 'Wein',
    photo3Alt: 'Sommerterrasse von Casa Bellucci am Kudamm am Abend',
    photo3Caption: 'Terrasse',
  },

  // drinks-moments array (the .dayline)
  drinks: [
    {
      time: 'Aperitivo',
      title: 'Aperitivo Bellucci',
      copy: 'Unser Haus-Aperitivo aus Bitter, Zitrus und Prosecco. Spritzig, leicht herb, gemacht für den frühen Abend an der Bar oder auf der Terrasse.',
    },
    {
      time: 'Cocktails',
      title: 'Klassisch gemixt',
      copy: 'Cocktails von Negroni bis Spritz, dazu Wein, Bier und Kaffee. Die Bar ist Treffpunkt von früh bis spät, casual und einladend.',
    },
    {
      time: 'Vino',
      title: 'Glasweise aus Italien',
      copy: 'Offene Weine, die täglich wechseln. Schwerpunkt Süditalien, kuratiert von Sommelier Marco.',
    },
  ],

  // 2. Aperitivo und Cocktails
  aperitivo: {
    eyebrow: 'Aperitivo und Cocktails',
    h2Pre: 'Aperitivo Bellucci und die ',
    h2It: 'Bar',
    h2Post: '',
    p1: 'Aperitivo Berlin beginnt bei uns am frühen Abend. Der Aperitivo Bellucci verbindet Bitter, Zitrus und Prosecco zu einem leicht herben, spritzigen Auftakt. Dazu reicht die Bar Cocktails, Wein, Bier und Kaffee, also alles für den Aperitivo am Kudamm und den Drink danach.',
    p2: 'Als Cocktailbar in Charlottenburg bleiben wir bei klaren Klassikern statt Show. Negroni, Spritz und saisonale Drinks, sauber gemixt. So ist die Bar ein Ort für ein schnelles Glas am Tresen ebenso wie für einen langen Abend am Kudamm.',
    daylineAria: 'An der Bar von Casa Bellucci',
    mediaAria: 'Aperitivo und Cocktails bei Casa Bellucci',
    photo1Alt:
      'Aperitivo Bellucci, Haus-Aperitivo aus Bitter, Zitrus und Prosecco bei Casa Bellucci',
    photo1Caption: 'Spritz',
    photo2Alt: 'Aperol Spritz und Aperitivo-Drinks auf der Sommerterrasse von Casa Bellucci am Kudamm in Berlin-Charlottenburg',
    photo2Caption: 'Aperitif',
    photo3Alt: 'Cozy Bar-Atmosphäre bei Casa Bellucci am Kudamm',
    photo3Caption: 'Bar',
  },

  // 3. Wein (Weinbar)
  wine: {
    eyebrow: 'Weinkarte',
    h2Pre: 'Weinbar am ',
    h2It: 'Kudamm',
    h2Post: '',
    lede:
      'Als Weinbar in Charlottenburg legen wir den Schwerpunkt auf Süditalien. Kuratiert von Sommelier Marco, glasweise täglich wechselnd.',
    pdfLink: 'Weinkarte ansehen',
    regions: {
      sicilia: {
        label: 'Sicilia',
        title: 'Rotweine und Vulkanweine',
        copy: 'Vulkanische Mineralität vom Ätna und kräftige rote Trauben. Die Insel bestimmt den Charakter unserer offenen Weine.',
        rows: [
          { name: 'Etna Bianco DOC', note: 'Sicilia · glasweise' },
          { name: "Nero d'Avola", note: 'Sicilia · glasweise' },
          { name: 'Etna Rosso', note: 'Sicilia · glasweise' },
        ],
      },
      dolci: {
        label: 'Dolci & Liquorosi',
        title: 'Süßweine zum Abschluss',
        copy: 'Süßweine und Liquorosi, wie sie aus dem Süden Italiens kommen. Vom Passito der Insel Pantelleria bis zum Marsala aus dem Westen.',
        rows: [
          { name: 'Passito di Pantelleria', note: 'Sicilia · Süßwein' },
          { name: 'Marsala Superiore', note: 'Sicilia' },
        ],
      },
      bollicine: {
        label: 'Bollicine',
        title: 'Für den Aperitivo',
        copy: 'Schaumweine als spritziger Auftakt. Sie passen zum Aperitivo an der Bar und zum Anstoßen auf der Terrasse.',
        rows: [
          { name: 'Franciacorta Brut', note: 'Lombardia · Spumante' },
          { name: 'Prosecco im Glas', note: 'Veneto · glasweise' },
        ],
      },
    },
  },

  // 4. Live-DJ und Wochenende
  music: {
    eyebrow: 'Live-DJ und Wochenende',
    h2Pre: 'Bar mit Musik in ',
    h2It: 'Berlin',
    h2Post: '',
    p1: 'Am Wochenende legt bei uns ein Live-DJ auf. Wer eine Bar mit Musik in Berlin sucht, findet hier ruhige Sounds zum Aperitivo und am Abend. Das bleibt eine Restaurant-Bar-Stimmung, kein Club. Die Musik trägt den Abend, ohne das Gespräch zu übertönen.',
    p2: 'So wird Casa Bellucci am Wochenende zur Bar mit DJ am Kudamm, casual und entspannt. Im Sommer zieht sich der Aperitivo auf die Terrasse, unter Schirme am Tag und bei Kerzenlicht am Abend. Auch als Restaurant mit Musik in Berlin passt das Haus für einen langen Abend zu zweit oder in der Gruppe.',
    crossPre: 'Mehr zur Küche am Abend auf unserer Seite zum ',
    crossLinkItalienisch: 'italienischen Restaurant in Charlottenburg',
    crossPost: '.',
    mediaAria: 'Wochenende, Musik und Terrasse bei Casa Bellucci',
    photo1Alt: 'Gelber Limoncello-Digestif am Abend an der Bar von Casa Bellucci am Kudamm in Berlin-Charlottenburg',
    photo1Caption: 'Limoncello',
    photo2Alt:
      'Warme abendliche Bar-Atmosphäre mit Kristalllüster, grüner Samtbank und Tresen bei Casa Bellucci in Berlin-Charlottenburg',
    photo2Caption: 'Abend',
    photo3Alt:
      'Aperitivo auf der Sommerterrasse von Casa Bellucci am Kudamm',
    photo3Caption: 'Im Freien',
  },

  // 5. Öffnungszeiten und Reservierung (Contact)
  contact: {
    eyebrow: 'Öffnungszeiten und Reservierung',
    h2Pre: 'An die Bar am ',
    h2It: 'Kudamm',
    h2Post: '',
    lede:
      'Casa Bellucci liegt am Kurfürstendamm 63 in Berlin-Charlottenburg, geöffnet täglich ab 09:00 Uhr, Montag bis Samstag bis 00:00 Uhr. Reservieren Sie online oder telefonisch, Walk-ins sind besonders an der Bar willkommen.',
    addressLine1: 'Kurfürstendamm 63',
    addressLine2: '10707 Berlin · Charlottenburg',
    barLabel: 'An der Bar',
    barLine1: 'Aperitivo ab dem frühen Abend',
    barLine2: 'Live-DJ am Wochenende',
    mapAria: 'Lage von Casa Bellucci auf der Karte',
  },

  // 6. FAQ
  faqHeadingEyebrow: 'Häufige Fragen',
  faqHeadingPre: 'Häufige ',
  faqHeadingIt: 'Fragen',
  faqHeadingPost: '',
  related: {
    pre: 'Mehr zum Haus auf der Startseite, ',
    linkHome: 'Casa Bellucci',
    mid1: '. Entdecken Sie unser ',
    linkItalienisch: 'italienisches Restaurant in Charlottenburg',
    mid2: '. Zum Feiern in der Gruppe planen wir ',
    linkEvents: 'Firmenfeiern und Events in Charlottenburg',
    mid3: '. Im Sommer geht der Aperitivo auf unsere ',
    linkTerrasse: 'Terrasse am Kudamm',
    mid4: '. Am Morgen lockt unser ',
    linkFruehstueck: 'Frühstück und Brunch am Kudamm',
    post: '.',
  },

  faqs: [
    {
      question: 'Hat Casa Bellucci eine Bar in Charlottenburg?',
      answer:
        'Ja. Casa Bellucci ist eine Restaurant-Bar am Kurfürstendamm 63 in Berlin-Charlottenburg. Die eigene Bar serviert Aperitivo, Cocktails, Wein, Bier und Kaffee, von früh bis spät. Die Atmosphäre ist gehoben und gemütlich zugleich, casual genug für ein schnelles Glas am Tresen.',
    },
    {
      question: 'Gibt es Aperitivo am Kudamm?',
      answer:
        'Ja. Aperitivo gehört bei uns zum frühen Abend. Der Aperitivo Bellucci verbindet Bitter, Zitrus und Prosecco zu einem leicht herben, spritzigen Auftakt. Dazu passen Spritz, Negroni und offene Weine, an der Bar oder auf der Sommerterrasse am Kudamm.',
    },
    {
      question: 'Wo gibt es eine gute Bar am Kudamm?',
      answer:
        'Casa Bellucci ist eine Restaurant-Bar am Kurfürstendamm 63 in Berlin-Charlottenburg. An der Bar gibt es Aperitivo, Cocktails, italienischen Wein, Bier und Kaffee, von früh bis spät. Als Cocktailbar in Charlottenburg bleibt es bei klaren Klassikern wie Negroni und Spritz, am Wochenende mit ruhiger Live-Musik. Walk-ins sind besonders an der Bar willkommen.',
    },
    {
      question: 'Welche Weine gibt es an der Bar?',
      answer:
        'Unsere Weinkarte legt den Schwerpunkt auf Süditalien und ist von Sommelier Marco kuratiert. Glasweise und täglich wechselnd gibt es unter anderem Etna Bianco, Nero d\'Avola, Etna Rosso, dazu Franciacorta, Prosecco sowie Süßweine wie Passito di Pantelleria und Marsala.',
    },
    {
      question: 'Kann man an der Bar ohne Reservierung kommen?',
      answer:
        'Ja. Walk-ins sind besonders an der Bar willkommen. Für einen Tisch am Abend empfehlen wir eine Reservierung, telefonisch unter +49 162 3009925 oder online über Quandoo. Casa Bellucci ist täglich ab 09:00 Uhr geöffnet, Montag bis Samstag bis 00:00 Uhr.',
    },
  ],
} as const;

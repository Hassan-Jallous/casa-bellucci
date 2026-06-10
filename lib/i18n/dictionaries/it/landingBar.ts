// Page-specific copy for the Bar & Aperitivo landing
// (components/sections/BarLanding.tsx). Italian translation of the German
// source of truth in ../de/landingBar.ts. Same structure, keys and array
// lengths. Shared, repeated labels live in `common`.
export const landingBar = {
  // 1. Hero / Intro
  hero: {
    eyebrow: 'Bar & Aperitivo sul Kudamm',
    h1Pre: 'Bar, enoteca e aperitivo sul ',
    h1It: 'Kudamm',
    h1Post: '',
    lede:
      'Casa Bellucci è un ristorante bar al Kurfürstendamm 63 a Berlino-Charlottenburg. Al bar trovi aperitivo, cocktail e vino italiano, da mattina a sera. Un indirizzo rilassato per un bicchiere nella City West, al bancone o sulla terrazza estiva.',
    p2: 'Raffinato e accogliente allo stesso tempo, abbastanza casual per il dopo lavoro e abbastanza bello per la lunga serata.',
    mediaAria: 'Bar, aperitivo e terrazza da Casa Bellucci',
    photo1Alt:
      'Bottiglia di Champagne in un secchiello del ghiaccio argentato al bar di Casa Bellucci sul Kudamm a Berlino-Charlottenburg',
    photo1Caption: 'Bollicine',
    photo2Alt: 'Bicchiere di vino italiano al bar di Casa Bellucci a Charlottenburg',
    photo2Caption: 'Vino',
    photo3Alt: 'Terrazza estiva di Casa Bellucci sul Kudamm la sera',
    photo3Caption: 'Terrazza',
  },

  // drinks-moments array (the .dayline)
  drinks: [
    {
      time: 'Aperitivo',
      title: 'Aperitivo Bellucci',
      copy: 'Il nostro aperitivo della casa a base di bitter, agrumi e Prosecco. Frizzante, leggermente amaro, pensato per il primo serale al bar o in terrazza.',
    },
    {
      time: 'Cocktails',
      title: 'Miscelati alla classica',
      copy: 'Cocktail dal Negroni allo Spritz, con vino, birra e caffè. Il bar è un punto d\'incontro da mattina a sera, casual e invitante.',
    },
    {
      time: 'Vino',
      title: 'Al bicchiere dall\'Italia',
      copy: 'Vini al bicchiere che cambiano ogni giorno. Focus sul Sud Italia, curati dal Sommelier Marco.',
    },
  ],

  // 2. Aperitivo und Cocktails
  aperitivo: {
    eyebrow: 'Aperitivo e cocktail',
    h2Pre: 'Aperitivo Bellucci e il ',
    h2It: 'bar',
    h2Post: '',
    p1: 'L\'aperitivo da noi comincia nel primo serale. L\'Aperitivo Bellucci unisce bitter, agrumi e Prosecco in un avvio leggermente amaro e frizzante. Accanto, il bar serve cocktail, vino, birra e caffè, quindi tutto per l\'aperitivo sul Kudamm e il drink successivo.',
    p2: 'Come cocktail bar a Charlottenburg restiamo sui classici netti invece dello spettacolo. Negroni, Spritz e drink stagionali, miscelati con pulizia. Così il bar è un luogo per un bicchiere veloce al bancone come per una lunga serata sul Kudamm.',
    daylineAria: 'Al bar di Casa Bellucci',
    mediaAria: 'Aperitivo e cocktail da Casa Bellucci',
    photo1Alt:
      'Aperitivo Bellucci, aperitivo della casa a base di bitter, agrumi e Prosecco da Casa Bellucci',
    photo1Caption: 'Spritz',
    photo2Alt: 'Aperol Spritz e drink da aperitivo sulla terrazza estiva di Casa Bellucci sul Kudamm a Berlino-Charlottenburg',
    photo2Caption: 'Aperitivo',
    photo3Alt: 'Atmosfera accogliente del bar di Casa Bellucci sul Kudamm',
    photo3Caption: 'Bar',
  },

  // 3. Wein (Weinbar)
  wine: {
    eyebrow: 'Carta dei vini',
    h2Pre: 'Enoteca sul ',
    h2It: 'Kudamm',
    h2Post: '',
    lede:
      'Come enoteca a Charlottenburg mettiamo il focus sul Sud Italia. Curata dal Sommelier Marco, al bicchiere e con rotazione quotidiana.',
    pdfLink: 'Vedi la carta dei vini',
    regions: {
      sicilia: {
        label: 'Sicilia',
        title: 'Rossi e vini vulcanici',
        copy: 'Mineralità vulcanica dall\'Etna e uve rosse decise. L\'isola definisce il carattere dei nostri vini al bicchiere.',
        rows: [
          { name: 'Etna Bianco DOC', note: 'Sicilia · al bicchiere' },
          { name: "Nero d'Avola", note: 'Sicilia · al bicchiere' },
          { name: 'Etna Rosso', note: 'Sicilia · al bicchiere' },
        ],
      },
      dolci: {
        label: 'Dolci & Liquorosi',
        title: 'Vini dolci per finire',
        copy: 'Vini dolci e liquorosi, come arrivano dal Sud Italia. Dal Passito dell\'isola di Pantelleria al Marsala dell\'ovest.',
        rows: [
          { name: 'Passito di Pantelleria', note: 'Sicilia · vino dolce' },
          { name: 'Marsala Superiore', note: 'Sicilia' },
        ],
      },
      bollicine: {
        label: 'Bollicine',
        title: 'Per l\'aperitivo',
        copy: 'Spumanti come avvio frizzante. Si abbinano all\'aperitivo al bar e al brindisi in terrazza.',
        rows: [
          { name: 'Franciacorta Brut', note: 'Lombardia · Spumante' },
          { name: 'Prosecco al bicchiere', note: 'Veneto · al bicchiere' },
        ],
      },
    },
  },

  // 4. Live-DJ und Wochenende
  music: {
    eyebrow: 'Live DJ e weekend',
    h2Pre: 'Bar con musica a ',
    h2It: 'Berlino',
    h2Post: '',
    p1: 'Nel weekend da noi suona un Live DJ. Chi cerca un bar con musica a Berlino qui trova sonorità tranquille per l\'aperitivo e la sera. Resta un\'atmosfera da ristorante bar, non un club. La musica accompagna la serata senza coprire la conversazione.',
    p2: 'Così nel weekend Casa Bellucci diventa un bar con DJ sul Kudamm, casual e rilassato. D\'estate l\'aperitivo si sposta in terrazza, sotto gli ombrelloni di giorno e a lume di candela la sera. Anche come ristorante con musica a Berlino la casa è adatta a una lunga serata in due o in gruppo.',
    crossPre: 'Di più sulla cucina serale nella nostra pagina sul ',
    crossLinkItalienisch: 'ristorante italiano a Charlottenburg',
    crossPost: '.',
    mediaAria: 'Weekend, musica e terrazza da Casa Bellucci',
    photo1Alt: 'Limoncello giallo come digestivo la sera al bar di Casa Bellucci sul Kudamm',
    photo1Caption: 'Limoncello',
    photo2Alt:
      'Atmosfera serale calda del bar di Casa Bellucci con lampadario di cristallo, panca in velluto verde e bancone a Berlino-Charlottenburg',
    photo2Caption: 'Serata',
    photo3Alt:
      'Aperitivo sulla terrazza estiva di Casa Bellucci sul Kudamm',
    photo3Caption: 'Dehors',
  },

  // 5. Öffnungszeiten und Reservierung (Contact)
  contact: {
    eyebrow: 'Orari di apertura e prenotazione',
    h2Pre: 'Al bar sul ',
    h2It: 'Kudamm',
    h2Post: '',
    lede:
      'Casa Bellucci si trova al Kurfürstendamm 63 a Berlino-Charlottenburg, aperto tutti i giorni dalle 09:00, da lunedì a sabato fino alle 00:00. Prenota online o per telefono, i walk-in sono particolarmente benvenuti al bar.',
    addressLine1: 'Kurfürstendamm 63',
    addressLine2: '10707 Berlin · Charlottenburg',
    barLabel: 'Al bar',
    barLine1: 'Aperitivo dal primo serale',
    barLine2: 'Live DJ nel weekend',
    mapAria: 'Posizione di Casa Bellucci sulla mappa',
  },

  // 6. FAQ
  faqHeadingEyebrow: 'Domande frequenti',
  faqHeadingPre: 'Domande ',
  faqHeadingIt: 'frequenti',
  faqHeadingPost: '',
  related: {
    pre: 'Di più sulla casa nella home page, ',
    linkHome: 'Casa Bellucci',
    mid1: '. Scopri il nostro ',
    linkItalienisch: 'ristorante italiano a Charlottenburg',
    mid2: '. Per festeggiare in gruppo organizziamo ',
    linkEvents: 'feste aziendali ed eventi a Charlottenburg',
    mid3: '. D\'estate l\'aperitivo si sposta sulla nostra ',
    linkTerrasse: 'terrazza sul Kudamm',
    mid4: '. Al mattino vi aspetta la ',
    linkFruehstueck: 'colazione e brunch sul Kudamm',
    post: '.',
  },

  faqs: [
    {
      question: 'Casa Bellucci ha un bar a Charlottenburg?',
      answer:
        'Sì. Casa Bellucci è un ristorante bar al Kurfürstendamm 63 a Berlino-Charlottenburg. Il nostro bar serve aperitivo, cocktail, vino, birra e caffè, da mattina a sera. L\'atmosfera è raffinata e accogliente allo stesso tempo, abbastanza casual per un bicchiere veloce al bancone.',
    },
    {
      question: 'C\'è aperitivo sul Kudamm?',
      answer:
        'Sì. Da noi l\'aperitivo fa parte del primo serale. L\'Aperitivo Bellucci unisce bitter, agrumi e Prosecco in un avvio leggermente amaro e frizzante. Si abbina a Spritz, Negroni e vini al bicchiere, al bar o sulla terrazza estiva sul Kudamm.',
    },
    {
      question: 'Dove si trova un buon bar sul Kudamm?',
      answer:
        'Casa Bellucci è un ristorante bar al Kurfürstendamm 63 a Berlino-Charlottenburg. Al bar trovi aperitivo, cocktail, vino italiano, birra e caffè, da mattina a sera. Come cocktail bar a Charlottenburg resta sui classici netti come Negroni e Spritz, nel weekend con musica dal vivo tranquilla. I walk-in sono particolarmente benvenuti al bar.',
    },
    {
      question: 'Quali vini ci sono al bar?',
      answer:
        'La nostra carta dei vini mette il focus sul Sud Italia ed è curata dal Sommelier Marco. Al bicchiere e con rotazione quotidiana trovi tra gli altri Etna Bianco, Nero d\'Avola, Etna Rosso, oltre a Franciacorta, Prosecco e vini dolci come Passito di Pantelleria e Marsala.',
    },
    {
      question: 'Si può venire al bar senza prenotazione?',
      answer:
        'Sì. I walk-in sono particolarmente benvenuti al bar. Per un tavolo la sera consigliamo una prenotazione, per telefono al +49 162 3009925 o online tramite Quandoo. Casa Bellucci è aperto tutti i giorni dalle 09:00, da lunedì a sabato fino alle 00:00.',
    },
  ],
} as const;

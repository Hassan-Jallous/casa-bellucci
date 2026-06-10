// Page-specific copy for the Events landing page (Firmenfeier, Weihnachtsfeier,
// Geburtstag, private Feiern). German source of truth, authored `as const`.
// EN/IT slices mirror this structure with the same keys and array lengths.
// Shared labels (hours, info, actions, mapCorner) live in `common`.
export const landingEvents = {
  // 1. Hero / Intro
  hero: {
    eyebrow: 'Feiern am Kudamm',
    h1: {
      pre: 'Firmenfeiern, Events und private Feiern in ',
      em: 'Berlin',
      post: '',
    },
    lede:
      'Casa Bellucci ist der Ort für Firmenfeiern, Events und private Feiern in Berlin-Charlottenburg, am Kurfürstendamm 63. Vom Geschäftsessen über die Weihnachtsfeier bis zum Geburtstag mit Freunden, hier wird jeder Anlass italienisch begangen, mit gutem Essen, Wein und einer warmen Atmosphäre.',
    para:
      'Mitten in der City West, einen Schritt vom Kurfürstendamm entfernt, verbindet Casa Bellucci Restaurant, Bar und Sommerterrasse unter einem Dach. So lässt sich eine Feier in Charlottenburg flexibel gestalten, ob als kleines Dinner im Kreis der Familie oder als Firmenfeier mit Kolleginnen und Kollegen.',
    viewMenu: 'Karte ansehen →',
    mediaLabel: 'Feiern und Events bei Casa Bellucci',
    photos: {
      abend: {
        alt: 'Festlich gedeckte Sommerterrasse von Casa Bellucci am Kudamm am Abend für eine Feier in Berlin-Charlottenburg',
        caption: 'Abend',
      },
      sala: {
        alt: 'Innenraum von Casa Bellucci in Charlottenburg, eingedeckt für eine Firmenfeier in Berlin',
        caption: 'Saal',
      },
      brindisi: {
        alt: 'Anstoßen mit Cocktails an der Bar von Casa Bellucci bei einer privaten Feier am Kudamm',
        caption: 'Brindisi',
      },
    },
  },

  // 2. Anlässe
  occasions: {
    eyebrow: 'Anlässe',
    h2: {
      pre: 'Jeder Anlass, ',
      em: 'italienisch',
      post: '',
    },
    para1:
      'Eine gelungene Feier braucht keinen großen Aufwand, sondern den richtigen Ort. Bei Casa Bellucci feiern Sie Firmenfeier, Weihnachtsfeier, Geburtstag und private Feiern an einem Tisch oder in größerer Runde. Wir richten die Tafel ein, beraten zum Menü und kümmern uns am Abend um Ihre Gäste, damit Sie selbst nur noch feiern müssen.',
    para2:
      'Geschäftspartner laden Sie zum Geschäftsessen, das Team zum Sommerfest oder zur Weihnachtsfeier, Freunde und Familie zum Geburtstag oder zum runden Jubiläum. Casa Bellucci liegt zentral in Charlottenburg, gut erreichbar mit Bus und U-Bahn und damit ein passender Treffpunkt für Gäste aus ganz Berlin. Details zu Ihrer Feier besprechen wir gern persönlich, alles Weitere auf Anfrage.',
    daylineLabel: 'Anlässe für eine Feier bei Casa Bellucci',
    moments: [
      {
        time: 'Lavoro',
        title: 'Firmenfeier',
        copy: 'Geschäftsessen, Teamabend oder Sommerfest. Eine Firmenfeier in Berlin findet bei Casa Bellucci am Kudamm einen ruhigen, repräsentativen Rahmen.',
      },
      {
        time: 'Natale',
        title: 'Weihnachtsfeier',
        copy: 'Eine Weihnachtsfeier im Restaurant, mit warmem Licht, italienischer Küche und Platz für das ganze Team. Die Wintersaison plant man am besten früh.',
      },
      {
        time: 'Festa',
        title: 'Geburtstag und private Feiern',
        copy: 'Geburtstag, Jubiläum, Taufe oder ein Dinner im kleinen Kreis. Private Feiern feiert man bei Casa Bellucci entspannt und ohne Eile.',
      },
    ],
    mediaLabel: 'Anlässe und Feiern bei Casa Bellucci',
    photos: {
      tavola: {
        alt: 'Lange eingedeckte Tafel im Restaurant von Casa Bellucci für eine Geburtstagsfeier in Berlin-Charlottenburg',
        caption: 'Tafel',
      },
      cocktail: {
        alt: 'Cocktail an der Bar von Casa Bellucci am Kudamm zum Auftakt einer Firmenfeier in Berlin',
        caption: 'Aperitivo',
      },
      terrazza: {
        alt: 'Sommerterrasse von Casa Bellucci am Kurfürstendamm am Abend für eine private Feier',
        caption: 'Terrasse',
      },
    },
  },

  // 3. Räume
  spaces: {
    eyebrow: 'Räume',
    h2: {
      pre: 'Terrasse, Bar und ',
      em: 'Restaurant',
      post: '',
    },
    para1:
      'Casa Bellucci bietet für eine Feier mehrere Stimmungen unter einem Dach. Die Sommerterrasse am Kurfürstendamm eignet sich von Frühling bis Herbst für ein Fest unter freiem Himmel, mit Olivenbäumen, Lichterketten und dem Treiben am Kudamm im Hintergrund. Drinnen schafft das Restaurant mit warmem Holz und gedämpftem Licht den Rahmen für ein festliches Dinner.',
    para2:
      'Die Bar ist der natürliche Auftakt jeder Feier. Hier empfangen wir Ihre Gäste mit einem Aperitivo, einem Spritz oder einem Glas Wein, bevor es an die Tafel geht. Ob die Feier auf der Terrasse, im Restaurant oder mit Empfang an der Bar beginnt, klären wir gemeinsam, je nach Anlass, Jahreszeit und Wetter. Als Eventlocation in Charlottenburg bleibt Casa Bellucci flexibel.',
    mediaLabel: 'Räume für Feiern bei Casa Bellucci',
    photos: {
      terrasse: {
        alt: 'Beleuchtete Sommerterrasse von Casa Bellucci am Kudamm als Eventlocation in Charlottenburg am Abend',
        caption: 'Terrasse',
      },
      bar: {
        alt: 'Bar von Casa Bellucci am Kurfürstendamm als Treffpunkt zum Aperitivo vor einer Feier',
        caption: 'Bar',
      },
      saal: {
        alt: 'Warm beleuchteter Innenraum von Casa Bellucci in Berlin-Charlottenburg für eine Weihnachtsfeier',
        caption: 'Restaurant',
      },
    },
  },

  // 4. Menü und Musik
  menu: {
    eyebrow: 'Menü und Musik',
    h2: {
      pre: 'Flexibles Menü, ',
      em: 'à la carte',
      post: '',
    },
    para1:
      'Beim Essen bleiben Sie flexibel. Ihre Gäste wählen à la carte aus der italienischen Karte, oder wir stellen für Ihre Feier ein abgestimmtes Menü zusammen, das zum Anlass und zur Gruppe passt. Von Antipasti über hausgemachte Pasta bis zu Dolci und Espresso, die Küche von Casa Bellucci kocht mit frischen Zutaten und mediterraner Handschrift.',
    para2:
      'Vegetarische und vegane Wünsche berücksichtigen wir ebenso wie eine begleitende Weinauswahl aus Italien. Am Wochenende sorgt ein Live-DJ für Stimmung, sodass aus dem Dinner ein langer Abend werden kann. Was zu Ihrer Firmenfeier oder privaten Feier passt, stimmen wir vorab ab. Konkrete Vorschläge und alle Details gibt es auf Anfrage.',
    crossPre: 'Mehr zur Küche zeigt unser ',
    crossLinkItalienisch: 'italienisches Restaurant in Charlottenburg',
    crossPost: ', der Auftakt an der Bar passt zum Aperitivo am Kudamm.',
    mediaLabel: 'Menü und Musik bei Casa Bellucci',
    photos: {
      piatti: {
        alt: 'Italienische Gerichte auf der Tafel bei einer Feier im Restaurant Casa Bellucci am Kudamm',
        caption: 'Piatti',
      },
      vino: {
        alt: 'Cocktails und Drinks an der Bar von Casa Bellucci bei einer Firmenfeier in Berlin-Charlottenburg',
        caption: 'Drinks',
      },
      festa: {
        alt: 'Abendliche Sommerterrasse von Casa Bellucci am Kudamm mit Stimmung für eine Feier',
        caption: 'Festa',
      },
    },
  },

  // 5. Kontakt / Anfrage-Hinweis
  contact: {
    eyebrow: 'Lage und Anfrage',
    h2: {
      pre: 'Feiern in ',
      em: 'Charlottenburg',
      post: '',
    },
    lede:
      'Casa Bellucci liegt am Kurfürstendamm 63 in Berlin-Charlottenburg, mitten in der City West. Für eine Firmenfeier, Weihnachtsfeier oder private Feier stellen Sie unten unverbindlich eine Anfrage, oder Sie erreichen uns telefonisch.',
    addressLine1: 'Kurfürstendamm 63',
    addressLine2: '10707 Berlin · Charlottenburg',
    eventsLabel: 'Feiern und Events',
    eventsLine1: 'Firmenfeier, Weihnachtsfeier, Geburtstag',
    eventsLine2: 'Terrasse, Bar und Restaurant, Details auf Anfrage',
    mapLabel: 'Lage von Casa Bellucci auf der Karte',
  },

  // 6. FAQ
  faqEyebrow: 'Häufige Fragen',
  faqHeading: {
    pre: 'Häufige ',
    em: 'Fragen',
    post: '',
  },
  faqs: [
    {
      question: 'Kann man bei Casa Bellucci eine Firmenfeier ausrichten?',
      answer:
        'Ja. Casa Bellucci am Kurfürstendamm 63 in Berlin-Charlottenburg eignet sich für Firmenfeiern, vom Geschäftsessen über den Teamabend bis zum Sommerfest. Restaurant, Bar und Sommerterrasse stehen je nach Anlass und Jahreszeit zur Verfügung. Stellen Sie über das Formular eine unverbindliche Anfrage, wir besprechen die Details persönlich.',
    },
    {
      question: 'Eignet sich das Restaurant für eine Weihnachtsfeier in Berlin?',
      answer:
        'Sehr gut. Das Restaurant mit warmem Licht und italienischer Küche bietet einen passenden Rahmen für eine Weihnachtsfeier in Berlin. Die Wintersaison ist gefragt, deshalb planen Sie Ihre Weihnachtsfeier am besten frühzeitig. Schicken Sie uns Ihren Wunschtermin und die ungefähre Gruppengröße über das Anfrageformular.',
    },
    {
      question: 'Kann man die Terrasse für eine Feier mieten?',
      answer:
        'Die Sommerterrasse am Kudamm lässt sich von Frühling bis Herbst für eine Feier nutzen. Ob Terrasse, Restaurant oder ein Empfang an der Bar zu Ihrem Anlass passt, klären wir gemeinsam, abhängig von Gruppengröße, Jahreszeit und Wetter. Details und Verfügbarkeit erfahren Sie auf Anfrage.',
    },
    {
      question: 'Gibt es ein festes Menü oder à la carte?',
      answer:
        'Beides ist möglich. Ihre Gäste können à la carte aus der italienischen Karte wählen, oder wir stellen für die Feier ein abgestimmtes Menü zusammen. Vegetarische und vegane Wünsche sowie eine begleitende Weinauswahl berücksichtigen wir. Welche Variante zu Ihrer Feier passt, stimmen wir vorab ab.',
    },
    {
      question: 'Wie stelle ich eine Anfrage für eine Feier?',
      answer:
        'Am einfachsten über das Anfrageformular auf dieser Seite. Geben Sie Name, Kontakt, Wunschdatum, ungefähre Personenzahl und den Anlass an, dann melden wir uns mit konkreten Vorschlägen. Alternativ erreichen Sie uns telefonisch unter +49 162 3009925.',
    },
    {
      question: 'Wo in Berlin liegt Casa Bellucci?',
      answer:
        'Casa Bellucci liegt am Kurfürstendamm 63, 10707 Berlin, im Ortsteil Charlottenburg in Charlottenburg-Wilmersdorf. Die Lage in der City West am Kudamm ist zentral und gut mit Bus und U-Bahn erreichbar, ein passender Treffpunkt für Gäste aus ganz Berlin.',
    },
  ],

  // Anfrageformular
  form: {
    eyebrow: 'Anfrage',
    heading: {
      pre: 'Feier ',
      em: 'anfragen',
      post: '',
    },
    intro:
      'Schildern Sie uns kurz Ihren Anlass, wir melden uns mit Vorschlägen. Die Anfrage ist unverbindlich.',
    labels: {
      name: 'Name',
      email: 'E-Mail',
      phone: 'Telefon',
      date: 'Wunschdatum',
      guests: 'Personenzahl',
      occasion: 'Anlass',
      message: 'Nachricht',
    },
    placeholders: {
      name: 'Ihr Name',
      email: 'name@beispiel.de',
      phone: 'Optional',
      guests: 'z. B. 12',
      message: 'Worum geht es? Anlass, Wünsche, Fragen.',
    },
    optional: 'optional',
    occasionOptions: {
      placeholder: 'Bitte wählen',
      firmenfeier: 'Firmenfeier',
      geburtstag: 'Geburtstag',
      weihnachtsfeier: 'Weihnachtsfeier',
      private: 'Private Feier',
      sonstiges: 'Sonstiges',
    },
    submit: 'Anfrage senden',
    submitting: 'Wird gesendet…',
    success: {
      title: 'Danke für Ihre Anfrage',
      body: 'Wir haben Ihre Anfrage erhalten und melden uns zeitnah. Bei dringenden Fragen erreichen Sie uns telefonisch unter +49 162 3009925.',
    },
    error:
      'Das hat leider nicht geklappt. Bitte versuchen Sie es erneut oder rufen Sie uns unter +49 162 3009925 an.',
    validation: {
      required: 'Bitte füllen Sie die Pflichtfelder aus.',
      email: 'Bitte geben Sie eine gültige E-Mail-Adresse an.',
    },
  },

  // Cross-Links
  related: {
    pre: 'Mehr zur ',
    terrasseLink: 'Sommerterrasse am Kudamm',
    afterTerrasse: ', zum Auftakt an der ',
    barLink: 'Bar mit Aperitivo',
    afterBar: ' und tagsüber zum ',
    italienischLink: 'italienischen Restaurant in Charlottenburg',
    afterItalienisch: '.',
  },
} as const;

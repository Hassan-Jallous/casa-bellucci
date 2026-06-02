// Casa Bellucci, menu data and shared content.
// Image paths are stored as raw relative strings (e.g. "images/..."). Apply
// asset() at the consuming component, not here.

export interface MenuDishItem {
  name: string;
  it: string;
  price: string;
  sig?: boolean;
}

export interface MenuDishSection {
  title: string;
  items: MenuDishItem[];
}

export interface MenuNote {
  title: string;
  text: string;
}

export interface MenuCategory {
  label: string;
  de: string;
  sub: string;
  img: string;
  note: MenuNote;
  sections: MenuDishSection[];
}

export type Menu = Record<string, MenuCategory>;

export interface PressLogo {
  name: string;
  cls: string;
}

export interface GalleryImage {
  src: string;
  caption: string;
}

export const MENU: Menu = {
  pranzo: {
    label: "Pranzo",
    de: "Mittagskarte",
    sub: "12:00 — 16:00",
    img: "images/menu-lunch.jpg",
    note: {
      title: "Cucina della Nonna",
      text: "Unsere Mittagskarte folgt der Markt-Logik: was am Morgen am Stand frisch ist, kommt auf den Teller. Pasta fatta a mano täglich, fangfrischer Fisch vom Großmarkt.",
    },
    sections: [
      {
        title: "Antipasti",
        items: [
          { name: "Burrata di Andria", it: "Pomodorino confit, basilico, olio", price: "16,00", sig: true },
          { name: "Vitello Tonnato", it: "Capperi di Pantelleria, limone", price: "18,00" },
          { name: "Carpaccio di Manzo", it: "Rucola, parmigiano 24 mesi", price: "19,00" },
          { name: "Insalata Caprese", it: "Bufala campana, basilico", price: "15,00" },
        ],
      },
      {
        title: "Primi",
        items: [
          { name: "Tagliatelle al Tartufo", it: "Tartufo nero d'Umbria", price: "24,00", sig: true },
          { name: "Spaghetti alle Vongole", it: "Venusmuscheln, aglio, prezzemolo", price: "22,00" },
          { name: "Risotto ai Funghi", it: "Funghi porcini, parmigiano", price: "22,00" },
          { name: "Lasagne della Casa", it: "Ragù di manzo, besciamella", price: "19,00" },
        ],
      },
      {
        title: "Secondi & Dolci",
        items: [
          { name: "Branzino alla Griglia", it: "Mit Zitrone, Olivenöl, Kräutern", price: "29,00" },
          { name: "Insalata Cesare", it: "Klassisch, mit Hähnchen", price: "16,00" },
          { name: "Tiramisù della Casa", it: "Mascarpone, espresso, savoiardi", price: "12,00" },
        ],
      },
    ],
  },
  cena: {
    label: "Cena",
    de: "Abendkarte",
    sub: "18:00 — 23:30",
    img: "images/menu-dinner.jpg",
    note: {
      title: "Una Serata Siciliana",
      text: "Am Abend wird Casa Bellucci zur Sommerterrasse Taorminas: Kerzen, lange Tafeln und Gerichte, die Zeit brauchen. Reservierung empfohlen.",
    },
    sections: [
      {
        title: "Per Iniziare",
        items: [
          { name: "Tartare di Tonno", it: "Mit Mango, Burrata, Minze", price: "26,00", sig: true },
          { name: "Carpaccio di Polpo", it: "Cremoso di patate, olio al limone", price: "24,00" },
          { name: "Ostriche Speciale", it: "Pro Stück, Zitrone, Schalotte", price: "5,50" },
          { name: "Gambero Rosso di Mazara", it: "Crudo, fior di sale, lime", price: "28,00" },
        ],
      },
      {
        title: "Pasta & Risotto",
        items: [
          { name: "Pasta con Caviale", it: "Linguine, Beurre noisette, Kaviar Imperial, Goldblatt", price: "42,00", sig: true },
          { name: "Ravioli di Ricotta", it: "Spinaci, burro e salvia", price: "26,00" },
          { name: "Risotto allo Zafferano", it: "Mit Mailänder Ossobuco", price: "32,00" },
        ],
      },
      {
        title: "Dal Mare e Terra",
        items: [
          { name: "Rinderfilet alla Griglia", it: "Mit Rosmarin, Trüffeljus, Saisongemüse", price: "38,00" },
          { name: "Gambas al Vino Bianco", it: "Vermentino, Knoblauch, Petersilie", price: "28,00" },
          { name: "Pesce del Giorno", it: "Ganz gegrillt, Marktpreis", price: "MP" },
          { name: "Tagliata di Manzo", it: "Rucola, parmigiano, balsamico", price: "34,00" },
        ],
      },
    ],
  },
  vini: {
    label: "Vini",
    de: "Weinkarte",
    sub: "300+ Etiketten",
    img: "images/menu-wines.jpg",
    note: {
      title: "Vom Ätna bis zum Veneto",
      text: "Unsere Auswahl folgt der italienischen Stiefelspitze: 65% Sizilien & Süditalien, kuratiert von unserem Sommelier Marco. Glasweise täglich rotierend.",
    },
    sections: [
      {
        title: "Vini Bianchi",
        items: [
          { name: "Vermentino di Sardegna", it: "Argiolas — 2023, Sardinien", price: "8,50" },
          { name: "Etna Bianco DOC", it: "Planeta — 2022, Sizilien", price: "11,00", sig: true },
          { name: "Gavi del Comune di Gavi", it: "La Scolca — 2022", price: "12,00" },
          { name: "Falanghina del Sannio", it: "Mustilli — 2022, Kampanien", price: "9,00" },
        ],
      },
      {
        title: "Vini Rossi",
        items: [
          { name: "Nero d'Avola, Sicilia DOC", it: "Donnafugata — 2021", price: "9,00" },
          { name: "Barolo DOCG", it: "Vietti — 2019, Piemont", price: "14,00", sig: true },
          { name: "Brunello di Montalcino", it: "Casanova di Neri — 2018", price: "18,00" },
          { name: "Etna Rosso", it: "Tenuta delle Terre Nere — 2021", price: "12,50" },
        ],
      },
      {
        title: "Bollicine & Dolci",
        items: [
          { name: "Franciacorta Brut", it: "Ca' del Bosco", price: "13,00" },
          { name: "Passito di Pantelleria", it: "Donnafugata — Ben Ryé", price: "10,00" },
          { name: "Marsala Superiore", it: "Florio — Sizilien", price: "7,50" },
        ],
      },
    ],
  },
  colazione: {
    label: "Colazione",
    de: "Frühstück",
    sub: "09:00 — 12:00",
    img: "images/menu-breakfast.jpg",
    note: {
      title: "La Dolce Mattina",
      text: "Italienisches Frühstück, wie wir es lieben: ein cornetto, ein espresso, ein Glas Limonata. Werktags bis 12, am Wochenende bis 14 Uhr.",
    },
    sections: [
      {
        title: "Per Cominciare",
        items: [
          { name: "Uova alla Fiorentina", it: "Pochiert auf Spinat, Sauce Hollandaise", price: "14,50", sig: true },
          { name: "Avocado Toast Mediterraneo", it: "Sauerteig, pomodorini, Burrata", price: "15,00" },
          { name: "Pancakes con Frutti di Bosco", it: "Mascarpone, Honig, Beeren", price: "13,00" },
          { name: "Cornetto Vuoto / Crema", it: "Hausgemacht, täglich frisch", price: "3,80" },
        ],
      },
      {
        title: "Caffè & Bevande",
        items: [
          { name: "Espresso Bellucci", it: "Eigene Röstung, Caffè Vergnano", price: "2,80" },
          { name: "Cappuccino", it: "Doppio shot, Mailänder Art", price: "4,20" },
          { name: "Spremuta d'Arancia", it: "Frisch gepresst, sizilianische Tarocco", price: "6,00" },
          { name: "Limonata Siciliana", it: "Hausgemacht mit Amalfi-Zitronen", price: "5,50", sig: true },
        ],
      },
    ],
  },
};

export const PRESS_QUOTES: string[] = [
  "Italiens Seele am Kurfürstendamm — als hätte jemand eine Trattoria aus Taormina nach Charlottenburg verpflanzt.",
  "Eine der schönsten Sommerterrassen Berlins. Hier riecht es nach Zitronen und langem Nachmittag.",
  "Authentisch sizilianisch — von der Pasta bis zur Karte. Selten so ehrlich gegessen.",
];

export const PRESS_LOGOS: PressLogo[] = [
  { name: "Berliner Zeitung", cls: "" },
  { name: "Tagesspiegel", cls: "" },
  { name: "tip Berlin", cls: "sans" },
  { name: "Morgenpost", cls: "" },
  { name: "BZ Berlin", cls: "sans" },
];

export const GALLERY: GalleryImage[] = [
  { src: "images/gallery/1.jpg", caption: "Aperitivo" },
  { src: "images/gallery/2.jpg", caption: "Pasta della Casa" },
  { src: "images/gallery/3.jpg", caption: "Sala" },
  { src: "images/gallery/4.jpg", caption: "Dolce Vita" },
  { src: "images/gallery/5.jpg", caption: "Antipasti" },
  { src: "images/gallery/6.jpg", caption: "Tavolo" },
  { src: "images/gallery/7.jpg", caption: "Crudo di Mare" },
  { src: "images/gallery/8.jpg", caption: "Cantina" },
];

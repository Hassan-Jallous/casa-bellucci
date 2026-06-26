// Localizable text mirror of lib/data.ts (MENU, GALLERY, PRESS_QUOTES).
// Structure (item name/price/src/img, category label/sub/img) STAYS in
// lib/data.ts. Components read structure from data.ts and text from this dict,
// mapping by the SAME indices. German source of truth, copied VERBATIM.
//
// Index mapping:
//   menu.<cat>.de        <- MENU.<cat>.de
//   menu.<cat>.note      <- MENU.<cat>.note { title, text }
//   menu.<cat>.sections[s].items[i].desc <- MENU.<cat>.sections[s].items[i].it
//   gallery[g] { caption, alt } <- GALLERY[g]
//   press[p]             <- PRESS_QUOTES[p]
export const data = {
  menu: {
    pranzo: {
      de: 'Mittagskarte',
      note: {
        title: 'Cucina della Nonna',
        text: 'Unsere Mittagskarte folgt der Markt-Logik: was am Morgen am Stand frisch ist, kommt auf den Teller. Pasta fatta a mano täglich, fangfrischer Fisch vom Großmarkt.',
      },
      sections: [
        {
          // Antipasti
          items: [
            { desc: 'Pomodorino confit, basilico, olio' },
            { desc: 'Capperi di Pantelleria, limone' },
            { desc: 'Rucola, parmigiano 24 mesi' },
            { desc: 'Bufala campana, basilico' },
          ],
        },
        {
          // Primi
          items: [
            { desc: "Tartufo nero d'Umbria" },
            { desc: 'Venusmuscheln, aglio, prezzemolo' },
            { desc: 'Funghi porcini, parmigiano' },
            { desc: 'Ragù di manzo, besciamella' },
          ],
        },
        {
          // Secondi & Dolci
          items: [
            { desc: 'Mit Zitrone, Olivenöl, Kräutern' },
            { desc: 'Klassisch, mit Hähnchen' },
            { desc: 'Mascarpone, espresso, savoiardi' },
          ],
        },
      ],
    },
    cena: {
      de: 'Abendkarte',
      note: {
        title: 'Una Serata Italiana',
        text: 'Am Abend wird Casa Bellucci zur Sommerterrasse Taorminas: Kerzen, lange Tafeln und Gerichte, die Zeit brauchen. Reservierung empfohlen.',
      },
      sections: [
        {
          // Per Iniziare
          items: [
            { desc: 'Mit Mango, Burrata, Minze' },
            { desc: 'Cremoso di patate, olio al limone' },
            { desc: 'Pro Stück, Zitrone, Schalotte' },
            { desc: 'Crudo, fior di sale, lime' },
          ],
        },
        {
          // Pasta & Risotto
          items: [
            { desc: 'Linguine, Beurre noisette, Kaviar Imperial, Goldblatt' },
            { desc: 'Spinaci, burro e salvia' },
            { desc: 'Mit Mailänder Ossobuco' },
          ],
        },
        {
          // Dal Mare e Terra
          items: [
            { desc: 'Mit Rosmarin, Trüffeljus, Saisongemüse' },
            { desc: 'Vermentino, Knoblauch, Petersilie' },
            { desc: 'Ganz gegrillt, Marktpreis' },
            { desc: 'Rucola, parmigiano, balsamico' },
          ],
        },
      ],
    },
    vini: {
      de: 'Weinkarte',
      note: {
        title: 'Vom Ätna bis zum Veneto',
        text: 'Unsere Auswahl folgt der italienischen Stiefelspitze: 65% Süditalien, kuratiert von unserem Sommelier Marco. Glasweise täglich rotierend.',
      },
      sections: [
        {
          // Vini Bianchi
          items: [
            { desc: 'Argiolas — 2023, Sardinien' },
            { desc: 'Planeta — 2022, Sizilien' },
            { desc: 'La Scolca — 2022' },
            { desc: 'Mustilli — 2022, Kampanien' },
          ],
        },
        {
          // Vini Rossi
          items: [
            { desc: 'Donnafugata — 2021' },
            { desc: 'Vietti — 2019, Piemont' },
            { desc: 'Casanova di Neri — 2018' },
            { desc: 'Tenuta delle Terre Nere — 2021' },
          ],
        },
        {
          // Bollicine & Dolci
          items: [
            { desc: "Ca' del Bosco" },
            { desc: 'Donnafugata — Ben Ryé' },
            { desc: 'Florio — Sizilien' },
          ],
        },
      ],
    },
    colazione: {
      de: 'Frühstück',
      note: {
        title: 'La Dolce Mattina',
        text: 'Italienisches Frühstück, wie wir es lieben: ein cornetto, ein espresso, ein Glas Limonata. Werktags bis 12, am Wochenende bis 14 Uhr.',
      },
      sections: [
        {
          // Per Cominciare
          items: [
            { desc: 'Pochiert auf Spinat, Sauce Hollandaise' },
            { desc: 'Sauerteig, pomodorini, Burrata' },
            { desc: 'Mascarpone, Honig, Beeren' },
            { desc: 'Hausgemacht, täglich frisch' },
          ],
        },
        {
          // Caffè & Bevande
          items: [
            { desc: 'Eigene Röstung, Caffè Vergnano' },
            { desc: 'Doppio shot, Mailänder Art' },
            { desc: 'Frisch gepresst, sizilianische Tarocco' },
            { desc: 'Hausgemacht mit Amalfi-Zitronen' },
          ],
        },
      ],
    },
  },
  gallery: [
    { caption: 'Pornstar Martini', alt: 'Pornstar Martini im Glas in der Bar des Casa Bellucci am Kurfürstendamm' },
    { caption: 'Pasta mit Kaviar', alt: 'Hausgemachte Paccheri mit Kaviar im italienischen Restaurant Casa Bellucci in Berlin' },
    { caption: 'Rinderfilet', alt: 'Gebratenes Rinderfilet mit Jus und Rotwein im Casa Bellucci am Kurfürstendamm' },
    { caption: 'Burrata mit Pinienkernen', alt: 'Burrata mit Pinienkernen und Olivenöl als Vorspeise im Casa Bellucci Berlin-Charlottenburg' },
    { caption: 'Dessert mit Beeren', alt: 'Hausgemachtes Dessert mit Beeren und Minze im Casa Bellucci' },
    { caption: 'Schokoladen-Dessert', alt: 'Schokoladen-Dessert mit Eis und Beeren im Casa Bellucci Berlin' },
    { caption: 'Champagner', alt: 'Champagner auf Eis im Casa Bellucci, Kurfürstendamm Berlin-Charlottenburg' },
  ],
  press: [
    'Italiens Seele am Kudamm — als hätte jemand eine Trattoria aus Taormina nach Charlottenburg verpflanzt.',
    'Eine der schönsten Sommerterrassen Berlins. Hier riecht es nach Zitronen und langem Nachmittag.',
    'Authentisch italienisch, von der Pasta bis zur Karte. Selten so ehrlich gegessen.',
  ],
} as const;

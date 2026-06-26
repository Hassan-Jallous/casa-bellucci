// English text mirror of lib/data.ts (MENU, GALLERY, PRESS_QUOTES).
// Same keys/nesting/array lengths as de/data.ts. Structure (item name/price/
// src/img, category label/sub/img) STAYS in lib/data.ts. Components read
// structure from data.ts and text from this dict, mapping by the SAME indices.
export const data = {
  menu: {
    pranzo: {
      de: 'Lunch menu',
      note: {
        title: 'Cucina della Nonna',
        text: 'Our lunch menu follows market logic: whatever is fresh at the stall in the morning ends up on the plate. Pasta fatta a mano daily, fresh-caught fish from the wholesale market.',
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
            { desc: 'Clams, aglio, prezzemolo' },
            { desc: 'Funghi porcini, parmigiano' },
            { desc: 'Ragù di manzo, besciamella' },
          ],
        },
        {
          // Secondi & Dolci
          items: [
            { desc: 'With lemon, olive oil, herbs' },
            { desc: 'Classic, with chicken' },
            { desc: 'Mascarpone, espresso, savoiardi' },
          ],
        },
      ],
    },
    cena: {
      de: 'Evening menu',
      note: {
        title: 'Una Serata Italiana',
        text: 'In the evening, Casa Bellucci becomes the summer terrace of Taormina: candles, long tables and dishes that take their time. Reservation recommended.',
      },
      sections: [
        {
          // Per Iniziare
          items: [
            { desc: 'With mango, burrata, mint' },
            { desc: 'Cremoso di patate, olio al limone' },
            { desc: 'Per piece, lemon, shallot' },
            { desc: 'Crudo, fior di sale, lime' },
          ],
        },
        {
          // Pasta & Risotto
          items: [
            { desc: 'Linguine, beurre noisette, Caviar Imperial, gold leaf' },
            { desc: 'Spinaci, burro e salvia' },
            { desc: 'With Milanese ossobuco' },
          ],
        },
        {
          // Dal Mare e Terra
          items: [
            { desc: 'With rosemary, truffle jus, seasonal vegetables' },
            { desc: 'Vermentino, garlic, parsley' },
            { desc: 'Whole grilled, market price' },
            { desc: 'Rucola, parmigiano, balsamico' },
          ],
        },
      ],
    },
    vini: {
      de: 'Wine list',
      note: {
        title: 'From Etna to the Veneto',
        text: 'Our selection follows the tip of the Italian boot: 65% southern Italy, curated by our sommelier Marco. By the glass, rotating daily.',
      },
      sections: [
        {
          // Vini Bianchi
          items: [
            { desc: 'Argiolas, 2023, Sardinia' },
            { desc: 'Planeta, 2022, Sicily' },
            { desc: 'La Scolca, 2022' },
            { desc: 'Mustilli, 2022, Campania' },
          ],
        },
        {
          // Vini Rossi
          items: [
            { desc: 'Donnafugata, 2021' },
            { desc: 'Vietti, 2019, Piedmont' },
            { desc: 'Casanova di Neri, 2018' },
            { desc: 'Tenuta delle Terre Nere, 2021' },
          ],
        },
        {
          // Bollicine & Dolci
          items: [
            { desc: "Ca' del Bosco" },
            { desc: 'Donnafugata, Ben Ryé' },
            { desc: 'Florio, Sicily' },
          ],
        },
      ],
    },
    colazione: {
      de: 'Breakfast',
      note: {
        title: 'La Dolce Mattina',
        text: 'Italian breakfast, the way we love it: a cornetto, an espresso, a glass of limonata. Until 12 on weekdays, until 2 pm on weekends.',
      },
      sections: [
        {
          // Per Cominciare
          items: [
            { desc: 'Poached on spinach, hollandaise sauce' },
            { desc: 'Sourdough, pomodorini, burrata' },
            { desc: 'Mascarpone, honey, berries' },
            { desc: 'Homemade, fresh daily' },
          ],
        },
        {
          // Caffè & Bevande
          items: [
            { desc: 'House roast, Caffè Vergnano' },
            { desc: 'Double shot, Milanese style' },
            { desc: 'Freshly pressed, Sicilian Tarocco' },
            { desc: 'Homemade with Amalfi lemons' },
          ],
        },
      ],
    },
  },
  gallery: [
    { caption: 'Pornstar Martini', alt: 'Pornstar Martini in a glass at the bar of Casa Bellucci on the Kurfürstendamm' },
    { caption: 'Pasta with caviar', alt: 'Homemade paccheri with caviar at the Italian restaurant Casa Bellucci in Berlin' },
    { caption: 'Beef fillet', alt: 'Seared beef fillet with jus and red wine at Casa Bellucci on the Kurfürstendamm' },
    { caption: 'Burrata with pine nuts', alt: 'Burrata with pine nuts and olive oil, starter at Casa Bellucci Berlin-Charlottenburg' },
    { caption: 'Berry dessert', alt: 'Homemade dessert with berries and mint at Casa Bellucci' },
    { caption: 'Chocolate dessert', alt: 'Chocolate dessert with ice cream and berries at Casa Bellucci Berlin' },
    { caption: 'Champagne', alt: 'Champagne on ice at Casa Bellucci, Kurfürstendamm Berlin-Charlottenburg' },
  ],
  press: [
    "Italy's soul on the Kudamm, as if someone had transplanted a trattoria from Taormina to Charlottenburg.",
    "One of Berlin's most beautiful summer terraces. Here it smells of lemons and long afternoons.",
    'Authentically Italian, from the pasta to the menu. Rarely have we eaten so honestly.',
  ],
} as const;

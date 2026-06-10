// Italian text mirror of lib/data.ts (MENU, GALLERY, PRESS_QUOTES).
// Same keys/nesting/array lengths as de/data.ts. Structure (item name/price/
// src/img, category label/sub/img) STAYS in lib/data.ts. Components read
// structure from data.ts and text from this dict, mapping by the SAME indices.
export const data = {
  menu: {
    pranzo: {
      de: 'Menu di pranzo',
      note: {
        title: 'Cucina della Nonna',
        text: 'Il nostro menu di pranzo segue la logica del mercato: ciò che al mattino è fresco al banco finisce nel piatto. Pasta fatta a mano ogni giorno, pesce fresco di giornata dal mercato all\'ingrosso.',
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
            { desc: 'Vongole, aglio, prezzemolo' },
            { desc: 'Funghi porcini, parmigiano' },
            { desc: 'Ragù di manzo, besciamella' },
          ],
        },
        {
          // Secondi & Dolci
          items: [
            { desc: 'Con limone, olio d\'oliva, erbe aromatiche' },
            { desc: 'Classico, con pollo' },
            { desc: 'Mascarpone, espresso, savoiardi' },
          ],
        },
      ],
    },
    cena: {
      de: 'Menu della sera',
      note: {
        title: 'Una Serata Italiana',
        text: 'La sera, Casa Bellucci diventa la terrazza estiva di Taormina: candele, lunghe tavolate e piatti che richiedono tempo. Prenotazione consigliata.',
      },
      sections: [
        {
          // Per Iniziare
          items: [
            { desc: 'Con mango, burrata, menta' },
            { desc: 'Cremoso di patate, olio al limone' },
            { desc: 'Al pezzo, limone, scalogno' },
            { desc: 'Crudo, fior di sale, lime' },
          ],
        },
        {
          // Pasta & Risotto
          items: [
            { desc: 'Linguine, beurre noisette, Caviar Imperial, foglia d\'oro' },
            { desc: 'Spinaci, burro e salvia' },
            { desc: 'Con ossobuco alla milanese' },
          ],
        },
        {
          // Dal Mare e Terra
          items: [
            { desc: 'Con rosmarino, jus al tartufo, verdure di stagione' },
            { desc: 'Vermentino, aglio, prezzemolo' },
            { desc: 'Grigliato intero, prezzo di mercato' },
            { desc: 'Rucola, parmigiano, balsamico' },
          ],
        },
      ],
    },
    vini: {
      de: 'Carta dei vini',
      note: {
        title: 'Dall\'Etna al Veneto',
        text: 'La nostra selezione segue la punta dello stivale italiano: 65% Sud Italia, curata dal nostro sommelier Marco. Al calice, a rotazione ogni giorno.',
      },
      sections: [
        {
          // Vini Bianchi
          items: [
            { desc: 'Argiolas, 2023, Sardegna' },
            { desc: 'Planeta, 2022, Sicilia' },
            { desc: 'La Scolca, 2022' },
            { desc: 'Mustilli, 2022, Campania' },
          ],
        },
        {
          // Vini Rossi
          items: [
            { desc: 'Donnafugata, 2021' },
            { desc: 'Vietti, 2019, Piemonte' },
            { desc: 'Casanova di Neri, 2018' },
            { desc: 'Tenuta delle Terre Nere, 2021' },
          ],
        },
        {
          // Bollicine & Dolci
          items: [
            { desc: "Ca' del Bosco" },
            { desc: 'Donnafugata, Ben Ryé' },
            { desc: 'Florio, Sicilia' },
          ],
        },
      ],
    },
    colazione: {
      de: 'Colazione',
      note: {
        title: 'La Dolce Mattina',
        text: 'La colazione italiana, come piace a noi: un cornetto, un espresso, un bicchiere di limonata. Nei giorni feriali fino alle 12, nel weekend fino alle 14.',
      },
      sections: [
        {
          // Per Cominciare
          items: [
            { desc: 'In camicia su spinaci, salsa olandese' },
            { desc: 'Pane a lievitazione naturale, pomodorini, burrata' },
            { desc: 'Mascarpone, miele, frutti di bosco' },
            { desc: 'Fatto in casa, fresco ogni giorno' },
          ],
        },
        {
          // Caffè & Bevande
          items: [
            { desc: 'Torrefazione propria, Caffè Vergnano' },
            { desc: 'Doppio shot, alla milanese' },
            { desc: 'Spremuta fresca, Tarocco siciliana' },
            { desc: 'Fatta in casa con limoni di Amalfi' },
          ],
        },
      ],
    },
  },
  gallery: [
    { caption: 'Aperitivo al limone', alt: 'Aperitivo al limone nel bicchiere al bar del Casa Bellucci sul Kurfürstendamm' },
    { caption: 'Pasta al caviale', alt: 'Paccheri fatti in casa al caviale nel ristorante italiano Casa Bellucci a Berlino' },
    { caption: 'Ostriche e frutti di mare', alt: 'Ostriche fresche e frutti di mare come antipasto al Casa Bellucci' },
    { caption: 'Filetto di manzo', alt: 'Filetto di manzo scottato con salsa e vino rosso al Casa Bellucci sul Kurfürstendamm' },
    { caption: 'Burrata con pinoli', alt: 'Burrata con pinoli e olio extra vergine, antipasto al Casa Bellucci Berlino-Charlottenburg' },
    { caption: 'Dolce ai frutti di bosco', alt: 'Dolce fatto in casa con frutti di bosco e menta al Casa Bellucci' },
    { caption: 'Dolce al cioccolato', alt: 'Dolce al cioccolato con gelato e frutti di bosco al Casa Bellucci Berlino' },
    { caption: 'Champagne', alt: 'Champagne nel secchiello del ghiaccio al Casa Bellucci, Kurfürstendamm Berlino-Charlottenburg' },
  ],
  press: [
    "L'anima dell'Italia sul Kudamm, come se qualcuno avesse trapiantato una trattoria di Taormina a Charlottenburg.",
    'Una delle più belle terrazze estive di Berlino. Qui profuma di limoni e di lunghi pomeriggi.',
    'Autenticamente italiano, dalla pasta alla carta. Raramente si mangia così sinceramente.',
  ],
} as const;

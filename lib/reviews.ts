// Kuratierte ECHTE Google-Rezensionen fuer die Gaeste-Stimmen-Sektion.
// Quelle: Google Business Profile (Casa Bellucci, CID 12485998686773928551).
// Verbatim-Auszuege (gekuerzt, koennen mitten im Text beginnen); im UI werden
// sie per CSS auf einheitliche Hoehe geklemmt + "mehr anzeigen"-Link zu Google.
// Die Gesamtbewertung (Wert/Anzahl) liegt in SITE.rating (lib/site.ts).

export interface Review {
  author: string;
  rating: number;
  text: string;
}

export const REVIEWS: Review[] = [
  {
    author: 'S. R.',
    rating: 5,
    text: 'Der Service war toll. Immer da und aufmerksam. Das Essen war unbeschreiblich lecker. Das Ambiente ist sehr exklusiv und trotzdem gemütlich. Sehr empfehlenswert ist die Lobster-Pasta.',
  },
  {
    author: 'Chris Palm',
    rating: 5,
    text: 'Ein wirklich feines italienisches Restaurant, das preislich absolut fair ist. Wir hatten fantastische Pasta, die wirklich hervorragend geschmeckt hat. Mein Berliner Freund geriet regelrecht ins Schwärmen über die Trüffelpasta.',
  },
  {
    author: 'M D-Berlin',
    rating: 5,
    text: 'Das Bellucci am Kurfürstendamm ist ein wirklich toller Hotspot. Sehr gemütlich und hochwertig eingerichtetes Lokal. Meine Wahl ist auf das Rührei mit Trüffel gefallen. Auch der Service war spitze.',
  },
  {
    author: 'Prof. Dr. med. Gerhard Schmid-Ott',
    rating: 5,
    text: 'Ausgesprochen schmackhaftes Essen, z.B. ein auf den Punkt gebratenes, zartes Filetsteak vom Angusrind mit leckerer Soße, besonders freundliche Bedienung, schönes Ambiente, ausgewogenes Preis-Leistungsverhältnis.',
  },
  {
    author: 'Holger Berg',
    rating: 5,
    text: 'Wer mal was Besonderes zum Frühstück möchte, bitte sehr! Tolle Auswahl, super Geschmack, aufmerksamer Service und beste Qualität. Wiederholung garantiert!',
  },
  {
    author: 'Steve Kunze',
    rating: 5,
    text: 'Stilvolles Restaurant mit fantastischem Service und sehr leckerem Essen, sehr zu empfehlen, kommen wie immer gern wieder.',
  },
];

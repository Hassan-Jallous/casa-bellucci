import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import {
  SizilianischLanding,
  type SizilianischFaq,
} from '@/components/sections/SizilianischLanding';
import {
  pageMetadata,
  webPageJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from '@/lib/seo';

const PATH = '/sizilianisches-restaurant-berlin/';

const TITLE =
  'Sizilianisches Restaurant Berlin | Casa Bellucci, Cucina Siciliana am Kurfürstendamm';
const DESCRIPTION =
  'Casa Bellucci bringt sizilianische Küche nach Berlin-Charlottenburg. Cucina Siciliana, frischer Fisch, Weine vom Ätna und Sommerterrasse am Kurfürstendamm 63.';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const FAQS: SizilianischFaq[] = [
  {
    question: 'Was macht Casa Bellucci sizilianisch?',
    answer:
      'Casa Bellucci kocht Cucina Siciliana mit fangfrischem Fisch und Pasta fatta a mano. Sizilianische Zutaten ziehen sich durch die Karte, von Gambero Rosso di Mazara über Limonata Siciliana aus Amalfi-Zitronen bis zu frisch gepressten Tarocco-Orangen. Die Weinkarte legt den Schwerpunkt auf Sizilien und Süditalien.',
  },
  {
    question: 'Eignet sich Casa Bellucci für ein romantisches Dinner?',
    answer:
      'Ja. Am Abend hat Casa Bellucci eine ruhige, gehobene Atmosphäre mit Kerzenlicht und der Stimmung einer Sommerterrasse in Taormina. Das passt für ein romantisches Dinner zu zweit, für ein Date in Berlin und für besondere Anlässe wie Geburtstage oder Jubiläen.',
  },
  {
    question: 'Welche sizilianischen Weine gibt es?',
    answer:
      'Die Weinkarte ist von Sommelier Marco kuratiert und reicht vom Ätna bis zum Veneto. Aus Sizilien kommen unter anderem Etna Bianco von Planeta, Nero d Avola, Etna Rosso, Passito di Pantelleria und Marsala. Rund 65 Prozent der Auswahl stammen aus Sizilien und Süditalien.',
  },
  {
    question: 'Wo in Berlin gibt es sizilianische Küche?',
    answer:
      'Sizilianische Küche in Berlin gibt es bei Casa Bellucci am Kurfürstendamm 63 in Berlin-Charlottenburg. Das Restaurant liegt zentral am Ku damm und ist gut mit den Linien rund um den Kurfürstendamm erreichbar.',
  },
  {
    question: 'Wann ist die Abendkarte verfügbar?',
    answer:
      'Die Abendkarte, Una Serata Siciliana, ist täglich ab 18:00 Uhr verfügbar. Casa Bellucci ist Montag bis Samstag von 09:00 bis 00:00 Uhr geöffnet und Sonntag von 09:00 bis 18:00 Uhr. Für einen Tisch am Abend empfehlen wir eine Reservierung.',
  },
];

export default function SizilianischesRestaurantBerlinPage() {
  const jsonLdBlocks = [
    webPageJsonLd({ name: TITLE, description: DESCRIPTION, path: PATH }),
    breadcrumbJsonLd([
      { name: 'Startseite', path: '/' },
      { name: 'Sizilianisches Restaurant Berlin', path: PATH },
    ]),
    faqJsonLd(
      FAQS.map((faq) => ({ question: faq.question, answer: faq.answer })),
    ),
  ];

  return (
    <PageShell>
      {jsonLdBlocks.map((block, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(block).replace(/</g, '\\u003c'),
          }}
        />
      ))}
      <SizilianischLanding faqs={FAQS} />
    </PageShell>
  );
}

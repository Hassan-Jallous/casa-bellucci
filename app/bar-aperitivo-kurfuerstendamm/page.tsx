import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { BarLanding, type BarFaq } from '@/components/sections/BarLanding';
import {
  pageMetadata,
  webPageJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
  placeJsonLd,
} from '@/lib/seo';

const PATH = '/bar-aperitivo-kurfuerstendamm/';

const TITLE = 'Bar am Kudamm | Aperitivo & Cocktails | Casa Bellucci';
const DESCRIPTION =
  'Bar mit Aperitivo, Cocktails und italienischem Wein am Kurfürstendamm 63 in Berlin-Charlottenburg. Sommerterrasse, Live-DJ am Wochenende, Walk-ins willkommen.';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: '/images/gallery/8.jpg',
});

const FAQS: BarFaq[] = [
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
      'Unsere Weinkarte legt den Schwerpunkt auf Sizilien und Süditalien und ist von Sommelier Marco kuratiert. Glasweise und täglich wechselnd gibt es unter anderem Etna Bianco, Nero d Avola, Etna Rosso, dazu Franciacorta, Prosecco sowie Süßweine wie Passito di Pantelleria und Marsala.',
  },
  {
    question: 'Kann man an der Bar ohne Reservierung kommen?',
    answer:
      'Ja. Walk-ins sind besonders an der Bar willkommen. Für einen Tisch am Abend empfehlen wir eine Reservierung, telefonisch unter +49 162 3009925 oder online über Quandoo. Casa Bellucci ist täglich ab 09:00 Uhr geöffnet, Montag bis Samstag bis 00:00 Uhr.',
  },
];

export default function BarAperitivoKurfuerstendammPage() {
  const jsonLdBlocks = [
    webPageJsonLd({ name: TITLE, description: DESCRIPTION, path: PATH }),
    placeJsonLd({
      type: 'BarOrPub',
      name: 'Casa Bellucci Bar',
      description: DESCRIPTION,
      path: PATH,
      servesCuisine: ['Aperitivo', 'Cocktails', 'Wein'],
    }),
    breadcrumbJsonLd([
      { name: 'Startseite', path: '/' },
      { name: 'Bar und Aperitivo am Kudamm', path: PATH },
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
      <BarLanding faqs={FAQS} />
    </PageShell>
  );
}

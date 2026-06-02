import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import {
  FruehstueckLanding,
  type FruehstueckFaq,
} from '@/components/sections/FruehstueckLanding';
import {
  pageMetadata,
  webPageJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from '@/lib/seo';

const PATH = '/fruehstueck-brunch-kurfuerstendamm/';

const TITLE =
  'Frühstück & Brunch in Charlottenburg | Casa Bellucci am Kurfürstendamm';
const DESCRIPTION =
  'Italienisches Frühstück und Brunch in Berlin-Charlottenburg, am Kurfürstendamm 63. Cornetto, Eier, Pancakes und Espresso, am Wochenende Brunch auf der Sommerterrasse.';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const FAQS: FruehstueckFaq[] = [
  {
    question: 'Wann gibt es Frühstück bei Casa Bellucci?',
    answer:
      'Frühstück gibt es bei Casa Bellucci täglich von 09:00 bis 12:00 Uhr. Am Wochenende läuft das Frühstück länger und wird zum Brunch, dann servieren wir bis 14:00 Uhr. Casa Bellucci liegt am Kurfürstendamm 63 in Berlin-Charlottenburg.',
  },
  {
    question: 'Gibt es am Wochenende Brunch in Charlottenburg?',
    answer:
      'Ja. Am Wochenende wird aus dem Frühstück ein Brunch, mit längeren Zeiten bis 14:00 Uhr. Bei gutem Wetter öffnet die Sommerterrasse am Kurfürstendamm schon am Morgen, sodass der Brunch in Charlottenburg auch draußen stattfinden kann.',
  },
  {
    question: 'Was ist italienisches Frühstück?',
    answer:
      'Ein italienisches Frühstück ist leicht und süß. Statt einem großen Teller gibt es Cornetto und Caffè, also die italienische Variante des Croissants mit Espresso oder Cappuccino. Bei Casa Bellucci ergänzen Uova alla Fiorentina, Avocado Toast Mediterraneo und Pancakes con Frutti di Bosco das Angebot, dazu frisch gepresste Tarocco-Orangen und Limonata Siciliana mit Amalfi-Zitronen.',
  },
  {
    question: 'Kann man fürs Frühstück reservieren?',
    answer:
      'Ja. Sie können online über Quandoo einen Tisch zum Frühstück oder Brunch reservieren oder uns telefonisch unter +49 162 3009925 erreichen. Besonders am Wochenende empfehlen wir eine Reservierung.',
  },
  {
    question: 'Wo am Kurfürstendamm gibt es Frühstück?',
    answer:
      'Frühstück am Kurfürstendamm gibt es bei Casa Bellucci am Kurfürstendamm 63, 10707 Berlin-Charlottenburg, in Charlottenburg-Wilmersdorf. Das Restaurant liegt zentral am Kudamm und ist gut mit Bus und U-Bahn erreichbar.',
  },
];

export default function FruehstueckBrunchKurfuerstendammPage() {
  const jsonLdBlocks = [
    webPageJsonLd({ name: TITLE, description: DESCRIPTION, path: PATH }),
    breadcrumbJsonLd([
      { name: 'Startseite', path: '/' },
      { name: 'Frühstück und Brunch in Charlottenburg', path: PATH },
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
      <FruehstueckLanding faqs={FAQS} />
    </PageShell>
  );
}

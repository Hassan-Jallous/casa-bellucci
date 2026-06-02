import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { ItalienischLanding, ITALIENISCH_FAQ } from '@/components/sections/ItalienischLanding';
import { breadcrumbJsonLd, faqJsonLd, pageMetadata, webPageJsonLd } from '@/lib/seo';

const PATH = '/italienisches-restaurant-berlin-charlottenburg/';

const TITLE =
  'Italienisches Restaurant Berlin-Charlottenburg | Casa Bellucci am Kurfürstendamm';
const DESCRIPTION =
  'Casa Bellucci ist ein italienisches Restaurant in Berlin-Charlottenburg, am Kurfürstendamm 63. Frühstück, Lunch, Dinner, Bar und Sommerterrasse, mit Online-Reservierung.';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

export default function ItalienischRestaurantBerlinCharlottenburgPage() {
  const jsonLd = [
    webPageJsonLd({ name: TITLE, description: DESCRIPTION, path: PATH }),
    breadcrumbJsonLd([
      { name: 'Startseite', path: '/' },
      { name: 'Italienisches Restaurant Berlin-Charlottenburg', path: PATH },
    ]),
    faqJsonLd(ITALIENISCH_FAQ.map((f) => ({ question: f.question, answer: f.answer }))),
  ];

  return (
    <PageShell>
      {jsonLd.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data).replace(/</g, '\\u003c'),
          }}
        />
      ))}
      <ItalienischLanding />
    </PageShell>
  );
}

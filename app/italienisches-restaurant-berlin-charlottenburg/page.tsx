import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { ItalienischLanding, ITALIENISCH_FAQ } from '@/components/sections/ItalienischLanding';
import { breadcrumbJsonLd, faqJsonLd, pageMetadata, placeJsonLd, webPageJsonLd } from '@/lib/seo';

const PATH = '/italienisches-restaurant-berlin-charlottenburg/';

const TITLE = 'Italienisches Restaurant am Kudamm | Casa Bellucci';
const DESCRIPTION =
  'Italienisches Restaurant am Kurfürstendamm 63 in Berlin-Charlottenburg. Frühstück, Lunch, Dinner, Bar und Sommerterrasse in der City West, mit Online-Reservierung.';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: '/images/terrace.jpg',
});

export default function ItalienischRestaurantBerlinCharlottenburgPage() {
  const jsonLd = [
    webPageJsonLd({ name: TITLE, description: DESCRIPTION, path: PATH }),
    placeJsonLd({
      type: 'Restaurant',
      name: 'Casa Bellucci',
      description: DESCRIPTION,
      path: PATH,
      servesCuisine: ['Italienisch', 'Mediterran'],
    }),
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

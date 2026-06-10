import type { Metadata } from 'next';
import type { Lang } from '@/lib/i18n/config';
import { LanguageProvider } from '@/lib/i18n/LanguageProvider';
import { DICTS } from '@/lib/i18n/dictionaries';
import { PageShell } from '@/components/PageShell';
import { BarLanding } from '@/components/sections/BarLanding';
import {
  pageMetadata,
  webPageJsonLd,
  placeJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from '@/lib/seo';

const PATH = '/bar-aperitivo-kurfuerstendamm/';
const HOME_LABEL: Record<Lang, string> = { de: 'Startseite', en: 'Home', it: 'Home' };

export function barMetadata(lang: Lang): Metadata {
  return pageMetadata({
    title: DICTS[lang].meta.bar.title,
    description: DICTS[lang].meta.bar.description,
    path: PATH,
    lang,
    image: '/images/gallery/8.jpg',
  });
}

export function BarPage({ lang }: { lang: Lang }) {
  const d = DICTS[lang];
  const title = d.meta.bar.title;
  const description = d.meta.bar.description;
  const jsonLd = [
    webPageJsonLd({ name: title, description, path: PATH, lang }),
    placeJsonLd({
      type: 'BarOrPub',
      name: 'Casa Bellucci Bar',
      description,
      path: PATH,
      servesCuisine: ['Aperitivo', 'Cocktails', 'Wein'],
      lang,
    }),
    breadcrumbJsonLd(
      [
        { name: HOME_LABEL[lang], path: '/' },
        { name: title, path: PATH },
      ],
      lang,
    ),
    faqJsonLd(
      d.landingBar.faqs.map((f) => ({ question: f.question, answer: f.answer })),
      lang,
    ),
  ];

  return (
    <LanguageProvider initialLang={lang}>
      <PageShell>
        {jsonLd.map((data, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(data).replace(/</g, '\\u003c'),
            }}
          />
        ))}
        <BarLanding />
      </PageShell>
    </LanguageProvider>
  );
}

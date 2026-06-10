import type { Metadata } from 'next';
import type { Lang } from '@/lib/i18n/config';
import { LanguageProvider } from '@/lib/i18n/LanguageProvider';
import { DICTS } from '@/lib/i18n/dictionaries';
import { PageShell } from '@/components/PageShell';
import { ItalienischLanding } from '@/components/sections/ItalienischLanding';
import {
  pageMetadata,
  webPageJsonLd,
  placeJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from '@/lib/seo';

const PATH = '/italienisches-restaurant-berlin-charlottenburg/';
const HOME_LABEL: Record<Lang, string> = { de: 'Startseite', en: 'Home', it: 'Home' };

export function italienischMetadata(lang: Lang): Metadata {
  return pageMetadata({
    title: DICTS[lang].meta.italienisch.title,
    description: DICTS[lang].meta.italienisch.description,
    path: PATH,
    lang,
    image: '/images/lp-terr-it.jpg',
  });
}

export function ItalienischPage({ lang }: { lang: Lang }) {
  const d = DICTS[lang];
  const title = d.meta.italienisch.title;
  const description = d.meta.italienisch.description;
  const jsonLd = [
    webPageJsonLd({ name: title, description, path: PATH, lang }),
    placeJsonLd({
      type: 'Restaurant',
      name: 'Casa Bellucci',
      description,
      path: PATH,
      servesCuisine: ['Italienisch', 'Mediterran'],
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
      d.landingItalienisch.faqs.map((f) => ({ question: f.question, answer: f.answer })),
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
        <ItalienischLanding />
      </PageShell>
    </LanguageProvider>
  );
}

import type { Metadata } from 'next';
import type { Lang } from '@/lib/i18n/config';
import { LanguageProvider } from '@/lib/i18n/LanguageProvider';
import { DICTS } from '@/lib/i18n/dictionaries';
import { PageShell } from '@/components/PageShell';
import { LunchLanding } from '@/components/sections/LunchLanding';
import {
  pageMetadata,
  webPageJsonLd,
  placeJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from '@/lib/seo';

const PATH = '/business-lunch-mittagstisch-charlottenburg/';
const HOME_LABEL: Record<Lang, string> = { de: 'Startseite', en: 'Home', it: 'Home' };

export function lunchMetadata(lang: Lang): Metadata {
  return pageMetadata({
    title: DICTS[lang].meta.lunch.title,
    description: DICTS[lang].meta.lunch.description,
    path: PATH,
    lang,
    image: '/images/menu-lunch.jpg',
  });
}

export function LunchPage({ lang }: { lang: Lang }) {
  const d = DICTS[lang];
  const title = d.meta.lunch.title;
  const description = d.meta.lunch.description;
  const jsonLd = [
    webPageJsonLd({ name: title, description, path: PATH, lang }),
    placeJsonLd({
      type: 'Restaurant',
      name: 'Casa Bellucci Mittagstisch',
      description,
      path: PATH,
      servesCuisine: ['Italienisch', 'Mediterran', 'Mittagstisch'],
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
      d.landingLunch.faqs.map((f) => ({ question: f.question, answer: f.answer })),
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
        <LunchLanding />
      </PageShell>
    </LanguageProvider>
  );
}

import type { Metadata } from 'next';
import type { Lang } from '@/lib/i18n/config';
import { LanguageProvider } from '@/lib/i18n/LanguageProvider';
import { DICTS } from '@/lib/i18n/dictionaries';
import { PageShell } from '@/components/PageShell';
import { FruehstueckLanding } from '@/components/sections/FruehstueckLanding';
import {
  pageMetadata,
  webPageJsonLd,
  placeJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from '@/lib/seo';

const PATH = '/fruehstueck-brunch-kurfuerstendamm/';
const HOME_LABEL: Record<Lang, string> = { de: 'Startseite', en: 'Home', it: 'Home' };

export function fruehstueckMetadata(lang: Lang): Metadata {
  return pageMetadata({
    title: DICTS[lang].meta.fruehstueck.title,
    description: DICTS[lang].meta.fruehstueck.description,
    path: PATH,
    lang,
    image: '/images/menu-breakfast.jpg',
  });
}

export function FruehstueckPage({ lang }: { lang: Lang }) {
  const d = DICTS[lang];
  const title = d.meta.fruehstueck.title;
  const description = d.meta.fruehstueck.description;
  const jsonLd = [
    webPageJsonLd({ name: title, description, path: PATH, lang }),
    placeJsonLd({
      type: 'CafeOrCoffeeShop',
      name: 'Casa Bellucci Frühstück & Brunch',
      description,
      path: PATH,
      servesCuisine: ['Frühstück', 'Brunch', 'Italienisch'],
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
      d.landingFruehstueck.faqs.map((f) => ({ question: f.question, answer: f.answer })),
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
        <FruehstueckLanding />
      </PageShell>
    </LanguageProvider>
  );
}

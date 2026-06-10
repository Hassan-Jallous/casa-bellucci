import type { Metadata } from 'next';
import type { Lang } from '@/lib/i18n/config';
import { LanguageProvider } from '@/lib/i18n/LanguageProvider';
import { DICTS } from '@/lib/i18n/dictionaries';
import { pageMetadata } from '@/lib/seo';
import { LegalPage } from '@/components/LegalPage';

const PATH = '/datenschutzerklaerung/';

export function datenschutzMetadata(lang: Lang): Metadata {
  return pageMetadata({
    title: DICTS[lang].meta.datenschutz.title,
    description: DICTS[lang].meta.datenschutz.description,
    path: PATH,
    lang,
    index: false,
  });
}

export function DatenschutzPage({ lang }: { lang: Lang }) {
  return (
    <LanguageProvider initialLang={lang}>
      <LegalPage slug="datenschutz" eyebrow="Datenschutz" />
    </LanguageProvider>
  );
}

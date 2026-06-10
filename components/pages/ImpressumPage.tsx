import type { Metadata } from 'next';
import type { Lang } from '@/lib/i18n/config';
import { LanguageProvider } from '@/lib/i18n/LanguageProvider';
import { DICTS } from '@/lib/i18n/dictionaries';
import { pageMetadata } from '@/lib/seo';
import { LegalPage } from '@/components/LegalPage';

const PATH = '/impressum/';

export function impressumMetadata(lang: Lang): Metadata {
  return pageMetadata({
    title: DICTS[lang].meta.impressum.title,
    description: DICTS[lang].meta.impressum.description,
    path: PATH,
    lang,
    index: false,
  });
}

export function ImpressumPage({ lang }: { lang: Lang }) {
  return (
    <LanguageProvider initialLang={lang}>
      <LegalPage slug="impressum" eyebrow="Legal" />
    </LanguageProvider>
  );
}

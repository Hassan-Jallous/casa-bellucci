import type { Metadata } from 'next';
import type { Lang } from '@/lib/i18n/config';
import { LanguageProvider } from '@/lib/i18n/LanguageProvider';
import { DICTS } from '@/lib/i18n/dictionaries';
import { pageMetadata } from '@/lib/seo';
import { LegalPage } from '@/components/LegalPage';

const PATH = '/cookie-richtlinie-eu/';

export function cookieMetadata(lang: Lang): Metadata {
  return pageMetadata({
    title: DICTS[lang].meta.cookies.title,
    description: DICTS[lang].meta.cookies.description,
    path: PATH,
    lang,
    index: false,
  });
}

export function CookiePage({ lang }: { lang: Lang }) {
  return (
    <LanguageProvider initialLang={lang}>
      <LegalPage slug="cookies" eyebrow="Cookies" />
    </LanguageProvider>
  );
}

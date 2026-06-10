import type { Metadata } from 'next';
import type { Lang } from '@/lib/i18n/config';
import { LanguageProvider } from '@/lib/i18n/LanguageProvider';
import { DICTS } from '@/lib/i18n/dictionaries';
import { pageMetadata } from '@/lib/seo';
import { HomeContent } from '@/components/pages/HomeContent';

export function homeMetadata(lang: Lang): Metadata {
  return pageMetadata({
    title: DICTS[lang].meta.home.title,
    description: DICTS[lang].meta.home.description,
    path: '/',
    lang,
  });
}

export function HomePage({ lang }: { lang: Lang }) {
  return (
    <LanguageProvider initialLang={lang}>
      <HomeContent />
    </LanguageProvider>
  );
}

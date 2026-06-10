import type { Metadata } from 'next';
import type { Lang } from '@/lib/i18n/config';
import { LanguageProvider } from '@/lib/i18n/LanguageProvider';
import { DICTS } from '@/lib/i18n/dictionaries';
import { pageMetadata } from '@/lib/seo';
import { PageShell } from '@/components/PageShell';
import { DankeBody } from '@/components/sections/DankeBody';

const PATH = '/danke-fuer-ihre-reservierung/';

export function dankeMetadata(lang: Lang): Metadata {
  return pageMetadata({
    title: DICTS[lang].meta.danke.title,
    description: DICTS[lang].meta.danke.description,
    path: PATH,
    lang,
    index: false,
  });
}

export function DankePage({ lang }: { lang: Lang }) {
  return (
    <LanguageProvider initialLang={lang}>
      <PageShell>
        <main className="subpage thanks-page">
          <DankeBody />
        </main>
      </PageShell>
    </LanguageProvider>
  );
}

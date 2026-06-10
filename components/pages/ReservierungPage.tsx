import type { Metadata } from 'next';
import type { Lang } from '@/lib/i18n/config';
import { LanguageProvider } from '@/lib/i18n/LanguageProvider';
import { DICTS } from '@/lib/i18n/dictionaries';
import { pageMetadata } from '@/lib/seo';
import { PageShell } from '@/components/PageShell';
import { QuandooWidget } from '@/components/QuandooWidget';
import { ReservierungIntro } from '@/components/sections/ReservierungIntro';

const PATH = '/reservierung/';

export function reservierungMetadata(lang: Lang): Metadata {
  return pageMetadata({
    title: DICTS[lang].meta.reservierung.title,
    description: DICTS[lang].meta.reservierung.description,
    path: PATH,
    lang,
  });
}

export function ReservierungPage({ lang }: { lang: Lang }) {
  return (
    <LanguageProvider initialLang={lang}>
      <PageShell>
        <main className="subpage booking-page">
          <section className="reservation reservation-full" id="reservieren">
            <div className="wrap reservation-inner">
              <ReservierungIntro />
              <div className="reservation-card reservation-widget-card">
                <QuandooWidget />
              </div>
            </div>
          </section>
        </main>
      </PageShell>
    </LanguageProvider>
  );
}

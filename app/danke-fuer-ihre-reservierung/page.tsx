import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { pageMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Danke für Ihre Reservierung',
  description: 'Vielen Dank für Ihre Reservierung bei Casa Bellucci.',
  path: '/danke-fuer-ihre-reservierung/',
  index: false,
});

export default function ReservationThanksPage() {
  return (
    <PageShell>
      <main className="subpage thanks-page">
        <div className="wrap legal-wrap">
          <p className="subpage-eyebrow">Reservierung</p>
          <h1>Danke für Ihre Reservierung</h1>
          <article className="legal-content">
            <p>
              Vielen Dank für Ihre Reservierung bei Casa Bellucci. Wir freuen uns darauf, Sie bald bei uns am Kurfürstendamm begrüßen zu dürfen.
            </p>
            <p>
              Reservierungsdetails werden über das Reservierungssystem bestätigt. Bei Rückfragen erreichen Sie uns direkt telefonisch.
            </p>
            <p>
              <strong>So finden Sie uns:</strong><br />
              <a href={SITE.mapsUrl} target="_blank" rel="noreferrer">
                {SITE.address.street}, {SITE.address.postalCity}
              </a>
            </p>
            <p>
              <strong>Öffnungszeiten:</strong><br />
              {SITE.openingHours.weekdays}<br />
              {SITE.openingHours.sunday}
            </p>
            <p>
              <a className="btn btn-primary" href={SITE.phoneHref}>Anrufen</a>
            </p>
          </article>
        </div>
      </main>
    </PageShell>
  );
}

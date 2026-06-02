import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { QuandooWidget } from '@/components/QuandooWidget';
import { FlagBar } from '@/components/sections/Brand';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Tischreservierung · Casa Bellucci',
  description: 'Reserviere jetzt einen Tisch bei Casa Bellucci am Kurfürstendamm.',
};

export default function ReservierungPage() {
  return (
    <PageShell>
      <main className="subpage booking-page">
        <section className="reservation reservation-full" id="reservieren">
          <div className="wrap reservation-inner">
            <div>
              <div className="section-eyebrow">
                <span className="eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                  <FlagBar orientation="h" /> Tischreservierung
                </span>
              </div>
              <h1>Ein Tisch bei <span className="it">Casa Bellucci</span></h1>
              <p className="lede">
                Reserviere direkt online über unser offizielles Quandoo-Modul oder erreiche uns telefonisch für spontane Wünsche und größere Gruppen.
              </p>
              <div className="reservation-actions">
                <a className="btn btn-primary" href={SITE.phoneHref}>Jetzt anrufen</a>
                <a className="btn btn-ghost" href={SITE.mapsUrl} target="_blank" rel="noreferrer">Route öffnen →</a>
              </div>
            </div>
            <div className="reservation-card reservation-widget-card">
              <QuandooWidget />
            </div>
          </div>
        </section>
        <section className="subpage-info">
          <div className="wrap subpage-info-grid">
            <div>
              <h2>So finden Sie uns</h2>
              <p>
                <strong>Kurfürstendamm</strong><br />
                <a href={SITE.mapsUrl} target="_blank" rel="noreferrer">
                  {SITE.address.street}, {SITE.address.postalCity}
                </a>
              </p>
            </div>
            <div>
              <h2>Öffnungszeiten</h2>
              <p>{SITE.openingHours.weekdays}</p>
              <p>{SITE.openingHours.sunday}</p>
            </div>
            <div>
              <h2>Kontakt</h2>
              <p>
                <a href={SITE.phoneHref}>{SITE.phone}</a><br />
                <a href={SITE.emailHref}>{SITE.email}</a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}

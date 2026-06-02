import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { QuandooWidget } from '@/components/QuandooWidget';
import { FlagBar } from '@/components/sections/Brand';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Tisch reservieren',
  description:
    'Reserviere online einen Tisch bei Casa Bellucci am Kurfürstendamm 63 in Berlin-Charlottenburg.',
  path: '/reservierung/',
});

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
            </div>
            <div className="reservation-card reservation-widget-card">
              <QuandooWidget />
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}

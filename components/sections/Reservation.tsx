import { FlagBar } from './Brand';
import { QuandooWidget } from '@/components/QuandooWidget';
import { SITE } from '@/lib/site';
import { routePath } from '@/lib/routes';

export function Reservation() {
  return (
    <section className="reservation" id="reservieren" data-screen-label="06 Reservieren">
      <div className="wrap reservation-inner">
        <div>
          <div className="section-eyebrow">
            <span className="eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <FlagBar orientation="h" /> Reservieren
            </span>
          </div>
          <h2>Ein Tisch für <span className="it">heute</span></h2>
          <p className="lede">
            Frühstück, Lunch auf der Terrasse oder ein langer Abend am Kurfürstendamm. Reserviere direkt online oder erreiche uns telefonisch für spontane Wünsche.
          </p>
        </div>
        <div className="reservation-card reservation-widget-card">
          <QuandooWidget />
          <div className="reservation-line">
            <span>Telefon</span>
            <a href={SITE.phoneHref}>{SITE.phone}</a>
          </div>
          <div className="reservation-line">
            <span>E-Mail</span>
            <a href={SITE.emailHref}>{SITE.email}</a>
          </div>
          <div className="reservation-line">
            <span>Öffnungszeiten</span>
            <strong>{SITE.openingHours.weekdays}<br/>{SITE.openingHours.sunday}</strong>
          </div>
          <div className="reservation-actions">
            <a className="btn btn-primary" href={SITE.phoneHref}>Jetzt anrufen</a>
            <a className="btn btn-ghost" href={routePath('/reservierung/')}>Reservierungsseite →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

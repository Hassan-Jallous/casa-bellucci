import { FlagBar } from './Brand';
import { QuandooWidget } from '@/components/QuandooWidget';

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
            Frühstück, Lunch auf der Sommerterrasse oder ein langer sizilianischer Abend: reserviere in wenigen Sekunden online und erhalte sofort deine Bestätigung. Für spontane Wünsche oder größere Gruppen erreichst du uns auch telefonisch.
          </p>
        </div>
        <div className="reservation-card reservation-widget-card">
          <QuandooWidget />
        </div>
      </div>
    </section>
  );
}

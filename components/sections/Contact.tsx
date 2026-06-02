import { FlagBar } from './Brand';
import { SITE } from '@/lib/site';

export function Contact() {
  return (
    <section className="contact" id="kontakt" data-screen-label="07 Kontakt">
      <div className="wrap">
        <div className="grid">
          <div>
            <div className="section-eyebrow">
              <span className="eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                <FlagBar orientation="h" /> Kontakt
              </span>
            </div>
            <h2>Kontakt &amp;<br/><span className="it">Anfahrt</span></h2>
            <p className="lede">
              Besuchen Sie Casa Bellucci, Ihr italienisches und sizilianisches Restaurant am Kurfürstendamm 63 in Berlin-Charlottenburg. Reservierungen per Telefon oder online, Walk-ins besonders an der Bar.
            </p>
            <div className="info">
              <div className="block">
                <div className="k">Adresse</div>
                <div className="v">Kurfürstendamm 63<br/>10707 Berlin · Charlottenburg</div>
              </div>
              <div className="block">
                <div className="k">Reservierung</div>
                <div className="v">{SITE.phone}<br/><span className="muted">{SITE.email}</span></div>
              </div>
              <div className="block">
                <div className="k">Öffnungszeiten</div>
                <div className="v">{SITE.openingHours.weekdays}<br/><span className="muted">{SITE.openingHours.sunday}</span></div>
              </div>
              <div className="contact-actions">
                <a className="btn btn-primary" href={SITE.phoneHref}>Anrufen</a>
                <a className="btn btn-ghost" href={SITE.mapsUrl} target="_blank" rel="noreferrer">Auf Karte öffnen →</a>
              </div>
            </div>
          </div>
          <div className="map" aria-label="Lage auf Karte">
            <div className="corner">Kurfürstendamm · Charlottenburg</div>
            <div className="pin">
              <div className="dot"></div>
              <div className="pulse"></div>
              <div className="label">Casa Bellucci</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

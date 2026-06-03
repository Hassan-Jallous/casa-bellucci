import type { CSSProperties } from 'react';
import { asset } from '@/lib/assetPath';
import { FlagBar } from './Brand';

/* All-Day Concept */
export function About() {
  const moments = [
    {
      time: "Vormittag",
      title: "Frühstück & Brunch",
      copy: "Frühstück in Charlottenburg mit Espresso und Cornetto, am Wochenende Brunch am Kudamm. Ein ruhiger Start in den Tag.",
    },
    {
      time: "Mittag",
      title: "Lunch & Mittagstisch",
      copy: "Pasta fatta a mano, fangfrischer Fisch und Salate, mittags auch als Business Lunch auf der Sommerterrasse.",
    },
    {
      time: "Abend",
      title: "Dinner & Bar",
      copy: "Sizilianische Küche, Aperitivo an der Bar, Wein vom Ätna und am Wochenende Live-DJ bis spät in den Abend.",
    },
  ];

  return (
    <section className="about all-day" id="ueber-uns" data-screen-label="02 All-Day Concept">
      <div className="wrap">
        <div className="all-day-grid">
          <div className="all-day-copy">
            <div className="section-eyebrow">
              <span className="eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                <FlagBar orientation="h" /> All-Day Concept
              </span>
            </div>
            <h2>Frühstück, Lunch &amp; Dinner am <span className="it">Kudamm</span>.</h2>
            <p>
              Ein Ort, drei Stimmungen: vom ruhigen Espresso am Vormittag über den Lunch auf der Sommerterrasse bis zum Dinner mit Live-DJ am Wochenende. Auf dem Teller Pasta fatta a mano, fangfrischer Fisch und Aperitivo an der Bar, im Glas Weine vom Ätna.
            </p>
            <div className="dayline" aria-label="Tagesmomente">
              {moments.map((moment, index) => (
                <div className="day-moment" key={moment.title} style={{ "--i": index } as CSSProperties}>
                  <span className="moment-time">{moment.time}</span>
                  <h3>{moment.title}</h3>
                  <p>{moment.copy}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="all-day-media" aria-label="Atmosphäre von Frühstück, Mittag und Abend">
            <figure className="all-day-photo morning">
              <img src={asset("images/menu-breakfast.jpg")} alt="Frühstück bei Casa Bellucci am Kudamm in Berlin-Charlottenburg" />
              <figcaption>Frühstück</figcaption>
            </figure>
            <figure className="all-day-photo midday">
              <img src={asset("images/menu-lunch.jpg")} alt="Lunch mit Pasta auf der Sommerterrasse in Charlottenburg" />
              <figcaption>Mittag</figcaption>
            </figure>
            <figure className="all-day-photo evening">
              <img src={asset("images/menu-dinner.jpg")} alt="Sizilianisches Dinner bei Casa Bellucci, italienisches Restaurant in Berlin" />
              <figcaption>Abend</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

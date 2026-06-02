import type { CSSProperties } from 'react';
import { asset } from '@/lib/assetPath';
import { FlagBar } from './Brand';

/* All-Day Concept */
export function About() {
  const moments = [
    {
      time: "Vormittag",
      title: "Frühstück & Brunch",
      copy: "Espresso, Croissant, leichte Teller und ein ruhiger Start in den Tag.",
    },
    {
      time: "Mittag",
      title: "Lunch auf der Terrasse",
      copy: "Pasta, Fisch und Salate für lange Gespräche zwischen City und Sonne.",
    },
    {
      time: "Abend",
      title: "Dinner & Bar",
      copy: "Sizilianische Küche, Aperitivo und Wein bis spät in den Abend.",
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
            <h2>Ein Tag bei <span className="it">Bellucci</span>.</h2>
            <p>
              Vom späten Frühstück bis zum Dinner: Casa Bellucci ist kein Ort für nur einen Anlass, sondern für den ganzen Tag am Kurfürstendamm.
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
              <img src={asset("images/menu-breakfast.jpg")} alt="Frühstücksmoment bei Casa Bellucci" />
              <figcaption>Frühstück</figcaption>
            </figure>
            <figure className="all-day-photo midday">
              <img src={asset("images/menu-lunch.jpg")} alt="Mediterraner Lunch auf weißem Tisch" />
              <figcaption>Mittag</figcaption>
            </figure>
            <figure className="all-day-photo evening">
              <img src={asset("images/menu-dinner.jpg")} alt="Dinnergericht mit italienischer Atmosphäre" />
              <figcaption>Abend</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

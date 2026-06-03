import { asset } from '@/lib/assetPath';

export function Terrace() {
  const moments = [
    { k: "10:00", v: "Frühstück auf der Terrasse" },
    { k: "14:30", v: "Lunch unter Zitronenbäumen" },
    { k: "18:00", v: "Aperitivo, Wein und Live-DJ" },
  ];

  return (
    <section className="terrace" id="terrasse" data-screen-label="04 Terrasse">
      <div className="terrace-stage">
        <div className="terrace-bg" aria-hidden="true"></div>

        <figure className="terrace-photo">
          <img src={asset("images/terrace/terrace-04.jpg")} alt="Sommerterrasse vom Casa Bellucci, italienisches Restaurant mit Terrasse am Kudamm in Berlin-Charlottenburg" />
          <figcaption>
            <h2>Sommerterrasse am Kudamm</h2>
          </figcaption>
        </figure>

        <div className="terrace-actions">
          <a className="btn btn-primary" href="#reservieren">reservieren</a>
          <a className="btn btn-ghost" href="#galerie">Terrasse ansehen →</a>
        </div>

        <div className="terrace-panel">
          <div className="terrace-quote">
            <span>„</span>
            Lange Nachmittage draußen, leise Gespräche, der erste Aperitivo im Glas.
          </div>
          <div className="terrace-moments">
            {moments.map(moment => (
              <div className="terrace-moment" key={moment.k}>
                <span>{moment.k}</span>
                <strong>{moment.v}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

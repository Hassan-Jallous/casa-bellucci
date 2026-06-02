import { asset } from '@/lib/assetPath';

export function Terrace() {
  const moments = [
    { k: "10:00", v: "Frühstück unter hellen Schirmen" },
    { k: "14:30", v: "Lunch zwischen Zitronenbäumen" },
    { k: "18:00", v: "Aperitivo und Live-DJ bis Kerzenlicht" },
  ];

  return (
    <section className="terrace" id="terrasse" data-screen-label="04 Terrasse">
      <div className="terrace-stage">
        <div className="terrace-bg" aria-hidden="true"></div>

        <figure className="terrace-photo">
          <img src={asset("images/terrace/terrace-04.jpg")} alt="Sommerterrasse des Casa Bellucci mit weiß gedeckten Tischen, Blumen und warmem Licht" />
          <figcaption>
            <span>Kurfürstendamm 63</span>
            <h2>Sommerterrasse offen bei gutem Wetter</h2>
          </figcaption>
        </figure>

        <div className="terrace-actions">
          <a className="btn btn-primary" href="#reservieren">reservieren</a>
          <a className="btn btn-ghost" href="#galerie">Terrasse ansehen →</a>
        </div>

        <div className="terrace-panel">
          <div className="terrace-quote">
            <span>„</span>
            Lange Nachmittage, leise Gespräche, der erste Aperitivo im Glas.
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

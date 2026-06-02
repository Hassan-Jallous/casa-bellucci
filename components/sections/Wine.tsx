import { asset } from '@/lib/assetPath';
import { FlagBar } from './Brand';

interface WineItem {
  n: string;
  v: string;
  p: string;
}

interface WineRegion {
  label: string;
  name: string;
  copy: string;
  list: WineItem[];
}

export function Wine() {
  const regions: WineRegion[] = [
    {
      label: "Sicilia",
      name: "Vom Ätna an die Küste",
      copy: "Nero d'Avola, Etna Bianco, Frappato. Vulkanische Mineralität, ehrliche Trauben.",
      list: [
        { n: "Etna Bianco, Planeta", v: "2022 · Sicilia", p: "11,00" },
        { n: "Nero d'Avola, Donnafugata", v: "2021 · Sicilia", p: "9,00" },
        { n: "Passito di Pantelleria", v: "Ben Ryé · Süßwein", p: "10,00" },
      ],
    },
    {
      label: "Toscana & Piemonte",
      name: "Die großen Klassiker",
      copy: "Sangiovese, Nebbiolo, Brunello. Lagerfähig, aber heute schon zugänglich.",
      list: [
        { n: "Barolo DOCG, Vietti", v: "2019 · Piemonte", p: "14,00" },
        { n: "Brunello, Casanova di Neri", v: "2018 · Toscana", p: "18,00" },
        { n: "Chianti Classico Riserva", v: "Felsina · 2020", p: "11,50" },
      ],
    },
    {
      label: "Bollicine & Norditalia",
      name: "Schaumwein & Weiße",
      copy: "Franciacorta statt Champagner. Vermentino aus Sardinien, Falanghina aus Kampanien.",
      list: [
        { n: "Franciacorta Brut", v: "Ca' del Bosco", p: "13,00" },
        { n: "Vermentino di Sardegna", v: "Argiolas · 2023", p: "8,50" },
        { n: "Gavi del Comune", v: "La Scolca · 2022", p: "12,00" },
      ],
    },
  ];
  return (
    <section className="wine" id="wein" data-screen-label="06 Weine">
      <div className="wrap">
        <div className="top">
          <div>
            <div className="section-eyebrow">
              <span className="eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                <FlagBar orientation="h" /> Unsere Weine
              </span>
            </div>
            <h2>Carta dei <span className="it">Vini</span></h2>
            <p className="lede" style={{ marginTop: 14 }}>
              300+ italienische Etiketten, kuratiert von Sommelier Marco. Glasweise täglich rotierend, die Flaschen warten geduldig im Keller.
            </p>
          </div>
          <a className="btn btn-ghost" href={asset("menus/weine.pdf")} target="_blank" rel="noreferrer">Komplette Weinkarte (PDF) →</a>
        </div>
        <div className="regions">
          {regions.map(r => (
            <article className="region" key={r.label}>
              <div className="label">{r.label}</div>
              <h3>{r.name}</h3>
              <p>{r.copy}</p>
              <div className="list">
                {r.list.map(w => (
                  <div className="row" key={w.n}>
                    <div>
                      <div>{w.n}</div>
                      <div className="v" style={{ fontSize: 14, color: "var(--ink-muted)" }}>{w.v}</div>
                    </div>
                    <div className="p">€ {w.p}</div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

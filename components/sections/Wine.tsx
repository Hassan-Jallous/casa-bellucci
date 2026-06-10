'use client';

import { useMenuUrls } from '@/lib/menuUrls';
import { useDict } from '@/lib/i18n/LanguageProvider';
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
  const d = useDict();
  const w = d.home.wine;
  const menuUrls = useMenuUrls();
  const regions: WineRegion[] = [
    {
      label: w.regions[0].label,
      name: w.regions[0].name,
      copy: w.regions[0].copy,
      list: [
        { n: "Etna Bianco, Planeta", v: w.regions[0].list[0].v, p: "11,00" },
        { n: "Nero d'Avola, Donnafugata", v: w.regions[0].list[1].v, p: "9,00" },
        { n: "Passito di Pantelleria", v: w.regions[0].list[2].v, p: "10,00" },
      ],
    },
    {
      label: w.regions[1].label,
      name: w.regions[1].name,
      copy: w.regions[1].copy,
      list: [
        { n: "Barolo DOCG, Vietti", v: w.regions[1].list[0].v, p: "14,00" },
        { n: "Brunello, Casanova di Neri", v: w.regions[1].list[1].v, p: "18,00" },
        { n: "Chianti Classico Riserva", v: w.regions[1].list[2].v, p: "11,50" },
      ],
    },
    {
      label: w.regions[2].label,
      name: w.regions[2].name,
      copy: w.regions[2].copy,
      list: [
        { n: "Franciacorta Brut", v: w.regions[2].list[0].v, p: "13,00" },
        { n: "Vermentino di Sardegna", v: w.regions[2].list[1].v, p: "8,50" },
        { n: "Gavi del Comune", v: w.regions[2].list[2].v, p: "12,00" },
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
                <FlagBar orientation="h" /> {w.eyebrow}
              </span>
            </div>
            <h2>{w.headingPre}<span className="it">{w.headingEm}</span>{w.headingPost}</h2>
            <p className="lede" style={{ marginTop: 14 }}>
              {w.lede}
            </p>
          </div>
          <a className="btn btn-ghost" href={menuUrls.weine} target="_blank" rel="noreferrer">{w.pdfLink}</a>
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

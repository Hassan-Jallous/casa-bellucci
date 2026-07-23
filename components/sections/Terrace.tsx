'use client';

import { asset } from '@/lib/assetPath';
import { SmoothScrollLink } from '@/components/SmoothScrollLink';
import { useDict, useLocalizedHref } from '@/lib/i18n/LanguageProvider';

export function Terrace() {
  const d = useDict();
  const localizedHref = useLocalizedHref();
  const moments = [
    { k: "10:00", v: d.home.terrace.moments[0].v },
    { k: "14:30", v: d.home.terrace.moments[1].v },
    { k: "18:00", v: d.home.terrace.moments[2].v },
  ];

  return (
    <section className="terrace" id="terrasse" data-screen-label="04 Terrasse">
      <div className="terrace-stage">
        <div className="terrace-bg" aria-hidden="true"></div>

        <figure className="terrace-photo">
          <img src={asset("images/terrace/terrace-04.jpg")} alt={d.home.terrace.photoAlt} width={1400} height={960} loading="lazy" decoding="async" />
          <figcaption>
            <h2>{d.home.terrace.heading}</h2>
          </figcaption>
        </figure>

        <div className="terrace-actions">
          <SmoothScrollLink targetId="reservieren" className="btn btn-primary">{d.home.terrace.reserve}</SmoothScrollLink>
          <SmoothScrollLink targetId="galerie" className="btn btn-ghost">{d.home.terrace.viewTerrace}</SmoothScrollLink>
        </div>

        <div className="terrace-panel">
          <div className="terrace-quote">
            <span>„</span>
            {d.home.terrace.quote}
          </div>
          <div className="terrace-moments">
            {moments.map(moment => (
              <div className="terrace-moment" key={moment.k}>
                <span>{moment.k}</span>
                <strong>{moment.v}</strong>
              </div>
            ))}
          </div>
          <p className="terrace-link">
            {d.home.terrace.linkPre}
            <a href={localizedHref('/terrasse-restaurant-berlin-charlottenburg/')}>{d.home.terrace.link}</a>
            {d.home.terrace.linkPost}
          </p>
        </div>
      </div>
    </section>
  );
}

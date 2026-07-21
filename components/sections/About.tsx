'use client';

import type { CSSProperties } from 'react';
import { asset } from '@/lib/assetPath';
import { useDict, usePageTitle } from '@/lib/i18n/LanguageProvider';
import { FlagBar } from './Brand';

/* All-Day Concept */
export function About() {
  usePageTitle('home');
  const d = useDict();
  const moments = d.home.about.moments;

  return (
    <section className="about all-day" id="ueber-uns" data-screen-label="02 All-Day Concept">
      <div className="wrap">
        <div className="all-day-grid">
          <div className="all-day-copy">
            <div className="section-eyebrow">
              <span className="eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                <FlagBar orientation="h" /> {d.home.about.eyebrow}
              </span>
            </div>
            <h2>{d.home.about.headingPre}<span className="it">{d.home.about.headingEm}</span>{d.home.about.headingPost}</h2>
            <p>
              {d.home.about.lede}
            </p>
            <div className="dayline" aria-label={d.home.about.daylineLabel}>
              {moments.map((moment, index) => (
                <div className="day-moment" key={moment.title} style={{ "--i": index } as CSSProperties}>
                  <span className="moment-time">{moment.time}</span>
                  <h3>{moment.title}</h3>
                  <p>{moment.copy}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="all-day-media" aria-label={d.home.about.mediaLabel}>
            <figure className="all-day-photo morning">
              <img src={asset("images/allday-morning.jpg")} alt={d.home.about.photos.morning.alt} width={900} height={1200} loading="lazy" decoding="async" />
              <figcaption>{d.home.about.photos.morning.caption}</figcaption>
            </figure>
            <figure className="all-day-photo midday">
              <img src={asset("images/allday-midday.jpg")} alt={d.home.about.photos.midday.alt} width={1400} height={934} loading="lazy" decoding="async" />
              <figcaption>{d.home.about.photos.midday.caption}</figcaption>
            </figure>
            <figure className="all-day-photo evening">
              <img src={asset("images/allday-evening.jpg")} alt={d.home.about.photos.evening.alt} width={1400} height={934} loading="lazy" decoding="async" />
              <figcaption>{d.home.about.photos.evening.caption}</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { asset } from '@/lib/assetPath';
import { routePath } from '@/lib/routes';
import { useDict } from '@/lib/i18n/LanguageProvider';
import { FlagBar } from './Brand';

/* Weekend & Aperitivo */
export function Weekend() {
  const d = useDict();
  const w = d.home.weekend;

  return (
    <section className="about all-day" id="weekend" data-screen-label="05 Weekend & Aperitivo">
      <div className="wrap">
        <div className="all-day-grid">
          <div className="all-day-copy">
            <div className="section-eyebrow">
              <span className="eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                <FlagBar orientation="h" /> {w.eyebrow}
              </span>
            </div>
            <h2>{w.headingPre}<span className="it">{w.headingEm}</span>{w.headingPost}</h2>
            <p>{w.p0}</p>
            <p>{w.p1}</p>
            <div className="signature-actions">
              <a href={routePath('/bar-aperitivo-kurfuerstendamm/')} className="btn btn-primary">{w.ctaLabel}</a>
            </div>
          </div>
          <div className="all-day-media" aria-label={w.mediaLabel}>
            <figure className="all-day-photo morning">
              <img src={asset("images/lp-spritz.jpg")} alt={w.photos.morning.alt} width={900} height={1200} loading="lazy" decoding="async" />
              <figcaption>{w.photos.morning.caption}</figcaption>
            </figure>
            <figure className="all-day-photo midday">
              <img src={asset("images/lp-cocktail.jpg")} alt={w.photos.midday.alt} width={1600} height={1067} loading="lazy" decoding="async" />
              <figcaption>{w.photos.midday.caption}</figcaption>
            </figure>
            <figure className="all-day-photo evening">
              <img src={asset("images/lp-terr-abend-2.jpg")} alt={w.photos.evening.alt} width={2000} height={1334} loading="lazy" decoding="async" />
              <figcaption>{w.photos.evening.caption}</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

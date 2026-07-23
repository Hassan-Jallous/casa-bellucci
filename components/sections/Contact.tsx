'use client';

import { FlagBar } from './Brand';
import { SITE } from '@/lib/site';
import { useDict, useLocalizedHref } from '@/lib/i18n/LanguageProvider';

export function Contact() {
  const d = useDict();
  const localizedHref = useLocalizedHref();
  return (
    <section className="contact" id="kontakt" data-screen-label="07 Kontakt">
      <div className="wrap">
        <div className="grid">
          <div>
            <div className="section-eyebrow">
              <span className="eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                <FlagBar orientation="h" /> {d.home.contact.eyebrow}
              </span>
            </div>
            <h2>{d.home.contact.headingPre}<br/><span className="it">{d.home.contact.headingEm}</span></h2>
            <p className="lede">
              {d.home.contact.ledeParts.pre}{' '}
              <a href={localizedHref('/italienisches-restaurant-berlin-charlottenburg/')}>{d.home.contact.ledeParts.link}</a>{' '}
              {d.home.contact.ledeParts.post}
            </p>
            <div className="info">
              <div className="block">
                <div className="k">{d.common.info.address}</div>
                <div className="v">Kurfürstendamm 63<br/>10707 Berlin · Charlottenburg</div>
              </div>
              <div className="block">
                <div className="k">{d.common.info.reservation}</div>
                <div className="v">{SITE.phone}<br/><span className="muted">{SITE.email}</span></div>
              </div>
              <div className="block">
                <div className="k">{d.common.info.hours}</div>
                <div className="v">{d.common.hours.weekdays}<br/><span className="muted">{d.common.hours.sunday}</span></div>
              </div>
              <div className="contact-actions">
                <a className="btn btn-primary" href={SITE.phoneHref}>{d.common.actions.call}</a>
                <a className="btn btn-ghost" href={SITE.mapsUrl} target="_blank" rel="noreferrer">{d.common.actions.openMaps}</a>
              </div>
            </div>
          </div>
          <a
            className="map"
            href={SITE.mapsUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${d.home.contact.mapLabel}. ${d.common.actions.openMaps}`}
          >
            <div className="corner">{d.common.mapCorner.area}</div>
            <div className="pin">
              <div className="dot"></div>
              <div className="pulse"></div>
              <div className="label">{d.common.mapCorner.name}</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

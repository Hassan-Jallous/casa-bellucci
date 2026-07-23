'use client';

import type { CSSProperties } from 'react';
import { asset } from '@/lib/assetPath';
import { SITE } from '@/lib/site';
import { useDict, usePageTitle, useLocalizedHref } from '@/lib/i18n/LanguageProvider';
import { FlagBar } from './Brand';
import { FaqAccordion } from './FaqAccordion';

const eyebrowStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
};

export function TerrasseLanding() {
  usePageTitle('terrasse');
  const d = useDict();
  const localizedHref = useLocalizedHref();
  const moments = d.landingTerrasse.experience.moments;

  return (
    <main className="subpage">
      {/* 1. Hero / Intro */}
      <section className="about all-day" aria-labelledby="terrasse-h1">
        <div className="wrap">
          <div className="all-day-grid">
            <div className="all-day-copy">
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> {d.landingTerrasse.hero.eyebrow}
                </span>
              </div>
              <h1 id="terrasse-h1">
                {d.landingTerrasse.hero.h1.pre}<span className="it">{d.landingTerrasse.hero.h1.em}</span>{d.landingTerrasse.hero.h1.post}
              </h1>
              <p className="lede">
                {d.landingTerrasse.hero.lede}
              </p>
              <p>
                {d.landingTerrasse.hero.para}
              </p>
              <div className="contact-actions">
                <a className="btn btn-primary" href={localizedHref('/reservierung/')}>
                  {d.common.actions.reserve}
                </a>
                <a className="btn btn-ghost" href={localizedHref('/#menu')}>
                  {d.landingTerrasse.hero.viewMenu}
                </a>
              </div>
            </div>
            <div className="all-day-media" aria-label={d.landingTerrasse.hero.mediaLabel}>
              <figure className="all-day-photo morning">
                <img
                  src={asset('images/lp-terr-hell-1.jpg')}
                  alt={d.landingTerrasse.hero.photos.tag.alt}
                 loading="lazy" decoding="async" />
                <figcaption>{d.landingTerrasse.hero.photos.tag.caption}</figcaption>
              </figure>
              <figure className="all-day-photo midday">
                <img
                  src={asset('images/terrace/terrace-04.jpg')}
                  alt={d.landingTerrasse.hero.photos.mittag.alt}
                 loading="lazy" decoding="async" />
                <figcaption>{d.landingTerrasse.hero.photos.mittag.caption}</figcaption>
              </figure>
              <figure className="all-day-photo evening">
                <img
                  src={asset('images/lp-terr-abend-1.jpg')}
                  alt={d.landingTerrasse.hero.photos.abend.alt}
                 loading="lazy" decoding="async" />
                <figcaption>{d.landingTerrasse.hero.photos.abend.caption}</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sonnenterrasse ueber den Tag */}
      <section className="about all-day" aria-labelledby="sonnenterrasse-h2">
        <div className="wrap">
          <div className="all-day-grid">
            <div className="all-day-copy">
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> {d.landingTerrasse.experience.eyebrow}
                </span>
              </div>
              <h2 id="sonnenterrasse-h2">
                {d.landingTerrasse.experience.h2.pre}<span className="it">{d.landingTerrasse.experience.h2.em}</span>{d.landingTerrasse.experience.h2.post}
              </h2>
              <p>
                {d.landingTerrasse.experience.para1}
              </p>
              <p>
                {d.landingTerrasse.experience.para2}
              </p>
              <div className="dayline" aria-label={d.landingTerrasse.experience.daylineLabel}>
                {moments.map((item, index) => (
                  <div className="day-moment" key={item.title} style={{ '--i': index } as CSSProperties}>
                    <span className="moment-time">{item.time}</span>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="all-day-media" aria-label={d.landingTerrasse.experience.mediaLabel}>
              <figure className="all-day-photo morning">
                <img
                  src={asset('images/lp-terr-hell-2.jpg')}
                  alt={d.landingTerrasse.experience.photos.hell.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{d.landingTerrasse.experience.photos.hell.caption}</figcaption>
              </figure>
              <figure className="all-day-photo midday">
                <img
                  src={asset('images/lp-terr-abend-2.jpg')}
                  alt={d.landingTerrasse.experience.photos.schatten.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{d.landingTerrasse.experience.photos.schatten.caption}</figcaption>
              </figure>
              <figure className="all-day-photo evening">
                <img
                  src={asset('images/lp-terr-it.jpg')}
                  alt={d.landingTerrasse.experience.photos.italia.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{d.landingTerrasse.experience.photos.italia.caption}</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Aperitivo und Wein draussen */}
      <section className="about all-day" aria-labelledby="aperitivo-h2">
        <div className="wrap">
          <div className="all-day-grid">
            <div className="all-day-copy">
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> {d.landingTerrasse.aperitivo.eyebrow}
                </span>
              </div>
              <h2 id="aperitivo-h2">
                {d.landingTerrasse.aperitivo.h2.pre}<span className="it">{d.landingTerrasse.aperitivo.h2.em}</span>{d.landingTerrasse.aperitivo.h2.post}
              </h2>
              <p>
                {d.landingTerrasse.aperitivo.para1}
              </p>
              <p>
                {d.landingTerrasse.aperitivo.para2}
              </p>
            </div>
            <div className="all-day-media" aria-label={d.landingTerrasse.aperitivo.mediaLabel}>
              <figure className="all-day-photo morning">
                <img
                  src={asset('images/lp-spritz.jpg')}
                  alt={d.landingTerrasse.aperitivo.photos.spritz.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{d.landingTerrasse.aperitivo.photos.spritz.caption}</figcaption>
              </figure>
              <figure className="all-day-photo midday">
                <img
                  src={asset('images/lp-terr-abend-1.jpg')}
                  alt={d.landingTerrasse.aperitivo.photos.abend.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{d.landingTerrasse.aperitivo.photos.abend.caption}</figcaption>
              </figure>
              <figure className="all-day-photo evening">
                <img
                  src={asset('images/terrace/terrace-04.jpg')}
                  alt={d.landingTerrasse.aperitivo.photos.terrace.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{d.landingTerrasse.aperitivo.photos.terrace.caption}</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Zeiten und Reservierung */}
      <section className="contact" aria-labelledby="reservierung-h2">
        <div className="wrap">
          <div className="grid">
            <div>
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> {d.landingTerrasse.reservation.eyebrow}
                </span>
              </div>
              <h2 id="reservierung-h2">
                {d.landingTerrasse.reservation.h2.pre}<span className="it">{d.landingTerrasse.reservation.h2.em}</span>{d.landingTerrasse.reservation.h2.post}
              </h2>
              <p className="lede">
                {d.landingTerrasse.reservation.lede}
              </p>
              <div className="info">
                <div className="block">
                  <div className="k">{d.common.info.address}</div>
                  <div className="v">
                    {d.landingTerrasse.reservation.addressLine1}
                    <br />
                    {d.landingTerrasse.reservation.addressLine2}
                  </div>
                </div>
                <div className="block">
                  <div className="k">{d.common.info.reservation}</div>
                  <div className="v">
                    {SITE.phone}
                    <br />
                    <span className="muted">{SITE.email}</span>
                  </div>
                </div>
                <div className="block">
                  <div className="k">{d.common.info.hours}</div>
                  <div className="v">
                    {d.common.hours.weekdays}
                    <br />
                    <span className="muted">{d.common.hours.sunday}</span>
                  </div>
                </div>
                <div className="block">
                  <div className="k">{d.landingTerrasse.reservation.terraceLabel}</div>
                  <div className="v">
                    {d.landingTerrasse.reservation.terraceTime}
                    <br />
                    <span className="muted">{d.landingTerrasse.reservation.terraceNote}</span>
                  </div>
                </div>
                <div className="contact-actions">
                  <a className="btn btn-primary" href={localizedHref('/reservierung/')}>
                    {d.common.actions.bookOnline}
                  </a>
                  <a className="btn btn-ghost" href={SITE.phoneHref}>
                    {d.common.actions.call}
                  </a>
                </div>
              </div>
            </div>
            <div className="map" aria-label={d.landingTerrasse.reservation.mapLabel}>
              <div className="corner">{d.common.mapCorner.area}</div>
              <div className="pin">
                <div className="dot"></div>
                <div className="pulse"></div>
                <div className="label">{d.common.mapCorner.name}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ, sichtbar und passend zum faqJsonLd */}
      <section className="subpage-info" aria-labelledby="faq-h2">
        <div className="wrap">
          <div className="section-eyebrow">
            <span className="eyebrow" style={eyebrowStyle}>
              <FlagBar orientation="h" /> {d.landingTerrasse.faqEyebrow}
            </span>
          </div>
          <h2 id="faq-h2">
            {d.landingTerrasse.faqHeading.pre}<span className="it">{d.landingTerrasse.faqHeading.em}</span>{d.landingTerrasse.faqHeading.post}
          </h2>
          <FaqAccordion items={[...d.landingTerrasse.faqs]} idBase="terrasse-faq" />
          <p className="subpage-related">
            {d.landingTerrasse.related.pre}
            <a href={localizedHref('/business-lunch-mittagstisch-charlottenburg/')}>
              {d.landingTerrasse.related.lunchLink}
            </a>
            {d.landingTerrasse.related.afterLunch}
            <a href={localizedHref('/bar-aperitivo-kurfuerstendamm/')}>{d.landingTerrasse.related.barLink}</a>{d.landingTerrasse.related.afterBar}
            <a href={localizedHref('/italienisches-restaurant-berlin-charlottenburg/')}>
              {d.landingTerrasse.related.italienischLink}
            </a>
            {d.landingTerrasse.related.afterItalienisch}
          </p>
        </div>
      </section>
    </main>
  );
}

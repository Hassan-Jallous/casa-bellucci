'use client';

import type { CSSProperties } from 'react';
import { asset } from '@/lib/assetPath';
import { routePath } from '@/lib/routes';
import { SITE } from '@/lib/site';
import { useDict, usePageTitle } from '@/lib/i18n/LanguageProvider';
import { FlagBar } from './Brand';
import { FaqAccordion } from './FaqAccordion';

const eyebrowStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
};

export function FruehstueckLanding() {
  usePageTitle('fruehstueck');
  const d = useDict();
  const colazione = d.landingFruehstueck.italian.moments;

  return (
    <main className="subpage">
      {/* 1. Hero / Intro */}
      <section className="about all-day" aria-labelledby="fruehstueck-h1">
        <div className="wrap">
          <div className="all-day-grid">
            <div className="all-day-copy">
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> {d.landingFruehstueck.hero.eyebrow}
                </span>
              </div>
              <h1 id="fruehstueck-h1">
                {d.landingFruehstueck.hero.h1.pre}<span className="it">{d.landingFruehstueck.hero.h1.em}</span>{d.landingFruehstueck.hero.h1.post}
              </h1>
              <p className="lede">
                {d.landingFruehstueck.hero.lede}
              </p>
              <p>
                {d.landingFruehstueck.hero.para}
              </p>
              <div className="contact-actions">
                <a className="btn btn-primary" href={routePath('/reservierung/')}>
                  {d.common.actions.reserve}
                </a>
                <a className="btn btn-ghost" href={routePath('/#menu')}>
                  {d.landingFruehstueck.hero.viewMenu}
                </a>
              </div>
            </div>
            <div className="all-day-media" aria-label={d.landingFruehstueck.hero.mediaLabel}>
              <figure className="all-day-photo morning">
                <img
                  src={asset('images/menu-breakfast.jpg')}
                  alt={d.landingFruehstueck.hero.photos.colazione.alt}
                />
                <figcaption>{d.landingFruehstueck.hero.photos.colazione.caption}</figcaption>
              </figure>
              <figure className="all-day-photo midday">
                <img
                  src={asset('images/lp-frueh-1.jpg')}
                  alt={d.landingFruehstueck.hero.photos.mattina.alt}
                />
                <figcaption>{d.landingFruehstueck.hero.photos.mattina.caption}</figcaption>
              </figure>
              <figure className="all-day-photo evening">
                <img
                  src={asset('images/lp-terr-hell-1.jpg')}
                  alt={d.landingFruehstueck.hero.photos.terrazza.alt}
                />
                <figcaption>{d.landingFruehstueck.hero.photos.terrazza.caption}</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Italienisches Frühstück */}
      <section className="about all-day" aria-labelledby="italienisches-fruehstueck-h2">
        <div className="wrap">
          <div className="all-day-grid">
            <div className="all-day-copy">
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> {d.landingFruehstueck.italian.eyebrow}
                </span>
              </div>
              <h2 id="italienisches-fruehstueck-h2">
                {d.landingFruehstueck.italian.h2.pre}<span className="it">{d.landingFruehstueck.italian.h2.em}</span>{d.landingFruehstueck.italian.h2.post}
              </h2>
              <p>
                {d.landingFruehstueck.italian.para1}
              </p>
              <p>
                {d.landingFruehstueck.italian.para2}
              </p>
              <div className="dayline" aria-label={d.landingFruehstueck.italian.daylineLabel}>
                {colazione.map((item, index) => (
                  <div className="day-moment" key={item.title} style={{ '--i': index } as CSSProperties}>
                    <span className="moment-time">{item.time}</span>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="all-day-media" aria-label={d.landingFruehstueck.italian.mediaLabel}>
              <figure className="all-day-photo morning">
                <img
                  src={asset('images/lp-frueh-2.jpg')}
                  alt={d.landingFruehstueck.italian.photos.cornetto.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{d.landingFruehstueck.italian.photos.cornetto.caption}</figcaption>
              </figure>
              <figure className="all-day-photo midday">
                <img
                  src={asset('images/lp-brunch-1.jpg')}
                  alt={d.landingFruehstueck.italian.photos.caffe.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{d.landingFruehstueck.italian.photos.caffe.caption}</figcaption>
              </figure>
              <figure className="all-day-photo evening">
                <img
                  src={asset('images/lp-int-3.jpg')}
                  alt={d.landingFruehstueck.italian.photos.sala.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{d.landingFruehstueck.italian.photos.sala.caption}</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Brunch am Wochenende */}
      <section className="about all-day" aria-labelledby="brunch-h2">
        <div className="wrap">
          <div className="all-day-grid">
            <div className="all-day-copy">
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> {d.landingFruehstueck.brunch.eyebrow}
                </span>
              </div>
              <h2 id="brunch-h2">
                {d.landingFruehstueck.brunch.h2.pre}<span className="it">{d.landingFruehstueck.brunch.h2.em}</span>{d.landingFruehstueck.brunch.h2.post}
              </h2>
              <p>
                {d.landingFruehstueck.brunch.para1}
              </p>
              <p>
                {d.landingFruehstueck.brunch.para2}
              </p>
            </div>
            <div className="all-day-media" aria-label={d.landingFruehstueck.brunch.mediaLabel}>
              <figure className="all-day-photo morning">
                <img
                  src={asset('images/lp-terr-hell-2.jpg')}
                  alt={d.landingFruehstueck.brunch.photos.terrasse.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{d.landingFruehstueck.brunch.photos.terrasse.caption}</figcaption>
              </figure>
              <figure className="all-day-photo midday">
                <img
                  src={asset('images/lp-brunch-2.jpg')}
                  alt={d.landingFruehstueck.brunch.photos.weekend.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{d.landingFruehstueck.brunch.photos.weekend.caption}</figcaption>
              </figure>
              <figure className="all-day-photo evening">
                <img
                  src={asset('images/lp-bowl.jpg')}
                  alt={d.landingFruehstueck.brunch.photos.brunch.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{d.landingFruehstueck.brunch.photos.brunch.caption}</figcaption>
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
                  <FlagBar orientation="h" /> {d.landingFruehstueck.reservation.eyebrow}
                </span>
              </div>
              <h2 id="reservierung-h2">
                {d.landingFruehstueck.reservation.h2.pre}<span className="it">{d.landingFruehstueck.reservation.h2.em}</span>{d.landingFruehstueck.reservation.h2.post}
              </h2>
              <p className="lede">
                {d.landingFruehstueck.reservation.lede}
              </p>
              <div className="info">
                <div className="block">
                  <div className="k">{d.common.info.address}</div>
                  <div className="v">
                    {d.landingFruehstueck.reservation.addressLine1}
                    <br />
                    {d.landingFruehstueck.reservation.addressLine2}
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
                    {SITE.openingHours.weekdays}
                    <br />
                    <span className="muted">{SITE.openingHours.sunday}</span>
                  </div>
                </div>
                <div className="block">
                  <div className="k">{d.landingFruehstueck.reservation.breakfastLabel}</div>
                  <div className="v">
                    {d.landingFruehstueck.reservation.breakfastTime}
                    <br />
                    <span className="muted">{d.landingFruehstueck.reservation.breakfastNote}</span>
                  </div>
                </div>
                <div className="contact-actions">
                  <a className="btn btn-primary" href={routePath('/reservierung/')}>
                    {d.common.actions.bookOnline}
                  </a>
                  <a className="btn btn-ghost" href={SITE.phoneHref}>
                    {d.common.actions.call}
                  </a>
                </div>
              </div>
            </div>
            <div className="map" aria-label={d.landingFruehstueck.reservation.mapLabel}>
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
              <FlagBar orientation="h" /> {d.landingFruehstueck.faqEyebrow}
            </span>
          </div>
          <h2 id="faq-h2">
            {d.landingFruehstueck.faqHeading.pre}<span className="it">{d.landingFruehstueck.faqHeading.em}</span>{d.landingFruehstueck.faqHeading.post}
          </h2>
          <FaqAccordion items={[...d.landingFruehstueck.faqs]} idBase="fruehstueck-faq" />
          <p className="subpage-related">
            {d.landingFruehstueck.related.pre}
            <a href={routePath('/')}>{d.landingFruehstueck.related.homeLink}</a>{d.landingFruehstueck.related.afterHome}
            <a href={routePath('/italienisches-restaurant-berlin-charlottenburg/')}>
              {d.landingFruehstueck.related.italienischLink}
            </a>
            {d.landingFruehstueck.related.afterItalienisch}
            <a href={routePath('/business-lunch-mittagstisch-charlottenburg/')}>{d.landingFruehstueck.related.lunchLink}</a>
            {d.landingFruehstueck.related.afterLunch}
            <a href={routePath('/terrasse-restaurant-berlin-charlottenburg/')}>{d.landingFruehstueck.related.terrasseLink}</a>
            {d.landingFruehstueck.related.afterTerrasse}
            <a href={routePath('/bar-aperitivo-kurfuerstendamm/')}>{d.landingFruehstueck.related.barLink}</a>{d.landingFruehstueck.related.afterBar}
          </p>
        </div>
      </section>
    </main>
  );
}

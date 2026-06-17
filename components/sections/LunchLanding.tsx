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

export function LunchLanding() {
  usePageTitle('lunch');
  const d = useDict();
  const pranzo = d.landingLunch.pranzo.moments;

  return (
    <main className="subpage">
      {/* 1. Hero / Intro */}
      <section className="about all-day" aria-labelledby="lunch-h1">
        <div className="wrap">
          <div className="all-day-grid">
            <div className="all-day-copy">
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> {d.landingLunch.hero.eyebrow}
                </span>
              </div>
              <h1 id="lunch-h1">
                {d.landingLunch.hero.h1.pre}<span className="it">{d.landingLunch.hero.h1.em}</span>{d.landingLunch.hero.h1.post}
              </h1>
              <p className="lede">
                {d.landingLunch.hero.lede}
              </p>
              <p>
                {d.landingLunch.hero.para}
              </p>
              <div className="contact-actions">
                <a className="btn btn-primary" href={routePath('/reservierung/')}>
                  {d.common.actions.reserve}
                </a>
                <a className="btn btn-ghost" href={routePath('/#menu')}>
                  {d.landingLunch.hero.viewMenu}
                </a>
              </div>
            </div>
            <div className="all-day-media" aria-label={d.landingLunch.hero.mediaLabel}>
              <figure className="all-day-photo morning">
                <img
                  src={asset('images/menu-lunch.jpg')}
                  alt={d.landingLunch.hero.photos.pranzo.alt}
                />
                <figcaption>{d.landingLunch.hero.photos.pranzo.caption}</figcaption>
              </figure>
              <figure className="all-day-photo midday">
                <img
                  src={asset('images/lp-bowl.jpg')}
                  alt={d.landingLunch.hero.photos.schnell.alt}
                />
                <figcaption>{d.landingLunch.hero.photos.schnell.caption}</figcaption>
              </figure>
              <figure className="all-day-photo evening">
                <img
                  src={asset('images/lp-brunch-1.jpg')}
                  alt={d.landingLunch.hero.photos.business.alt}
                />
                <figcaption>{d.landingLunch.hero.photos.business.caption}</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mittagskarte / Pranzo */}
      <section className="about all-day" aria-labelledby="pranzo-h2">
        <div className="wrap">
          <div className="all-day-grid">
            <div className="all-day-copy">
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> {d.landingLunch.pranzo.eyebrow}
                </span>
              </div>
              <h2 id="pranzo-h2">
                {d.landingLunch.pranzo.h2.pre}<span className="it">{d.landingLunch.pranzo.h2.em}</span>{d.landingLunch.pranzo.h2.post}
              </h2>
              <p>
                {d.landingLunch.pranzo.para1}
              </p>
              <p>
                {d.landingLunch.pranzo.para2}
              </p>
              <div className="dayline" aria-label={d.landingLunch.pranzo.daylineLabel}>
                {pranzo.map((item, index) => (
                  <div className="day-moment" key={item.title} style={{ '--i': index } as CSSProperties}>
                    <span className="moment-time">{item.time}</span>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="all-day-media" aria-label={d.landingLunch.pranzo.mediaLabel}>
              <figure className="all-day-photo morning">
                <img
                  src={asset('images/gallery/3.jpg')}
                  alt={d.landingLunch.pranzo.photos.pasta.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{d.landingLunch.pranzo.photos.pasta.caption}</figcaption>
              </figure>
              <figure className="all-day-photo midday">
                <img
                  src={asset('images/gallery/5.jpg')}
                  alt={d.landingLunch.pranzo.photos.pesce.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{d.landingLunch.pranzo.photos.pesce.caption}</figcaption>
              </figure>
              <figure className="all-day-photo evening">
                <img
                  src={asset('images/lp-brunch-1.jpg')}
                  alt={d.landingLunch.pranzo.photos.dolce.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{d.landingLunch.pranzo.photos.dolce.caption}</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Business Lunch / Office */}
      <section className="about all-day" aria-labelledby="business-h2">
        <div className="wrap">
          <div className="all-day-grid">
            <div className="all-day-copy">
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> {d.landingLunch.business.eyebrow}
                </span>
              </div>
              <h2 id="business-h2">
                {d.landingLunch.business.h2.pre}<span className="it">{d.landingLunch.business.h2.em}</span>{d.landingLunch.business.h2.post}
              </h2>
              <p>
                {d.landingLunch.business.para1}
              </p>
              <p>
                {d.landingLunch.business.para2}
              </p>
            </div>
            <div className="all-day-media" aria-label={d.landingLunch.business.mediaLabel}>
              <figure className="all-day-photo morning">
                <img
                  src={asset('images/gallery/3.jpg')}
                  alt={d.landingLunch.business.photos.saal.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{d.landingLunch.business.photos.saal.caption}</figcaption>
              </figure>
              <figure className="all-day-photo midday">
                <img
                  src={asset('images/lp-terr-hell-2.jpg')}
                  alt={d.landingLunch.business.photos.terrasse.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{d.landingLunch.business.photos.terrasse.caption}</figcaption>
              </figure>
              <figure className="all-day-photo evening">
                <img
                  src={asset('images/lp-spritz.jpg')}
                  alt={d.landingLunch.business.photos.aperitivo.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{d.landingLunch.business.photos.aperitivo.caption}</figcaption>
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
                  <FlagBar orientation="h" /> {d.landingLunch.reservation.eyebrow}
                </span>
              </div>
              <h2 id="reservierung-h2">
                {d.landingLunch.reservation.h2.pre}<span className="it">{d.landingLunch.reservation.h2.em}</span>{d.landingLunch.reservation.h2.post}
              </h2>
              <p className="lede">
                {d.landingLunch.reservation.lede}
              </p>
              <div className="info">
                <div className="block">
                  <div className="k">{d.common.info.address}</div>
                  <div className="v">
                    {d.landingLunch.reservation.addressLine1}
                    <br />
                    {d.landingLunch.reservation.addressLine2}
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
                  <div className="k">{d.landingLunch.reservation.lunchLabel}</div>
                  <div className="v">
                    {d.landingLunch.reservation.lunchTime}
                    <br />
                    <span className="muted">{d.landingLunch.reservation.lunchNote}</span>
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
            <div className="map" aria-label={d.landingLunch.reservation.mapLabel}>
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
              <FlagBar orientation="h" /> {d.landingLunch.faqEyebrow}
            </span>
          </div>
          <h2 id="faq-h2">
            {d.landingLunch.faqHeading.pre}<span className="it">{d.landingLunch.faqHeading.em}</span>{d.landingLunch.faqHeading.post}
          </h2>
          <FaqAccordion items={[...d.landingLunch.faqs]} idBase="lunch-faq" />
          <p className="subpage-related">
            {d.landingLunch.related.pre}
            <a href={routePath('/terrasse-restaurant-berlin-charlottenburg/')}>
              {d.landingLunch.related.terrasseLink}
            </a>
            {d.landingLunch.related.afterTerrasse}
            <a href={routePath('/italienisches-restaurant-berlin-charlottenburg/')}>
              {d.landingLunch.related.italienischLink}
            </a>
            {d.landingLunch.related.afterItalienisch}
            <a href={routePath('/fruehstueck-brunch-kurfuerstendamm/')}>
              {d.landingLunch.related.fruehstueckLink}
            </a>
            {d.landingLunch.related.afterFruehstueck}
          </p>
        </div>
      </section>
    </main>
  );
}

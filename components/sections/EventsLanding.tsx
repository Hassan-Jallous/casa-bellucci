'use client';

import type { CSSProperties } from 'react';
import { asset } from '@/lib/assetPath';
import { SITE } from '@/lib/site';
import { useDict, usePageTitle, useLocalizedHref } from '@/lib/i18n/LanguageProvider';
import { FlagBar } from './Brand';
import { FaqAccordion } from './FaqAccordion';
import { EventInquiryForm } from './EventInquiryForm';

const eyebrowStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
};

export function EventsLanding() {
  usePageTitle('events');
  const d = useDict();
  const localizedHref = useLocalizedHref();
  const occasions = d.landingEvents.occasions.moments;

  return (
    <main className="subpage">
      {/* 1. Hero / Intro */}
      <section className="about all-day" aria-labelledby="events-h1">
        <div className="wrap">
          <div className="all-day-grid">
            <div className="all-day-copy">
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> {d.landingEvents.hero.eyebrow}
                </span>
              </div>
              <h1 id="events-h1">
                {d.landingEvents.hero.h1.pre}<span className="it">{d.landingEvents.hero.h1.em}</span>{d.landingEvents.hero.h1.post}
              </h1>
              <p className="lede">
                {d.landingEvents.hero.lede}
              </p>
              <p>
                {d.landingEvents.hero.para}
              </p>
              <div className="contact-actions">
                <a className="btn btn-primary" href="#event-anfrage">
                  {d.landingEvents.form.submit}
                </a>
                <a className="btn btn-ghost" href={localizedHref('/#menu')}>
                  {d.landingEvents.hero.viewMenu}
                </a>
              </div>
            </div>
            <div className="all-day-media" aria-label={d.landingEvents.hero.mediaLabel}>
              <figure className="all-day-photo morning">
                <img
                  src={asset('images/lp-terr-abend-1.jpg')}
                  alt={d.landingEvents.hero.photos.abend.alt}
                 loading="lazy" decoding="async" />
                <figcaption>{d.landingEvents.hero.photos.abend.caption}</figcaption>
              </figure>
              <figure className="all-day-photo midday">
                <img
                  src={asset('images/lp-int-1.jpg')}
                  alt={d.landingEvents.hero.photos.sala.alt}
                 loading="lazy" decoding="async" />
                <figcaption>{d.landingEvents.hero.photos.sala.caption}</figcaption>
              </figure>
              <figure className="all-day-photo evening">
                <img
                  src={asset('images/lp-cocktail.jpg')}
                  alt={d.landingEvents.hero.photos.brindisi.alt}
                 loading="lazy" decoding="async" />
                <figcaption>{d.landingEvents.hero.photos.brindisi.caption}</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Anlässe */}
      <section className="about all-day" aria-labelledby="anlaesse-h2">
        <div className="wrap">
          <div className="all-day-grid">
            <div className="all-day-copy">
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> {d.landingEvents.occasions.eyebrow}
                </span>
              </div>
              <h2 id="anlaesse-h2">
                {d.landingEvents.occasions.h2.pre}<span className="it">{d.landingEvents.occasions.h2.em}</span>{d.landingEvents.occasions.h2.post}
              </h2>
              <p>
                {d.landingEvents.occasions.para1}
              </p>
              <p>
                {d.landingEvents.occasions.para2}
              </p>
              <div className="dayline" aria-label={d.landingEvents.occasions.daylineLabel}>
                {occasions.map((item, index) => (
                  <div className="day-moment" key={item.title} style={{ '--i': index } as CSSProperties}>
                    <span className="moment-time">{item.time}</span>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="all-day-media" aria-label={d.landingEvents.occasions.mediaLabel}>
              <figure className="all-day-photo morning">
                <img
                  src={asset('images/lp-int-1.jpg')}
                  alt={d.landingEvents.occasions.photos.tavola.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{d.landingEvents.occasions.photos.tavola.caption}</figcaption>
              </figure>
              <figure className="all-day-photo midday">
                <img
                  src={asset('images/lp-cocktail.jpg')}
                  alt={d.landingEvents.occasions.photos.cocktail.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{d.landingEvents.occasions.photos.cocktail.caption}</figcaption>
              </figure>
              <figure className="all-day-photo evening">
                <img
                  src={asset('images/lp-terr-abend-3.jpg')}
                  alt={d.landingEvents.occasions.photos.terrazza.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{d.landingEvents.occasions.photos.terrazza.caption}</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Räume */}
      <section className="about all-day" aria-labelledby="raeume-h2">
        <div className="wrap">
          <div className="all-day-grid">
            <div className="all-day-copy">
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> {d.landingEvents.spaces.eyebrow}
                </span>
              </div>
              <h2 id="raeume-h2">
                {d.landingEvents.spaces.h2.pre}<span className="it">{d.landingEvents.spaces.h2.em}</span>{d.landingEvents.spaces.h2.post}
              </h2>
              <p>
                {d.landingEvents.spaces.para1}
              </p>
              <p>
                {d.landingEvents.spaces.para2}
              </p>
            </div>
            <div className="all-day-media" aria-label={d.landingEvents.spaces.mediaLabel}>
              <figure className="all-day-photo morning">
                <img
                  src={asset('images/terrace/terrace-04.jpg')}
                  alt={d.landingEvents.spaces.photos.terrasse.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{d.landingEvents.spaces.photos.terrasse.caption}</figcaption>
              </figure>
              <figure className="all-day-photo midday">
                <img
                  src={asset('images/lp-bar-int.jpg')}
                  alt={d.landingEvents.spaces.photos.bar.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{d.landingEvents.spaces.photos.bar.caption}</figcaption>
              </figure>
              <figure className="all-day-photo evening">
                <img
                  src={asset('images/signature-hero.jpg')}
                  alt={d.landingEvents.spaces.photos.saal.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{d.landingEvents.spaces.photos.saal.caption}</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Menü und Musik */}
      <section className="about all-day" aria-labelledby="menue-h2">
        <div className="wrap">
          <div className="all-day-grid">
            <div className="all-day-copy">
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> {d.landingEvents.menu.eyebrow}
                </span>
              </div>
              <h2 id="menue-h2">
                {d.landingEvents.menu.h2.pre}<span className="it">{d.landingEvents.menu.h2.em}</span>{d.landingEvents.menu.h2.post}
              </h2>
              <p>
                {d.landingEvents.menu.para1}
              </p>
              <p>
                {d.landingEvents.menu.para2}
              </p>
              <p>
                {d.landingEvents.menu.crossPre}
                <a href={localizedHref('/italienisches-restaurant-berlin-charlottenburg/')}>
                  {d.landingEvents.menu.crossLinkItalienisch}
                </a>
                {d.landingEvents.menu.crossPost}
              </p>
            </div>
            <div className="all-day-media" aria-label={d.landingEvents.menu.mediaLabel}>
              <figure className="all-day-photo morning">
                <img
                  src={asset('images/signature-hero.jpg')}
                  alt={d.landingEvents.menu.photos.piatti.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{d.landingEvents.menu.photos.piatti.caption}</figcaption>
              </figure>
              <figure className="all-day-photo midday">
                <img
                  src={asset('images/lp-cocktail.jpg')}
                  alt={d.landingEvents.menu.photos.vino.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{d.landingEvents.menu.photos.vino.caption}</figcaption>
              </figure>
              <figure className="all-day-photo evening">
                <img
                  src={asset('images/lp-terr-abend-3.jpg')}
                  alt={d.landingEvents.menu.photos.festa.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{d.landingEvents.menu.photos.festa.caption}</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Lage und Anfrage */}
      <section className="contact" aria-labelledby="lage-h2">
        <div className="wrap">
          <div className="grid">
            <div>
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> {d.landingEvents.contact.eyebrow}
                </span>
              </div>
              <h2 id="lage-h2">
                {d.landingEvents.contact.h2.pre}<span className="it">{d.landingEvents.contact.h2.em}</span>{d.landingEvents.contact.h2.post}
              </h2>
              <p className="lede">
                {d.landingEvents.contact.lede}
              </p>
              <div className="info">
                <div className="block">
                  <div className="k">{d.common.info.address}</div>
                  <div className="v">
                    {d.landingEvents.contact.addressLine1}
                    <br />
                    {d.landingEvents.contact.addressLine2}
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
                  <div className="k">{d.landingEvents.contact.eventsLabel}</div>
                  <div className="v">
                    {d.landingEvents.contact.eventsLine1}
                    <br />
                    <span className="muted">{d.landingEvents.contact.eventsLine2}</span>
                  </div>
                </div>
                <div className="contact-actions">
                  <a className="btn btn-primary" href="#event-anfrage">
                    {d.landingEvents.form.submit}
                  </a>
                  <a className="btn btn-ghost" href={SITE.phoneHref}>
                    {d.common.actions.call}
                  </a>
                </div>
              </div>
            </div>
            <div className="map" aria-label={d.landingEvents.contact.mapLabel}>
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

      {/* 6. Anfrageformular */}
      <section className="subpage-info" id="event-anfrage" aria-labelledby="anfrage-h2">
        <div className="wrap">
          <div className="section-eyebrow">
            <span className="eyebrow" style={eyebrowStyle}>
              <FlagBar orientation="h" /> {d.landingEvents.form.eyebrow}
            </span>
          </div>
          <h2 id="anfrage-h2">
            {d.landingEvents.form.heading.pre}<span className="it">{d.landingEvents.form.heading.em}</span>{d.landingEvents.form.heading.post}
          </h2>
          <EventInquiryForm />
        </div>
      </section>

      {/* 7. FAQ, sichtbar und passend zum faqJsonLd */}
      <section className="subpage-info" aria-labelledby="faq-h2">
        <div className="wrap">
          <div className="section-eyebrow">
            <span className="eyebrow" style={eyebrowStyle}>
              <FlagBar orientation="h" /> {d.landingEvents.faqEyebrow}
            </span>
          </div>
          <h2 id="faq-h2">
            {d.landingEvents.faqHeading.pre}<span className="it">{d.landingEvents.faqHeading.em}</span>{d.landingEvents.faqHeading.post}
          </h2>
          <FaqAccordion items={[...d.landingEvents.faqs]} idBase="events-faq" />
          <p className="subpage-related">
            {d.landingEvents.related.pre}
            <a href={localizedHref('/terrasse-restaurant-berlin-charlottenburg/')}>
              {d.landingEvents.related.terrasseLink}
            </a>
            {d.landingEvents.related.afterTerrasse}
            <a href={localizedHref('/bar-aperitivo-kurfuerstendamm/')}>{d.landingEvents.related.barLink}</a>
            {d.landingEvents.related.afterBar}
            <a href={localizedHref('/italienisches-restaurant-berlin-charlottenburg/')}>
              {d.landingEvents.related.italienischLink}
            </a>
            {d.landingEvents.related.afterItalienisch}
          </p>
        </div>
      </section>
    </main>
  );
}

'use client';

import { useState, type CSSProperties } from 'react';
import { asset } from '@/lib/assetPath';
import { useMenuUrls } from '@/lib/menuUrls';
import { SITE } from '@/lib/site';
import { useDict, usePageTitle, useLocalizedHref } from '@/lib/i18n/LanguageProvider';
import { FlagBar } from './Brand';
import { FaqAccordion } from './FaqAccordion';
import { GalleryFilmstrip } from './GalleryFilmstrip';
import { Lightbox } from './Lightbox';
import { MenuViewer, useMenuViewer } from './MenuViewer';

const eyebrowStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
};

export function ItalienischLanding() {
  usePageTitle('italienisch');
  const d = useDict();
  const localizedHref = useLocalizedHref();
  const menuLabels = d.home.menu;
  const { activeMenu, isOpen, openMenu, closeMenu } = useMenuViewer();
  const menuUrls = useMenuUrls();
  const [allTabs, setAllTabs] = useState(false);
  // Volles Karten-Popup wie auf der Startseite (alle Karten, mit Tab-Wechsler).
  const allMenus = [
    { key: 'fruehstueck', label: menuLabels.tabs[0].label, pdf: menuUrls.fruehstueck },
    { key: 'lunch', label: menuLabels.tabs[1].label, pdf: menuUrls.lunch },
    { key: 'dinner', label: menuLabels.tabs[2].label, pdf: menuUrls.dinner },
    { key: 'weine', label: menuLabels.tabs[3].label, pdf: menuUrls.weine },
  ];
  // Nur die Weinkarte (kein Tab-Wechsler).
  const wineMenu = [{ key: 'weine', label: menuLabels.tabs[3].label, pdf: menuUrls.weine }];
  const openWine = () => { setAllTabs(false); openMenu('weine'); };
  const openAll = () => { setAllTabs(true); openMenu('dinner'); };
  return (
    <main className="subpage subpage-italienisch">
      {/* 1. Hero / Intro */}
      <section className="about all-day" aria-labelledby="ital-h1">
        <div className="wrap">
          <div className="all-day-grid">
            <div className="all-day-copy">
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> {d.landingItalienisch.hero.eyebrow}
                </span>
              </div>
              <h1 id="ital-h1">
                {d.landingItalienisch.hero.h1Pre}<span className="it">{d.landingItalienisch.hero.h1Em}</span>
              </h1>
              <p className="lede">
                {d.landingItalienisch.hero.lede}
              </p>
              <div className="contact-actions">
                <a className="btn btn-primary" href={localizedHref('/reservierung/')}>
                  {d.common.actions.reserve}
                </a>
                <button type="button" className="btn btn-ghost" onClick={openAll}>
                  {d.landingItalienisch.hero.viewMenu}
                </button>
              </div>
            </div>
            <div className="all-day-media" aria-label={d.landingItalienisch.hero.mediaLabel}>
              <figure className="all-day-photo morning">
                <img
                  src={asset('images/menu-breakfast.jpg')}
                  alt={d.landingItalienisch.hero.morningAlt}
                 loading="lazy" decoding="async" />
                <figcaption>{d.landingItalienisch.hero.morningCaption}</figcaption>
              </figure>
              <figure className="all-day-photo midday">
                <img
                  src={asset('images/gallery/2.jpg')}
                  alt={d.landingItalienisch.hero.middayAlt}
                 loading="lazy" decoding="async" />
                <figcaption>{d.landingItalienisch.hero.middayCaption}</figcaption>
              </figure>
              <figure className="all-day-photo evening">
                <img
                  src={asset('images/lp-terr-abend-1.jpg')}
                  alt={d.landingItalienisch.hero.eveningAlt}
                 loading="lazy" decoding="async" />
                <figcaption>{d.landingItalienisch.hero.eveningCaption}</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Lage und Konzept */}
      <section className="about ital-section ital-section--paper">
        <div className="wrap">
          <div className="grid">
            <div>
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> {d.landingItalienisch.location.eyebrow}
                </span>
              </div>
              <h2>
                {d.landingItalienisch.location.h2Pre}<span className="it">{d.landingItalienisch.location.h2Em}</span>{d.landingItalienisch.location.h2Post}
              </h2>
              <p>
                {d.landingItalienisch.location.p1}
              </p>
              <p>
                {d.landingItalienisch.location.p2}
              </p>
            </div>
            <figure className="about img-col ital-photo-card">
              <img
                src={asset('images/lp-int-1.jpg')}
                alt={d.landingItalienisch.location.photoAlt}
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <strong>{d.landingItalienisch.location.captionStrong}</strong>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 3. Küche */}
      <section className="menu ital-section ital-section--surface">
        <div className="wrap">
          <div className="grid">
            <div>
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> {d.landingItalienisch.kitchen.eyebrow}
                </span>
              </div>
              <h2>
                {d.landingItalienisch.kitchen.h2Pre}<span className="it">{d.landingItalienisch.kitchen.h2Em}</span>
              </h2>
              <div className="dishes">
                {d.landingItalienisch.kitchen.dishes.map((dish, i) => (
                  <div className="dish" key={i}>
                    <div className="name">
                      {dish.namePre}<span className="it">{dish.nameEm}</span>{dish.namePost}
                    </div>
                    <div className="desc">
                      {dish.desc}
                    </div>
                  </div>
                ))}
              </div>
              <div className="contact-actions">
                <button type="button" className="btn btn-primary" onClick={openAll}>
                  {d.landingItalienisch.kitchen.toMenu}
                </button>
              </div>
            </div>
            <figure className="about img-col ital-photo-card">
              <img
                src={asset('images/menu-dinner.jpg')}
                alt={d.landingItalienisch.kitchen.photoAlt}
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <strong>{d.landingItalienisch.kitchen.captionStrong}</strong>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 3b. Wein und Italien */}
      <section className="wine" aria-labelledby="ital-wein-h2">
        <div className="wrap">
          <div className="top">
            <div>
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> {d.landingItalienisch.wine.eyebrow}
                </span>
              </div>
              <h2 id="ital-wein-h2">
                {d.landingItalienisch.wine.headingPre}<span className="it">{d.landingItalienisch.wine.headingEm}</span>{d.landingItalienisch.wine.headingPost}
              </h2>
              <p className="lede" style={{ marginTop: 14 }}>
                {d.landingItalienisch.wine.lede}
              </p>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={openWine}
            >
              {d.landingItalienisch.wine.pdfLink}
              <span className="wine-cta-arrow" aria-hidden="true">→</span>
            </button>
          </div>
          <div className="regions">
            {d.landingItalienisch.wine.regions.map((region) => (
              <article className="region" key={region.label}>
                <div className="label">{region.label}</div>
                <h3>{region.name}</h3>
                <p>{region.copy}</p>
                <div className="list">
                  {region.list.map((row) => (
                    <div className="row" key={row.name}>
                      <div>
                        <div>{row.name}</div>
                        <div className="v" style={{ fontSize: 14, color: 'var(--ink-muted)' }}>
                          {row.v}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Atmosphäre und Angebot */}
      <section className="about ital-section ital-section--gold">
        <div className="wrap">
          <div className="grid">
            <figure className="about img-col ital-photo-card">
              <img
                src={asset('images/lp-terr-it.jpg')}
                alt={d.landingItalienisch.atmosphere.photoAlt}
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <strong>{d.landingItalienisch.atmosphere.captionStrong}</strong>
              </figcaption>
            </figure>
            <div>
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> {d.landingItalienisch.atmosphere.eyebrow}
                </span>
              </div>
              <h2>
                {d.landingItalienisch.atmosphere.h2Pre}<span className="it">{d.landingItalienisch.atmosphere.h2Em}</span>{d.landingItalienisch.atmosphere.h2Post}
              </h2>
              <p>
                {d.landingItalienisch.atmosphere.p1}
              </p>
              <p>
                {d.landingItalienisch.atmosphere.p2}
              </p>
              <p>
                {d.landingItalienisch.atmosphere.p3}
              </p>
              <div className="contact-actions">
                <a className="btn btn-primary" href={localizedHref('/reservierung/')}>
                  {d.common.actions.reserve}
                </a>
                <a className="btn btn-ghost" href={localizedHref('/#terrasse')}>
                  {d.landingItalienisch.atmosphere.viewTerrace}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Galerie, gleicher Rahmen wie die Homepage-Galerie */}
      <section className="gallery ital-gallery" aria-labelledby="ital-gallery-h2">
        <div className="wrap">
          <div className="top">
            <div>
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> {d.landingItalienisch.gallery.eyebrow}
                </span>
              </div>
              <h2 id="ital-gallery-h2">
                {d.landingItalienisch.gallery.h2Pre}<span className="it">{d.landingItalienisch.gallery.h2Em}</span>
              </h2>
              <p className="lede" style={{ marginTop: 14 }}>
                {d.landingItalienisch.gallery.lede}
              </p>
            </div>
            <a className="btn btn-ghost" href={localizedHref('/#galerie')}>
              {d.landingItalienisch.gallery.toGallery}
            </a>
          </div>
          <GalleryFilmstrip />
        </div>
      </section>

      {/* 6. Öffnungszeiten und Anfahrt */}
      <section className="contact">
        <div className="wrap">
          <div className="grid">
            <div>
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> {d.landingItalienisch.directions.eyebrow}
                </span>
              </div>
              <h2>
                {d.landingItalienisch.directions.h2Pre}<span className="it">{d.landingItalienisch.directions.h2Em}</span>
              </h2>
              <p className="lede">
                {d.landingItalienisch.directions.lede}
              </p>
              <div className="info">
                <div className="block">
                  <div className="k">{d.common.info.address}</div>
                  <div className="v">
                    {d.landingItalienisch.directions.addressLine1}
                    <br />
                    {d.landingItalienisch.directions.addressLine2}
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
                <div className="contact-actions">
                  <a className="btn btn-primary" href={localizedHref('/reservierung/')}>
                    {d.common.actions.reserve}
                  </a>
                  <a className="btn btn-ghost" href={SITE.mapsUrl} target="_blank" rel="noreferrer">
                    {d.common.actions.openMaps}
                  </a>
                </div>
              </div>
            </div>
            <div className="map" aria-label={d.landingItalienisch.directions.mapLabel}>
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

      {/* 7. FAQ, sichtbar und passend zum faqJsonLd */}
      <section className="subpage-info" aria-labelledby="ital-faq-h2">
        <div className="wrap">
          <div className="section-eyebrow">
            <span className="eyebrow" style={eyebrowStyle}>
              <FlagBar orientation="h" /> {d.landingItalienisch.faqHeadingEyebrow}
            </span>
          </div>
          <h2 id="ital-faq-h2">
            {d.landingItalienisch.faqHeadingPre}<span className="it">{d.landingItalienisch.faqHeadingEm}</span>
          </h2>
          <FaqAccordion items={[...d.landingItalienisch.faqs]} idBase="ital-faq" />
          <p className="subpage-related">
            {d.landingItalienisch.related.pre}{' '}
            <a href={localizedHref('/')}>{d.landingItalienisch.related.homeLink}</a>{d.landingItalienisch.related.mid2}{' '}
            <a href={localizedHref('/fruehstueck-brunch-kurfuerstendamm/')}>{d.landingItalienisch.related.fruehstueckLink}</a>{d.landingItalienisch.related.mid3}{' '}
            <a href={localizedHref('/business-lunch-mittagstisch-charlottenburg/')}>{d.landingItalienisch.related.lunchLink}</a>{d.landingItalienisch.related.mid4}{' '}
            <a href={localizedHref('/terrasse-restaurant-berlin-charlottenburg/')}>{d.landingItalienisch.related.terrasseLink}</a>{d.landingItalienisch.related.mid5}{' '}
            <a href={localizedHref('/bar-aperitivo-kurfuerstendamm/')}>{d.landingItalienisch.related.barLink}</a>{d.landingItalienisch.related.post}
          </p>
        </div>
      </section>

      <MenuViewer
        menus={allTabs ? allMenus : wineMenu}
        activeMenu={activeMenu}
        isOpen={isOpen}
        onSelect={openMenu}
        onClose={closeMenu}
        showTabs={allTabs}
        onReserve={() => {
          window.location.assign(localizedHref('/reservierung/'));
        }}
        labels={{
          laCarta: menuLabels.laCarta,
          close: menuLabels.close,
          openNewTab: menuLabels.openNewTab,
          resetZoom: menuLabels.resetZoom,
          iframeTitlePrefix: menuLabels.iframeTitlePrefix,
          reserve: d.common.actions.reserveTable,
        }}
      />

      <Lightbox />
    </main>
  );
}

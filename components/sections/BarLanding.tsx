'use client';

import type { CSSProperties } from 'react';
import { asset } from '@/lib/assetPath';
import { useMenuUrls } from '@/lib/menuUrls';
import { routePath } from '@/lib/routes';
import { SITE } from '@/lib/site';
import { useDict, usePageTitle } from '@/lib/i18n/LanguageProvider';
import { FlagBar } from './Brand';
import { FaqAccordion } from './FaqAccordion';
import { MenuViewer, useMenuViewer } from './MenuViewer';

const eyebrowStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
};

export function BarLanding() {
  usePageTitle('bar');
  const d = useDict();
  const menuLabels = d.home.menu;
  const { activeMenu, isOpen, openMenu, closeMenu } = useMenuViewer();
  const menuUrls = useMenuUrls();
  // Karten-Popup wie auf der Startseite, aber nur die Weinkarte (kein Tab-Wechsler).
  const wineMenu = [{ key: 'weine', label: menuLabels.tabs[3].label, pdf: menuUrls.weine }];

  return (
    <main className="subpage">
      {/* 1. Hero / Intro */}
      <section className="about all-day" aria-labelledby="bar-h1">
        <div className="wrap">
          <div className="all-day-grid">
            <div className="all-day-copy">
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> {d.landingBar.hero.eyebrow}
                </span>
              </div>
              <h1 id="bar-h1">
                {d.landingBar.hero.h1Pre}<span className="it">{d.landingBar.hero.h1It}</span>{d.landingBar.hero.h1Post}
              </h1>
              <p className="lede">
                {d.landingBar.hero.lede}
              </p>
              <p>
                {d.landingBar.hero.p2}
              </p>
              <div className="contact-actions">
                <a className="btn btn-primary" href={routePath('/reservierung/')}>
                  {d.common.actions.reserve}
                </a>
                <a className="btn btn-ghost" href={routePath('/#terrasse')}>
                  {d.common.actions.viewTerrace}
                </a>
              </div>
            </div>
            <div className="all-day-media" aria-label={d.landingBar.hero.mediaAria}>
              <figure className="all-day-photo morning">
                <img
                  src={asset('images/gallery/8.jpg')}
                  alt={d.landingBar.hero.photo1Alt}
                />
                <figcaption>{d.landingBar.hero.photo1Caption}</figcaption>
              </figure>
              <figure className="all-day-photo midday">
                <img
                  src={asset('images/menu-wines.jpg')}
                  alt={d.landingBar.hero.photo2Alt}
                />
                <figcaption>{d.landingBar.hero.photo2Caption}</figcaption>
              </figure>
              <figure className="all-day-photo evening">
                <img
                  src={asset('images/lp-terr-abend-2.jpg')}
                  alt={d.landingBar.hero.photo3Alt}
                />
                <figcaption>{d.landingBar.hero.photo3Caption}</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Aperitivo und Cocktails */}
      <section className="about all-day" aria-labelledby="aperitivo-h2">
        <div className="wrap">
          <div className="all-day-grid">
            <div className="all-day-copy">
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> {d.landingBar.aperitivo.eyebrow}
                </span>
              </div>
              <h2 id="aperitivo-h2">
                {d.landingBar.aperitivo.h2Pre}<span className="it">{d.landingBar.aperitivo.h2It}</span>{d.landingBar.aperitivo.h2Post}
              </h2>
              <p>
                {d.landingBar.aperitivo.p1}
              </p>
              <p>
                {d.landingBar.aperitivo.p2}
              </p>
              <div className="dayline" aria-label={d.landingBar.aperitivo.daylineAria}>
                {d.landingBar.drinks.map((item, index) => (
                  <div className="day-moment" key={item.title} style={{ '--i': index } as CSSProperties}>
                    <span className="moment-time">{item.time}</span>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="all-day-media" aria-label={d.landingBar.aperitivo.mediaAria}>
              <figure className="all-day-photo morning">
                <img
                  src={asset('images/lp-spritz.jpg')}
                  alt={d.landingBar.aperitivo.photo1Alt}
                />
                <figcaption>{d.landingBar.aperitivo.photo1Caption}</figcaption>
              </figure>
              <figure className="all-day-photo midday">
                <img
                  src={asset('images/lp-cocktail.jpg')}
                  alt={d.landingBar.aperitivo.photo2Alt}
                />
                <figcaption>{d.landingBar.aperitivo.photo2Caption}</figcaption>
              </figure>
              <figure className="all-day-photo evening">
                <img
                  src={asset('images/lp-bar-int.jpg')}
                  alt={d.landingBar.aperitivo.photo3Alt}
                />
                <figcaption>{d.landingBar.aperitivo.photo3Caption}</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Wein */}
      <section className="wine" aria-labelledby="wein-h2">
        <div className="wrap">
          <div className="top">
            <div>
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> {d.landingBar.wine.eyebrow}
                </span>
              </div>
              <h2 id="wein-h2">
                {d.landingBar.wine.h2Pre}<span className="it">{d.landingBar.wine.h2It}</span>{d.landingBar.wine.h2Post}
              </h2>
              <p className="lede" style={{ marginTop: 14 }}>
                {d.landingBar.wine.lede}
              </p>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => openMenu('weine')}
            >
              {d.landingBar.wine.pdfLink}
              <span className="wine-cta-arrow" aria-hidden="true">→</span>
            </button>
          </div>
          <div className="regions">
            <article className="region">
              <div className="label">{d.landingBar.wine.regions.sicilia.label}</div>
              <h3>{d.landingBar.wine.regions.sicilia.title}</h3>
              <p>
                {d.landingBar.wine.regions.sicilia.copy}
              </p>
              <div className="list">
                {d.landingBar.wine.regions.sicilia.rows.map((row) => (
                  <div className="row" key={row.name}>
                    <div>
                      <div>{row.name}</div>
                      <div className="v" style={{ fontSize: 14, color: 'var(--ink-muted)' }}>
                        {row.note}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
            <article className="region">
              <div className="label">{d.landingBar.wine.regions.dolci.label}</div>
              <h3>{d.landingBar.wine.regions.dolci.title}</h3>
              <p>
                {d.landingBar.wine.regions.dolci.copy}
              </p>
              <div className="list">
                {d.landingBar.wine.regions.dolci.rows.map((row) => (
                  <div className="row" key={row.name}>
                    <div>
                      <div>{row.name}</div>
                      <div className="v" style={{ fontSize: 14, color: 'var(--ink-muted)' }}>
                        {row.note}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
            <article className="region">
              <div className="label">{d.landingBar.wine.regions.bollicine.label}</div>
              <h3>{d.landingBar.wine.regions.bollicine.title}</h3>
              <p>
                {d.landingBar.wine.regions.bollicine.copy}
              </p>
              <div className="list">
                {d.landingBar.wine.regions.bollicine.rows.map((row) => (
                  <div className="row" key={row.name}>
                    <div>
                      <div>{row.name}</div>
                      <div className="v" style={{ fontSize: 14, color: 'var(--ink-muted)' }}>
                        {row.note}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 4. Live-DJ und Wochenende */}
      <section className="about all-day" aria-labelledby="musik-h2">
        <div className="wrap">
          <div className="all-day-grid">
            <div className="all-day-copy">
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> {d.landingBar.music.eyebrow}
                </span>
              </div>
              <h2 id="musik-h2">
                {d.landingBar.music.h2Pre}<span className="it">{d.landingBar.music.h2It}</span>{d.landingBar.music.h2Post}
              </h2>
              <p>
                {d.landingBar.music.p1}
              </p>
              <p>
                {d.landingBar.music.p2}
              </p>
              <p>
                {d.landingBar.music.crossPre}
                <a href={routePath('/italienisches-restaurant-berlin-charlottenburg/')}>
                  {d.landingBar.music.crossLinkItalienisch}
                </a>
                {d.landingBar.music.crossPost}
              </p>
            </div>
            <div className="all-day-media" aria-label={d.landingBar.music.mediaAria}>
              <figure className="all-day-photo morning">
                <img
                  src={asset('images/gallery/1.jpg')}
                  alt={d.landingBar.music.photo1Alt}
                />
                <figcaption>{d.landingBar.music.photo1Caption}</figcaption>
              </figure>
              <figure className="all-day-photo midday">
                <img
                  src={asset('images/lp-bar-int-2.jpg')}
                  alt={d.landingBar.music.photo2Alt}
                />
                <figcaption>{d.landingBar.music.photo2Caption}</figcaption>
              </figure>
              <figure className="all-day-photo evening">
                <img
                  src={asset('images/lp-terr-abend-3.jpg')}
                  alt={d.landingBar.music.photo3Alt}
                />
                <figcaption>{d.landingBar.music.photo3Caption}</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Öffnungszeiten und Reservierung */}
      <section className="contact" aria-labelledby="reservierung-h2">
        <div className="wrap">
          <div className="grid">
            <div>
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> {d.landingBar.contact.eyebrow}
                </span>
              </div>
              <h2 id="reservierung-h2">
                {d.landingBar.contact.h2Pre}<span className="it">{d.landingBar.contact.h2It}</span>{d.landingBar.contact.h2Post}
              </h2>
              <p className="lede">
                {d.landingBar.contact.lede}
              </p>
              <div className="info">
                <div className="block">
                  <div className="k">{d.common.info.address}</div>
                  <div className="v">
                    {d.landingBar.contact.addressLine1}
                    <br />
                    {d.landingBar.contact.addressLine2}
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
                  <div className="k">{d.landingBar.contact.barLabel}</div>
                  <div className="v">
                    {d.landingBar.contact.barLine1}
                    <br />
                    <span className="muted">{d.landingBar.contact.barLine2}</span>
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
            <div className="map" aria-label={d.landingBar.contact.mapAria}>
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

      {/* 6. FAQ, sichtbar und passend zum faqJsonLd */}
      <section className="subpage-info" aria-labelledby="faq-h2">
        <div className="wrap">
          <div className="section-eyebrow">
            <span className="eyebrow" style={eyebrowStyle}>
              <FlagBar orientation="h" /> {d.landingBar.faqHeadingEyebrow}
            </span>
          </div>
          <h2 id="faq-h2">
            {d.landingBar.faqHeadingPre}<span className="it">{d.landingBar.faqHeadingIt}</span>{d.landingBar.faqHeadingPost}
          </h2>
          <FaqAccordion items={[...d.landingBar.faqs]} idBase="bar-faq" />
          <p className="subpage-related">
            {d.landingBar.related.pre}
            <a href={routePath('/')}>{d.landingBar.related.linkHome}</a>{d.landingBar.related.mid1}
            <a href={routePath('/italienisches-restaurant-berlin-charlottenburg/')}>
              {d.landingBar.related.linkItalienisch}
            </a>
            {d.landingBar.related.mid2}
            <a href={routePath('/fruehstueck-brunch-kurfuerstendamm/')}>{d.landingBar.related.linkFruehstueck}</a>{d.landingBar.related.post}
          </p>
        </div>
      </section>

      <MenuViewer
        menus={wineMenu}
        activeMenu={activeMenu}
        isOpen={isOpen}
        onSelect={openMenu}
        onClose={closeMenu}
        showTabs={false}
        labels={{
          laCarta: menuLabels.laCarta,
          close: menuLabels.close,
          openNewTab: menuLabels.openNewTab,
          resetZoom: menuLabels.resetZoom,
          iframeTitlePrefix: menuLabels.iframeTitlePrefix,
        }}
      />
    </main>
  );
}

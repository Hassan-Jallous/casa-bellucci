'use client';

import { useDict, useLocalizedHref } from '@/lib/i18n/LanguageProvider';
import { onReserveClick } from '@/components/SmoothScrollLink';
import { SITE } from '@/lib/site';

export function Footer() {
  const d = useDict();
  const localizedHref = useLocalizedHref();
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="footer-mark" href={localizedHref('/')}>
              <span className="script">Casa</span>
              <span>Bellucci</span>
            </a>
            <p>
              {d.footer.blurb}
            </p>
            <div className="footer-cta">
              <a className="btn btn-primary" href={localizedHref('/reservierung/')} onClick={onReserveClick}>{d.common.actions.reserve}</a>
              <a className="btn btn-ghost" href={SITE.phoneHref}>{d.common.actions.call}</a>
            </div>
          </div>
          <div className="footer-col">
            <h5>{d.footer.cols.visit}</h5>
            <span className="line">{SITE.address.street}</span>
            <span className="line">{SITE.address.postalCity}</span>
            <a href={SITE.mapsUrl} target="_blank" rel="noreferrer">{d.footer.links.openRoute}</a>
          </div>
          <div className="footer-col">
            <h5>{d.footer.cols.contact}</h5>
            <a href={SITE.phoneHref}>{SITE.phone}</a>
            <a href={SITE.emailHref}>{SITE.email}</a>
            <span className="line">{d.common.hours.weekdays}</span>
            <span className="line">{d.common.hours.sunday}</span>
          </div>
          <div className="footer-col">
            <h5>{d.footer.cols.discover}</h5>
            <a href={localizedHref('/italienisches-restaurant-berlin-charlottenburg/')}>{d.footer.discover.italienisch}</a>
            <a href={localizedHref('/bar-aperitivo-kurfuerstendamm/')}>{d.footer.discover.bar}</a>
            <a href={localizedHref('/fruehstueck-brunch-kurfuerstendamm/')}>{d.footer.discover.fruehstueck}</a>
            <a href={localizedHref('/terrasse-restaurant-berlin-charlottenburg/')}>{d.footer.discover.terrasse}</a>
            <a href={localizedHref('/business-lunch-mittagstisch-charlottenburg/')}>{d.footer.discover.lunch}</a>
            <a href={localizedHref('/firmenfeier-events-charlottenburg/')}>{d.footer.discover.events}</a>
          </div>
          <div className="footer-col footer-socials">
            <h5>{d.footer.cols.follow}</h5>
            <a href={SITE.instagram} target="_blank" rel="noreferrer">
              <span>{d.footer.links.instagram}</span>
              <strong>@casabellucci_berlin</strong>
            </a>
            <a href={SITE.mapsUrl} target="_blank" rel="noreferrer">
              <span>{d.footer.links.google}</span>
              <strong>{d.footer.links.reviews}</strong>
            </a>
          </div>
        </div>
        <div className="bottom">
          <span>{d.footer.copyright}</span>
          <div className="legal">
            <a href={localizedHref('/impressum/')}>{d.footer.links.impressum}</a>
            <a href={localizedHref('/datenschutzerklaerung/')}>{d.footer.links.datenschutz}</a>
            <a href={localizedHref('/cookie-richtlinie-eu/')}>{d.footer.links.cookies}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

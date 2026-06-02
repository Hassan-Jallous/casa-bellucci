import { routePath } from '@/lib/routes';
import { SITE } from '@/lib/site';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-mark">
              <span className="script">Casa</span>
              <span>Bellucci</span>
            </div>
            <p>
              Italienisches Restaurant und Bar am Kurfürstendamm.
            </p>
            <div className="footer-cta">
              <a className="btn btn-primary" href={routePath('/reservierung/')}>Reservieren</a>
              <a className="btn btn-ghost" href={SITE.phoneHref}>Anrufen</a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Besuch</h5>
            <span className="line">{SITE.address.street}</span>
            <span className="line">{SITE.address.postalCity}</span>
            <a href={SITE.mapsUrl} target="_blank" rel="noreferrer">Route öffnen</a>
          </div>
          <div className="footer-col">
            <h5>Kontakt</h5>
            <a href={SITE.phoneHref}>{SITE.phone}</a>
            <a href={SITE.emailHref}>{SITE.email}</a>
            <span className="line">{SITE.openingHours.weekdays}</span>
            <span className="line">{SITE.openingHours.sunday}</span>
          </div>
          <div className="footer-col footer-socials">
            <h5>Folgen</h5>
            <a href={SITE.instagram} target="_blank" rel="noreferrer">
              <span>Instagram</span>
              <strong>@bellucci_barberlin</strong>
            </a>
            <a href={SITE.mapsUrl} target="_blank" rel="noreferrer">
              <span>Google</span>
              <strong>Bewertungen</strong>
            </a>
          </div>
        </div>
        <div className="bottom">
          <span>© 2026 Casa Bellucci Restaurant & Bar</span>
          <div className="legal">
            <a href={routePath('/impressum/')}>Impressum</a>
            <a href={routePath('/datenschutzerklaerung/')}>Datenschutz</a>
            <a href={routePath('/cookie-richtlinie-eu/')}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

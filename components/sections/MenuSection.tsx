"use client";

import { asset } from '@/lib/assetPath';
import { SmoothScrollLink } from '@/components/SmoothScrollLink';
import { useUI } from '@/components/UIProvider';
import { useMenuUrls } from '@/lib/menuUrls';
import { routePath } from '@/lib/routes';
import { useDict } from '@/lib/i18n/LanguageProvider';
import { FlagBar } from './Brand';
import { MenuViewer, type MenuTab } from './MenuViewer';

interface SignatureItem {
  label: string;
  heroLabel: string;
  title: string;
  copy: string;
  img: string;
  menuKey: string;
  pdf: string;
}

export function MenuSection() {
  const d = useDict();
  const m = d.home.menu;
  const urls = useMenuUrls();
  const signatures: SignatureItem[] = [
    {
      label: m.signatures[0].label,
      heroLabel: m.signatures[0].heroLabel,
      title: m.signatures[0].title,
      copy: m.signatures[0].copy,
      img: "images/menu-breakfast.jpg",
      menuKey: "fruehstueck",
      pdf: urls.fruehstueck,
    },
    {
      label: m.signatures[1].label,
      heroLabel: m.signatures[1].heroLabel,
      title: m.signatures[1].title,
      copy: m.signatures[1].copy,
      img: "images/menu-lunch.jpg",
      menuKey: "lunch",
      pdf: urls.lunch,
    },
    {
      label: m.signatures[2].label,
      heroLabel: m.signatures[2].heroLabel,
      title: m.signatures[2].title,
      copy: m.signatures[2].copy,
      img: "images/menu-dinner.jpg",
      menuKey: "dinner",
      pdf: urls.dinner,
    },
    {
      label: m.signatures[3].label,
      heroLabel: m.signatures[3].heroLabel,
      title: m.signatures[3].title,
      copy: m.signatures[3].copy,
      img: "images/menu-wines.jpg",
      menuKey: "weine",
      pdf: urls.weine,
    },
  ];
  const menus: MenuTab[] = [
    { key: "fruehstueck", label: m.tabs[0].label, pdf: urls.fruehstueck },
    { key: "lunch", label: m.tabs[1].label, pdf: urls.lunch },
    { key: "dinner", label: m.tabs[2].label, pdf: urls.dinner },
    { key: "weine", label: m.tabs[3].label, pdf: urls.weine },
  ];
  const { menuActive: activeMenu, menuOpen: isOpen, openMenu, closeMenu } = useUI();

  return (
    <section className="menu signature-menu" id="menu" data-screen-label="03 Signature Moments">
      <div className="wrap">
        <div className="signature-menu-head">
          <div className="signature-menu-title">
            <div className="section-eyebrow">
              <span className="eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                <FlagBar orientation="h" /> {m.eyebrow}
              </span>
            </div>
            <h2>{m.headingPre}<span className="it">{m.headingEm}</span>{m.headingPost}</h2>
          </div>
          <p>
            {m.introParts.p0}{' '}
            <a href={routePath('/fruehstueck-brunch-kurfuerstendamm/')}>{m.introParts.link1}</a>{' '}
            {m.introParts.p1}{' '}
            <a href={routePath('/#menu')}>{m.introParts.link2}</a>{' '}
            {m.introParts.p2}{' '}
            <a href={routePath('/bar-aperitivo-kurfuerstendamm/')}>{m.introParts.link3}</a>{' '}
            {m.introParts.p3}{' '}
            <a href={routePath('/business-lunch-mittagstisch-charlottenburg/')}>{m.introParts.link4}</a>{' '}
            {m.introParts.p4}
          </p>
        </div>

        <div className="signature-menu-grid">
          <figure className="signature-menu-hero">
            <img
              src={asset("images/signature-hero.jpg")}
              alt={m.heroAlt}
              className="signature-hero-img is-active"
              width={667}
              height={1000}
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className="signature-list">
            {signatures.map((item) => (
              <button
                type="button"
                className="signature-item"
                key={item.title}
                onClick={() => openMenu(item.menuKey)}
                aria-label={`${item.label} ${m.openCardAria}`}
              >
                <span className="signature-label">{item.label}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
                <span className="signature-open" aria-hidden="true">{m.openCard}</span>
              </button>
            ))}

            <div className="signature-actions">
              <SmoothScrollLink targetId="reservieren" className="btn btn-primary">{m.reserve}</SmoothScrollLink>
              <SmoothScrollLink targetId="terrasse" className="btn btn-ghost">{m.terrace}</SmoothScrollLink>
            </div>
          </div>
        </div>
      </div>

      <MenuViewer
        menus={menus}
        activeMenu={activeMenu}
        isOpen={isOpen}
        onSelect={openMenu}
        onClose={closeMenu}
        labels={{
          laCarta: m.laCarta,
          close: m.close,
          openNewTab: m.openNewTab,
          resetZoom: m.resetZoom,
          iframeTitlePrefix: m.iframeTitlePrefix,
        }}
      />
    </section>
  );
}

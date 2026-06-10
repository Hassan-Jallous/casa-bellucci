"use client";

import { Fragment, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useUI } from '@/components/UIProvider';
import { useDict, useLang, useLocalizedHref } from '@/lib/i18n/LanguageProvider';
import type { Lang } from '@/lib/i18n/config';
import { switchLangPath } from '@/lib/i18n/localize';
import { routePath } from '@/lib/routes';
import { onReserveClick, onSmoothScrollClick } from '@/components/SmoothScrollLink';
import { BrandMark, FlagBar } from './Brand';

export function Header() {
  const { mobileOpen, toggleMobile } = useUI();
  const d = useDict();
  const [scrolled, setScrolled] = useState(false);
  const { lang } = useLang();
  const pathname = usePathname();
  const localizedHref = useLocalizedHref();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="wrap row">
        <a href={localizedHref('/')} style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
          <FlagBar size="md" />
          <BrandMark size="md" />
        </a>
        <nav className="nav-links">
          <a href={localizedHref('/#menu')} onClick={onSmoothScrollClick}>{d.header.nav.karte}</a>
          <a href={localizedHref('/terrasse-restaurant-berlin-charlottenburg/')}>{d.header.nav.terrasse}</a>
          <a href={localizedHref('/#galerie')} onClick={onSmoothScrollClick}>{d.header.nav.galerie}</a>
          <a href={localizedHref('/reservierung/')} onClick={onReserveClick}>{d.header.nav.reservieren}</a>
          <a href={localizedHref('/#kontakt')} onClick={onSmoothScrollClick}>{d.header.nav.kontakt}</a>
        </nav>
        <div className="header-right">
          <div className="lang-switch">
            {["DE", "EN", "IT"].map((l, i) => (
              <Fragment key={l}>
                <button className={lang === l.toLowerCase() ? "active" : ""} onClick={() => window.location.assign(routePath(switchLangPath(pathname, l.toLowerCase() as Lang)))}>{l}</button>
                {i < 2 && <span className="sep">·</span>}
              </Fragment>
            ))}
          </div>
          <a href={localizedHref('/reservierung/')} onClick={onReserveClick} className="btn btn-dark header-cta">{d.header.cta}</a>
          <button className={`burger${mobileOpen ? " is-open" : ""}`} onClick={toggleMobile} aria-label={d.header.menuAria}><span></span></button>
        </div>
      </div>
    </header>
  );
}

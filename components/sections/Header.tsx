"use client";

import { Fragment, useEffect, useState } from 'react';
import { useUI } from '@/components/UIProvider';
import { routePath } from '@/lib/routes';
import { BrandMark, FlagBar } from './Brand';

export function Header() {
  const { mobileOpen, toggleMobile } = useUI();
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState("DE");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="wrap row">
        <a href={routePath('/#top')} style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
          <FlagBar size="md" />
          <BrandMark size="md" />
        </a>
        <nav className="nav-links">
          <a href={routePath('/#menu')}>Karte</a>
          <a href={routePath('/#terrasse')}>Terrasse</a>
          <a href={routePath('/#galerie')}>Galerie</a>
          <a href={routePath('/reservierung/')}>Reservieren</a>
          <a href={routePath('/#kontakt')}>Kontakt</a>
        </nav>
        <div className="header-right">
          <div className="lang-switch">
            {["DE", "EN", "IT"].map((l, i) => (
              <Fragment key={l}>
                <button className={lang === l ? "active" : ""} onClick={() => setLang(l)}>{l}</button>
                {i < 2 && <span className="sep">·</span>}
              </Fragment>
            ))}
          </div>
          <a href={routePath('/reservierung/')} className="btn btn-dark header-cta">Reservieren</a>
          <button className={`burger${mobileOpen ? " is-open" : ""}`} onClick={toggleMobile} aria-label="Menu"><span></span></button>
        </div>
      </div>
    </header>
  );
}

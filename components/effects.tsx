'use client';
// Casa Bellucci, effects and presentational components.
import type { CSSProperties } from 'react';
import { asset } from '@/lib/assetPath';
import { SmoothScrollButton } from '@/components/SmoothScrollButton';
import { useUI } from '@/components/UIProvider';
import { useDict } from '@/lib/i18n/LanguageProvider';
import { FlagBar } from './sections/Brand';
import { MajolikaPattern } from './decor';

/* ============ IMAGE HERO ============ */
export function ImageHero() {
  const d = useDict();
  const { openMenu } = useUI();
  return (
    <section className="hero image-hero" data-screen-label="01 Hero · Terrasse">
      {/*
        LCP-Element: das Hero-Bild ist jetzt ein echtes <img> (frueher CSS-background),
        damit der Preload-Scanner es sofort entdeckt und mit hoher Prioritaet laedt.
        <picture> liefert auf Mobile das hochformatige hero-mobile, sonst Querformat.
        Server-seitige WebP-Negotiation (.htaccess) liefert die .webp-Zwillinge.
      */}
      <picture>
        <source media="(max-width: 880px)" type="image/webp" srcSet={asset("images/hero-mobile.webp")} />
        <source media="(max-width: 880px)" srcSet={asset("images/hero-mobile.jpg")} />
        <source type="image/webp" srcSet={asset("images/hero-summer-desktop.webp")} />
        <img
          className="image-hero-bg"
          src={asset("images/hero-summer-desktop.jpg")}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          width={1600}
          height={900}
        />
      </picture>
      <div className="image-hero-shade" aria-hidden="true"></div>
      <div className="image-hero-content wrap">
        <div className="image-hero-copy">
          <div className="image-hero-eyebrow">
            <FlagBar orientation="h" size="md" />
            {d.home.hero.tagline}
          </div>
          <h1>{d.home.hero.h1}</h1>
          <p className="image-hero-lede">{d.home.hero.lede}</p>
          <div className="image-hero-actions">
            <SmoothScrollButton targetId="reservieren" className="btn btn-solid btn-on-dark">{d.common.actions.reserve}</SmoothScrollButton>
            <button type="button" className="btn btn-ghost btn-on-dark btn-viewmenu" onClick={() => openMenu('dinner')}>
              {d.home.hero.viewMenu.replace(/\s*→\s*$/, '')}
              <span className="hero-arrow" aria-hidden="true"> →</span>
            </button>
          </div>
        </div>
      </div>
      <div className="image-hero-scroll" aria-hidden="true">
        <span>{d.home.hero.discover}</span>
        <i></i>
      </div>
    </section>
  );
}

/* ============ MAJOLIKA DIVIDER ============ */
interface MajolikaDividerProps {
  height?: number;
}

export function MajolikaDivider({ height = 56 }: MajolikaDividerProps) {
  return (
    <div className="majolika-divider" style={{ height }}>
      <MajolikaPattern opacity={0.18} />
      <div className="majolika-fade-top"></div>
      <div className="majolika-fade-bottom"></div>
    </div>
  );
}

/* ============ TRICOLORE LINE ============ */
interface TricoloreLineProps {
  style?: CSSProperties;
}

export function TricoloreLine({ style = {} }: TricoloreLineProps) {
  return (
    <div className="tricolore-line" style={style}>
      <span></span><span></span><span></span>
    </div>
  );
}

// Casa Bellucci, effects and presentational components.
import type { CSSProperties } from 'react';
import { SmoothScrollButton } from '@/components/SmoothScrollButton';
import { FlagBar } from './sections/Brand';
import { MajolikaPattern } from './decor';

/* ============ IMAGE HERO ============ */
export function ImageHero() {
  return (
    <section className="hero image-hero" data-screen-label="01 Hero · Terrasse">
      <div className="image-hero-shade" aria-hidden="true"></div>
      <div className="image-hero-content wrap">
        <div className="image-hero-copy">
          <div className="image-hero-eyebrow">
            <FlagBar orientation="h" size="md" />
            Italienisches Restaurant · Bar · Kurfürstendamm 63
          </div>
          <h1>Casa Bellucci</h1>
          <p>Italienisches Restaurant und Bar in Berlin-Charlottenburg: Frühstück, Lunch, Dinner und Aperitivo auf der Sommerterrasse.</p>
          <div className="image-hero-actions">
            <SmoothScrollButton targetId="reservieren" className="btn btn-primary btn-on-dark">Reservieren</SmoothScrollButton>
            <a className="btn btn-ghost btn-on-dark" href="#menu">Karte ansehen →</a>
          </div>
        </div>
      </div>
      <div className="image-hero-scroll" aria-hidden="true">
        <span>Entdecken</span>
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

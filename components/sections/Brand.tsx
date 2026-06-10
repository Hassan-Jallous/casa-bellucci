// Casa Bellucci, small shared brand marks and stamps. Pure markup, no state.
import type { ReactNode } from 'react';

interface BrandMarkProps {
  size?: "sm" | "md" | "lg";
  invert?: boolean;
}

export function BrandMark({ size = "md", invert = false }: BrandMarkProps) {
  const fontSize = size === "lg" ? 50 : size === "sm" ? 24 : 32;
  return (
    <span className="brand" style={{ fontSize, color: invert ? "var(--bg)" : "var(--ink)" }}>
      <span className="casa" style={{ color: "var(--accent)" }}>Casa</span>
      <span className="bellucci">Bellucci</span>
    </span>
  );
}

interface PostalStampProps {
  size?: number;
  rot?: number;
}

export function PostalStamp({ size = 100, rot = 0 }: PostalStampProps) {
  return (
    <div className="postal-stamp rotating" style={{ width: size, height: size, transform: `rotate(${rot}deg)` }}>
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <path id="circle-text" d="M 50 50 m -38 0 a 38 38 0 1 1 76 0 a 38 38 0 1 1 -76 0" />
        </defs>
        <g className="label-circle">
          <text fontFamily='"Montserrat", Arial, sans-serif' fontSize="8" letterSpacing="3.5" fill="currentColor" textLength="240">
            <textPath href="#circle-text" startOffset="0">DA ITALIA · KURFÜRSTENDAMM 63 · BERLIN · </textPath>
          </text>
        </g>
      </svg>
      <span className="center">Casa<br/><em style={{ fontSize: 12, letterSpacing: "0.2em", fontStyle: "normal", fontFamily: "var(--font-mono)" }}>2026</em></span>
    </div>
  );
}

interface RectStampProps {
  children: ReactNode;
}

export function RectStamp({ children }: RectStampProps) {
  return (
    <span className="rect-stamp">
      <span className="dot"></span>
      {children}
    </span>
  );
}

interface FlagBarProps {
  orientation?: "v" | "h";
  size?: "md" | "lg" | "xl";
}

export function FlagBar({ orientation = "v", size = "md" }: FlagBarProps) {
  const cls = `flag-bar ${orientation === "h" ? "h" : ""} ${size === "lg" ? "lg" : size === "xl" ? "xl" : ""}`;
  return <span className={cls}><i></i><i></i><i></i></span>;
}

// Casa Bellucci, decorative SVG components (hand-painted style lemons + olive branch).
import type { CSSProperties } from 'react';

interface LemonBranchProps {
  style?: CSSProperties;
  className?: string;
  size?: number;
  rot?: number;
  mirror?: boolean;
}

export function LemonBranch({ style = {}, className = "", size = 220, rot = 0, mirror = false }: LemonBranchProps) {
  return (
    <svg
      className={className}
      style={{ width: size, height: size * 0.85, transform: `rotate(${rot}deg)${mirror ? " scaleX(-1)" : ""}`, ...style }}
      viewBox="0 0 240 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="lemonFill" cx="0.4" cy="0.35" r="0.7">
          <stop offset="0%" stopColor="#FFEA8C" />
          <stop offset="60%" stopColor="#F4D03F" />
          <stop offset="100%" stopColor="#D9A82C" />
        </radialGradient>
        <radialGradient id="leafFill" cx="0.3" cy="0.3" r="0.9">
          <stop offset="0%" stopColor="#7B8A52" />
          <stop offset="100%" stopColor="#3F4F26" />
        </radialGradient>
      </defs>
      {/* Stem */}
      <path
        d="M 30 180 Q 80 130 130 100 Q 180 70 215 30"
        stroke="#5C4A28"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
      {/* Twigs */}
      <path d="M 95 125 Q 110 100 130 95" stroke="#5C4A28" strokeWidth="1.8" fill="none" opacity="0.8"/>
      <path d="M 150 95 Q 165 75 180 70" stroke="#5C4A28" strokeWidth="1.8" fill="none" opacity="0.8"/>
      {/* Leaves */}
      <g opacity="0.95">
        <ellipse cx="65" cy="155" rx="22" ry="9" fill="url(#leafFill)" transform="rotate(-25 65 155)"/>
        <ellipse cx="105" cy="118" rx="20" ry="8" fill="url(#leafFill)" transform="rotate(-15 105 118)"/>
        <ellipse cx="155" cy="80" rx="24" ry="9" fill="url(#leafFill)" transform="rotate(-5 155 80)"/>
        <ellipse cx="195" cy="50" rx="18" ry="7" fill="url(#leafFill)" transform="rotate(15 195 50)"/>
        <ellipse cx="125" cy="155" rx="18" ry="7" fill="url(#leafFill)" transform="rotate(35 125 155)"/>
      </g>
      {/* Lemons */}
      <g>
        <ellipse cx="135" cy="125" rx="22" ry="28" fill="url(#lemonFill)" transform="rotate(-10 135 125)"/>
        <path d="M 116 110 Q 122 105 130 108" stroke="#FFFBE0" strokeWidth="2" fill="none" opacity="0.6"/>
        <circle cx="135" cy="100" r="2" fill="#5C4A28" opacity="0.6"/>
      </g>
      <g>
        <ellipse cx="180" cy="58" rx="18" ry="24" fill="url(#lemonFill)" transform="rotate(20 180 58)"/>
        <path d="M 168 45 Q 174 42 180 44" stroke="#FFFBE0" strokeWidth="1.8" fill="none" opacity="0.6"/>
        <circle cx="180" cy="35" r="1.6" fill="#5C4A28" opacity="0.6"/>
      </g>
      <g>
        <ellipse cx="80" cy="170" rx="16" ry="21" fill="url(#lemonFill)" transform="rotate(-30 80 170)"/>
        <circle cx="78" cy="151" r="1.6" fill="#5C4A28" opacity="0.6"/>
      </g>
    </svg>
  );
}

interface MajolikaPatternProps {
  opacity?: number;
}

export function MajolikaPattern({ opacity = 0.06 }: MajolikaPatternProps) {
  return (
    <svg
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity, pointerEvents: "none" }}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern id="maj" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <rect width="80" height="80" fill="none"/>
          <path d="M 40 5 L 75 40 L 40 75 L 5 40 Z" stroke="#1B4F72" strokeWidth="1" fill="none"/>
          <circle cx="40" cy="40" r="6" fill="#F4D03F" opacity="0.5"/>
          <path d="M 40 28 L 44 36 L 52 40 L 44 44 L 40 52 L 36 44 L 28 40 L 36 36 Z" fill="#1B4F72" opacity="0.4"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#maj)" />
    </svg>
  );
}

interface OliveBranchProps {
  style?: CSSProperties;
  size?: number;
  rot?: number;
}

export function OliveBranch({ style = {}, size = 160, rot = 0 }: OliveBranchProps) {
  return (
    <svg
      style={{ width: size, height: size * 0.4, transform: `rotate(${rot}deg)`, ...style }}
      viewBox="0 0 320 130"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M 10 65 Q 80 50 160 60 Q 240 70 310 55" stroke="#5C6B3C" strokeWidth="2" fill="none" opacity="0.85" />
      {[20, 60, 100, 140, 180, 220, 260, 300].map((x, i) => (
        <g key={i}>
          <ellipse cx={x} cy={50 - (i % 2 === 0 ? 18 : 0)} rx="16" ry="6" fill="#5C6B3C" opacity="0.8" transform={`rotate(${-20 + i * 4} ${x} ${50 - (i % 2 === 0 ? 18 : 0)})`} />
          <ellipse cx={x + 8} cy={80 + (i % 2 === 0 ? 14 : 0)} rx="14" ry="5" fill="#5C6B3C" opacity="0.7" transform={`rotate(${20 - i * 3} ${x + 8} ${80 + (i % 2 === 0 ? 14 : 0)})`} />
        </g>
      ))}
      {[40, 110, 200, 280].map((x, i) => (
        <ellipse key={i} cx={x} cy="65" rx="5" ry="7" fill="#5C6B3C" opacity="0.9" />
      ))}
    </svg>
  );
}

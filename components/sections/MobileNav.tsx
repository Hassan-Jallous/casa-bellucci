"use client";

import { useEffect } from 'react';
import { useUI } from '@/components/UIProvider';
import { routePath } from '@/lib/routes';
import { SITE } from '@/lib/site';

interface MobileNavAProps {
  open: boolean;
  onClose: () => void;
}

/* Mobile Nav A: Full-Screen Overlay */
function MobileNavA({ open, onClose }: MobileNavAProps) {
  const items = [
    { href: routePath('/#menu'), label: "Karte" },
    { href: routePath('/#terrasse'), label: "Terrasse" },
    { href: routePath('/#galerie'), label: "Galerie" },
    { href: routePath('/reservierung/'), label: "Reservieren" },
    { href: routePath('/#kontakt'), label: "Kontakt" },
  ];

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <nav className={`mobile-nav-a${open ? " open" : ""}`} aria-label="Mobile Navigation">
      <div className="nav-items">
        {items.map((it, i) => (
          <a key={i} href={it.href} className="nav-item" onClick={onClose}>
            <span className="num">{String(i + 1).padStart(2, "0")}</span>
            {it.label}
          </a>
        ))}
      </div>
      <a href={routePath('/reservierung/')} className="nav-cta" onClick={onClose}>
        <span>Reservieren</span>
        <span className="arrow">→</span>
      </a>
      <div className="nav-meta">
        <span>{SITE.address.street} · {SITE.address.postalCity}</span>
        <span>{SITE.phone}</span>
      </div>
    </nav>
  );
}

export function MobileNav() {
  const { mobileOpen, closeMobile } = useUI();
  return <MobileNavA open={mobileOpen} onClose={closeMobile} />;
}

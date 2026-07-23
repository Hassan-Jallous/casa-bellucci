"use client";

import { useEffect, type MouseEvent } from 'react';
import { usePathname } from 'next/navigation';
import { useUI } from '@/components/UIProvider';
import { useDict, useLang, useLocalizedHref } from '@/lib/i18n/LanguageProvider';
import type { Lang } from '@/lib/i18n/config';
import { switchLangPath } from '@/lib/i18n/localize';
import { routePath } from '@/lib/routes';
import { smoothScrollFromHref } from '@/components/SmoothScrollLink';
import { SITE } from '@/lib/site';

interface MobileNavAProps {
  open: boolean;
  onClose: () => void;
}

/* Mobile Nav A: Full-Screen Overlay */
function MobileNavA({ open, onClose }: MobileNavAProps) {
  const d = useDict();
  const { lang } = useLang();
  const pathname = usePathname();
  const localizedHref = useLocalizedHref();
  const items: { href: string; label: string; scroll?: string }[] = [
    { href: localizedHref('/#menu'), label: d.mobileNav.items[0] },
    { href: localizedHref('/terrasse-restaurant-berlin-charlottenburg/'), label: d.mobileNav.items[1] },
    { href: localizedHref('/business-lunch-mittagstisch-charlottenburg/'), label: d.mobileNav.items[2] },
    { href: localizedHref('/firmenfeier-events-charlottenburg/'), label: d.mobileNav.items[3] },
    { href: localizedHref('/#galerie'), label: d.mobileNav.items[4] },
    { href: localizedHref('/reservierung/'), label: d.mobileNav.items[5], scroll: '#reservieren' },
    { href: localizedHref('/#kontakt'), label: d.mobileNav.items[6] },
  ];

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const onItemClick = (scrollHref: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    const handled = smoothScrollFromHref(e, scrollHref, () => {
      document.body.style.overflow = "";
      onClose();
    });
    if (!handled) onClose();
  };

  return (
    <nav className={`mobile-nav-a${open ? " open" : ""}`} aria-label={d.mobileNav.aria}>
      <div className="nav-items">
        {items.map((it, i) => (
          <a key={i} href={it.href} className="nav-item" onClick={onItemClick(it.scroll ?? it.href)}>
            <span className="num">{String(i + 1).padStart(2, "0")}</span>
            {it.label}
          </a>
        ))}
      </div>
      <div className="mobile-lang-switch" aria-label={d.mobileNav.languageAria}>
        {(['de', 'en', 'it'] as Lang[]).map((l) => (
          <button
            type="button"
            key={l}
            className={lang === l ? 'active' : ''}
            aria-pressed={lang === l}
            onClick={() => window.location.assign(routePath(switchLangPath(pathname, l)))}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>
      <a href={localizedHref('/reservierung/')} className="nav-cta" onClick={onItemClick('#reservieren')}>
        <span>{d.mobileNav.cta}</span>
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

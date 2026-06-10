"use client";

import type { MouseEvent, ReactNode } from 'react';

/**
 * Smooth-scrollt zu der Sektion, auf die der Hash im href zeigt, sofern sie
 * auf der aktuellen Seite existiert. Andernfalls (kein Hash oder Sektion nicht
 * vorhanden, z.B. von einer Unterseite) wird die normale Navigation zugelassen.
 * Gibt zurueck, ob smooth-gescrollt wurde (und damit preventDefault erfolgte).
 */
export function smoothScrollFromHref(
  e: MouseEvent<HTMLAnchorElement>,
  href: string,
  beforeScroll?: () => void
): boolean {
  // Modifier-/Mittelklick (z.B. Cmd-Klick, neuer Tab) nicht abfangen
  if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return false;
  const hashIndex = href.indexOf('#');
  if (hashIndex === -1) return false;
  const id = href.slice(hashIndex + 1);
  if (!id) return false;
  const el = document.getElementById(id);
  if (!el) return false;
  e.preventDefault();
  beforeScroll?.();
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  history.replaceState(null, '', `#${id}`);
  return true;
}

/** Click-Handler fuer Anchor mit Hash-href (liest den href direkt vom Element). */
export function onSmoothScrollClick(e: MouseEvent<HTMLAnchorElement>): void {
  smoothScrollFromHref(e, e.currentTarget.getAttribute('href') ?? '');
}

/** Klick-Handler fuer "Reservieren"-Buttons: scrollt zur #reservieren-Sektion,
 * falls sie auf der aktuellen Seite existiert, sonst folgt der Link seinem href
 * (i.d.R. die /reservierung/-Seite). */
export function onReserveClick(e: MouseEvent<HTMLAnchorElement>): void {
  smoothScrollFromHref(e, '#reservieren');
}

interface SmoothScrollLinkProps {
  targetId: string;
  className?: string;
  children: ReactNode;
}

export function SmoothScrollLink({ targetId, className, children }: SmoothScrollLinkProps) {
  return (
    <a className={className} href={`#${targetId}`} onClick={onSmoothScrollClick}>
      {children}
    </a>
  );
}

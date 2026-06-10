'use client';

// Sticky Reservierungs-CTA fuer Mobile. Immer sichtbarer Gold-Button am unteren
// Rand, der smooth zur #reservieren-Section scrollt. Sichtbarkeit nur via CSS auf
// Mobile (max-width 880px). Blendet sich aus, wenn das Mobile-Menue offen ist oder
// die Reservierungs-Section selbst schon im Viewport steht (kein Doppel-CTA).
import { useEffect, useState } from 'react';
import { useUI } from '@/components/UIProvider';
import { useDict } from '@/lib/i18n/LanguageProvider';

export function ReserveBar() {
  const d = useDict();
  const { mobileOpen } = useUI();
  const [atReservation, setAtReservation] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    const resEl = document.getElementById('reservieren');
    const heroEl = document.querySelector('.image-hero');
    const observers: IntersectionObserver[] = [];
    if (resEl) {
      const io = new IntersectionObserver(
        (entries) => setAtReservation(entries.some((e) => e.isIntersecting)),
        { rootMargin: '0px 0px -40% 0px' }
      );
      io.observe(resEl);
      observers.push(io);
    }
    if (heroEl) {
      const io = new IntersectionObserver(
        (entries) => setHeroVisible(entries.some((e) => e.isIntersecting)),
        { threshold: 0.2 }
      );
      io.observe(heroEl);
      observers.push(io);
    }
    return () => observers.forEach((io) => io.disconnect());
  }, []);

  const onClick = () => {
    document.getElementById('reservieren')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Sticky-CTA erst zeigen, wenn der Hero (mit eigenem Reservieren-Button)
  // rausgescrollt ist, und wieder ausblenden an der Reservierungs-Section.
  const hidden = mobileOpen || atReservation || heroVisible;

  return (
    <div className={`reserve-bar${hidden ? ' is-hidden' : ''}`} aria-hidden={hidden}>
      <button type="button" className="btn btn-solid reserve-bar-btn" onClick={onClick} tabIndex={hidden ? -1 : 0}>
        {d.common.actions.reserveTable}
      </button>
    </div>
  );
}

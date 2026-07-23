'use client';

import { useEffect, useRef, useState } from 'react';
import { FlagBar } from './Brand';
import { QuandooWidget } from '@/components/QuandooWidget';
import { useDict } from '@/lib/i18n/LanguageProvider';
import { SITE } from '@/lib/site';

export function Reservation() {
  const d = useDict();
  const cardRef = useRef<HTMLDivElement>(null);
  const [showWidget, setShowWidget] = useState(false);

  // Das Quandoo-Widget laedt ein externes Script + startet Resize/Mutation-Observer.
  // Erst mounten, wenn die Reservierungs-Karte in Viewport-Naehe kommt, damit der
  // initiale Seitenaufruf (LCP/FCP) nicht durch das Drittanbieter-Script belastet
  // wird. Auf der dedizierten /reservierung-Seite liegt die Karte oben -> der
  // Observer feuert sofort beim Mount, das Widget ist also direkt da.
  useEffect(() => {
    if (showWidget) return;
    const el = cardRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShowWidget(true);
          io.disconnect();
        }
      },
      { rootMargin: '500px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [showWidget]);

  return (
    <section className="reservation" id="reservieren" data-screen-label="06 Reservieren">
      <div className="wrap reservation-inner">
        <div>
          <div className="section-eyebrow">
            <span className="eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <FlagBar orientation="h" /> {d.home.reservation.eyebrow}
            </span>
          </div>
          <h2>{d.home.reservation.headingPre}<span className="it">{d.home.reservation.headingEm}</span>{d.home.reservation.headingPost}</h2>
          <p className="lede">
            {d.home.reservation.lede}
          </p>
          <div className="reservation-side-actions">
            <a className="btn btn-ghost" href={SITE.phoneHref}>{d.common.actions.call} · {SITE.phone}</a>
            <p className="reservation-hours muted">
              {d.common.hours.weekdays}
              <br />
              {d.common.hours.sunday}
            </p>
          </div>
        </div>
        <div className="reservation-card reservation-widget-card" ref={cardRef}>
          {!showWidget && (
            <div className="reservation-widget-skeleton" role="status" aria-live="polite">
              <span className="reservation-widget-skeleton-label">{d.common.actions.bookOnline}…</span>
              <a className="btn btn-primary" href={SITE.phoneHref}>{d.common.actions.call}</a>
            </div>
          )}
          {showWidget && <QuandooWidget />}
        </div>
      </div>
    </section>
  );
}

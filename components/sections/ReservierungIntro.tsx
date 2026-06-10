'use client';

import { useDict, usePageTitle } from '@/lib/i18n/LanguageProvider';
import { FlagBar } from './Brand';

export function ReservierungIntro() {
  usePageTitle('reservierung');
  const d = useDict();
  return (
    <div>
      <div className="section-eyebrow">
        <span className="eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
          <FlagBar orientation="h" /> {d.pages.reservierung.eyebrow}
        </span>
      </div>
      <h1>{d.pages.reservierung.h1Pre}<span className="it">{d.pages.reservierung.h1Em}</span></h1>
      <p className="lede">
        {d.pages.reservierung.lede}
      </p>
    </div>
  );
}

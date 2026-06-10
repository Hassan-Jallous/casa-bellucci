'use client';

import { useDict, usePageTitle } from '@/lib/i18n/LanguageProvider';
import { SITE } from '@/lib/site';

export function DankeBody() {
  usePageTitle('danke');
  const d = useDict();
  return (
    <div className="wrap legal-wrap">
      <p className="subpage-eyebrow">{d.pages.danke.eyebrow}</p>
      <h1>{d.pages.danke.h1}</h1>
      <article className="legal-content">
        <p>
          {d.pages.danke.p1}
        </p>
        <p>
          {d.pages.danke.p2}
        </p>
        <p>
          <strong>{d.pages.danke.findUs}</strong><br />
          <a href={SITE.mapsUrl} target="_blank" rel="noreferrer">
            {SITE.address.street}, {SITE.address.postalCity}
          </a>
        </p>
        <p>
          <strong>{d.pages.danke.hours}</strong><br />
          {d.common.hours.weekdays}<br />
          {d.common.hours.sunday}
        </p>
        <p>
          <a className="btn btn-primary" href={SITE.phoneHref}>{d.common.actions.call}</a>
        </p>
      </article>
    </div>
  );
}

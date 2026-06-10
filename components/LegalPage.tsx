'use client';

import { PageShell } from '@/components/PageShell';
import { useLang, usePageTitle } from '@/lib/i18n/LanguageProvider';
import { LEGAL, LEGAL_MODIFIED, type LegalSlug } from '@/lib/i18n/legal';

interface LegalPageProps {
  slug: LegalSlug;
  eyebrow: string;
}

// `modified` is an ISO string (e.g. "2024-05-01T10:00:00"). Render a stable
// DD.MM.YYYY without locale APIs so it never differs between build and client
// and never introduces dashes.
function formatModified(iso: string): string {
  const [date] = iso.split('T');
  const [y, m, d] = date.split('-');
  if (!y || !m || !d) return iso;
  return `${d}.${m}.${y}`;
}

export function LegalPage({ slug, eyebrow }: LegalPageProps) {
  usePageTitle(slug === 'impressum' ? 'impressum' : slug === 'datenschutz' ? 'datenschutz' : 'cookies');
  const { lang, d } = useLang();

  // Content is fully local now. Use the body for the active language; if an
  // EN/IT translation has empty html, fall back to the German body.
  const entry = LEGAL[lang][slug];
  const fallback = LEGAL.de[slug];
  const title = entry.html ? entry.title : fallback.title;
  const html = entry.html ? entry.html : fallback.html;

  return (
    <PageShell>
      <main className="subpage legal-page">
        <div className="wrap legal-wrap">
          <p className="subpage-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="subpage-meta">
            {d.legal.sourceLabel} {formatModified(LEGAL_MODIFIED[slug])}
          </p>
          {lang !== 'de' && (
            <p className="subpage-meta">{d.legal.binding}</p>
          )}
          <article
            className="legal-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </main>
    </PageShell>
  );
}

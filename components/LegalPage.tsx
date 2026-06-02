import { PageShell } from '@/components/PageShell';
import type { LegalPageContent } from '@/lib/wordpress';

interface LegalPageProps {
  page: LegalPageContent;
  eyebrow: string;
}

export function LegalPage({ page, eyebrow }: LegalPageProps) {
  return (
    <PageShell>
      <main className="subpage legal-page">
        <div className="wrap legal-wrap">
          <p className="subpage-eyebrow">{eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="subpage-meta">
            Quelle: casabellucci.de · Aktualisiert am{' '}
            {new Intl.DateTimeFormat('de-DE').format(new Date(page.modified))}
          </p>
          <article
            className="legal-content"
            dangerouslySetInnerHTML={{ __html: page.html }}
          />
        </div>
      </main>
    </PageShell>
  );
}

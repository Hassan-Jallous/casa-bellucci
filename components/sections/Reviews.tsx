'use client';

// Gaeste-Stimmen / Social Proof. Zeigt die echte Google-Gesamtbewertung
// (SITE.rating) plus kuratierte echte Rezensionen (lib/reviews.ts).
// Platziert kurz vor der Reservierungs-Section als Conversion-Anker.
import { SITE } from '@/lib/site';
import { REVIEWS } from '@/lib/reviews';
import { useDict } from '@/lib/i18n/LanguageProvider';
import { FlagBar } from './Brand';

function StarBar({ value, className = '' }: { value: number; className?: string }) {
  const pct = Math.max(0, Math.min(100, (value / 5) * 100));
  return (
    <span className={`rating-stars ${className}`.trim()} aria-hidden="true">
      <span className="rating-stars-bg">★★★★★</span>
      <span className="rating-stars-fg" style={{ width: `${pct}%` }}>★★★★★</span>
    </span>
  );
}

export function Reviews() {
  const d = useDict();
  const r = d.home.reviews;
  const { value, count, url, reviewsUrl, source } = SITE.rating;
  const ratingText = `${value.toFixed(1).replace('.', ',')} · ${count} ${r.ratingLabel} · ${source}`;

  return (
    <section className="reviews" id="bewertungen" data-screen-label="06 Gästestimmen">
      <div className="wrap">
        <div className="section-eyebrow">
          <span className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
            <FlagBar orientation="h" /> {r.eyebrow}
          </span>
        </div>
        <h2>{r.headingPre}<span className="it">{r.headingEm}</span>{r.headingPost}</h2>
        <p className="reviews-lede">{r.lede}</p>

        <a
          className="reviews-rating"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ratingText}
        >
          <span className="reviews-rating-value">{value.toFixed(1).replace('.', ',')}</span>
          <StarBar value={value} />
          <span className="reviews-rating-count">
            {count} {r.ratingLabel}
            <br />
            {source}
          </span>
        </a>

        <div className="reviews-grid">
          {REVIEWS.map((rev) => (
            <figure className="review-card" key={rev.author + rev.text.slice(0, 16)}>
              <StarBar value={rev.rating} className="rating-stars--sm" />
              <blockquote className="review-text">{rev.text}</blockquote>
              <a className="review-more" href={reviewsUrl} target="_blank" rel="noopener noreferrer">
                {r.showMore} →
              </a>
              <figcaption>{rev.author}</figcaption>
            </figure>
          ))}
        </div>

        <a className="btn btn-ghost reviews-cta" href={url} target="_blank" rel="noopener noreferrer">
          {r.ctaAll}
        </a>
      </div>
    </section>
  );
}

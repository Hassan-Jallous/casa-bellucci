'use client';

import { useDict } from '@/lib/i18n/LanguageProvider';
import { SITE } from '@/lib/site';
import { FlagBar } from './Brand';
import { GalleryFilmstrip } from '@/components/sections/GalleryFilmstrip';

export function Gallery() {
  const d = useDict();
  return (
    <section className="gallery" id="galerie" data-screen-label="05 Galerie">
      <div className="wrap">
        <div className="top">
          <div>
            <div className="section-eyebrow">
              <span className="eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                <FlagBar orientation="h" /> {d.home.gallery.eyebrow}
              </span>
            </div>
            <h2>{d.home.gallery.headingPre}<span className="it">{d.home.gallery.headingEm}</span>{d.home.gallery.headingPost}</h2>
            <p className="lede" style={{ marginTop: 14 }}>
              {d.home.gallery.lede}
            </p>
          </div>
          <a className="btn btn-ghost" href={SITE.instagram} target="_blank" rel="noreferrer">{d.home.gallery.instagram}</a>
        </div>
        <GalleryFilmstrip />
      </div>
    </section>
  );
}

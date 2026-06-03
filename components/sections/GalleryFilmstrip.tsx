"use client";

import { useUI } from '@/components/UIProvider';
import { asset } from '@/lib/assetPath';
import { GALLERY } from '@/lib/data';

export function GalleryFilmstrip() {
  const { openLightbox } = useUI();

  return (
    <div className="filmstrip-wrap">
      <div className="filmstrip-track">
        {GALLERY.map((g, i) => (
          <div key={i} className="filmstrip-frame" onClick={() => openLightbox(i)}>
            <img src={asset(g.src)} alt={g.alt} loading="lazy" />
            <span className="filmstrip-label">{g.caption}</span>
            <div className="filmstrip-number">{String(i + 1).padStart(2, '0')}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

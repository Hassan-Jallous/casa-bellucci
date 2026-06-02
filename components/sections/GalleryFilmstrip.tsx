"use client";

import { useUI } from '@/components/UIProvider';
import { asset } from '@/lib/assetPath';
import { GALLERY } from '@/lib/data';

export function GalleryFilmstrip() {
  const { openLightbox } = useUI();
  const captions = [
    "Aperitivo am Abend", "Pasta della Casa", "Unsere Sala",
    "Dolce Vita", "Feinste Antipasti", "Tisch für Zwei",
    "Frisch vom Meer", "Die Cantina",
  ];

  return (
    <div className="filmstrip-wrap">
      <div className="filmstrip-track">
        {GALLERY.map((g, i) => (
          <div key={i} className="filmstrip-frame" onClick={() => openLightbox(i)}>
            <img src={asset(g.src)} alt={captions[i]} loading="lazy" />
            <span className="filmstrip-label">{captions[i]}</span>
            <div className="filmstrip-number">{String(i + 1).padStart(2, '0')}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useEffect } from 'react';
import { useUI } from '@/components/UIProvider';
import { asset } from '@/lib/assetPath';
import { GALLERY } from '@/lib/data';
import { useDict } from '@/lib/i18n/LanguageProvider';

export function Lightbox() {
  const { lightbox, closeLightbox, prevImage, nextImage } = useUI();
  const d = useDict();
  const { open, idx } = lightbox;
  const onClose = closeLightbox;
  const onPrev = prevImage;
  const onNext = nextImage;
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, onPrev, onNext]);
  return (
    <div className={`lightbox${open ? " open" : ""}`} onClick={onClose}>
      <button className="close" onClick={onClose}>✕</button>
      <button className="nav prev" onClick={(e) => { e.stopPropagation(); onPrev(); }}>‹</button>
      <button className="nav next" onClick={(e) => { e.stopPropagation(); onNext(); }}>›</button>
      {open && <img src={asset(GALLERY[idx].src)} alt={d.data.gallery[idx].alt} onClick={(e) => e.stopPropagation()} />}
    </div>
  );
}

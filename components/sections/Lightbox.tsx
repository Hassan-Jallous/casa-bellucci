"use client";

import { useEffect } from 'react';
import { useUI } from '@/components/UIProvider';
import { asset } from '@/lib/assetPath';
import { GALLERY } from '@/lib/data';
import { useDict, useLang } from '@/lib/i18n/LanguageProvider';

const PREV_LABEL = { de: 'Vorheriges Bild', en: 'Previous image', it: 'Immagine precedente' } as const;
const NEXT_LABEL = { de: 'Nächstes Bild', en: 'Next image', it: 'Immagine successiva' } as const;

export function Lightbox() {
  const { lightbox, closeLightbox, prevImage, nextImage } = useUI();
  const d = useDict();
  const { lang } = useLang();
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
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose, onPrev, onNext]);
  return (
    <div
      className={`lightbox${open ? " open" : ""}`}
      onClick={onClose}
      role={open ? "dialog" : undefined}
      aria-modal={open ? true : undefined}
      aria-label={open ? d.data.gallery[idx]?.alt : undefined}
      aria-hidden={!open}
    >
      <button type="button" className="close" onClick={onClose} aria-label={d.home.menu.close}>
        ✕
      </button>
      <button type="button" className="nav prev" onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label={PREV_LABEL[lang]}>‹</button>
      <button type="button" className="nav next" onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label={NEXT_LABEL[lang]}>›</button>
      {open && (
        <img
          src={asset(GALLERY[idx].src)}
          alt={d.data.gallery[idx].alt}
          width={1100}
          height={1467}
          decoding="async"
          onClick={(e) => e.stopPropagation()}
        />
      )}
    </div>
  );
}

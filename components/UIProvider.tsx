"use client";

import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { GALLERY } from '@/lib/data';

interface LightboxState {
  open: boolean;
  idx: number;
}

interface UIContextValue {
  mobileOpen: boolean;
  toggleMobile: () => void;
  closeMobile: () => void;
  lightbox: LightboxState;
  openLightbox: (i: number) => void;
  closeLightbox: () => void;
  prevImage: () => void;
  nextImage: () => void;
}

const UIContext = createContext<UIContextValue | null>(null);

export function UIProvider({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lightbox, setLightbox] = useState<LightboxState>({ open: false, idx: 0 });

  const toggleMobile = useCallback(() => setMobileOpen((v) => !v), []);
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const openLightbox = useCallback((i: number) => setLightbox({ open: true, idx: i }), []);
  const closeLightbox = useCallback(() => setLightbox((s) => ({ ...s, open: false })), []);
  const prevImage = useCallback(
    () => setLightbox((s) => ({ ...s, idx: (s.idx - 1 + GALLERY.length) % GALLERY.length })),
    []
  );
  const nextImage = useCallback(
    () => setLightbox((s) => ({ ...s, idx: (s.idx + 1) % GALLERY.length })),
    []
  );

  const value = useMemo<UIContextValue>(
    () => ({
      mobileOpen,
      toggleMobile,
      closeMobile,
      lightbox,
      openLightbox,
      closeLightbox,
      prevImage,
      nextImage,
    }),
    [mobileOpen, toggleMobile, closeMobile, lightbox, openLightbox, closeLightbox, prevImage, nextImage]
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI(): UIContextValue {
  const ctx = useContext(UIContext);
  if (ctx === null) {
    throw new Error("useUI must be used within a UIProvider");
  }
  return ctx;
}

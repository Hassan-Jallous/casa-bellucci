"use client";

import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { GALLERY } from '@/lib/data';
import { useMenuViewer } from '@/components/sections/MenuViewer';

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
  // Karten-Popup, geteilt zwischen Hero-CTA und MenuSection auf der Homepage.
  menuActive: string | null;
  menuOpen: boolean;
  openMenu: (key: string) => void;
  closeMenu: () => void;
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

  // Karten-Popup-Logik (Escape, Scroll-Lock, Fokus-Rueckgabe) liegt im
  // useMenuViewer-Hook. Hier gehoben, damit Hero-CTA und MenuSection dieselbe
  // Instanz teilen. activeMenu/isOpen werden als menuActive/menuOpen exponiert.
  const { activeMenu: menuActive, isOpen: menuOpen, openMenu, closeMenu } = useMenuViewer();

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
      menuActive,
      menuOpen,
      openMenu,
      closeMenu,
    }),
    [mobileOpen, toggleMobile, closeMobile, lightbox, openLightbox, closeLightbox, prevImage, nextImage, menuActive, menuOpen, openMenu, closeMenu]
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

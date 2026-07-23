'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { asset } from '@/lib/assetPath';

export interface MenuTab {
  key: string;
  label: string;
  pdf: string;
}

export interface MenuViewerLabels {
  laCarta: string;
  close: string;
  openNewTab: string;
  resetZoom: string;
  iframeTitlePrefix: string;
  /** Optional: CTA unter der Karte (z.B. „Tisch reservieren“). */
  reserve?: string;
}

interface MenuViewerProps {
  menus: MenuTab[];
  activeMenu: string | null;
  isOpen: boolean;
  onSelect: (key: string) => void;
  onClose: () => void;
  labels: MenuViewerLabels;
  // false -> nur die aktive Karte als statisches Label, kein Tab-Wechsler
  showTabs?: boolean;
  /** Wird nach Schliessen des Viewers gerufen (scroll zu #reservieren o.ä.). */
  onReserve?: () => void;
}

// Geteilte Open/Close-Logik fuer das Karten-Popup. activeMenu bleibt waehrend der
// Schliess-Animation gemountet, isOpen steuert die Enter/Exit-Transition. Kapselt
// zusaetzlich Escape-Taste und Body-Scroll-Lock, damit jede Sektion das Popup
// konsistent oeffnen kann, ohne die Logik zu duplizieren.
export function useMenuViewer() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const openMenu = useCallback((key: string) => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
    returnFocusRef.current = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    setActiveMenu(key);
    setIsOpen(true);
  }, []);
  const closeMenu = useCallback(() => {
    setIsOpen(false);
    closeTimer.current = setTimeout(() => {
      setActiveMenu(null);
      closeTimer.current = null;
      const target = returnFocusRef.current;
      returnFocusRef.current = null;
      if (target && document.contains(target)) {
        target.focus({ preventScroll: true });
      }
    }, 380);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeMenu(); };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, closeMenu]);

  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);

  return { activeMenu, isOpen, openMenu, closeMenu };
}

export function MenuViewer({
  menus,
  onReserve,
  activeMenu,
  isOpen,
  onSelect,
  onClose,
  labels,
  showTabs = true,
}: MenuViewerProps) {
  const current = menus.find((m) => m.key === activeMenu);
  const titleId = useId();
  const cardRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const pagesRef = useRef<HTMLDivElement>(null);
  const zoomRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<{ reset: () => void } | null>(null);
  // Gerenderte Seiten samt pdf.js-Page-Objekt, damit der Gesten-Effect sie beim
  // Zoom in hoeherer Aufloesung neu rastern kann (sonst skaliert CSS die Bitmap
  // hoch und der Text wird beim Reinzoomen weich).
  const pagesDataRef = useRef<{
    cssWidth: number;
    deviceDpr: number;
    supersample: number;
    baseMaxW: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    items: Array<{ page: any; canvas: HTMLCanvasElement }>;
  } | null>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (!isOpen || !current) return;
    closeButtonRef.current?.focus({ preventScroll: true });

    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;
      const card = cardRef.current;
      if (!card) return;
      const focusables = Array.from(
        card.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.hasAttribute('disabled') && el.tabIndex !== -1);
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;
      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, current]);

  // PDF-Render via pdf.js: rendert ALLE Seiten als fit-to-width Canvases in einen
  // scrollbaren Container. Loest die iframe-PDF-Probleme auf Mobile (nur erste
  // Seite, reingezoomt, kein Scroll). Wird nur clientseitig beim Oeffnen geladen.
  useEffect(() => {
    if (!isOpen || !current?.pdf) return;
    const measureEl = pagesRef.current;
    const container = zoomRef.current;
    if (!measureEl || !container) return;

    let cancelled = false;
    let loadingTask: { promise: Promise<unknown>; destroy: () => void } | null = null;
    setStatus('loading');
    container.replaceChildren();

    (async () => {
      try {
        const pdfjs = await import('pdfjs-dist');
        pdfjs.GlobalWorkerOptions.workerSrc = asset('pdf.worker.min.mjs');
        loadingTask = pdfjs.getDocument({ url: current.pdf });
        const pdf = await (loadingTask!.promise as Promise<{ numPages: number; getPage: (n: number) => Promise<unknown> }>);
        if (cancelled) return;

        // Supersampling fuer gestochen scharfen Text: die Bitmap wird deutlich
        // hoeher gerendert als angezeigt, sonst wirken feine Serifen (Playfair)
        // weich und der Pinch-Zoom franst aus. Harte Pixelgrenze pro Seite gegen
        // Speicher-/iOS-Canvas-Limits, auf Touch strenger als auf Desktop.
        const deviceDpr = window.devicePixelRatio || 1;
        const isTouch = window.matchMedia('(pointer: coarse)').matches;
        const supersample = isTouch ? 2.4 : 2;
        const maxBitmapW = isTouch ? 2048 : 3000;
        const cssWidth = Math.min(measureEl.clientWidth || 600, 900);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const items: Array<{ page: any; canvas: HTMLCanvasElement }> = [];

        for (let n = 1; n <= pdf.numPages; n++) {
          if (cancelled) return;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const page: any = await pdf.getPage(n);
          const base = page.getViewport({ scale: 1 });
          let renderScale = (cssWidth / base.width) * deviceDpr * supersample;
          const projectedW = base.width * renderScale;
          if (projectedW > maxBitmapW) renderScale *= maxBitmapW / projectedW;
          const vp = page.getViewport({ scale: renderScale });
          const canvas = document.createElement('canvas');
          canvas.width = Math.floor(vp.width);
          canvas.height = Math.floor(vp.height);
          canvas.style.width = '100%';
          canvas.style.height = 'auto';
          canvas.className = 'menu-viewer-page';
          const ctx = canvas.getContext('2d');
          if (!ctx) continue;
          await page.render({ canvasContext: ctx, viewport: vp, canvas }).promise;
          if (cancelled) return;
          container.appendChild(canvas);
          items.push({ page, canvas });
        }
        if (!cancelled) {
          pagesDataRef.current = { cssWidth, deviceDpr, supersample, baseMaxW: maxBitmapW, items };
          setStatus('ready');
        }
      } catch {
        if (!cancelled) setStatus('error');
      }
    })();

    return () => {
      cancelled = true;
      try { loadingTask?.destroy(); } catch { /* noop */ }
      container.replaceChildren();
      pagesDataRef.current = null;
    };
  }, [isOpen, current?.pdf]);

  // Touch-Gesten fuer das PDF: Pinch-Zoom, Ein-Finger-Pan mit Schwung und
  // Doppeltipp zum Ein-/Auszoomen. Nur auf Touch-Geraeten aktiv, der Desktop
  // behaelt natives vertikales Scrollen durch die Seiten.
  useEffect(() => {
    if (!isOpen || !current?.pdf) return;
    const viewport = pagesRef.current;
    const zoom = zoomRef.current;
    if (!viewport || !zoom) return;
    if (typeof window === 'undefined') return;
    // Aktiv auf allen Eingabearten: Touch (Pinch) und Desktop (Maus/Trackpad).
    const isTouch = window.matchMedia('(pointer: coarse)').matches;

    viewport.classList.add('is-gesture');

    const MIN = 1;
    const MAX = 4;
    let scale = 1;
    let tx = 0;
    let ty = 0;
    let zoomedFlag = false;

    const pointers = new Map<number, { x: number; y: number }>();
    let startDist = 0;
    let startScale = 1;
    let startTx = 0;
    let startTy = 0;
    let startMid = { x: 0, y: 0 };
    let panLast = { x: 0, y: 0 };
    let vx = 0;
    let vy = 0;
    let lastT = 0;
    let downTime = 0;
    let downPos = { x: 0, y: 0 };
    let moved = false;
    let lastTap = 0;
    let raf = 0;
    let inertia = 0;
    let sharpenTimer = 0;
    let sharpenToken = 0;
    // Beim Zoom in hoeherer Aufloesung neu rastern. Pixelgrenze pro Seite: auf
    // Touch unter dem iOS-Canvas-Limit (~16 MP fuer A4), auf Desktop hoeher
    // (mehr RAM, kein hartes Canvas-Limit). Nur sichtbare Seiten betroffen.
    const SHARPEN_CAP = isTouch ? 3200 : 4096;
    const QUALITY_ZOOM = 1.5;

    const setZoomed = (z: boolean) => {
      if (z !== zoomedFlag) { zoomedFlag = z; setIsZoomed(z); }
    };
    const apply = (animate = false) => {
      zoom.style.transition = animate ? 'transform 0.32s cubic-bezier(0.16,1,0.3,1)' : 'none';
      zoom.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${scale})`;
      setZoomed(scale > 1.01);
    };
    const schedule = () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; apply(); }); };

    const clamp = () => {
      const vw = viewport.clientWidth;
      const vh = viewport.clientHeight;
      const cw = zoom.offsetWidth * scale;
      const ch = zoom.offsetHeight * scale;
      if (cw <= vw) tx = (vw - cw) / 2;
      else tx = Math.min(0, Math.max(vw - cw, tx));
      if (ch <= vh) ty = 0;
      else ty = Math.min(0, Math.max(vh - ch, ty));
    };

    const stopInertia = () => { if (inertia) { cancelAnimationFrame(inertia); inertia = 0; } };
    const startInertia = () => {
      stopInertia();
      const step = () => {
        vx *= 0.94; vy *= 0.94;
        if (Math.hypot(vx, vy) < 0.03) { inertia = 0; scheduleSharpen(scale); return; }
        const px = tx, py = ty;
        tx += vx * 16; ty += vy * 16;
        clamp();
        if (tx !== px + vx * 16) vx = 0;
        if (ty !== py + vy * 16) vy = 0;
        apply();
        inertia = requestAnimationFrame(step);
      };
      inertia = requestAnimationFrame(step);
    };

    const localMid = (a: { x: number; y: number }, b: { x: number; y: number }) => {
      const r = viewport.getBoundingClientRect();
      return { x: (a.x + b.x) / 2 - r.left, y: (a.y + b.y) / 2 - r.top };
    };
    const toggleZoom = (clientX: number, clientY: number) => {
      const r = viewport.getBoundingClientRect();
      const px = clientX - r.left;
      const py = clientY - r.top;
      if (scale > 1.01) {
        scale = 1; tx = 0; ty = 0;
      } else {
        const target = 2.5;
        const cx = (px - tx) / scale;
        const cy = (py - ty) / scale;
        scale = target;
        tx = px - cx * scale;
        ty = py - cy * scale;
      }
      clamp();
      apply(true);
    };

    // Sichtbare Seiten beim aktuellen Zoom neu rastern (gegen Hochskalier-
    // Unschaerfe). Rendert in einen Offscreen-Canvas und blittet ihn dann ohne
    // Weiss-Flash auf die sichtbare Flaeche. Nicht-sichtbare Seiten fallen auf
    // die Basis-Aufloesung zurueck, damit der Speicher nicht akkumuliert.
    const sharpenVisible = async (zoomScale: number) => {
      const data = pagesDataRef.current;
      if (!data) return;
      const token = ++sharpenToken;
      const vr = viewport.getBoundingClientRect();
      for (const item of data.items) {
        if (token !== sharpenToken) return;
        const cr = item.canvas.getBoundingClientRect();
        const visible = cr.bottom > vr.top - 40 && cr.top < vr.bottom + 40;
        const hi = visible && zoomScale > 1.2;
        const base = item.page.getViewport({ scale: 1 });
        const targetFactor = hi
          ? data.deviceDpr * zoomScale * QUALITY_ZOOM
          : data.deviceDpr * data.supersample;
        const cap = hi ? SHARPEN_CAP : data.baseMaxW;
        let renderScale = (data.cssWidth / base.width) * targetFactor;
        const projW = base.width * renderScale;
        if (projW > cap) renderScale *= cap / projW;
        const targetW = Math.floor(base.width * renderScale);
        if (Math.abs(item.canvas.width - targetW) <= targetW * 0.08) continue;
        const vp = item.page.getViewport({ scale: renderScale });
        const off = document.createElement('canvas');
        off.width = Math.floor(vp.width);
        off.height = Math.floor(vp.height);
        const octx = off.getContext('2d');
        if (!octx) continue;
        try {
          await item.page.render({ canvasContext: octx, viewport: vp, canvas: off }).promise;
        } catch { continue; }
        if (token !== sharpenToken) return;
        item.canvas.width = off.width;
        item.canvas.height = off.height;
        item.canvas.getContext('2d')?.drawImage(off, 0, 0);
      }
    };
    const scheduleSharpen = (zoomScale: number) => {
      if (sharpenTimer) clearTimeout(sharpenTimer);
      sharpenTimer = window.setTimeout(() => { sharpenTimer = 0; sharpenVisible(zoomScale); }, 160);
    };

    const onDown = (e: PointerEvent) => {
      stopInertia();
      try { viewport.setPointerCapture(e.pointerId); } catch { /* noop */ }
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        startDist = Math.hypot(a.x - b.x, a.y - b.y) || 1;
        startScale = scale;
        startTx = tx; startTy = ty;
        startMid = localMid(a, b);
      } else if (pointers.size === 1) {
        panLast = { x: e.clientX, y: e.clientY };
        downTime = e.timeStamp;
        downPos = { x: e.clientX, y: e.clientY };
        moved = false;
        vx = 0; vy = 0; lastT = e.timeStamp;
      }
    };
    const onMove = (e: PointerEvent) => {
      if (!pointers.has(e.pointerId)) return;
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size >= 2) {
        const [a, b] = [...pointers.values()];
        const dist = Math.hypot(a.x - b.x, a.y - b.y) || 1;
        let next = startScale * (dist / startDist);
        next = Math.min(MAX, Math.max(MIN, next));
        const cx = (startMid.x - startTx) / startScale;
        const cy = (startMid.y - startTy) / startScale;
        const mid = localMid(a, b);
        scale = next;
        tx = mid.x - cx * scale;
        ty = mid.y - cy * scale;
        clamp();
        schedule();
      } else if (pointers.size === 1) {
        const dx = e.clientX - panLast.x;
        const dy = e.clientY - panLast.y;
        if (Math.abs(e.clientX - downPos.x) > 8 || Math.abs(e.clientY - downPos.y) > 8) moved = true;
        tx += dx; ty += dy;
        const dt = (e.timeStamp - lastT) || 16;
        vx = dx / dt; vy = dy / dt;
        lastT = e.timeStamp;
        panLast = { x: e.clientX, y: e.clientY };
        clamp();
        schedule();
      }
    };
    const onUp = (e: PointerEvent) => {
      if (!pointers.has(e.pointerId)) return;
      const wasSingle = pointers.size === 1;
      pointers.delete(e.pointerId);
      try { viewport.releasePointerCapture(e.pointerId); } catch { /* noop */ }
      if (pointers.size === 1) {
        const p = [...pointers.values()][0];
        panLast = { x: p.x, y: p.y };
        downPos = { x: p.x, y: p.y };
        moved = true;
      } else if (pointers.size === 0) {
        if (wasSingle && !moved && (e.timeStamp - downTime) < 250) {
          if (e.timeStamp - lastTap < 300) { toggleZoom(e.clientX, e.clientY); lastTap = 0; }
          else { lastTap = e.timeStamp; }
        } else if (wasSingle && moved) {
          startInertia();
        }
        // Nach jeder Geste die sichtbaren Seiten scharf nachrastern.
        scheduleSharpen(scale);
      }
    };
    const onCancel = (e: PointerEvent) => {
      pointers.delete(e.pointerId);
      try { viewport.releasePointerCapture(e.pointerId); } catch { /* noop */ }
    };
    // Desktop: Strg/Cmd+Wheel und Trackpad-Pinch (kommt als wheel mit ctrlKey)
    // zoomen am Cursor, normales Wheel pannt/scrollt durch die Seiten.
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      stopInertia();
      if (e.ctrlKey || e.metaKey) {
        const r = viewport.getBoundingClientRect();
        const px = e.clientX - r.left;
        const py = e.clientY - r.top;
        const cx = (px - tx) / scale;
        const cy = (py - ty) / scale;
        scale = Math.min(MAX, Math.max(MIN, scale * Math.exp(-e.deltaY * 0.0025)));
        tx = px - cx * scale;
        ty = py - cy * scale;
      } else {
        tx -= e.deltaX;
        ty -= e.deltaY;
      }
      clamp();
      schedule();
      scheduleSharpen(scale);
    };

    viewport.addEventListener('pointerdown', onDown);
    viewport.addEventListener('pointermove', onMove);
    viewport.addEventListener('pointerup', onUp);
    viewport.addEventListener('pointercancel', onCancel);
    viewport.addEventListener('wheel', onWheel, { passive: false });

    controlsRef.current = { reset: () => { scale = 1; tx = 0; ty = 0; apply(true); scheduleSharpen(1); } };
    apply();

    return () => {
      stopInertia();
      if (raf) cancelAnimationFrame(raf);
      if (sharpenTimer) clearTimeout(sharpenTimer);
      sharpenToken++;
      viewport.removeEventListener('pointerdown', onDown);
      viewport.removeEventListener('pointermove', onMove);
      viewport.removeEventListener('pointerup', onUp);
      viewport.removeEventListener('pointercancel', onCancel);
      viewport.removeEventListener('wheel', onWheel);
      viewport.classList.remove('is-gesture');
      zoom.style.transform = '';
      zoom.style.transition = '';
      controlsRef.current = null;
      setIsZoomed(false);
    };
  }, [isOpen, current?.pdf]);

  return (
    <div
      className={`menu-viewer${isOpen ? ' open' : ''}`}
      onClick={onClose}
      aria-hidden={!isOpen}
    >
      {current && (
        <div
          ref={cardRef}
          className="menu-viewer-card"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={(e) => e.stopPropagation()}
        >
          <header className="menu-viewer-head">
            <span className="menu-viewer-eyebrow">{labels.laCarta}</span>
            <h2 id={titleId} className="sr-only">{labels.laCarta} {current.label}</h2>
            <div className="menu-viewer-tabs" role={showTabs ? 'tablist' : undefined}>
              {showTabs ? (
                menus.map((m) => (
                  <button
                    type="button"
                    key={m.key}
                    role="tab"
                    aria-selected={m.key === activeMenu}
                    className={`menu-viewer-tab${m.key === activeMenu ? ' is-active' : ''}`}
                    onClick={() => onSelect(m.key)}
                  >
                    {m.label}
                  </button>
                ))
              ) : (
                <span className="menu-viewer-tab is-active">{current.label}</span>
              )}
            </div>
            <button ref={closeButtonRef} className="menu-viewer-close" type="button" onClick={onClose} aria-label={labels.close}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </header>
          <div className="menu-viewer-frame menu-viewer-pdf">
            <div ref={pagesRef} className="menu-viewer-pages" aria-busy={status === 'loading'}>
              <div ref={zoomRef} className="menu-viewer-zoom" />
            </div>
            {status === 'loading' && (
              <div className="menu-viewer-pdf-status" role="status">
                <span className="menu-viewer-spinner" aria-hidden="true" />
              </div>
            )}
            {status === 'error' && (
              <div className="menu-viewer-pdf-status">
                <a href={current.pdf} target="_blank" rel="noreferrer">{labels.openNewTab}</a>
              </div>
            )}
            {isZoomed && (
              <button
                type="button"
                className="menu-viewer-zoom-reset"
                onClick={() => controlsRef.current?.reset()}
                aria-label={labels.resetZoom}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <circle cx="8.5" cy="8.5" r="5.6" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M6 8.5h5M12.6 12.6l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </div>
          <div className="menu-viewer-fallback">
            <a href={current.pdf} target="_blank" rel="noreferrer">{labels.openNewTab}</a>
            {labels.reserve && onReserve && (
              <button
                type="button"
                className="btn btn-solid menu-viewer-reserve"
                onClick={() => {
                  onClose();
                  // Nach der Close-Animation zur Reservierung springen.
                  window.setTimeout(() => onReserve(), 400);
                }}
              >
                {labels.reserve}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

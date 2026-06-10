'use client';

import { useEffect, useState } from 'react';
import { asset } from '@/lib/assetPath';

export type MenuKey = 'fruehstueck' | 'lunch' | 'dinner' | 'weine';
const KEYS: MenuKey[] = ['fruehstueck', 'lunch', 'dinner', 'weine'];
const API_BASE = process.env.NEXT_PUBLIC_MENU_API_BASE ?? '';

// Statischer Fallback = bestehende public/menus-Pfade (basePath-aware via asset()).
function staticUrls(): Record<MenuKey, string> {
  return {
    fruehstueck: asset('menus/fruehstueck.pdf'),
    lunch: asset('menus/lunch.pdf'),
    dinner: asset('menus/dinner.pdf'),
    weine: asset('menus/weine.pdf'),
  };
}

// Loest eine einzelne Backend-URL zu einer fertig nutzbaren URL auf.
// - beginnt sie mit 'http' -> direkt nehmen (absolute URL)
// - beginnt sie mit '/' -> API_BASE voranstellen (PDF liegt auf dem PHP-Server)
// - sonst -> ungueltig, null zurueck (Fallback bleibt erhalten)
function resolveUrl(url: unknown): string | null {
  if (typeof url !== 'string') return null;
  const trimmed = url.trim();
  if (!trimmed) return null;
  if (trimmed.startsWith('http')) return trimmed;
  if (trimmed.startsWith('/')) return `${API_BASE}${trimmed}`;
  return null;
}

/**
 * Liefert fertig aufgeloeste Menue-PDF-URLs. Initial der statische Fallback,
 * nach erfolgreichem Fetch vom PHP-Backend die cache-bustenden Backend-URLs.
 * Konsumenten verwenden die Werte DIREKT, ohne nochmal asset() darueberzulegen.
 */
export function useMenuUrls(): Record<MenuKey, string> {
  const [urls, setUrls] = useState<Record<MenuKey, string>>(staticUrls);

  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    let active = true;

    (async () => {
      try {
        const res = await fetch(`${API_BASE}/api/menu-urls.php`, {
          signal: controller.signal,
        });
        if (!res.ok) return;
        const data: unknown = await res.json();
        if (!data || typeof data !== 'object' || Array.isArray(data)) return;

        const record = data as Record<string, unknown>;
        const next = staticUrls();
        let changed = false;
        for (const key of KEYS) {
          const resolved = resolveUrl(record[key]);
          if (resolved) {
            next[key] = resolved;
            changed = true;
          }
        }
        if (active && changed) setUrls(next);
      } catch {
        // Still beim Fallback bleiben (kein throw, keine Konsole-Errors).
      }
    })();

    return () => {
      active = false;
      clearTimeout(timeout);
      controller.abort();
    };
  }, []);

  return urls;
}

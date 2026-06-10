'use client';

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import type { ReactNode } from 'react';
import { type Lang } from './config';
import { DICTS, type Dict } from './dictionaries';
import { routePath } from '@/lib/routes';
import { localizedPath } from './localize';

interface LanguageContextValue {
  lang: Lang;
  d: Dict;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  initialLang,
  children,
}: {
  initialLang: Lang;
  children: ReactNode;
}) {
  // The language is fixed per route (set at build time). There is no runtime
  // auto-switch anymore; switching languages happens by navigating to a
  // language-prefixed URL ('/en/...', '/it/...').
  const [lang] = useState<Lang>(initialLang);

  const d = useMemo(() => DICTS[lang], [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, d }),
    [lang, d]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (ctx === null) {
    throw new Error('useLang must be used within a LanguageProvider');
  }
  return ctx;
}

export function useDict(): Dict {
  return useLang().d;
}

// Sets document.title per language from the `meta` namespace. Defensive: it
// guards with optional chaining and a typeof check and never throws when the
// key or title is absent. Page client-roots can call this to keep the tab title
// in sync with the active language.
export function usePageTitle(metaKey: keyof Dict['meta']): void {
  const { lang } = useLang();
  useEffect(() => {
    const meta = DICTS[lang].meta as Record<string, { title?: unknown } | undefined>;
    const title = meta?.[metaKey as string]?.title;
    if (typeof title !== 'string' || title.length === 0) return;

    const apply = () => {
      if (document.title !== title) document.title = title;
    };
    apply();

    // Next renders a static <title> from the page metadata (German, the SEO
    // default). On a fresh load it can re-assert that title after this effect
    // runs, which would leave a non-German visitor on the German tab title.
    // Keep the tab title locked to the active language while this page is
    // mounted; the observer only fires when something else mutates <title>,
    // and apply() is a no-op when it already matches, so there is no loop.
    const titleEl = document.querySelector('title');
    if (!titleEl) return;
    const observer = new MutationObserver(apply);
    observer.observe(titleEl, { childList: true, characterData: true, subtree: true });
    return () => observer.disconnect();
  }, [lang, metaKey]);
}

// Lang-aware interne Links: prefixt app-relative Pfade mit dem aktiven
// Sprach-Segment und macht sie basePath-aware. Absolute Protokoll-Pfade
// (http(s)/mailto/tel) bleiben unverändert (nur basePath-aware via routePath).
export function useLocalizedHref(): (path: string) => string {
  const { lang } = useLang();
  return (path: string) => {
    if (/^(https?:|mailto:|tel:)/.test(path)) return routePath(path);
    return routePath(localizedPath(path, lang));
  };
}

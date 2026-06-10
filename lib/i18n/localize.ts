import type { Lang } from './config';

export const OG_LOCALE: Record<Lang, string> = { de: 'de_DE', en: 'en_GB', it: 'it_IT' };
export const IN_LANGUAGE: Record<Lang, string> = { de: 'de-DE', en: 'en-GB', it: 'it-IT' };

// App-relativen Pfad (beginnt mit '/') mit Sprach-Segment prefixen.
// Deutsch (x-default) bleibt ohne Prefix; EN/IT bekommen '/en'/'/it'.
export function localizedPath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === 'de' ? clean : `/${lang}${clean}`;
}

// App-relativen Pfad (ggf. mit /en oder /it Prefix) in die Zielsprache überführen (gleiche Seite).
export function switchLangPath(pathname: string, target: Lang): string {
  const stripped = pathname.replace(/^\/(en|it)(?=\/|$)/, '') || '/';
  return localizedPath(stripped, target);
}

// Aktive Sprache aus einem app-relativen Pfad lesen.
export function langFromPathname(pathname: string): Lang {
  if (pathname === '/en' || pathname.startsWith('/en/')) return 'en';
  if (pathname === '/it' || pathname.startsWith('/it/')) return 'it';
  return 'de';
}

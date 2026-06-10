export type Lang = 'de' | 'en' | 'it';
export const LANGS: Lang[] = ['de', 'en', 'it'];
export const DEFAULT_LANG: Lang = 'de';
export const STORAGE_KEY = 'cb-lang';
// Single canonical rule. The inline cloak script in layout.tsx duplicates these
// exact checks as a string (it cannot import). Keep them identical.
export function resolveLang(_navLang: string | undefined | null, stored: string | null): Lang {
  if (stored === 'de' || stored === 'en' || stored === 'it') return stored;
  return DEFAULT_LANG;
}

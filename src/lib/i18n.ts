import { translations, type Locale, type TranslationTree } from '@/i18n/translations';

export type { Locale, TranslationTree };

export const defaultLocale: Locale = 'de';
export const locales: Locale[] = ['de', 'en', 'it'];

type NestedKeyOf<T> = T extends string
  ? ''
  : {
      [K in keyof T & string]: T[K] extends string
        ? K
        : `${K}.${NestedKeyOf<T[K]>}`;
    }[keyof T & string];

export type TranslationKey = NestedKeyOf<TranslationTree>;

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split('.');
  let current: unknown = obj;

  for (const key of keys) {
    if (current === null || current === undefined || typeof current !== 'object') {
      return path;
    }
    current = (current as Record<string, unknown>)[key];
  }

  return typeof current === 'string' ? current : path;
}

export function getTranslation(locale: Locale, key: TranslationKey): string {
  const tree = translations[locale];
  return getNestedValue(tree as unknown as Record<string, unknown>, key);
}

export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  const first = segments[0] as Locale | undefined;

  if (first && locales.includes(first)) {
    return first;
  }

  return defaultLocale;
}

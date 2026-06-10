// Legal page bodies (title + html) keyed by language and logical slug. All
// three languages live in the repo so the build does not depend on the old
// WordPress source at casabellucci.de. German is the legally binding version;
// EN/IT are operational translations and fall back to German if `html` is empty.
import { de, LEGAL_MODIFIED } from './de';
import { en } from './en';
import { it } from './it';

export type LegalSlug = 'impressum' | 'datenschutz' | 'cookies';
export type LegalLang = 'de' | 'en' | 'it';

export interface LegalEntry {
  title: string;
  html: string;
}

export const LEGAL: Record<LegalLang, Record<LegalSlug, LegalEntry>> = {
  de,
  en,
  it,
};

export { LEGAL_MODIFIED };

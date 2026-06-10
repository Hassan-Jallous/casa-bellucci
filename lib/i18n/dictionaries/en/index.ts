import { common } from './common';
import { header } from './header';
import { mobileNav } from './mobileNav';
import { footer } from './footer';
import { home } from './home';
import { landingBar } from './landingBar';
import { landingFruehstueck } from './landingFruehstueck';
import { landingItalienisch } from './landingItalienisch';
import { landingTerrasse } from './landingTerrasse';
import { landingLunch } from './landingLunch';
import { landingEvents } from './landingEvents';
import { pages } from './pages';
import { legal } from './legal';
import { data } from './data';
import { meta } from './meta';
import type { Dict } from '../de';

// The `: Dict` annotation enforces completeness: once these slices carry real
// English content, any missing/extra key or wrong array length fails to compile.
export const en: Dict = {
  common,
  header,
  mobileNav,
  footer,
  home,
  landingBar,
  landingFruehstueck,
  landingItalienisch,
  landingTerrasse,
  landingLunch,
  landingEvents,
  pages,
  legal,
  data,
  meta,
};

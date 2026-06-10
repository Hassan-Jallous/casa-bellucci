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

export const de = {
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
} as const;

import type { Widen } from '../widen';

// The single source-of-truth shape. German is authored `as const`; Widen lifts
// string literals to `string` so EN/IT may differ, while keeping object keys and
// array lengths fixed. The `: Dict` annotation on the composed en/it objects then
// enforces completeness once the slices carry real content.
export type Dict = Widen<typeof de>;

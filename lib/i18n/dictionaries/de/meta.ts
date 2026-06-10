// German document.title per page (the string the browser tab shows), for the
// runtime usePageTitle() hook. These are the EXACT titles the pages render.
//
// Note on how each is built (see lib/seo.ts + app/layout.tsx):
//  - home: layout.tsx metadata.title.default = SEO.title. The layout template
//    '%s · Casa Bellucci' applies only to child string titles, NOT to .default,
//    so the home tab shows SEO.title unchanged.
//  - all other pages: pageMetadata() sets title:{ absolute: title }, and an
//    absolute title BYPASSES the template entirely. So each page's tab title is
//    EXACTLY the `title` string passed to pageMetadata(), verbatim. The landing
//    pages already include '| Casa Bellucci' in their TITLE constant; the
//    legal/reservation pages pass a bare title with NO ' · Casa Bellucci' suffix.
export const meta = {
  home: {
    title: 'Casa Bellucci · Italienisches Restaurant Berlin',
    description:
      'Casa Bellucci ist ein italienisches Restaurant mit Bar am Kurfürstendamm 63 in Berlin-Charlottenburg. Frühstück, Lunch, Dinner, Aperitivo und Sommerterrasse, mit Online-Reservierung.',
  },
  italienisch: {
    title: 'Italienisches Restaurant am Kudamm | Casa Bellucci',
    description:
      'Italienisches Restaurant am Kurfürstendamm 63 in Berlin-Charlottenburg. Frühstück, Lunch, Dinner, Bar und Sommerterrasse in der City West, mit Online-Reservierung.',
  },
  fruehstueck: {
    title: 'Frühstück & Brunch in Charlottenburg | Casa Bellucci',
    description:
      'Italienisches Frühstück und Brunch am Kurfürstendamm 63 in Berlin-Charlottenburg. Cornetto, Eier, Pancakes und Espresso, am Wochenende Brunch auf der Terrasse.',
  },
  bar: {
    title: 'Bar & Weinbar am Kudamm · Aperitivo in Berlin | Casa Bellucci',
    description:
      'Bar und Weinbar am Kurfürstendamm 63 in Berlin-Charlottenburg. Aperitivo, Cocktails und italienischer Wein, Sommerterrasse und Live-DJ am Wochenende.',
  },
  reservierung: {
    title: 'Tisch reservieren',
    description:
      'Reserviere online einen Tisch bei Casa Bellucci am Kurfürstendamm 63 in Berlin-Charlottenburg.',
  },
  danke: {
    title: 'Danke für Ihre Reservierung',
    description: 'Vielen Dank für Ihre Reservierung bei Casa Bellucci.',
  },
  impressum: {
    title: 'Impressum',
    description: 'Impressum der Bellucci Gastronomie GmbH in Berlin.',
  },
  datenschutz: {
    title: 'Datenschutzerklärung',
    description: 'Datenschutzerklärung von Casa Bellucci.',
  },
  cookies: {
    title: 'Cookie-Richtlinie',
    description: 'Cookie-Richtlinie von Casa Bellucci.',
  },
} as const;

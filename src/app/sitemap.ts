import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://casabellucci.de";

  const routes = [
    { de: "/", en: "/en", it: "/it" },
    { de: "/speisekarte", en: "/en/menu", it: "/it/menu" },
    {
      de: "/sommerterrasse-kudamm",
      en: "/en/summer-terrace",
      it: "/it/terrazza-estiva",
    },
    {
      de: "/fruehstueck-brunch-kudamm",
      en: "/en/breakfast-brunch",
      it: "/it/colazione-brunch",
    },
    { de: "/dinner", en: "/en/dinner", it: "/it/cena" },
    { de: "/events-dj", en: "/en/events-dj", it: "/it/eventi-dj" },
    { de: "/presse", en: "/en/press", it: "/it/stampa" },
    {
      de: "/kontakt-anfahrt",
      en: "/en/contact",
      it: "/it/contatto",
    },
    {
      de: "/reservierung",
      en: "/en/reservation",
      it: "/it/prenotazione",
    },
  ];

  const legalRoutes = [
    {
      de: "/impressum",
      en: "/en/imprint",
      it: "/it/note-legali",
    },
    {
      de: "/datenschutzerklaerung",
      en: "/en/privacy-policy",
      it: "/it/informativa-privacy",
    },
    {
      de: "/cookie-richtlinie-eu",
      en: "/en/cookie-policy",
      it: "/it/politica-cookie",
    },
  ];

  const allRoutes = [...routes, ...legalRoutes];

  return allRoutes.flatMap((route) => [
    {
      url: `${baseUrl}${route.de}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route.de === "/" ? 1 : 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}${route.de}`,
          en: `${baseUrl}${route.en}`,
          it: `${baseUrl}${route.it}`,
        },
      },
    },
    {
      url: `${baseUrl}${route.en}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route.de === "/" ? 0.9 : 0.7,
      alternates: {
        languages: {
          de: `${baseUrl}${route.de}`,
          en: `${baseUrl}${route.en}`,
          it: `${baseUrl}${route.it}`,
        },
      },
    },
    {
      url: `${baseUrl}${route.it}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route.de === "/" ? 0.9 : 0.7,
      alternates: {
        languages: {
          de: `${baseUrl}${route.de}`,
          en: `${baseUrl}${route.en}`,
          it: `${baseUrl}${route.it}`,
        },
      },
    },
  ]);
}

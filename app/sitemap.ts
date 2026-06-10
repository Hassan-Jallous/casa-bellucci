import type { MetadataRoute } from 'next';
import { canonicalUrl } from '@/lib/seo';
import { localizedPath } from '@/lib/i18n/localize';

export const dynamic = 'force-static';

const ROUTES = [
  {
    path: '/',
    priority: 1,
    changeFrequency: 'weekly',
  },
  {
    path: '/italienisches-restaurant-berlin-charlottenburg/',
    priority: 0.9,
    changeFrequency: 'monthly',
  },
  {
    path: '/fruehstueck-brunch-kurfuerstendamm/',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    path: '/bar-aperitivo-kurfuerstendamm/',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    path: '/reservierung/',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
] as const;

const LAST_MODIFIED = new Date('2026-06-05T00:00:00.000Z');

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: canonicalUrl(route.path),
    lastModified: LAST_MODIFIED,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    alternates: {
      languages: {
        de: canonicalUrl(localizedPath(route.path, 'de')),
        en: canonicalUrl(localizedPath(route.path, 'en')),
        it: canonicalUrl(localizedPath(route.path, 'it')),
        'x-default': canonicalUrl(localizedPath(route.path, 'de')),
      },
    },
  }));
}

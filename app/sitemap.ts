import type { MetadataRoute } from 'next';
import { canonicalUrl } from '@/lib/seo';

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
    path: '/sizilianisches-restaurant-berlin/',
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
  {
    path: '/impressum/',
    priority: 0.2,
    changeFrequency: 'yearly',
  },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map((route) => ({
    url: canonicalUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

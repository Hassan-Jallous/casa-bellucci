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

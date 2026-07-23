import type { MetadataRoute } from 'next';
import { SEO } from '@/lib/seo';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/admin'],
    },
    sitemap: `${SEO.siteUrl}/sitemap.xml`,
  };
}

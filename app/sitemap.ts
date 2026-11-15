import type { MetadataRoute } from 'next';
import { legalNav, nav, site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [...nav, ...legalNav].map((p) => ({
    url: `${site.url}${p.href === '/' ? '' : p.href}`,
    changeFrequency: 'monthly',
    priority: p.href === '/' ? 1 : 0.7,
  }));
}

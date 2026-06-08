import type { MetadataRoute } from 'next'
import { toPageUrl } from '@/lib/site'
import { getAllServiceSlugs } from '@/lib/service-details'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: toPageUrl('/'), lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: toPageUrl('/quote'), lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = getAllServiceSlugs().map((slug) => ({
    url: toPageUrl(`/services/${slug}`),
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  return [...staticRoutes, ...serviceRoutes]
}

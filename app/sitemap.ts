import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'
import { getAllCitySlugs } from '@/lib/uk-cities'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/quote`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/locations`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
  ]

  const cityRoutes: MetadataRoute.Sitemap = getAllCitySlugs().map((slug) => ({
    url: `${base}/locations/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...cityRoutes]
}

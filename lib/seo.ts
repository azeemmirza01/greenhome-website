import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site'

type PageMeta = {
  title: string
  description: string
  path: string
  ogTitle?: string
  keywords?: string[]
}

const defaultOgImage = {
  url: siteConfig.ogImage,
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} logo`,
}

export function createPageMetadata({
  title,
  description,
  path,
  ogTitle,
  keywords,
}: PageMeta): Metadata {
  const url = `${siteConfig.url}${path}`

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: ogTitle ?? `${title} | ${siteConfig.name}`,
      description,
      images: [defaultOgImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle ?? title,
      description,
      images: [siteConfig.ogImage],
    },
  }
}

export const homeMetadata = createPageMetadata({
  title: 'Solar Panels With No Upfront Cost UK',
  description:
    'GreenHomesNW helps UK homeowners get solar panels with no upfront cost through an all-inclusive Solar Plan. Installed, monitored and maintained. Check your eligibility free.',
  path: '/',
  ogTitle: `${siteConfig.name} | ${siteConfig.tagline}`,
  keywords: [
    'solar panels no upfront cost UK',
    'solar panels on lease',
    'all-inclusive Solar Plan',
    'solar PV and battery UK',
    'Smart Export Guarantee',
    'air source heat pump grant',
    'Boiler Upgrade Scheme',
    'MCS certified installer',
  ],
})

export const quotePageDescription =
  'Check your eligibility for the no upfront cost Solar Plan or Boiler Upgrade Scheme heat pump support anywhere in the UK. Free, no obligation, no impact on your credit score.'

export const quoteMetadata = createPageMetadata({
  title: 'Free Eligibility Check & Solar Quote',
  description: quotePageDescription,
  path: '/quote',
  keywords: ['solar eligibility check', 'free solar quote UK', 'heat pump grant eligibility', 'Boiler Upgrade Scheme'],
})

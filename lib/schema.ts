import { siteConfig } from '@/lib/site'
import { faqData } from '@/lib/faq-data'
import type { ServiceDetail } from '@/lib/service-details'

const orgId = `${siteConfig.url}/#organization`

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'HomeAndConstructionBusiness', 'LocalBusiness'],
    '@id': orgId,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    foundingDate: String(siteConfig.foundingYear),
    priceRange: '££',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    sameAs: [siteConfig.social.linkedin],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone,
      email: siteConfig.email,
      contactType: 'customer service',
      areaServed: 'GB',
      availableLanguage: 'English',
      hoursAvailable: siteConfig.hours,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: siteConfig.rating,
      bestRating: '5',
      ratingCount: '4',
    },
    knowsAbout: [
      'Solar panels on lease',
      'Air source heat pump grants',
      'Boiler Upgrade Scheme',
      'Smart Export Guarantee',
      'MCS certified installation',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Renewable Energy Services',
      itemListElement: ['Solar Panels on Lease', 'Air Source Heat Pump Grants'].map((name) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name, provider: { '@id': orgId } },
      })),
    },
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: 'en-GB',
    publisher: { '@id': orgId },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/quote`,
      name: 'Check eligibility for solar panels',
    },
  }
}

export function webPageSchema({
  name,
  description,
  path,
}: {
  name: string
  description: string
  path: string
}) {
  const url = `${siteConfig.url}${path}`
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: 'en-GB',
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    about: { '@id': orgId },
    publisher: { '@id': orgId },
  }
}

export function faqPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${siteConfig.url}/#faq`,
    mainEntity: faqData.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function serviceSchema(service: ServiceDetail) {
  const pageUrl = `${siteConfig.url}/services/${service.slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: service.title,
    description: service.metaDescription,
    url: pageUrl,
    serviceType: service.title,
    category: 'Renewable Energy',
    provider: { '@id': orgId },
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
      url: `${siteConfig.url}/quote`,
    },
  }
}

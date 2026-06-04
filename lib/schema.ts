import { siteConfig } from '@/lib/site'
import type { UkCity } from '@/lib/uk-cities'
import { faqData } from '@/lib/faq-data'

const orgId = `${siteConfig.url}/#organization`

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'HomeAndConstructionBusiness', 'LocalBusiness'],
    '@id': orgId,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    image: `${siteConfig.url}/images/hero.png`,
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
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Sustainable Home Energy Services',
      itemListElement: [
        'Solar Panel Installation',
        'Battery Storage',
        'Energy Audits & Monitoring',
        'Air Source Heat Pumps',
        'Home Insulation & HVAC Optimisation',
      ].map((name) => ({
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
  }
}

export function faqPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
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

export function cityLocalBusinessSchema(city: UkCity) {
  const pageUrl = `${siteConfig.url}/locations/${city.slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${pageUrl}#localbusiness`,
    name: `${siteConfig.name} — ${city.name}`,
    url: pageUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}/images/hero.png`,
    description: `MCS-certified solar, battery storage, and sustainable home upgrades in ${city.name}, ${city.region}. Average savings ${city.avgSavings}/year.`,
    parentOrganization: { '@id': orgId },
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: { '@type': 'AdministrativeArea', name: city.region },
    },
    priceRange: '££',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  }
}

export function cityServiceSchema(city: UkCity) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Solar & Sustainable Home Upgrades in ${city.name}`,
    provider: { '@id': orgId },
    areaServed: { '@type': 'City', name: city.name },
    description: city.intro,
    serviceType: 'Residential solar installation and energy efficiency',
  }
}

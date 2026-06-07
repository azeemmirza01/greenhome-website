function resolveSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '')
  if (fromEnv) return fromEnv.startsWith('http') ? fromEnv : `https://${fromEnv}`

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.replace(/\/$/, '')
  if (production) return production.startsWith('http') ? production : `https://${production}`

  const vercel = process.env.VERCEL_URL?.replace(/\/$/, '')
  if (vercel) return `https://${vercel}`

  return 'https://greenhomesnw.co.uk'
}

/** Canonical path with trailing slash for static export on Apache/Hostinger. */
export function toPagePath(path: string): string {
  if (!path || path === '/') return '/'
  const normalized = path.startsWith('/') ? path : `/${path}`
  return normalized.endsWith('/') ? normalized : `${normalized}/`
}

export function toPageUrl(path: string): string {
  const pagePath = toPagePath(path)
  return pagePath === '/' ? `${resolveSiteUrl()}/` : `${resolveSiteUrl()}${pagePath}`
}

export const siteConfig = {
  name: 'GreenHomesNW',
  legalName: 'Green Homes NW Ltd',
  tagline: 'All-Inclusive Solar Plan. No Upfront Cost.',
  description:
    'GreenHomesNW helps homeowners across the UK switch to solar with no upfront cost through an all-inclusive Solar Plan that is installed, monitored and maintained for the lifetime of your plan. We also help eligible homeowners access air source heat pump support through the Government Boiler Upgrade Scheme.',
  serviceArea: 'United Kingdom (England, Scotland & Wales)',
  financePartner: 'HTG Finance Limited',
  rating: '4.9',
  url: resolveSiteUrl(),
  locale: 'en_GB',
  phone: '+447459453743',
  phoneDisplay: '07459 453743',
  whatsappUrl: 'https://wa.me/447459453743',
  email: 'info@greenhomesnw.co.uk',
  address: {
    street: 'Unit 17 South Cross Street',
    city: 'Bury',
    region: 'England',
    postalCode: 'BL9 0RS',
    country: 'GB',
  },
  companyType: 'Private limited company',
  companyStatus: 'Active',
  hours: 'Mon to Sat, 8am to 6pm',
  foundingYear: 2009,
  social: {
    linkedin: 'https://www.linkedin.com/company/greenhomesnw',
  },
  logo: '/images/FooterLogoo.png',
  ogImage: '/images/og-image.png',
} as const

export const services = [
  {
    id: 'solar-panels-on-lease',
    title: 'Solar Panels on Lease',
    icon: 'solar_power',
    description:
      'Get a custom-designed solar PV and battery system installed with low or no upfront cost. Our all-inclusive Solar Plan covers installation, remote monitoring, maintenance, and repairs, so you keep the bill savings and export payments while we handle the rest.',
    href: '/services/solar-panels-on-lease',
  },
  {
    id: 'air-source-heat-pump-grants',
    title: 'Air Source Heat Pump Grants',
    icon: 'heat_pump',
    description:
      'Eligible UK homeowners may be able to access support for an air source heat pump through the Government Boiler Upgrade Scheme (BUS). Check your eligibility to find out if you qualify.',
    href: '/services/air-source-heat-pump-grants',
  },
] as const

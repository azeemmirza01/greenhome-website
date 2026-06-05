export const siteConfig = {
  name: 'GREENHOMESNW',
  legalName: 'Green Homes NW Ltd',
  tagline: 'Government-Backed Renewable Energy. No Upfront Cost.',
  description:
    'UK renewable energy specialists helping homeowners claim air source heat pump grants worth up to £7,500 and install solar panels on lease with no upfront cost.',
  serviceArea: 'United Kingdom (England, Scotland, Wales, Northern Ireland)',
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://greenhomesnw.co.uk'),
  locale: 'en_GB',
  phone: '+44 7459 453743',
  phoneDisplay: '+44 7459 453743',
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
  hours: 'Mon to Fri, 9am to 6pm',
  foundingYear: 2009,
  social: {
    linkedin: 'https://www.linkedin.com/company/greenhomesnw',
  },
} as const

export const services = [
  {
    id: 'air-source-heat-pump-grants',
    title: 'Air Source Heat Pump Grants',
    icon: 'heat_pump',
    description:
      'Claim up to £7,500 through the Government Boiler Upgrade Scheme. We check your eligibility, manage the MCS-certified install, and handle every piece of grant paperwork for you.',
    href: '/services/air-source-heat-pump-grants',
  },
  {
    id: 'solar-panels-on-lease',
    title: 'Solar Panels on Lease',
    icon: 'solar_power',
    description:
      'Go solar with no upfront cost. Our all-inclusive Solar Plan covers install, monitoring, and maintenance, so you keep the bill savings and export payments while we handle the rest.',
    href: '/services/solar-panels-on-lease',
  },
] as const

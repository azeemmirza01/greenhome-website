export const siteConfig = {
  name: 'GREENHOMESNW',
  legalName: 'Green Homes NW Ltd',
  tagline: 'Smart Energy. Sustainable Living.',
  description:
    'UK home energy specialists installing MCS-certified solar panels and air source heat pumps across England, Scotland, Wales, and Northern Ireland.',
  serviceArea: 'United Kingdom (England, Scotland, Wales, Northern Ireland)',
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://greenhomesnw.co.uk'),
  locale: 'en_GB',
  phone: '+44 20 7946 0958',
  phoneDisplay: '020 7946 0958',
  email: 'hello@greenhomesnw.co.uk',
  address: {
    street: '71-75 Shelton Street',
    city: 'London',
    region: 'England',
    postalCode: 'WC2H 9JQ',
    country: 'GB',
  },
  hours: 'Mon to Fri, 9am to 6pm',
  foundingYear: 2009,
  social: {
    linkedin: 'https://www.linkedin.com/company/greenhomesnw',
  },
} as const

export const services = [
  {
    id: 'solar-panels',
    title: 'Solar Panels',
    icon: 'solar_power',
    description:
      'MCS-certified solar PV for UK homes. We handle roof surveys, DNO (district network operator) applications, SEG registration, and optional battery storage.',
    href: '/services/solar-panels',
  },
  {
    id: 'air-source-heat-pumps',
    title: 'Air Source Heat Pumps',
    icon: 'heat_pump',
    description:
      'Air source heat pumps for UK properties, replacing gas, oil, or LPG boilers where suitable. Guidance on BUS (England & Wales) and Scottish grant routes.',
    href: '/services/air-source-heat-pumps',
  },
] as const

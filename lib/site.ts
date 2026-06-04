export const siteConfig = {
  name: 'GREENHOMESNW',
  legalName: 'Green Homes NW Ltd',
  tagline: 'Smart Energy. Sustainable Living.',
  description:
    'UK sustainable home specialists delivering MCS-certified solar, battery storage, heat pumps, and smart energy upgrades for lower bills and net-zero living.',
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
  hours: 'Mon–Fri 9:00–18:00',
  foundingYear: 2009,
  social: {
    linkedin: 'https://www.linkedin.com/company/greenhomesnw',
  },
} as const

export const services = [
  {
    id: 'installation',
    title: 'Installation',
    icon: 'solar_power',
    description:
      'Expert solar panel and battery storage installation tailored to your home\'s roof geometry, orientation, and UK planning requirements.',
    href: '/#services',
  },
  {
    id: 'energy',
    title: 'Energy',
    icon: 'bolt',
    description:
      'Comprehensive energy audits and monitoring to optimise consumption, maximise SEG export income, and track real-time savings.',
    href: '/#services',
  },
  {
    id: 'improvement',
    title: 'Improvement',
    icon: 'upgrade',
    description:
      'Sustainable upgrades including air-source heat pumps, smart lighting, insulation, and HVAC optimisation for EPC gains.',
    href: '/#services',
  },
] as const

export const siteConfig = {
  name: 'GREENHOMESNW',
  legalName: 'Green Homes NW Ltd',
  tagline: 'Smart Energy. Sustainable Living.',
  description:
    'UK sustainable home specialists delivering MCS-certified solar panels and air source heat pumps for lower bills and net-zero living.',
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
      'MCS-certified solar PV designed for your roof, with expert installation, battery storage options, and Smart Export Guarantee (SEG) setup to cut electricity bills.',
    href: '/#services',
  },
  {
    id: 'air-source-heat-pumps',
    title: 'Air Source Heat Pumps',
    icon: 'heat_pump',
    description:
      'High-efficiency air source heat pumps to replace fossil-fuel heating, cut carbon, and lower running costs. We can also talk you through Boiler Upgrade Scheme grants if you qualify.',
    href: '/#services',
  },
] as const

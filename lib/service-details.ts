export type ServiceDetail = {
  slug: string
  title: string
  icon: string
  metaDescription: string
  intro: string
  benefits: string[]
  included: string[]
  process: { step: string; detail: string }[]
  grants?: string
  idealFor: string[]
  planOptions?: { upfront: string; monthly: string }[]
  planNote?: string
  guarantees?: { title: string; detail: string }[]
}

import { ukGrants } from '@/lib/uk'

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'air-source-heat-pump-grants',
    title: 'Air Source Heat Pump Grants',
    icon: 'heat_pump',
    metaDescription:
      'Claim up to £7,500 with the Government Boiler Upgrade Scheme. MCS-certified air source heat pump grants for UK homeowners. Check your eligibility free.',
    intro:
      'The Government Boiler Upgrade Scheme (BUS) gives eligible homeowners in England and Wales a £7,500 grant towards a new air source heat pump. As an MCS-certified installer, we confirm whether you qualify, redeem the grant directly so it comes straight off your price, and replace your old gas, oil, or LPG boiler with an efficient low-carbon heating system.',
    benefits: [
      'Up to £7,500 off through the Government Boiler Upgrade Scheme',
      'Lower, more predictable heating bills than ageing gas or oil boilers',
      'One efficient system for both central heating and hot water',
      'Cut your home carbon emissions and move towards net zero',
      'We apply the grant for you so there is no complicated paperwork',
    ],
    included: [
      'Free eligibility check against Boiler Upgrade Scheme rules',
      'Room-by-room heat loss survey by qualified engineers',
      'MCS-certified heat pump and hot water cylinder installation',
      'Full BUS grant application handled on your behalf',
      'Building Regulations notification and commissioning',
      'Smart heating controls plus aftercare and annual service reminders',
    ],
    process: [
      { step: 'Eligibility check', detail: 'We confirm in minutes whether your home and old boiler qualify for the £7,500 grant.' },
      { step: 'Home survey', detail: 'A heat loss survey sizes the right heat pump for your property and radiators.' },
      { step: 'Grant + install', detail: 'We redeem the BUS grant off your price and install your MCS-certified system.' },
      { step: 'Handover', detail: 'We set your smart controls, explain running costs, and register your warranty.' },
    ],
    grants: ukGrants.heatPump,
    idealFor: [
      'Homeowners replacing an old gas, oil, or LPG boiler',
      'Families wanting lower, more stable heating bills',
      'Properties with outdoor space for the heat pump unit',
    ],
  },
  {
    slug: 'solar-panels-on-lease',
    title: 'Solar Panels on Lease',
    icon: 'solar_power',
    metaDescription:
      'Solar panels on lease from £0 upfront. All-inclusive plan: install, monitor, and maintain, with bill savings and export payments. Net saving possible from year one.',
    intro:
      'Our Solar Plan makes switching to clean, green power simple and affordable. It is an all-inclusive lease with low or no upfront cost: you get a custom-designed solar and battery system, keep the full bill savings and Smart Export Guarantee payments, and we take care of monitoring, maintenance, and repairs for the lifetime of your plan. Many homeowners make a net saving from year one.',
    benefits: [
      'From £0 upfront, with low-deposit options if you prefer smaller monthly payments',
      'Pay as you save: many homeowners see a net saving from year one',
      'Keep the bill savings, stored energy, and Smart Export Guarantee payments',
      'All-inclusive: installation, monitoring, and maintenance in one simple plan',
      'No unexpected repair or replacement costs for the lifetime of your plan',
      'Settle or transfer the plan at any time if you move home',
    ],
    included: [
      'System installation: MCS-certified solar PV and battery from leading manufacturers',
      'Performance monitoring: remote monitoring and periodic inspections',
      'Unlimited repairs: parts, labour, and access with no callout fees or hidden charges',
      'Replacement protection: failed equipment replaced even after the manufacturer warranty ends',
      'DNO (G98/G99) grid application and Smart Export Guarantee registration',
    ],
    process: [
      { step: 'Design', detail: 'We survey your property and design a system for your roof and energy needs, with a clear savings forecast.' },
      { step: 'Apply', detail: 'Apply online in minutes with an instant decision, a 14-day cooling-off period, and no impact on your credit score.' },
      { step: 'Install', detail: 'Accredited engineers install your system and set up monitoring, then we check you are happy before payments begin.' },
      { step: 'Relax', detail: 'We monitor, maintain, and repair the system for the life of your plan, so you just enjoy the savings.' },
    ],
    planOptions: [
      { upfront: '£0 upfront', monthly: '£72' },
      { upfront: '£1,250 upfront', monthly: '£64' },
      { upfront: '£2,500 upfront', monthly: '£56' },
    ],
    planNote:
      'Example payments based on a £10,000 solar and battery system on a 25-year plan. Choose a term from 5 to 25 years and settle at any time. Figures are indicative and subject to survey and a finance agreement; monthly payments rise 2.5% a year. Your personalised quote and savings forecast are independently validated.',
    guarantees: [
      { title: 'Independently validated savings', detail: 'Your savings forecast is reviewed by an independent body who also confirm you are comfortable with the figures.' },
      { title: 'Fair price promise', detail: 'We benchmark installation quotes against national figures so your system is priced fairly.' },
      { title: 'Risk-free application', detail: 'A quick, secure application that takes minutes, will not impact your credit score, and has no obligation once approved.' },
      { title: 'Satisfaction guarantee', detail: 'We check in after installation and every maintenance visit to make sure you are happy with the work.' },
      { title: 'Cancel anytime', detail: 'End your plan at any time by paying the settlement amount in your agreement, with no early-exit penalties.' },
    ],
    grants: ukGrants.solar,
    idealFor: [
      'Homeowners in England and Wales, owner-occupied or privately rented',
      'Households that want solar without a large upfront payment',
      'People who want predictable costs and no maintenance worries',
    ],
  },
]

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return serviceDetails.map((s) => s.slug)
}

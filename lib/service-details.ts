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
  {
    slug: 'full-time-central-heating',
    title: 'Full-Time Central Heating',
    icon: 'hvac',
    metaDescription:
      'Full central heating installation and upgrades for UK homes. New radiators, pipework, controls, and boiler integration by Gas Safe registered engineers. Free survey and quote.',
    intro:
      'Keep your home warm and comfortable with a properly designed full-time central heating system. We install and upgrade complete wet central heating setups for UK properties, including boilers, radiators, pipework, and smart controls. Our Gas Safe registered engineers size the system for your rooms, improve efficiency, and make sure every radiator heats evenly so you get reliable warmth through winter without wasted energy.',
    benefits: [
      'Whole-home comfort with radiators and pipework designed for your property',
      'Lower running costs with modern controls and a correctly sized system',
      'Gas Safe registered installation with Building Regulations compliance',
      'Even heat distribution with balanced radiators and efficient pipework',
      'Clear upfront quote after a free home heating survey',
    ],
    included: [
      'Free home survey and heat loss assessment',
      'Boiler and radiator sizing for your rooms and hot water needs',
      'Full radiator, pipework, and valve installation or upgrade',
      'Smart thermostat and programmer setup',
      'System flush, commissioning, and Gas Safe certification',
      'Handover with running-cost guidance and aftercare support',
    ],
    process: [
      { step: 'Home survey', detail: 'We assess your rooms, existing pipework, and hot water use to design the right full-time central heating setup.' },
      { step: 'Fixed quote', detail: 'You receive a clear itemised quote covering boiler, radiators, labour, and any grant support you may qualify for.' },
      { step: 'Installation', detail: 'Gas Safe engineers install your system with minimal disruption, including flush, test, and commissioning.' },
      { step: 'Handover', detail: 'We set your controls, balance radiators, and explain how to run the system efficiently.' },
    ],
    idealFor: [
      'Homeowners replacing an old or failing central heating system',
      'Properties with cold rooms, uneven heating, or outdated radiators',
      'Households planning a boiler upgrade alongside new radiators and pipework',
      'Landlords bringing rental homes up to modern heating standards',
    ],
  },
  {
    slug: 'non-condensing-boiler',
    title: 'Non-Condensing Boiler Replacement',
    icon: 'water_heater',
    metaDescription:
      'Replace your old non-condensing boiler with a modern efficient system. UK homeowners with G-rated boilers may qualify for BUS heat pump grants. Free eligibility check.',
    intro:
      'If your home still runs a non-condensing boiler, you are likely paying more than you need for heating and hot water. These older boilers are far less efficient than modern condensing models and are common in UK homes built before 2005. We replace non-condensing gas, oil, and LPG boilers with high-efficiency systems, and where eligible we help you access the Government Boiler Upgrade Scheme to move to a low-carbon air source heat pump.',
    benefits: [
      'Cut heating bills by replacing a G-rated non-condensing boiler',
      'Improve reliability and safety with a modern, serviced heating system',
      'BUS grant support when upgrading to an air source heat pump',
      'Gas Safe and MCS-certified installation with full warranty',
      'We handle grant paperwork so the discount comes straight off your price',
    ],
    included: [
      'Free check of your current non-condensing boiler and eligibility',
      'Recommendation for condensing boiler or heat pump upgrade',
      'Safe removal and disposal of your old boiler',
      'MCS-certified heat pump or high-efficiency boiler installation',
      'BUS grant application managed on your behalf where eligible',
      'Smart controls, commissioning, and annual service reminders',
    ],
    process: [
      { step: 'Boiler check', detail: 'We confirm whether your boiler is non-condensing and what upgrade routes are available for your home.' },
      { step: 'Grant check', detail: 'We verify Boiler Upgrade Scheme eligibility for heat pump replacement in England and Wales.' },
      { step: 'Install', detail: 'Our accredited engineers remove the old unit and install your new heating system to current regulations.' },
      { step: 'Support', detail: 'We register warranties, set your controls, and explain running costs and maintenance.' },
    ],
    grants: ukGrants.heatPump,
    idealFor: [
      'Homes with a non-condensing gas, oil, or LPG boiler',
      'Households with boilers over 15 years old or poor efficiency ratings',
      'Homeowners who want to reduce carbon emissions and heating costs',
      'Properties in England and Wales exploring BUS heat pump support',
    ],
  },
]

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return serviceDetails.map((s) => s.slug)
}

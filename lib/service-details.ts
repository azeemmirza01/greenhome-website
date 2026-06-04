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
}

import { ukGrants } from '@/lib/uk'

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'solar-panels',
    title: 'Solar Panels',
    icon: 'solar_power',
    metaDescription:
      'MCS-certified solar panel installation across the UK. DNO applications, SEG setup, and battery options for English, Scottish, Welsh, and NI homes.',
    intro:
      'We design and install solar PV for UK homes, from terraced streets to detached properties. Our team manages roof surveys, scaffolding, MCS certification, and your district network operator (DNO) application so your system is legally connected and ready to earn SEG payments.',
    benefits: [
      'Cut UK electricity bills by using your own power during daylight hours',
      'Receive Smart Export Guarantee (SEG) payments from GB energy suppliers',
      'Improve EPC ratings, helpful for landlords under UK MEES rules',
      'Reduce household carbon in line with UK climate targets',
      'Optional battery storage to use more solar after sunset',
    ],
    included: [
      'Free UK home survey with shade and roof structure check',
      'MCS-certified design and installation',
      'Scaffolding and Part P electrical compliance',
      'DNO (G98/G99) application and export meter guidance',
      'SEG registration help with your energy supplier',
      'Handover with UK consumption and generation monitoring',
    ],
    process: [
      { step: 'Survey', detail: 'We assess roof type (tile, slate, flat), shading, and your annual kWh use from bills.' },
      { step: 'Quote', detail: 'Fixed UK price in pounds, system size in kWp, and realistic savings range.' },
      { step: 'Install', detail: 'Typically 1 to 2 days on site once DNO and scaffolding are booked.' },
      { step: 'Commission', detail: 'MCS certificate issued and SEG set up so export payments can start.' },
    ],
    grants: ukGrants.solar,
    idealFor: [
      'UK homeowners with unshaded roof space and daytime usage',
      'Landlords raising EPC ratings before 2028 MEES deadlines',
      'Households with EVs charging at home on UK tariffs',
    ],
  },
  {
    slug: 'air-source-heat-pumps',
    title: 'Air Source Heat Pumps',
    icon: 'heat_pump',
    metaDescription:
      'Air source heat pump installation across the UK. MCS-certified, BUS and Scottish grant guidance, Building Regulations compliant.',
    intro:
      'Air source heat pumps work in UK winters by extracting heat from outside air. They can replace gas, oil, or LPG boilers when your radiators or underfloor heating and insulation are suitable. We follow MCS standards and UK Building Regulations for a safe, efficient install.',
    benefits: [
      'Lower heating costs versus many UK gas and oil tariffs over the system lifetime',
      'Cut carbon from home heating under UK net zero plans',
      'One system for heating and hot water in most UK properties',
      'BUS grants in England and Wales, plus Scottish support schemes',
      'Pairs well with UK solar to offset electricity used by the pump',
    ],
    included: [
      'Room-by-room heat loss survey to BS EN 12831 principles',
      'MCS-certified heat pump and cylinder installation',
      'Building Regulations notification and commissioning',
      'Upgraded pipework, filters, and smart thermostat setup',
      'Grant paperwork guidance (BUS, Home Energy Scotland, NI advice)',
      'UK aftercare line and annual service reminders',
    ],
    process: [
      { step: 'Survey', detail: 'We check insulation, emitter sizes, outdoor unit location, and noise planning rules.' },
      { step: 'Design', detail: 'We specify kW output, cylinder size, and defrost strategy for your UK climate zone.' },
      { step: 'Install', detail: 'Usually 3 to 5 days including electrical works and any radiator upgrades.' },
      { step: 'Handover', detail: 'We programme weather compensation and explain running costs in pence per kWh.' },
    ],
    grants: ukGrants.heatPump,
    idealFor: [
      'UK homes off the gas grid or ending fossil-fuel boilers',
      'Properties with garden or yard space for the outdoor unit',
      'Owners wanting predictable heating bills on UK energy tariffs',
    ],
  },
]

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return serviceDetails.map((s) => s.slug)
}

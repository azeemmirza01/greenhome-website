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

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'solar-panels',
    title: 'Solar Panels',
    icon: 'solar_power',
    metaDescription:
      'MCS-certified solar panel installation across the UK. Roof surveys, SEG setup, optional battery storage, and ongoing support from GREENHOMESNW.',
    intro:
      'We design and install solar PV systems that fit your roof, your usage, and your budget. From a straightforward terrace to a larger family home, we handle surveys, DNO paperwork, and commissioning so you can start saving on day one.',
    benefits: [
      'Lower electricity bills by using your own power during the day',
      'Earn export payments through the Smart Export Guarantee (SEG)',
      'Increase property appeal with a better EPC rating in many cases',
      'Cut household carbon without changing how you live day to day',
      'Optional battery storage to use more of your own solar in the evening',
    ],
    included: [
      'Free home survey and honest generation estimate',
      'MCS-certified design and installation',
      'Scaffolding and electrical work managed by our team',
      'DNO application and meter setup guidance',
      'SEG registration support with your energy supplier',
      'Handover pack with monitoring app setup where applicable',
    ],
    process: [
      { step: 'Survey', detail: 'We check roof condition, shading, and how you use electricity at home.' },
      { step: 'Quote', detail: 'You receive a clear price, system size, and expected savings range.' },
      { step: 'Install', detail: 'Most homes take 1 to 2 days on site once approvals are in place.' },
      { step: 'Commission', detail: 'We test the system, complete paperwork, and show you how to track performance.' },
    ],
    grants:
      'Some homes may qualify for local schemes or green finance products. We will flag anything relevant during your survey. SEG export payments apply to MCS-certified installs in Great Britain.',
    idealFor: [
      'Homeowners with good roof space and daytime electricity use',
      'Landlords improving EPC ratings on rental properties',
      'Households planning an EV and wanting cheaper home charging',
    ],
  },
  {
    slug: 'air-source-heat-pumps',
    title: 'Air Source Heat Pumps',
    icon: 'heat_pump',
    metaDescription:
      'Air source heat pump installation across the UK. MCS-certified installs, BUS grant guidance, and efficient home heating from GREENHOMESNW.',
    intro:
      'Air source heat pumps pull warmth from outside air to heat your home and hot water. They work well in the UK climate and can replace gas or oil boilers when the property is suitable. We survey first, then recommend the right unit and controls for your rooms and radiators.',
    benefits: [
      'Lower running costs compared with many gas and oil boilers over time',
      'Reduced carbon emissions for heating and hot water',
      'One system for space heating and domestic hot water in most setups',
      'Eligible homes may access the Boiler Upgrade Scheme (BUS)',
      'Works alongside solar panels to further cut energy bills',
    ],
    included: [
      'Property heat loss check and suitability advice',
      'MCS-certified heat pump supply and installation',
      'Cylinder and pipework upgrades where required',
      'Smart controls and handover training',
      'Guidance on BUS grant applications if you are eligible',
      'Aftercare support through our UK service team',
    ],
    process: [
      { step: 'Survey', detail: 'We review insulation, radiators, and where the outdoor unit can sit.' },
      { step: 'Design', detail: 'We size the heat pump and hot water cylinder for your home.' },
      { step: 'Install', detail: 'Installation typically takes a few days depending on pipework changes.' },
      { step: 'Handover', detail: 'We set your controls, explain running costs, and leave clear documentation.' },
    ],
    grants:
      'The Boiler Upgrade Scheme (BUS) offers grants toward air source heat pump installs for eligible properties in England and Wales. We help you understand the rules and paperwork before you commit.',
    idealFor: [
      'Homes moving away from gas, oil, or LPG heating',
      'Properties with space for an outdoor unit and indoor cylinder',
      'Householders who want stable, efficient heating long term',
    ],
  },
]

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return serviceDetails.map((s) => s.slug)
}

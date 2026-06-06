import Link from 'next/link'
import MaterialIcon from '@/components/MaterialIcon'

const cards = [
  {
    id: 'solar',
    icon: 'solar_power',
    title: 'Solar Panels From £0 Upfront',
    description:
      'Get a custom-designed solar PV and battery system installed with low or no upfront cost. Our all-inclusive Solar Plan covers installation, remote monitoring, maintenance, and repairs, all from leading manufacturers and fitted by skilled engineers. You gain the full benefits of generated and stored energy, lower bills, and export payments.',
    cta: 'Get a Free Solar Quote',
    href: '/services/solar-panels-on-lease',
  },
  {
    id: 'heat-pump',
    icon: 'heat_pump',
    title: 'Air Source Heat Pumps ',
    description:
      "Eligible UK homeowners may be able to access support for an air source heat pump through the Government's Boiler Upgrade Scheme (BUS). Check your eligibility to find out if you qualify.",
    cta: 'Check My Eligibility',
    href: '/services/air-source-heat-pump-grants',
  },
  {
    id: 'assessment',
    icon: 'home_work',
    title: 'Free Home Energy Assessment',
    description:
      'Not sure where to start? Our accredited assessors visit your property and identify every solar option and scheme available for your home, so you never miss out on savings you’re entitled to.',
    cta: 'Book a Free Assessment',
    href: '/quote',
  },
]

export default function Services() {
  return (
    <section className="mx-auto max-w-container-max px-4 py-24 md:px-margin-desktop" id="services">
      <div className="reveal mb-16 text-center active">
        <h2 className="mb-4 text-headline-lg">Clean Energy, Made Simple</h2>
        <p className="mx-auto mb-4 max-w-2xl text-on-surface-variant">
          No upfront cost solar panels, Government heat pump support, and free expert energy assessments for homes
          across the UK
        </p>
        <div className="mx-auto h-1.5 w-20 rounded-full bg-primary" aria-hidden />
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-gutter md:grid-cols-3">
        {cards.map((s) => (
          <article
            key={s.id}
            className="glass service-card reveal group flex flex-col rounded-3xl p-8 shadow-premium active"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-on-primary">
              <MaterialIcon name={s.icon} className="text-3xl" />
            </div>
            <h3 className="mb-4 text-headline-md">{s.title}</h3>
            <p className="mb-6 text-body-md text-on-surface-variant">{s.description}</p>
            <Link
              href={s.href}
              className="mt-auto inline-flex items-center gap-1 font-semibold text-primary"
            >
              {s.cta}
              <MaterialIcon name="chevron_right" className="transition-transform group-hover:translate-x-1" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import MaterialIcon from '@/components/MaterialIcon'
import { serviceCardImages } from '@/lib/images'

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
    title: 'Air Source Heat Pumps',
    description:
      "Eligible UK homeowners may be able to access support for an air source heat pump through the Government's Boiler Upgrade Scheme (BUS). Check your eligibility to find out if you qualify.",
    cta: 'Check My Eligibility',
    href: '/services/air-source-heat-pump-grants',
  },
  {
    id: 'central-heating',
    icon: 'hvac',
    title: 'Full-Time Central Heating',
    description:
      'Upgrade to a complete central heating system built for UK homes. We install and replace boilers, radiators, pipework, and smart controls so every room stays warm efficiently all year round.',
    cta: 'Get a Heating Quote',
    href: '/services/full-time-central-heating',
  },
  {
    id: 'non-condensing-boiler',
    icon: 'water_heater',
    title: 'Non-Condensing Boiler Replacement',
    description:
      'Still running an old non-condensing boiler? We replace inefficient G-rated units with modern systems. Eligible homeowners may qualify for government grant support when upgrading to an air source heat pump through the BUS.',
    cta: 'Check Boiler Options',
    href: '/services/non-condensing-boiler',
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
      <div className="reveal mb-16 text-center">
        <h2 className="mb-4 text-headline-lg">Clean Energy, Made Simple</h2>
        <p className="mx-auto mb-4 max-w-2xl text-on-surface-variant">
          Solar panels, heat pump grants, full central heating upgrades, and non-condensing boiler replacement for homes
          across the UK
        </p>
        <div className="mx-auto h-1.5 w-20 rounded-full bg-primary" aria-hidden />
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((s, i) => (
          <article
            key={s.id}
            className="glass service-card reveal group flex flex-col overflow-hidden rounded-3xl shadow-premium"
            style={{ '--reveal-delay': `${i * 80}ms` } as React.CSSProperties}
          >
            <div className="relative h-48 w-full">
              <Image
                src={serviceCardImages[s.id].src}
                alt={serviceCardImages[s.id].alt}
                fill
                className="img-zoom object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="flex flex-1 flex-col p-8">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-on-primary">
              <MaterialIcon name={s.icon} className="text-3xl" />
            </div>
            <h3 className="mb-4 text-headline-md">{s.title}</h3>
            <p className="card-text mb-6 text-body-md text-on-surface-variant">{s.description}</p>
            <Link
              href={s.href}
              className="mt-auto inline-flex items-center gap-1 font-semibold text-primary"
            >
              {s.cta}
              <MaterialIcon name="chevron_right" className="transition-transform group-hover:translate-x-1" />
            </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

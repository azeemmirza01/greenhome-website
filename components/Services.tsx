import Link from 'next/link'
import MaterialIcon from '@/components/MaterialIcon'
import { services } from '@/lib/site'

export default function Services() {
  return (
    <section className="mx-auto max-w-container-max px-4 py-24 md:px-margin-desktop" id="services">
      <div className="reveal mb-16 text-center active">
        <h2 className="mb-4 text-headline-lg">Core Services</h2>
        <div className="mx-auto h-1.5 w-20 rounded-full bg-primary" aria-hidden />
      </div>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-gutter md:grid-cols-2">
        {services.map((s) => (
          <article
            key={s.id}
            className="glass service-card reveal group rounded-3xl p-8 shadow-premium active"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-on-primary">
              <MaterialIcon name={s.icon} className="text-3xl" />
            </div>
            <h3 className="mb-4 text-headline-md">{s.title}</h3>
            <p className="mb-6 text-body-md text-on-surface-variant">{s.description}</p>
            <Link href={s.href} className="inline-flex items-center gap-1 font-semibold text-primary">
              Learn More
              <MaterialIcon name="chevron_right" className="transition-transform group-hover:translate-x-1" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

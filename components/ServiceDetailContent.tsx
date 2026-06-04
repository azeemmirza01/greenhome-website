import Link from 'next/link'
import MaterialIcon from '@/components/MaterialIcon'
import type { ServiceDetail } from '@/lib/service-details'
import { siteConfig } from '@/lib/site'

type Props = { service: ServiceDetail }

export default function ServiceDetailContent({ service }: Props) {
  return (
    <article className="mx-auto max-w-3xl px-4 text-center md:px-margin-desktop">
      <div className="reveal mb-8 flex justify-center active">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary md:h-20 md:w-20">
          <MaterialIcon name={service.icon} className="text-4xl md:text-5xl" />
        </div>
      </div>

      <p className="reveal mb-12 text-body-lg text-on-surface-variant active">{service.intro}</p>

      <section className="reveal mb-14 active">
        <h2 className="mb-6 text-headline-md">Why choose this?</h2>
        <ul className="mx-auto max-w-xl space-y-3 text-left text-body-md text-on-surface-variant">
          {service.benefits.map((item) => (
            <li key={item} className="flex gap-3">
              <MaterialIcon name="check_circle" className="shrink-0 text-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="reveal mb-14 active">
        <h2 className="mb-6 text-headline-md">What&apos;s included</h2>
        <ul className="mx-auto max-w-xl space-y-3 text-left text-body-md text-on-surface-variant">
          {service.included.map((item) => (
            <li key={item} className="flex gap-3">
              <MaterialIcon name="done" className="shrink-0 text-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="reveal mb-14 active">
        <h2 className="mb-8 text-headline-md">How it works</h2>
        <ol className="mx-auto max-w-xl space-y-6 text-left">
          {service.process.map((item, i) => (
            <li key={item.step} className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-on-primary">
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold text-on-surface">{item.step}</h3>
                <p className="mt-1 text-body-md text-on-surface-variant">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {service.grants && (
        <section className="reveal glass mb-14 rounded-3xl p-8 text-left shadow-premium active">
          <h2 className="mb-4 text-center text-headline-md">UK grants and funding</h2>
          <p className="text-body-md text-on-surface-variant">{service.grants}</p>
        </section>
      )}

      <section className="reveal mb-14 active">
        <h2 className="mb-6 text-headline-md">Ideal for</h2>
        <ul className="mx-auto flex max-w-xl flex-col gap-2 text-body-md text-on-surface-variant">
          {service.idealFor.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <div className="reveal flex flex-col items-center justify-center gap-4 sm:flex-row active">
        <Link
          href="/quote"
          className="shimmer-btn rounded-full bg-primary px-8 py-4 text-label-bold text-on-primary shadow-lg transition-all hover:scale-105"
        >
          Get a free UK quote
        </Link>
        <Link
          href="/#services"
          className="rounded-full border-2 border-primary px-8 py-4 text-label-bold text-primary transition-all hover:bg-primary/5"
        >
          View all services
        </Link>
      </div>

      <p className="reveal mt-10 text-sm text-on-surface-variant active">
        Questions? Call {siteConfig.phoneDisplay} or email{' '}
        <a href={`mailto:${siteConfig.email}`} className="font-semibold text-primary hover:underline">
          {siteConfig.email}
        </a>
      </p>
    </article>
  )
}

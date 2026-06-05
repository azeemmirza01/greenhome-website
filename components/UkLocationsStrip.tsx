import Link from 'next/link'
import { ukCities } from '@/lib/uk-cities'

/** Homepage internal links for location SEO */
export default function UkLocationsStrip() {
  const featured = ukCities.slice(0, 12)

  return (
    <section className="border-y border-outline-variant/30 bg-surface-container-low py-16">
      <div className="mx-auto max-w-container-max px-4 md:px-margin-desktop">
        <div className="reveal mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between active">
          <div>
            <h2 className="text-headline-lg">Serving Homeowners Across the UK</h2>
            <p className="mt-2 max-w-xl text-on-surface-variant">
              Local MCS-certified teams in major cities. Heat pump grants and no upfront cost solar near you.
            </p>
          </div>
          <Link href="/locations" className="font-semibold text-primary hover:underline">
            View all 20 locations →
          </Link>
        </div>
        <nav aria-label="UK service locations" className="flex flex-wrap gap-3">
          {featured.map((c) => (
            <Link
              key={c.slug}
              href={`/locations/${c.slug}`}
              className="rounded-full border border-outline-variant/50 bg-white px-4 py-2 text-sm transition-colors hover:border-primary hover:text-primary"
            >
              {c.name}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  )
}

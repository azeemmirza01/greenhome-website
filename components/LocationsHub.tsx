import Link from 'next/link'
import MaterialIcon from '@/components/MaterialIcon'
import { ukCities } from '@/lib/uk-cities'

export default function LocationsHub() {
  return (
    <section className="mx-auto max-w-container-max px-4 py-24 md:px-margin-desktop">
      <div className="reveal mb-12 active">
        <h1 className="mb-4 text-headline-lg md:text-display-lg">UK Locations We Serve</h1>
        <p className="max-w-2xl text-body-lg text-on-surface-variant">
          MCS-certified solar panels and air source heat pumps across England, Scotland, Wales, and Northern Ireland.
          Select your city for local savings in £, SEG/BUS grant notes, and a free UK survey.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ukCities.map((city) => (
          <Link
            key={city.slug}
            href={`/locations/${city.slug}`}
            className="glass service-card reveal flex flex-col rounded-3xl p-6 shadow-premium active"
          >
            <div className="mb-4 flex items-start justify-between">
              <h2 className="text-headline-md">{city.name}</h2>
              <MaterialIcon name="chevron_right" className="text-primary" />
            </div>
            <p className="mb-4 flex-1 text-sm text-on-surface-variant">{city.region}</p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">~{city.avgSavings}/yr</span>
              <span className="rounded-full bg-secondary-container px-3 py-1 text-on-secondary-container">
                {city.solarHours} sun hrs
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

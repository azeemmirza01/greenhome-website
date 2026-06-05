import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CtaSection from '@/components/CtaSection'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import LeadQuoteForm from '@/components/LeadQuoteForm'
import MaterialIcon from '@/components/MaterialIcon'
import Nav from '@/components/Nav'
import RevealOnScroll from '@/components/RevealOnScroll'
import { breadcrumbSchema, cityLocalBusinessSchema, cityServiceSchema } from '@/lib/schema'
import { siteConfig } from '@/lib/site'
import { getAllCitySlugs, getCityBySlug, ukCities } from '@/lib/uk-cities'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const city = getCityBySlug(slug)
  if (!city) return {}

  const title = `Heat Pump Grants & Solar on Lease in ${city.name}`
  const description = `Air source heat pump grants up to £7,500 and no upfront cost solar panels in ${city.name}, ${city.region}. Typical savings ${city.avgSavings}/year. Free eligibility check from ${siteConfig.name}.`

  return {
    title,
    description,
    keywords: [
      `air source heat pump grant ${city.name}`,
      `Boiler Upgrade Scheme ${city.name}`,
      `solar panels on lease ${city.name}`,
      `no upfront cost solar ${city.name}`,
      `free heat pump ${city.name}`,
      `MCS installer ${city.name}`,
      `reduce energy bills ${city.region}`,
      `renewable energy grants ${city.name}`,
    ],
    alternates: { canonical: `${siteConfig.url}/locations/${city.slug}` },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/locations/${city.slug}`,
      locale: 'en_GB',
    },
  }
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params
  const city = getCityBySlug(slug)
  if (!city) notFound()

  const pageUrl = `${siteConfig.url}/locations/${city.slug}`
  const nearby = ukCities.filter((c) => c.slug !== city.slug).slice(0, 5)

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'UK Locations', url: `${siteConfig.url}/locations` },
            { name: city.name, url: pageUrl },
          ]),
          cityLocalBusinessSchema(city),
          cityServiceSchema(city),
        ]}
      />
      <Nav />
      <main>
        <section className="relative flex min-h-[70vh] items-end overflow-hidden px-4 pb-16 pt-32 md:px-margin-desktop">
          <Image
            src="/images/hero.png"
            alt={`Sustainable home solar installation in ${city.name}`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/70 to-surface/30" aria-hidden />
          <div className="relative z-10 mx-auto w-full max-w-container-max">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-on-surface-variant">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/locations" className="hover:text-primary">
                Locations
              </Link>
              <span className="mx-2">/</span>
              <span className="text-on-surface">{city.name}</span>
            </nav>
            <h1 className="mb-4 max-w-3xl text-[36px] font-bold leading-tight md:text-display-lg">
              Heat Pump Grants & Solar on Lease in {city.name}
            </h1>
            <p className="max-w-2xl text-body-lg text-on-surface-variant">{city.intro}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#quote"
                className="shimmer-btn rounded-full bg-primary px-8 py-4 font-semibold text-on-primary shadow-lg transition-all hover:scale-105"
              >
                Check {city.name} Eligibility
              </Link>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="rounded-full border-2 border-primary px-8 py-4 font-semibold text-primary"
              >
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-container-max px-4 py-16 md:px-margin-desktop">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { label: 'Est. annual savings', value: city.avgSavings, icon: 'savings' },
              { label: 'Solar sun hours / yr', value: city.solarHours, icon: 'wb_sunny' },
              { label: 'Metro population', value: city.population, icon: 'groups' },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-3xl p-8 text-center shadow-premium">
                <MaterialIcon name={stat.icon} className="mb-4 text-4xl text-primary" />
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="mt-2 text-sm text-on-surface-variant">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-surface-container-low py-16">
          <div className="mx-auto grid max-w-container-max gap-12 px-4 md:grid-cols-2 md:px-margin-desktop">
            <article>
              <h2 className="mb-6 text-headline-lg">Why choose {siteConfig.name} in {city.name}?</h2>
              <ul className="space-y-4">
                {city.whyChoose.map((point) => (
                  <li key={point} className="flex gap-3">
                    <MaterialIcon name="check_circle" className="shrink-0 text-primary" />
                    <span className="text-body-md text-on-surface-variant">{point}</span>
                  </li>
                ))}
              </ul>
              <h3 className="mb-4 mt-10 text-headline-md">Grants & support in {city.region}</h3>
              <p className="text-body-md text-on-surface-variant">{city.localGrant}</p>
            </article>
            <article>
              <h2 className="mb-6 text-headline-lg">Areas we cover near {city.name}</h2>
              <p className="mb-6 text-on-surface-variant">
                Our {city.name} team installs across {city.region} including:
              </p>
              <ul className="flex flex-wrap gap-2">
                {city.neighbourhoods.map((n) => (
                  <li
                    key={n}
                    className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                  >
                    {n}
                  </li>
                ))}
              </ul>
              <h3 className="mb-4 mt-10 text-headline-md">Services available</h3>
              <ul className="space-y-2 text-body-md text-on-surface-variant">
                <li>Air source heat pump grants up to £7,500 (Boiler Upgrade Scheme)</li>
                <li>Solar panels on lease with no upfront cost</li>
                <li>MCS-certified install with grant paperwork handled for you</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-container-max px-4 py-16 md:px-margin-desktop" id="quote">
          <LeadQuoteForm city={city.name} />
        </section>

        <section className="border-t border-outline-variant/30 py-12">
          <div className="mx-auto max-w-container-max px-4 md:px-margin-desktop">
            <h2 className="mb-6 text-headline-md">Other UK locations</h2>
            <nav className="flex flex-wrap gap-3" aria-label="Nearby UK locations">
              {nearby.map((c) => (
                <Link
                  key={c.slug}
                  href={`/locations/${c.slug}`}
                  className="rounded-full border border-outline-variant/50 px-4 py-2 text-sm hover:border-primary hover:text-primary"
                >
                  {c.name}
                </Link>
              ))}
              <Link href="/locations" className="rounded-full px-4 py-2 text-sm font-semibold text-primary">
                All cities →
              </Link>
            </nav>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
      <RevealOnScroll />
    </>
  )
}

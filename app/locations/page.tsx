import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import LocationsHub from '@/components/LocationsHub'
import Nav from '@/components/Nav'
import RevealOnScroll from '@/components/RevealOnScroll'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'UK Heat Pump Grant & Solar Lease Locations',
  description:
    'Air source heat pump grants up to £7,500 and no upfront cost solar in 20 UK cities: London, Manchester, Birmingham, Glasgow, Edinburgh, Cardiff, and more.',
  alternates: { canonical: `${siteConfig.url}/locations` },
}

export default function LocationsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'UK Locations', url: `${siteConfig.url}/locations` },
        ])}
      />
      <Nav />
      <main className="min-h-screen bg-surface pt-28">
        <LocationsHub />
      </main>
      <Footer />
      <RevealOnScroll />
    </>
  )
}

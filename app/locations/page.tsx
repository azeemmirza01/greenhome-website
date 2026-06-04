import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import LocationsHub from '@/components/LocationsHub'
import Nav from '@/components/Nav'
import RevealOnScroll from '@/components/RevealOnScroll'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'UK Solar & Green Home Locations',
  description:
    'Find MCS-certified solar installation and sustainable home upgrades in 20 UK cities including London, Manchester, Birmingham, Glasgow, and Bristol.',
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

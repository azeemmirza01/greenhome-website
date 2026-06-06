import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import Nav from '@/components/Nav'
import RevealOnScroll from '@/components/RevealOnScroll'
import ServiceDetailContent from '@/components/ServiceDetailContent'
import { breadcrumbSchema } from '@/lib/schema'
import { getAllServiceSlugs, getServiceBySlug } from '@/lib/service-details'
import { siteConfig } from '@/lib/site'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}

  return {
    title: service.title,
    description: service.metaDescription,
    alternates: { canonical: `${siteConfig.url}/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${siteConfig.name}`,
      description: service.metaDescription,
      url: `${siteConfig.url}/services/${service.slug}`,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: `${siteConfig.name} logo` }],
    },
    twitter: {
      card: 'summary_large_image',
      images: [siteConfig.ogImage],
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const pageUrl = `${siteConfig.url}/services/${service.slug}`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    provider: { '@id': `${siteConfig.url}/#organization` },
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    description: service.metaDescription,
    url: pageUrl,
  }

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Services', url: `${siteConfig.url}/#services` },
            { name: service.title, url: pageUrl },
          ]),
          serviceSchema,
        ]}
      />
      <Nav />
      <main className="min-h-screen bg-surface pt-28 pb-24">
        <header className="reveal mx-auto mb-12 max-w-3xl px-4 text-center active md:px-margin-desktop">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-on-surface-variant">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/#services" className="hover:text-primary">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-on-surface">{service.title}</span>
          </nav>
          <h1 className="text-headline-lg md:text-display-lg">{service.title}</h1>
        </header>
        <ServiceDetailContent service={service} />
      </main>
      <Footer />
      <RevealOnScroll />
    </>
  )
}

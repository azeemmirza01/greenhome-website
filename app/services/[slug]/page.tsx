import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import Nav from '@/components/Nav'
import RevealOnScroll from '@/components/RevealOnScroll'
import ServiceDetailContent from '@/components/ServiceDetailContent'
import { breadcrumbSchema, serviceSchema, webPageSchema } from '@/lib/schema'
import { createPageMetadata } from '@/lib/seo'
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

  return createPageMetadata({
    title: service.title,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    keywords: [service.title, 'UK', 'GreenHomesNW', 'renewable energy'],
  })
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const pageUrl = `${siteConfig.url}/services/${service.slug}`

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Services', url: `${siteConfig.url}/#services` },
            { name: service.title, url: pageUrl },
          ]),
          webPageSchema({
            name: service.title,
            description: service.metaDescription,
            path: `/services/${service.slug}`,
          }),
          serviceSchema(service),
        ]}
      />
      <Nav />
      <main className="min-h-screen bg-surface pt-[var(--nav-height)] pb-24">
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

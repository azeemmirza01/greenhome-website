import Image from 'next/image'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import LeadQuoteForm from '@/components/LeadQuoteForm'
import Nav from '@/components/Nav'
import RevealOnScroll from '@/components/RevealOnScroll'
import { serviceCardImages } from '@/lib/images'
import { breadcrumbSchema, webPageSchema } from '@/lib/schema'
import { quoteMetadata, quotePageDescription } from '@/lib/seo'
import { siteConfig } from '@/lib/site'

export const metadata = quoteMetadata

export default function QuotePage() {
  const pageUrl = `${siteConfig.url}/quote`

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Free Quote', url: pageUrl },
          ]),
          webPageSchema({
            name: 'Free Eligibility Check & Solar Quote',
            description: quotePageDescription,
            path: '/quote',
          }),
        ]}
      />
      <Nav />
      <main className="min-h-screen bg-surface pt-[var(--nav-height)] pb-24">
        <div className="mx-auto max-w-3xl px-4 md:px-margin-desktop">
          <div className="relative mb-10 h-48 overflow-hidden rounded-3xl shadow-premium sm:h-56">
            <Image
              src={serviceCardImages.assessment.src}
              alt={serviceCardImages.assessment.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface/60 px-4 text-center backdrop-blur-[2px]">
              <h1 className="text-headline-lg">Check Your Eligibility</h1>
              <p className="mt-3 max-w-lg text-on-surface-variant">
                Free solar and heat pump eligibility check for UK homeowners. No obligation.
              </p>
            </div>
          </div>
          <LeadQuoteForm hideTitle />
        </div>
      </main>
      <Footer />
      <RevealOnScroll />
    </>
  )
}

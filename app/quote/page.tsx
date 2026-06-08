import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import LeadQuoteForm from '@/components/LeadQuoteForm'
import Nav from '@/components/Nav'
import RevealOnScroll from '@/components/RevealOnScroll'
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
          <header className="mb-10 text-center">
            <h1 className="text-headline-lg">Check Your Eligibility</h1>
            <p className="mt-3 text-on-surface-variant">
              Free solar and heat pump eligibility check for UK homeowners. No obligation.
            </p>
          </header>
          <LeadQuoteForm hideTitle />
        </div>
      </main>
      <Footer />
      <RevealOnScroll />
    </>
  )
}

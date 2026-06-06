import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import LeadQuoteForm from '@/components/LeadQuoteForm'
import Nav from '@/components/Nav'
import RevealOnScroll from '@/components/RevealOnScroll'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Free Eligibility Check & Solar Quote',
  description:
    'Check your eligibility for the no upfront cost Solar Plan, or air source heat pump support through the Boiler Upgrade Scheme, anywhere in the UK. Free, no obligation, no impact on your credit score.',
  alternates: { canonical: `${siteConfig.url}/quote` },
  openGraph: {
    title: `Free Quote | ${siteConfig.name}`,
    url: `${siteConfig.url}/quote`,
  },
}

export default function QuotePage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-surface pt-28 pb-24">
        <div className="mx-auto max-w-3xl px-4 md:px-margin-desktop">
          <LeadQuoteForm />
        </div>
      </main>
      <Footer />
      <RevealOnScroll />
    </>
  )
}

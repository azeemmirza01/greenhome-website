import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import LeadQuoteForm from '@/components/LeadQuoteForm'
import Nav from '@/components/Nav'
import RevealOnScroll from '@/components/RevealOnScroll'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Free Solar & Green Home Quote',
  description:
    'Request a free MCS-certified solar and sustainable home survey anywhere in the UK. Get a personalised quote in under 5 minutes.',
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

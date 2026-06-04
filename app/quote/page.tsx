import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import LeadQuoteForm from '@/components/LeadQuoteForm'
import Nav from '@/components/Nav'
import RevealOnScroll from '@/components/RevealOnScroll'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Free UK Solar & Heat Pump Quote',
  description:
    'Request a free MCS-certified survey for solar panels or air source heat pumps anywhere in the UK (England, Scotland, Wales, NI). Callback within 24 hours, Mon to Fri.',
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

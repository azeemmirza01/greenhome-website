import type { Metadata } from 'next'
import About from '@/components/About'
import JsonLd from '@/components/JsonLd'
import CtaSection from '@/components/CtaSection'
import FaqSection from '@/components/FaqSection'
import GalleryShowcase from '@/components/GalleryShowcase'
import Footer from '@/components/Footer'
import Guarantees from '@/components/Guarantees'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Nav from '@/components/Nav'
import PaymentOptions from '@/components/PaymentOptions'
import RevealOnScroll from '@/components/RevealOnScroll'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import TrustBar from '@/components/TrustBar'
import WhatsIncluded from '@/components/WhatsIncluded'
import { faqPageSchema, webPageSchema } from '@/lib/schema'
import { homeMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = homeMetadata

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: 'Solar Panels With No Upfront Cost UK | GreenHomesNW',
            description: siteConfig.description,
            path: '/',
          }),
          faqPageSchema(),
        ]}
      />
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <HowItWorks />
        <WhatsIncluded />
        <PaymentOptions />
        <Guarantees />
        <About />
        <GalleryShowcase />
        <Testimonials />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
      <RevealOnScroll />
    </>
  )
}

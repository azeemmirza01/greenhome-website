import About from '@/components/About'
import CtaSection from '@/components/CtaSection'
import FaqSection from '@/components/FaqSection'
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

export default function HomePage() {
  return (
    <>
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
        <Testimonials />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
      <RevealOnScroll />
    </>
  )
}

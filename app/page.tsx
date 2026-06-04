import About from '@/components/About'
import CtaSection from '@/components/CtaSection'
import FaqSection from '@/components/FaqSection'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import RevealOnScroll from '@/components/RevealOnScroll'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import UkLocationsStrip from '@/components/UkLocationsStrip'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <About />
        <Features />
        <UkLocationsStrip />
        <Testimonials />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
      <RevealOnScroll />
    </>
  )
}

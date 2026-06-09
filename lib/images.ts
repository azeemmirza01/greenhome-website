export type SiteImage = {
  src: string
  alt: string
}

/** Hero carousel — solar images only; never reused below the hero */
export const heroSlides: SiteImage[] = [
  { src: '/images/hero-section.png', alt: 'Modern UK home with rooftop solar panels under the GreenHomesNW Solar Plan' },
  { src: '/images/solar-house-1.png', alt: 'GreenHomesNW van outside a UK home with solar panels and battery storage' },
  { src: '/images/solar-house-2.png', alt: 'UK red-brick home with a full solar panel array on the roof' },
  { src: '/images/solar-installation.png', alt: 'Professional solar panel installation on a UK residential property' },
  { src: '/images/solar-working-1.png', alt: 'Technician installing solar panels on a UK residential roof' },
  { src: '/images/solar-working-2.png', alt: 'Accredited engineer fitting solar panels on a UK home' },
  { src: '/images/installation-process.png', alt: 'GreenHomesNW team installing solar panels on a UK property' },
]

const postHeroImages: SiteImage[] = [
  // Services (5)
  { src: '/images/application-step.png', alt: 'Apply for solar panels from £0 upfront on tablet' },
  { src: '/images/air-source-heat-pump-1.png', alt: 'Air source heat pump grants' },
  { src: '/images/ftch.png', alt: 'Full-time central heating' },
  { src: '/images/non-condensing-boiler-1.png', alt: 'Non-condensing boiler replacement' },
  { src: '/images/home-assessment.png', alt: 'Free home energy assessment' },
  // How it works (4)
  { src: '/images/consultation-design.png', alt: 'Property survey and custom solar system design' },
  { src: '/images/pay-option-2.png', alt: 'Secure online Solar Plan application on tablet' },
  { src: '/images/battery-storage.png', alt: 'Solar and battery system installed in your UK home' },
  { src: '/images/happy-family-relax.png', alt: 'UK family enjoying energy savings from their solar plan' },
  // What's included (4)
  { src: '/images/battery-storage-section.png', alt: 'Solar PV and battery system installation' },
  { src: '/images/performance-monitoring.png', alt: 'Remote performance monitoring of your solar system' },
  { src: '/images/non-condensing-boiler-2.png', alt: 'Maintenance and repairs covered under your Solar Plan' },
  { src: '/images/happy-customer-2.png', alt: 'Equipment replacement protection for your plan lifetime' },
  // Payment, about, CTA (3)
  { src: '/images/pay-option-1.png', alt: 'Example monthly payment options for a solar and battery system' },
  { src: '/images/happy-customer-1.png', alt: 'Happy UK homeowners who have switched to clean energy with GreenHomesNW' },
  { src: '/images/cta-section.png', alt: 'GreenHomesNW solar home at sunset — check your eligibility for year-one savings' },
]

if (process.env.NODE_ENV !== 'production') {
  const seen = new Set<string>()
  for (const image of postHeroImages) {
    if (seen.has(image.src)) {
      throw new Error(`Duplicate post-hero image: ${image.src}`)
    }
    if (heroSlides.some((slide) => slide.src === image.src)) {
      throw new Error(`Post-hero image reuses hero slide: ${image.src}`)
    }
    seen.add(image.src)
  }
}

export const howItWorksImages = postHeroImages.slice(5, 9)

export const whatsIncludedImages = postHeroImages.slice(9, 13)

export const serviceCardImages: Record<string, SiteImage> = {
  solar: postHeroImages[0],
  'heat-pump': postHeroImages[1],
  'central-heating': postHeroImages[2],
  'non-condensing-boiler': postHeroImages[3],
  assessment: postHeroImages[4],
}

export const aboutImage = postHeroImages[14]

export const paymentImage = postHeroImages[13]

export const ctaImage = postHeroImages[15]

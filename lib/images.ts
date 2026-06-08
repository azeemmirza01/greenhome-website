export type SiteImage = {
  src: string
  alt: string
}

/** Hero carousel — solar images only, each used once */
export const heroSlides: SiteImage[] = [
  { src: '/images/hero-section.png', alt: 'Modern UK home with rooftop solar panels under the GreenHomesNW Solar Plan' },
  { src: '/images/solar-house-1.png', alt: 'GreenHomesNW van outside a UK home with solar panels and battery storage' },
  { src: '/images/solar-house-2.png', alt: 'UK red-brick home with a full solar panel array on the roof' },
  { src: '/images/solar-installation.png', alt: 'Professional solar panel installation on a UK residential property' },
  { src: '/images/solar-working-1.png', alt: 'Technician installing solar panels on a UK residential roof' },
  { src: '/images/solar-working-2.png', alt: 'Accredited engineer fitting solar panels on a UK home' },
  { src: '/images/installation-process.png', alt: 'GreenHomesNW team installing solar panels on a UK property' },
]

/** Service detail page banners — unique per service */
export const serviceImages: Record<string, SiteImage> = {
  'solar-panels-on-lease': {
    src: '/images/happy-customer-3.png',
    alt: 'Happy UK homeowners with their new solar-powered home',
  },
  'air-source-heat-pump-grants': {
    src: '/images/air-source-heat-pump-2.png',
    alt: 'Air source heat pump servicing by a GreenHomesNW engineer',
  },
  'full-time-central-heating': {
    src: '/images/ftch.png',
    alt: 'GreenHomesNW engineer setting up smart central heating controls',
  },
  'non-condensing-boiler': {
    src: '/images/non-condensing-boiler-2.png',
    alt: 'Non-condensing boiler replacement and diagnostics by a qualified engineer',
  },
}

/** How it works — one image per step */
export const howItWorksImages: SiteImage[] = [
  { src: '/images/consultation-design.png', alt: 'Property survey and custom solar system design' },
  { src: '/images/application-step.png', alt: 'Secure online Solar Plan application' },
  { src: '/images/battery-storage.png', alt: 'Solar and battery system installed in your UK home' },
  { src: '/images/happy-family-relax.png', alt: 'UK family enjoying energy savings from their solar plan' },
]

/** What's included — one image per item */
export const whatsIncludedImages: SiteImage[] = [
  { src: '/images/battery-storage-section.png', alt: 'Solar PV and battery system installation' },
  { src: '/images/performance-monitoring.png', alt: 'Remote performance monitoring of your solar system' },
  { src: '/images/non-condensing-boiler-1.png', alt: 'Maintenance and repairs covered under your Solar Plan' },
  { src: '/images/non-condensing-boiler-3.png', alt: 'Equipment replacement protection for your plan lifetime' },
]

/** Services cards — one image per card */
export const serviceCardImages: Record<string, SiteImage> = {
  solar: { src: '/images/pay-option-1.png', alt: 'Solar panels from £0 upfront with flexible monthly payments' },
  'heat-pump': { src: '/images/air-source-heat-pump-1.png', alt: 'Air source heat pump grants' },
  'central-heating': { src: '/images/ftch.png', alt: 'Full-time central heating' },
  'non-condensing-boiler': { src: '/images/non-condensing-boiler-1.png', alt: 'Non-condensing boiler replacement' },
  assessment: { src: '/images/home-assessment.png', alt: 'Free home energy assessment' },
}

export const aboutImage: SiteImage = {
  src: '/images/happy-customer-1.png',
  alt: 'Happy UK homeowners who have switched to clean energy with GreenHomesNW',
}

export const paymentImage: SiteImage = {
  src: '/images/pay-option-2.png',
  alt: 'Flexible monthly Solar Plan payment options on tablet',
}

export const ctaImage: SiteImage = {
  src: '/images/cta-section.png',
  alt: 'GreenHomesNW solar home at sunset — check your eligibility for year-one savings',
}

export const quoteImage: SiteImage = {
  src: '/images/home-assessment.png',
  alt: 'Book a free home energy assessment and eligibility check',
}

/** Gallery — six unique images, each shown once in this grid */
export const galleryImages: SiteImage[] = [
  { src: '/images/happy-customer-2.png', alt: 'Happy UK couple with their modern solar-powered home' },
  { src: '/images/solar-installation.png', alt: 'Professional rooftop solar panel installation' },
  { src: '/images/solar-house-1.png', alt: 'GreenHomesNW solar and battery installation at a UK home' },
  { src: '/images/performance-monitoring.png', alt: 'Live solar generation and savings monitoring app' },
  { src: '/images/battery-storage-section.png', alt: 'Indoor battery storage and inverter system' },
  { src: '/images/pay-option-1.png', alt: 'Solar plan savings and flexible monthly payment example' },
]

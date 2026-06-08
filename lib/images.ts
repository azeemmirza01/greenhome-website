export type SiteImage = {
  src: string
  alt: string
}

/** Hero carousel — only images where solar panels are clearly visible */
export const heroSlides: SiteImage[] = [
  { src: '/images/hero-section.png', alt: 'Modern UK home with rooftop solar panels under the GreenHomesNW Solar Plan' },
  { src: '/images/solar-installation.png', alt: 'Professional solar panel installation on a UK residential property' },
  { src: '/images/installation-process.png', alt: 'Accredited engineers installing solar panels on a UK home' },
  { src: '/images/website-post-3.png', alt: 'UK home with solar PV panels on the roof' },
  { src: '/images/website-post-4.png', alt: 'Red-brick UK house with a full solar panel array on the roof' },
  { src: '/images/website-post-7.png', alt: 'Happy UK homeowners in front of their solar-powered home' },
  { src: '/images/website-post-8.png', alt: 'Technician installing solar panels on a UK residential roof' },
]

export const serviceImages: Record<string, SiteImage> = {
  'solar-panels-on-lease': {
    src: '/images/solar-installation.png',
    alt: 'Solar panels on lease with no upfront cost for UK homeowners',
  },
  'air-source-heat-pump-grants': {
    src: '/images/website-post-2.png',
    alt: 'Air source heat pump grant support through the UK Boiler Upgrade Scheme',
  },
  'full-time-central-heating': {
    src: '/images/website-post-4.png',
    alt: 'Full-time central heating installation and upgrade for UK homes',
  },
  'non-condensing-boiler': {
    src: '/images/website-post-5.png',
    alt: 'Non-condensing boiler replacement with modern efficient heating',
  },
}

export const howItWorksImages: SiteImage[] = [
  { src: '/images/consultation-design.png', alt: 'Property survey and custom solar system design' },
  { src: '/images/application-step.png', alt: 'Secure online Solar Plan application' },
  { src: '/images/installation-process.png', alt: 'Professional solar installation by accredited engineers' },
  { src: '/images/battery-storage.png', alt: 'Ongoing monitoring, maintenance and energy savings' },
]

export const whatsIncludedImages: SiteImage[] = [
  { src: '/images/solar-installation.png', alt: 'Solar PV and battery system installation' },
  { src: '/images/website-post-7.png', alt: 'Remote performance monitoring of your solar system' },
  { src: '/images/installation-process.png', alt: 'Maintenance and repairs covered under your Solar Plan' },
  { src: '/images/battery-storage.png', alt: 'Equipment replacement protection for your plan lifetime' },
]

export const serviceCardImages: Record<string, SiteImage> = {
  solar: { src: '/images/solar-installation.png', alt: 'Solar panels from £0 upfront' },
  'heat-pump': { src: '/images/website-post-2.png', alt: 'Air source heat pump grants' },
  'central-heating': { src: '/images/website-post-4.png', alt: 'Full-time central heating' },
  'non-condensing-boiler': { src: '/images/website-post-5.png', alt: 'Non-condensing boiler replacement' },
  assessment: { src: '/images/consultation-design.png', alt: 'Free home energy assessment' },
}

export const aboutImage: SiteImage = {
  src: '/images/installation-process.png',
  alt: 'GreenHomesNW accredited engineers installing renewable energy for UK homeowners',
}

export const paymentImage: SiteImage = {
  src: '/images/battery-storage.png',
  alt: 'Solar and battery system with flexible monthly payment options',
}

export const ctaImage: SiteImage = {
  src: '/images/hero-section.png',
  alt: 'Check your eligibility for the GreenHomesNW Solar Plan',
}

export const galleryImages: SiteImage[] = [
  { src: '/images/website-post-3.png', alt: 'Solar PV reducing UK household energy bills' },
  { src: '/images/consultation-design.png', alt: 'Free home energy consultation and system design' },
  { src: '/images/website-post-6.png', alt: 'Professional renewable energy installation across the UK' },
  { src: '/images/application-step.png', alt: 'Quick online Solar Plan application' },
  { src: '/images/website-post-7.png', alt: 'Solar system monitoring and maintenance included' },
  { src: '/images/hero-section.png', alt: 'GreenHomesNW all-inclusive Solar Plan for UK homes' },
]

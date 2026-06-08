import Link from 'next/link'
import HeroCarousel from '@/components/HeroCarousel'
import MaterialIcon from '@/components/MaterialIcon'

export default function Hero() {
  return (
    <section className="relative box-border flex min-h-[100dvh] min-h-screen flex-col justify-center overflow-hidden px-4 pb-10 pt-[var(--nav-height)] md:px-margin-desktop md:pb-16">
      <div className="absolute inset-0 z-0">
        <HeroCarousel />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent" aria-hidden />
      </div>

      <div className="hero-stagger relative z-10 w-full max-w-3xl">
        <div className="mb-4 inline-flex max-w-full flex-wrap items-center gap-1.5 rounded-full border border-primary/20 bg-primary-container/20 px-2.5 py-1.5 text-primary sm:mb-6 sm:gap-2 sm:px-3 sm:py-1">
          <MaterialIcon name="solar_power" className="shrink-0 text-sm" />
          <span className="min-w-0 text-[10px] font-semibold uppercase leading-snug tracking-wide sm:text-xs md:text-sm md:tracking-wider">
            <span className="sm:hidden">Solar Plan · UK-Wide · £0 Upfront</span>
            <span className="hidden sm:inline">All-Inclusive Solar Plan · UK-Wide · From £0 Upfront</span>
          </span>
        </div>
        <h1 className="mb-4 text-[1.75rem] font-bold leading-tight tracking-tight sm:mb-6 sm:text-[2.5rem] md:text-[3.5rem] md:leading-[4rem]">
          <span>Easy, Affordable Solar for</span>
          <br />
          <span className="text-gradient">Homeowners Across the UK</span>
        </h1>
        <p className="mb-8 max-w-xl text-base leading-relaxed text-on-surface-variant sm:mb-10 sm:text-body-lg">
          Switch to clean, green power and start cutting your energy bills, with no upfront cost. Our all-inclusive Solar Plan covers your custom solar PV and battery system, plus installation, monitoring, and maintenance for the lifetime of your plan. You keep the savings and export payments. We take care of the rest.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/quote"
            className="shimmer-btn flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-on-primary shadow-lg transition-all hover:scale-105 active:scale-95 sm:px-8 sm:py-4 sm:text-label-bold"
          >
            Check My Eligibility, It&apos;s Free
            <MaterialIcon name="arrow_forward" />
          </Link>
          <Link
            href="/#how-it-works"
            className="flex items-center justify-center rounded-full border-2 border-primary px-6 py-3.5 text-sm font-semibold text-primary transition-all hover:bg-primary/5 sm:px-8 sm:py-4 sm:text-label-bold"
          >
            See How the Solar Plan Works
          </Link>
        </div>
      </div>
    </section>
  )
}

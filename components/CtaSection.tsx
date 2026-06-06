import Link from 'next/link'
import { siteConfig } from '@/lib/site'

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-primary-fixed px-4 py-24 md:px-margin-desktop">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)]"
        aria-hidden
      />
      <div className="reveal relative z-10 mx-auto max-w-container-max text-center active">
        <h2 className="mb-6 text-[36px] font-bold leading-tight text-on-primary-fixed md:text-[52px]">
          Find Out If You Could Make a Net Saving From Year One
        </h2>
        <p className="mx-auto mb-6 max-w-2xl text-body-lg font-semibold text-on-primary-fixed-variant">
          Free eligibility check · No obligation · No impact on credit score · Instant decisions
        </p>
        <p className="mx-auto mb-12 max-w-2xl text-body-md text-on-primary-fixed-variant">
          Whether you’re interested in solar panels with no upfront cost, or want to find out about the Boiler Upgrade
          Scheme for an air source heat pump, {siteConfig.name} will guide you through every step, for free.
        </p>
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
          <Link
            href="/quote"
            className="shimmer-btn rounded-full bg-primary px-10 py-5 text-lg font-semibold text-on-primary shadow-xl transition-all hover:scale-105 active:scale-95"
          >
            Check My Eligibility Now, It’s Free
          </Link>
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
            className="rounded-full bg-surface-container-lowest px-10 py-5 text-lg font-semibold text-on-surface transition-all hover:scale-105 hover:bg-surface-container-low active:scale-95"
          >
            Call {siteConfig.phoneDisplay}
          </a>
        </div>
        <p className="mt-6 text-sm text-on-primary-fixed-variant">
          Lines open {siteConfig.hours}
        </p>
        <p className="mx-auto mt-10 max-w-2xl text-sm text-on-primary-fixed-variant">
          Trusted by homeowners and landlords across England, Scotland &amp; Wales.
        </p>
      </div>
    </section>
  )
}

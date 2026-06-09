import Link from 'next/link'
import CtaCarousel from '@/components/CtaCarousel'
import { siteConfig } from '@/lib/site'

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-margin-desktop">
      <CtaCarousel />
      <div
        className="pointer-events-none absolute inset-0 bg-primary-fixed/50"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(163,246,156,0.15),rgba(0,34,4,0.35))]"
        aria-hidden
      />
      <div className="reveal-scale relative z-10 mx-auto max-w-container-max text-center">
        <h2 className="mb-6 text-[36px] font-bold leading-tight text-white md:text-[52px]">
          Find Out If You Could Make a Net Saving From Year One
        </h2>
        <p className="mx-auto mb-6 max-w-2xl text-body-lg font-semibold text-black">
          Free eligibility check · No obligation · No impact on credit score · Instant decisions
        </p>
        <p className="mx-auto mb-12 max-w-2xl text-body-md text-black">
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
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-surface-container-lowest px-10 py-5 text-lg font-semibold text-on-surface transition-all hover:scale-105 hover:bg-surface-container-low active:scale-95"
          >
            Call
          </a>
        </div>
        <p className="mt-6 text-sm text-black">
          Lines open {siteConfig.hours}
        </p>
        <p className="mx-auto mt-10 max-w-2xl text-sm text-black">
          Trusted by homeowners and landlords across England, Scotland &amp; Wales.
        </p>
      </div>
    </section>
  )
}

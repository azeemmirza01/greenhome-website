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
        <h2 className="mb-8 text-[40px] font-bold leading-tight text-on-primary-fixed md:text-[56px]">
          Get Your Free UK Home Survey
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-body-lg text-on-primary-fixed-variant">
          Join UK homeowners cutting bills with MCS-certified solar and heat pumps. Free quote, SEG and BUS guidance, callback
          within 24 hours (Mon to Fri).
        </p>
        <div className="flex flex-col justify-center gap-6 sm:flex-row">
          <Link
            href="/quote"
            className="shimmer-btn rounded-full bg-primary px-10 py-5 text-lg font-semibold text-on-primary shadow-xl transition-all hover:scale-105 active:scale-95"
          >
            Request a Free Quote
          </Link>
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
            className="rounded-full bg-surface-container-lowest px-10 py-5 text-lg font-semibold text-on-surface transition-all hover:scale-105 hover:bg-surface-container-low active:scale-95"
          >
            Talk to an Expert
          </a>
        </div>
      </div>
    </section>
  )
}

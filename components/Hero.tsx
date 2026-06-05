import Image from 'next/image'
import Link from 'next/link'
import MaterialIcon from '@/components/MaterialIcon'

export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[600px] items-center justify-start overflow-hidden px-4 md:px-margin-desktop">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="UK home with solar panels and an air source heat pump funded by a government grant"
          fill
          priority
          className="object-cover scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent" aria-hidden />
      </div>

      <div className="relative z-10 max-w-3xl reveal active">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-container/20 px-3 py-1 text-primary">
          <MaterialIcon name="energy_savings_leaf" className="text-sm" />
          <span className="text-label-bold uppercase tracking-wider">£7,500 Government Grant Available</span>
        </div>
        <h1 className="mb-6 text-[40px] font-bold leading-tight tracking-tight md:text-[56px] md:leading-[64px]">
          <span className="md:whitespace-nowrap">Slash Your Energy Bills.</span>
          <br />
          <span className="text-gradient">No Upfront Cost.</span>
        </h1>
        <p className="mb-10 max-w-lg text-body-lg text-on-surface-variant">
          Claim air source heat pump grants worth up to £7,500 and get MCS-certified solar panels on lease with zero upfront cost. Government-backed renewable energy for UK homeowners.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/quote"
            className="shimmer-btn flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-label-bold text-on-primary shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            Check Your Eligibility
            <MaterialIcon name="arrow_forward" />
          </Link>
          <Link
            href="/#services"
            className="flex items-center justify-center rounded-full border-2 border-primary px-8 py-4 text-label-bold text-primary transition-all hover:bg-primary/5"
          >
            See How It Works
          </Link>
        </div>
      </div>
    </section>
  )
}

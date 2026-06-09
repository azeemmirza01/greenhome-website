import Image from 'next/image'
import MaterialIcon from '@/components/MaterialIcon'
import { aboutImage } from '@/lib/images'
import { siteConfig } from '@/lib/site'

const points = [
  'MCS-certified and Flexi-Orb accredited installation partners',
  'Members of the HIES or RECC consumer code',
  `FCA-regulated finance from our partner ${siteConfig.financePartner}`,
  'Solar Plans from £0 upfront',
  'All monitoring, maintenance & repairs included',
  'Rated 4.9 out of 5 by verified customers',
  'Serving homeowners across England, Scotland & Wales',
]

export default function About() {
  return (
    <section className="bg-surface-container-low py-24" id="about">
      <div className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-20 px-4 md:grid-cols-2 md:px-margin-desktop">
        <div className="reveal-left group relative h-[560px] overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src={aboutImage.src}
            alt={aboutImage.alt}
            fill
            className="img-zoom object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="glass absolute bottom-2 left-4 max-w-xs rounded-2xl p-6">
            <div className="mb-2 flex items-center gap-3">
              <span className="text-3xl font-bold text-primary">4.9★</span>
              <span className="text-body-md font-semibold">Verified customer rating</span>
            </div>
            <p className="text-sm text-on-surface-variant">
              Trusted by homeowners and landlords across the UK.
            </p>
          </div>
        </div>

        <div className="reveal-right space-y-8">
          <div className="space-y-5">
            <h2 className="text-headline-lg">The UK’s Trusted Solar &amp; Renewable Energy Partner</h2>
            <p className="text-body-lg text-on-surface-variant">
              {siteConfig.name} helps homeowners, landlords, and property owners across the UK access clean, affordable
              solar energy with no upfront cost and no hassle. We work with accredited partners who are fully insured,
              certified by MCS or Flexi-Orb, and members of a trusted consumer code (HIES or RECC).
            </p>
            <p className="text-body-md text-on-surface-variant">
              Our all-inclusive Solar Plan, powered by our finance partner, covers the design, installation, monitoring,
              maintenance, and repair of your solar PV and battery system for the lifetime of your plan, so your costs
              stay predictable and your savings start from day one. We also help eligible homeowners explore air source
              heat pump support under the Government’s Boiler Upgrade Scheme (BUS). One free call is all it takes to find
              out which options are right for your property, with no pressure and no obligation to proceed.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm text-on-surface-variant">
                <MaterialIcon name="check_circle" className="mt-0.5 text-base text-primary" filled />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

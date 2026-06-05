import Image from 'next/image'
import MaterialIcon from '@/components/MaterialIcon'
import { siteConfig } from '@/lib/site'
import { ukMarket } from '@/lib/uk'

export default function About() {
  return (
    <section className="bg-surface-container-low py-24" id="about">
      <div className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-20 px-4 md:grid-cols-2 md:px-margin-desktop">
        <div className="reveal relative h-[500px] overflow-hidden rounded-3xl shadow-2xl active">
          <Image
            src="/images/about.png"
            alt="Smart home energy monitor in a UK property"
            fill
            className="object-cover transition-transform duration-[5s] hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="glass absolute bottom-8 left-8 max-w-xs rounded-2xl p-6">
            <div className="mb-2 flex items-center gap-4">
              <span className="text-3xl font-bold text-primary">15+</span>
              <span className="text-body-md font-semibold">Years in the UK</span>
            </div>
            <p className="text-sm text-on-surface-variant">
              Trusted by homeowners across {ukMarket.nations} for grant-funded heat pumps and solar.
            </p>
          </div>
        </div>

        <div className="reveal space-y-8 active">
          <div>
            <h2 className="mb-6 text-headline-lg">Renewable Energy Made Simple and Affordable</h2>
            <p className="text-body-lg text-on-surface-variant">
              At {siteConfig.name}, we help UK homeowners, landlords, and families access government-backed renewable
              energy without the usual cost or hassle. We handle your Boiler Upgrade Scheme grant from start to finish
              and arrange solar panels on lease with no upfront cost, so cleaner energy and lower bills are within reach
              for every home.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="group flex gap-4">
              <MaterialIcon name="verified" className="text-primary transition-transform group-hover:scale-110" />
              <div>
                <h3 className="font-semibold">MCS Certified</h3>
                <p className="text-sm text-on-surface-variant">
                  Required to unlock the £7,500 grant and Smart Export Guarantee payments.
                </p>
              </div>
            </div>
            <div className="group flex gap-4">
              <MaterialIcon name="location_on" className="text-primary transition-transform group-hover:scale-110" />
              <div>
                <h3 className="font-semibold">UK-Wide Coverage</h3>
                <p className="text-sm text-on-surface-variant">
                  Local teams in 20+ cities across {ukMarket.nationsShort}, plus Northern Ireland surveys.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

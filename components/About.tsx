import Image from 'next/image'
import MaterialIcon from '@/components/MaterialIcon'
import { siteConfig } from '@/lib/site'

export default function About() {
  return (
    <section className="bg-surface-container-low py-24" id="about">
      <div className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-20 px-4 md:grid-cols-2 md:px-margin-desktop">
        <div className="reveal relative h-[500px] overflow-hidden rounded-3xl shadow-2xl active">
          <Image
            src="/images/about.png"
            alt="Sustainable smart home technology in a modern UK property"
            fill
            className="object-cover transition-transform duration-[5s] hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="glass absolute bottom-8 left-8 max-w-xs rounded-2xl p-6">
            <div className="mb-2 flex items-center gap-4">
              <span className="text-3xl font-bold text-primary">15+</span>
              <span className="text-body-md font-semibold">Years of Trust</span>
            </div>
            <p className="text-sm text-on-surface-variant">
              Providing sustainable energy solutions to over 5,000 households across the Northwest.
            </p>
          </div>
        </div>

        <div className="reveal space-y-8 active">
          <div>
            <h2 className="mb-6 text-headline-lg">Our Eco-Friendly Mission</h2>
            <p className="text-body-lg text-on-surface-variant">
              At {siteConfig.name}, we believe luxury and sustainability belong together. Our mission is to engineer the
              transition to renewable energy through elegant, high-performance solutions that respect the environment
              while enhancing your lifestyle. Every install is MCS certified and meets UK building standards.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="group flex gap-4">
              <MaterialIcon name="verified" className="text-primary transition-transform group-hover:scale-110" />
              <div>
                <h3 className="font-semibold">Certified Tech</h3>
                <p className="text-sm text-on-surface-variant">Tier-1 solar equipment and battery systems.</p>
              </div>
            </div>
            <div className="group flex gap-4">
              <MaterialIcon name="local_shipping" className="text-primary transition-transform group-hover:scale-110" />
              <div>
                <h3 className="font-semibold">Local Experts</h3>
                <p className="text-sm text-on-surface-variant">Proudly serving the PNW community since {siteConfig.foundingYear}.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

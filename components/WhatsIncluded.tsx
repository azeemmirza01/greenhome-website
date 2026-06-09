import Image from 'next/image'
import MaterialIcon from '@/components/MaterialIcon'
import { whatsIncludedImages } from '@/lib/images'

const items = [
  {
    icon: 'solar_power',
    title: 'System Installation',
    text: 'Solar PV and battery system from leading manufacturers, installed to the highest industry standards by skilled engineers.',
  },
  {
    icon: 'monitoring',
    title: 'Performance Monitoring',
    text: 'Remote monitoring and periodic inspections ensure optimal efficiency and identify issues before they impact performance.',
  },
  {
    icon: 'handyman',
    title: 'Unlimited Repairs',
    text: 'System maintenance and repairs (parts, labour and access) are covered for your plan term with no callout fees or hidden charges.',
  },
  {
    icon: 'verified_user',
    title: 'Replacement Protection',
    text: 'We’ll replace any equipment that fails within your plan lifetime at no extra cost, even if the manufacturer warranty has expired.',
  },
]

const sideImages = [whatsIncludedImages[1], whatsIncludedImages[2]]

export default function WhatsIncluded() {
  return (
    <section className="mx-auto max-w-container-max px-4 py-24 md:px-margin-desktop" id="whats-included">
      <div className="reveal mx-auto mb-16 max-w-2xl text-center">
        <h2 className="mb-4 text-headline-lg">What’s Included in Your Solar Plan</h2>
        <p className="text-on-surface-variant">
          Gain energy independence and future-proof your home with reliable service and predictable costs.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-gutter lg:grid-cols-2 lg:gap-12">
        <div className="order-2 flex flex-col gap-gutter lg:order-1 lg:sticky lg:top-[calc(var(--nav-height)+2rem)]">
          {sideImages.map((img, i) => (
            <div
              key={img.src}
              className="reveal group relative aspect-[4/3] overflow-hidden rounded-3xl shadow-premium"
              style={{ '--reveal-delay': `${(i + 1) * 100}ms` } as React.CSSProperties}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="img-zoom object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>

        <div className="order-1 flex flex-col gap-gutter lg:order-2">
          {items.map((f, i) => (
            <div
              key={f.title}
              className="reveal hover-lift glass rounded-3xl p-8 shadow-premium"
              style={{ '--reveal-delay': `${i * 100}ms` } as React.CSSProperties}
            >
              <MaterialIcon name={f.icon} className="mb-5 text-4xl text-primary" />
              <h3 className="mb-3 text-headline-md">{f.title}</h3>
              <p className="card-text text-body-md text-on-surface-variant">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

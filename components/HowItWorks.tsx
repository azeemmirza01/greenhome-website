import Image from 'next/image'
import MaterialIcon from '@/components/MaterialIcon'
import { howItWorksImages } from '@/lib/images'

const steps = [
  {
    num: '01',
    title: 'Design',
    detail:
      'Our installers will survey your property and design a system to suit your home and energy needs. They’ll provide detailed equipment specifications and energy-saving forecasts.',
    tags: [] as string[],
  },
  {
    num: '02',
    title: 'Apply',
    detail:
      'Alongside their quote, Our installers will send a personal link to apply for the Solar Plan. Complete our application, choose your plan, then you’re ready to sign our online agreement.',
    tags: ['Secure online application', 'Instant decisions', 'Won’t impact credit score', '14-day cooling off'],
  },
  {
    num: '03',
    title: 'Install',
    detail:
      'Your new system is installed and remote monitoring is set up. We get in touch to check that you’re happy with the work before your payments begin.',
    tags: ['Rated 4.9 / 5 on cleanliness, courtesy and promptness'],
  },
  {
    num: '04',
    title: 'Relax',
    detail:
      'It’s time to enjoy your energy savings. We’ll take care of system monitoring, maintenance and repairs, so you’re covered for the lifetime of your plan.',
    tags: [] as string[],
  },
]

const sideImages = [howItWorksImages[2], howItWorksImages[3]]

export default function HowItWorks() {
  return (
    <section className="bg-surface-container-low py-24" id="how-it-works">
      <div className="mx-auto max-w-container-max px-4 md:px-margin-desktop">
        <div className="reveal mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-headline-lg">How the Solar Plan Works</h2>
          <p className="text-on-surface-variant">
            We’re here to help you get a payment plan to fit your needs, hassle-free installation, and comfort
            around ongoing system performance and costs.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-gutter lg:grid-cols-2 lg:gap-12">
          <ol className="flex flex-col gap-gutter">
            {steps.map((s, i) => (
              <li
                key={s.num}
                className="reveal hover-lift glass rounded-3xl p-8 shadow-premium"
                style={{ '--reveal-delay': `${i * 100}ms` } as React.CSSProperties}
              >
                <span className="mb-4 block text-display-sm font-bold text-primary/30">{s.num}</span>
                <h3 className="mb-3 text-headline-md">{s.title}</h3>
                <p className="card-text text-body-md text-on-surface-variant">{s.detail}</p>
                {s.tags.length > 0 && (
                  <ul className="mt-5 space-y-2">
                    {s.tags.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-sm text-on-surface-variant">
                        <MaterialIcon name="check_circle" className="mt-0.5 text-base text-primary" filled />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>

          <div className="flex flex-col gap-gutter lg:sticky lg:top-[calc(var(--nav-height)+2rem)]">
            {sideImages.map((img, i) => (
              <div
                key={img.src}
                className="reveal group relative aspect-[4/3] overflow-hidden rounded-3xl shadow-premium"
                style={{ '--reveal-delay': `${(i + 2) * 100}ms` } as React.CSSProperties}
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
        </div>
      </div>
    </section>
  )
}

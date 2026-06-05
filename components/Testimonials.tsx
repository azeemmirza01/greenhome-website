'use client'

import { useRef } from 'react'
import MaterialIcon from '@/components/MaterialIcon'

const testimonials = [
  {
    quote:
      'We had no idea we qualified for the £7,500 heat pump grant until GREENHOMESNW checked. They sorted the whole Boiler Upgrade Scheme application and our heating bills dropped straight away.',
    name: 'Sarah Jenkins',
    location: 'Manchester, UK',
  },
  {
    quote:
      'Solar with no upfront cost sounded too good to be true, but it was simple. The lease was clear, the install was tidy, and our electricity bills came down from day one in Birmingham.',
    name: 'Michael Chen',
    location: 'Birmingham, UK',
  },
  {
    quote:
      'Clear pricing, no upfront cost, and SEG export showing on our bill within weeks. Brilliant service for our Brighton semi.',
    name: 'David Roberts',
    location: 'Brighton, UK',
  },
]

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: number) => {
    sliderRef.current?.scrollBy({ left: dir * 424, behavior: 'smooth' })
  }

  return (
    <section className="overflow-hidden bg-surface-container py-24" id="testimonials">
      <div className="mx-auto max-w-container-max px-4 md:px-margin-desktop">
        <div className="reveal mb-16 flex items-end justify-between active">
          <div>
            <h2 className="text-headline-lg">What Our Clients Say</h2>
            <p className="mt-2 text-on-surface-variant">Hear from UK homeowners who&apos;ve made the switch.</p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              aria-label="Previous testimonial"
              className="rounded-full border border-outline p-2 transition-all duration-300 hover:bg-primary hover:text-on-primary"
              onClick={() => scroll(-1)}
            >
              <MaterialIcon name="arrow_back" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              className="rounded-full border border-outline p-2 transition-all duration-300 hover:bg-primary hover:text-on-primary"
              onClick={() => scroll(1)}
            >
              <MaterialIcon name="arrow_forward" />
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="reveal flex gap-gutter overflow-x-auto pb-8 snap-x no-scrollbar active"
        >
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="min-w-[300px] snap-start rounded-3xl bg-surface-container-lowest p-8 shadow-premium transition-transform duration-300 hover:scale-[1.02] md:min-w-[400px]"
            >
              <div className="mb-4 flex text-tertiary" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <MaterialIcon key={i} name="star" filled className="text-tertiary" />
                ))}
              </div>
              <p className="mb-8 text-body-lg italic">&ldquo;{t.quote}&rdquo;</p>
              <footer>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-on-surface-variant">{t.location}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

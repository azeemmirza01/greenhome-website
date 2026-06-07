'use client'

import { useRef } from 'react'
import MaterialIcon from '@/components/MaterialIcon'

const testimonials = [
  {
    quote: 'Being able to spread payment while making savings made our decision simple.',
    name: 'Julie S',
    location: 'UK Homeowner · Verified Review',
  },
  {
    quote: 'We feel safe in the knowledge that our system is covered from now and into the future.',
    name: 'Roy W',
    location: 'UK Homeowner · Verified Review',
  },
  {
    quote: 'Easy process from start to finish.',
    name: 'Mathew T',
    location: 'UK Homeowner · Verified Review',
  },
  {
    quote: 'A great experience for such a major investment. I confidently recommend.',
    name: 'Michael R',
    location: 'UK Homeowner · Verified Review',
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
            <h2 className="text-headline-lg">What Our Customers Say</h2>
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
              <p className="card-text mb-8 text-body-lg italic">&ldquo;{t.quote}&rdquo;</p>
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

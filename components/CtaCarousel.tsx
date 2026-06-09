'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ctaSlides } from '@/lib/images'

const INTERVAL_MS = 5000

export default function CtaCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % ctaSlides.length)
    }, INTERVAL_MS)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="absolute inset-0" aria-hidden>
      {ctaSlides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt=""
          fill
          priority={i === 0}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          sizes="100vw"
        />
      ))}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2 md:bottom-8">
        {ctaSlides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show CTA slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? 'w-8 bg-primary' : 'w-2 bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

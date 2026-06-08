'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { heroSlides } from '@/lib/images'

const INTERVAL_MS = 5000

export default function HeroCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length)
    }, INTERVAL_MS)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="absolute inset-0" aria-hidden>
      {heroSlides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={i === 0}
          className={`object-cover scale-105 transition-opacity duration-1000 ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          sizes="100vw"
        />
      ))}
      <div className="absolute bottom-6 right-6 z-10 flex gap-2 md:bottom-8 md:right-8">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? 'w-8 bg-primary' : 'w-2 bg-on-surface/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

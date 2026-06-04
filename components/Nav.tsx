'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { siteConfig } from '@/lib/site'

const links = [
  { href: '/#services', label: 'Services' },
  { href: '/#about', label: 'About' },
  { href: '/#features', label: 'Features' },
  { href: '/locations', label: 'UK Locations' },
  { href: '/#testimonials', label: 'Testimonials' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 z-50 mx-auto flex w-full max-w-container-max -translate-x-1/2 left-1/2 items-center justify-between px-4 py-4 transition-all duration-300 md:px-margin-desktop glass ${
        scrolled ? 'py-2 shadow-lg !bg-white/85' : ''
      }`}
      aria-label="Main navigation"
    >
      <Link href="/" className="flex shrink-0 items-center gap-3" aria-label={`${siteConfig.name} home`}>
        <Image
          src="/images/navbar-logo-icon.png"
          alt=""
          width={56}
          height={48}
          className="h-12 w-14 object-contain"
          priority
          aria-hidden
        />
        <span className="text-xl font-bold tracking-tight text-primary md:text-headline-md">
          {siteConfig.name}
        </span>
      </Link>

      <div className="hidden items-center gap-8 md:flex">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="text-body-md text-on-surface-variant transition-colors hover:text-primary"
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/quote"
          className="shimmer-btn rounded-full bg-primary px-6 py-2.5 text-label-bold text-on-primary shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
        >
          Get a Quote
        </Link>
      </div>

      <button
        type="button"
        className="text-primary md:hidden"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span className="material-symbols-outlined">{open ? 'close' : 'menu'}</span>
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full flex flex-col gap-4 border-t border-outline-variant/30 bg-white/95 p-6 shadow-lg md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-body-md text-on-surface-variant"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/quote"
            className="rounded-full bg-primary px-6 py-3 text-center text-label-bold text-on-primary"
            onClick={() => setOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  )
}

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { siteConfig } from '@/lib/site'

const links = [
  { href: '/#services', label: 'Services' },
  { href: '/#how-it-works', label: 'How It Works' },
  { href: '/#payment-options', label: 'Payments' },
  { href: '/#about', label: 'About' },
  { href: '/#faq', label: 'FAQ' },
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
      className={`fixed top-0 z-50 mx-auto flex h-[var(--nav-height)] w-full max-w-container-max -translate-x-1/2 left-1/2 items-center justify-between px-4 transition-all duration-300 md:px-margin-desktop glass ${
        scrolled ? 'shadow-lg' : ''
      }`}
      aria-label="Main navigation"
    >
      <Link
        href="/"
        className="flex shrink-0 items-center gap-3 sm:gap-4"
        aria-label={`${siteConfig.name} home`}
      >
        <Image
          src="/images/Logoo.png"
          alt=""
          width={96}
          height={70}
          className="h-12 w-12 bg-transparent object-contain sm:h-14 sm:w-14 md:h-14 md:w-auto"
          priority
          unoptimized
          aria-hidden
        />
        <span
          className="inline-flex whitespace-nowrap text-lg font-bold leading-none tracking-tight sm:text-xl md:text-2xl"
          aria-hidden
        >
          <span className="text-[#2e7d32]">GREEN</span>
          <span className="text-[#0d1b2a]">HOMES</span>
          <span className="text-[#3a4859]">NW</span>
        </span>
      </Link>

      <div className="hidden items-center gap-6 lg:flex lg:gap-8">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="nav-link text-body-md text-on-surface-variant transition-colors hover:text-primary"
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
        className="text-primary lg:hidden"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span
          className="material-symbols-outlined normal-case"
          style={{ fontFamily: '"Material Symbols Outlined", sans-serif' }}
        >
          {open ? 'close' : 'menu'}
        </span>
      </button>

      {open && (
        <div className="animate-slide-down absolute left-0 right-0 top-full flex flex-col gap-4 border-t border-outline-variant/30 bg-white/95 p-6 shadow-lg lg:hidden">
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

import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="flex min-h-screen flex-col items-center justify-center px-4 pt-[var(--nav-height)] pb-24 text-center">
        <h1 className="mb-4 text-headline-lg">Page not found</h1>
        <p className="mb-8 max-w-md text-on-surface-variant">
          Sorry, we couldn&apos;t find that page. Try the homepage or check your eligibility for solar panels.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-primary px-8 py-3 font-semibold text-on-primary transition-all hover:scale-105"
          >
            Go to homepage
          </Link>
          <Link
            href="/quote"
            className="rounded-full border-2 border-primary px-8 py-3 font-semibold text-primary transition-all hover:bg-primary/5"
          >
            Check eligibility
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

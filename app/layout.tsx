import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import JsonLd from '@/components/JsonLd'
import { faqPageSchema, organizationSchema, websiteSchema } from '@/lib/schema'
import { siteConfig } from '@/lib/site'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#0d631b',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'solar panels UK',
    'MCS certified solar installer',
    'home battery storage UK',
    'sustainable home upgrades',
    'air source heat pump UK',
    'SEG smart export guarantee',
    'solar installation London',
    'green home energy',
    'net zero homes UK',
    'EPC improvement solar',
    siteConfig.name,
  ],
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [{ url: '/images/hero.png', width: 1200, height: 630, alt: 'Sustainable UK eco home' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — UK Sustainable Home Energy`,
    description: siteConfig.description,
    images: ['/images/hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: { canonical: siteConfig.url },
  icons: { icon: '/images/navbar-logo-icon.png', apple: '/images/navbar-logo-icon.png' },
  category: 'Home Improvement',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content="United Kingdom" />
        <meta name="ICBM" content="51.5074, -0.1278" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM site summary" />
      </head>
      <body className="font-sans">
        <JsonLd data={[organizationSchema(), websiteSchema(), faqPageSchema()]} />
        {children}
      </body>
    </html>
  )
}

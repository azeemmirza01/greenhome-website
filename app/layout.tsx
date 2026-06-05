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
    default: 'Heat Pump Grants & No-Cost Solar | GREENHOMESNW',
    template: `%s | ${siteConfig.name}`,
  },
  description:
    'Claim air source heat pump grants up to £7,500 and get solar panels on lease with no upfront cost. MCS-certified UK installer. Free eligibility check.',
  keywords: [
    'air source heat pump grant UK',
    'government heat pump grant',
    'free air source heat pump',
    'Boiler Upgrade Scheme',
    'solar panels on lease',
    'no upfront cost solar panels',
    'solar panel financing UK',
    'renewable energy solutions UK',
    'reduce energy bills UK',
    'green energy grants',
    'MCS certified installer UK',
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
    title: `${siteConfig.name} | UK Sustainable Home Energy`,
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
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
        <meta name="geo.region" content="GB-BUR" />
        <meta name="geo.placename" content="Bury, England" />
        <meta name="ICBM" content="53.5933, -2.2966" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM site summary" />
      </head>
      <body className="font-sans">
        <JsonLd data={[organizationSchema(), websiteSchema(), faqPageSchema()]} />
        {children}
      </body>
    </html>
  )
}

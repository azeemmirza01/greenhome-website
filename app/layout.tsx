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
    default: 'Solar Panels With No Upfront Cost UK | GreenHomesNW',
    template: `%s | ${siteConfig.name}`,
  },
  description:
    'GreenHomesNW helps homeowners across the UK get solar panels with no upfront cost through an all-inclusive Solar Plan that is installed, monitored and maintained. Check your eligibility free.',
  keywords: [
    'solar panels no upfront cost',
    'solar panels on lease',
    'solar panels UK',
    'solar panels on lease UK',
    'all-inclusive Solar Plan',
    'solar PV and battery',
    'Smart Export Guarantee',
    'air source heat pump grant',
    'Boiler Upgrade Scheme',
    'MCS certified installer',
    'reduce energy bills UK',
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
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: `${siteConfig.name} logo` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Solar with No Upfront Cost`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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

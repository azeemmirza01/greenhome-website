import { NextResponse } from 'next/server'
import { siteConfig } from '@/lib/site'

export const runtime = 'nodejs'

type QuotePayload = {
  name?: string
  email?: string
  phone?: string
  postcode?: string
  service?: string
  message?: string
  city?: string
  company?: string // honeypot
}

export async function POST(req: Request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY

  if (!accessKey) {
    return NextResponse.json(
      { success: false, message: 'Email is not configured yet. Set WEB3FORMS_ACCESS_KEY.' },
      { status: 500 },
    )
  }

  let data: QuotePayload
  try {
    data = (await req.json()) as QuotePayload
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid request.' }, { status: 400 })
  }

  // Honeypot: silently accept bot submissions without emailing.
  if (data.company) {
    return NextResponse.json({ success: true })
  }

  const name = data.name?.trim()
  const email = data.email?.trim()
  const phone = data.phone?.trim()

  if (!name || !email || !phone) {
    return NextResponse.json(
      { success: false, message: 'Name, email and phone are required.' },
      { status: 400 },
    )
  }

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Postcode: ${data.postcode?.trim() || '—'}`,
    `Service interest: ${data.service?.trim() || '—'}`,
    data.city ? `Location: ${data.city}` : null,
    '',
    'Additional details:',
    data.message?.trim() || '(none)',
  ].filter(Boolean)

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `New quote enquiry from ${name}`,
      from_name: `${siteConfig.name} website`,
      replyto: email,
      message: lines.join('\n'),
    }),
  })

  const result = await res.json().catch(() => ({}))

  if (!res.ok || !result?.success) {
    return NextResponse.json(
      { success: false, message: 'Could not send your enquiry. Please try again or call us.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ success: true })
}

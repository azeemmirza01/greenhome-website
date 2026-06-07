'use client'

import { useState } from 'react'
import MaterialIcon from '@/components/MaterialIcon'
import { siteConfig } from '@/lib/site'

type Props = {
  city?: string
  defaultPostcode?: string
  hideTitle?: boolean
}

const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

export default function LeadQuoteForm({ city, defaultPostcode = '', hideTitle = false }: Props) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (loading) return
    setLoading(true)
    setError(null)

    const formEl = e.currentTarget
    const form = new FormData(formEl)
    const name = String(form.get('name') ?? '').trim()
    const email = String(form.get('email') ?? '').trim()
    const phone = String(form.get('phone') ?? '').trim()
    const company = String(form.get('company') ?? '').trim()

    if (company) {
      setSubmitted(true)
      return
    }

    if (!accessKey) {
      setError('Form is not configured yet. Please call us or email instead.')
      setLoading(false)
      return
    }

    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Postcode: ${String(form.get('postcode') ?? '').trim() || 'Not provided'}`,
      `Service interest: ${String(form.get('service') ?? '').trim() || 'Not provided'}`,
      city ? `Location: ${city}` : null,
      '',
      'Additional details:',
      String(form.get('message') ?? '').trim() || '(none)',
    ].filter(Boolean)

    try {
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
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data?.success) {
        throw new Error('Could not send your enquiry. Please try again or call us.')
      }
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="glass rounded-3xl p-10 text-center shadow-premium" role="status">
        <MaterialIcon name="check_circle" className="mb-4 text-5xl text-primary" />
        <h3 className="mb-2 text-headline-md">Thank you. We&apos;ll be in touch within 24 hours.</h3>
        <p className="text-on-surface-variant">A GREENHOMESNW energy advisor will contact you to arrange your free survey.</p>
      </div>
    )
  }

  return (
    <form
      className="glass rounded-3xl p-8 shadow-premium md:p-10"
      onSubmit={handleSubmit}
      aria-label="Request a free quote"
    >
      {!hideTitle && (
        <div className="mb-8">
          <h2 className="text-headline-lg">Check Your Eligibility</h2>
          {city && (
            <p className="mt-2 text-on-surface-variant">
              Heat pump grants and no upfront cost solar in <strong>{city}</strong>, UK
            </p>
          )}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-label-bold uppercase tracking-wider text-on-surface-variant">
            Full name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="w-full rounded-lg border border-outline-variant/50 bg-surface-container-low px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-label-bold uppercase tracking-wider text-on-surface-variant">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-lg border border-outline-variant/50 bg-surface-container-low px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-label-bold uppercase tracking-wider text-on-surface-variant">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="e.g. 07XXX XXX XXX"
            className="w-full rounded-lg border border-outline-variant/50 bg-surface-container-low px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label htmlFor="postcode" className="mb-2 block text-label-bold uppercase tracking-wider text-on-surface-variant">
            UK postcode
          </label>
          <input
            id="postcode"
            name="postcode"
            required
            defaultValue={defaultPostcode}
            autoComplete="postal-code"
            placeholder="e.g. SW1A 1AA"
            className="w-full rounded-lg border border-outline-variant/50 bg-surface-container-low px-4 py-3 uppercase focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="service" className="mb-2 block text-label-bold uppercase tracking-wider text-on-surface-variant">
          Service interest
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="w-full rounded-lg border border-outline-variant/50 bg-surface-container-low px-4 py-3 text-on-surface focus:border-primary focus:outline-none invalid:text-on-surface-variant"
        >
          <option value="" disabled>
            Select your services
          </option>
          <option>Air source heat pump grant</option>
          <option>Solar panels on lease</option>
          <option>Both heat pump grant & solar</option>
        </select>
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="mb-2 block text-label-bold uppercase tracking-wider text-on-surface-variant">
          Additional details (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="w-full rounded-lg border border-outline-variant/50 bg-surface-container-low px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          placeholder="e.g. semi-detached, £180/month electric, evenings best to call"
        />
      </div>

      <div className="absolute left-[-9999px]" aria-hidden>
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {error && (
        <p className="mt-6 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="shimmer-btn mt-8 w-full rounded-full bg-primary py-4 text-lg font-semibold text-on-primary shadow-lg transition-all hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto md:px-12"
      >
        {loading ? 'Sending…' : 'Check My Eligibility'}
      </button>
      <p className="mt-4 text-xs text-on-surface-variant">
        By submitting you agree we may contact you about your enquiry under UK GDPR. We never sell your data.
      </p>
    </form>
  )
}

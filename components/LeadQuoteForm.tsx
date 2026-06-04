'use client'

import { useState } from 'react'
import MaterialIcon from '@/components/MaterialIcon'

type Props = {
  city?: string
  defaultPostcode?: string
}

export default function LeadQuoteForm({ city, defaultPostcode = '' }: Props) {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="glass rounded-3xl p-10 text-center shadow-premium" role="status">
        <MaterialIcon name="check_circle" className="mb-4 text-5xl text-primary" />
        <h3 className="mb-2 text-headline-md">Thank you — we&apos;ll be in touch within 24 hours.</h3>
        <p className="text-on-surface-variant">A GREENHOMESNW energy advisor will contact you to arrange your free survey.</p>
      </div>
    )
  }

  return (
    <form
      className="glass rounded-3xl p-8 shadow-premium md:p-10"
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      aria-label="Request a free quote"
    >
      <div className="mb-8">
        <h2 className="text-headline-lg">Get Your Free Quote</h2>
        {city && (
          <p className="mt-2 text-on-surface-variant">
            Solar & sustainable home upgrades in <strong>{city}</strong>
          </p>
        )}
      </div>

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
          className="w-full rounded-lg border border-outline-variant/50 bg-surface-container-low px-4 py-3 focus:border-primary focus:outline-none"
        >
          <option>Solar panel installation</option>
          <option>Battery storage</option>
          <option>Heat pump</option>
          <option>Full home energy upgrade</option>
          <option>Energy audit</option>
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
          placeholder="Roof type, approximate electricity bill, preferred contact time…"
        />
      </div>

      <button
        type="submit"
        className="shimmer-btn mt-8 w-full rounded-full bg-primary py-4 text-lg font-semibold text-on-primary shadow-lg transition-all hover:scale-[1.02] active:scale-95 md:w-auto md:px-12"
      >
        Request Free Survey
      </button>
      <p className="mt-4 text-xs text-on-surface-variant">
        By submitting you agree to be contacted about your enquiry. We never sell your data.
      </p>
    </form>
  )
}

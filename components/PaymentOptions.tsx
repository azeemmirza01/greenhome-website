import Link from 'next/link'
import MaterialIcon from '@/components/MaterialIcon'

const plans = [
  { upfront: '£0', monthly: '£72', featured: true, badge: 'Most popular' },
  { upfront: '£1,250', monthly: '£64', featured: false },
  { upfront: '£2,500', monthly: '£56', featured: false },
]

export default function PaymentOptions() {
  return (
    <section className="bg-surface-container py-24" id="payment-options">
      <div className="mx-auto max-w-container-max px-4 md:px-margin-desktop">
        <div className="reveal mb-16 max-w-2xl active">
          <h2 className="mb-4 text-headline-lg">Example Monthly Payment Options</h2>
          <p className="text-on-surface-variant">
            Based on a £10,000 solar and battery system installation and a 25-year plan. You can choose from 5 to 25
            years of hassle-free power generation, with the option to settle at any time if your circumstances change.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          {plans.map((p, i) => (
            <div
              key={p.upfront}
              className={`reveal relative flex flex-col rounded-3xl p-8 shadow-premium active ${
                p.featured
                  ? 'bg-primary text-on-primary ring-2 ring-primary'
                  : 'bg-surface-container-lowest'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {p.badge && (
                <span className="absolute right-6 top-6 rounded-full bg-on-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                  {p.badge}
                </span>
              )}
              <p className={`text-label-bold uppercase tracking-wider ${p.featured ? 'text-on-primary/80' : 'text-on-surface-variant'}`}>
                {p.upfront} upfront
              </p>
              <p className="mt-4 flex items-end gap-1">
                <span className="text-display-md font-bold leading-none">{p.monthly}</span>
                <span className={`mb-1 text-body-md ${p.featured ? 'text-on-primary/80' : 'text-on-surface-variant'}`}>
                  /month
                </span>
              </p>
              <Link
                href="/quote"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-label-bold transition-all hover:scale-[1.02] active:scale-95 ${
                  p.featured
                    ? 'bg-on-primary text-primary shadow-lg'
                    : 'bg-primary text-on-primary shadow-md'
                }`}
              >
                Apply for Your Quote
                <MaterialIcon name="arrow_forward" className="text-base" />
              </Link>
            </div>
          ))}
        </div>

        <p className="card-text mx-auto mt-10 max-w-4xl text-xs leading-relaxed text-on-surface-variant">
          Prices vary, so apply for your personal quote. Offers are subject to status and finance agreement. The first
          payment of the upfront amount plus the month 1 payment will be taken by direct debit once the system has been
          installed. Monthly payments are subject to an annual increase of 2.5%. Missing payments could have severe
          consequences and make obtaining credit more difficult.
        </p>
      </div>
    </section>
  )
}

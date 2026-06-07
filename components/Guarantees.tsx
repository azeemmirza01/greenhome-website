import MaterialIcon from '@/components/MaterialIcon'

const guarantees = [
  {
    icon: 'sell',
    title: 'Fair Price Promise',
    detail:
      'We check installation quotes against national benchmarks, so you can be confident that your system has been priced fairly.',
  },
  {
    icon: 'calculate',
    title: 'Financial Sense Check',
    detail:
      'Before offering finance we verify that the forecast return is worthwhile. If it’s not clear cut we’ll double check you’re happy to proceed.',
  },
  {
    icon: 'verified_user',
    title: 'Risk Free Application',
    detail:
      'Our secure application only takes a few minutes and won’t impact your credit score. There’s no obligation to proceed once approved.',
  },
  {
    icon: 'fact_check',
    title: 'Independent Validation',
    detail:
      'EPVS review your energy forecast calculations. They’ll also call you to check you’re comfortable with the figures and your finance choice.',
  },
  {
    icon: 'thumb_up',
    title: 'Satisfaction Guarantee',
    detail:
      'We’ll get in touch after installation and every maintenance visit, to check that you’re happy with the engineer’s work.',
  },
  {
    icon: 'event_available',
    title: 'Cancel Anytime',
    detail:
      'You can end your plan at any time by paying the settlement amount in your agreement, with no quibbles or penalties.',
  },
]

export default function Guarantees() {
  return (
    <section className="mx-auto max-w-container-max px-4 py-24 md:px-margin-desktop" id="guarantees">
      <div className="reveal mb-16 max-w-2xl active">
        <h2 className="mb-4 text-headline-lg">Our Guarantees</h2>
        <p className="text-on-surface-variant">
          Your Solar Plan is backed by our finance partner’s guarantees.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-3">
        {guarantees.map((g, i) => (
          <div
            key={g.title}
            className="reveal flex gap-4 rounded-3xl bg-surface-container-low p-7 active"
            style={{ transitionDelay: `${i * 75}ms` }}
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <MaterialIcon name={g.icon} className="text-2xl" />
            </div>
            <div>
              <h3 className="mb-2 text-headline-md">{g.title}</h3>
              <p className="card-text text-body-md text-on-surface-variant">{g.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

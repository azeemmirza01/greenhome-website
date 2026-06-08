import MaterialIcon from '@/components/MaterialIcon'

const signals = [
  { icon: 'verified', label: 'MCS & Flexi-Orb Accredited' },
  { icon: 'shield', label: 'HIES / RECC Consumer Code' },
  { icon: 'account_balance', label: 'FCA-Regulated Finance' },
  { icon: 'credit_score', label: 'Solar Plans from £0 Upfront' },
  { icon: 'star', label: 'Rated 4.9 / 5 by Verified Customers' },
]

export default function TrustBar() {
  return (
    <section className="border-y border-outline-variant/30 bg-surface-container-low py-8" aria-label="Trust and accreditations">
      <div className="mx-auto flex max-w-container-max flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 md:px-margin-desktop">
        {signals.map((s, i) => (
          <div
            key={s.label}
            className="reveal flex items-center gap-2 text-on-surface-variant"
            style={{ '--reveal-delay': `${i * 80}ms` } as React.CSSProperties}
          >
            <MaterialIcon name={s.icon} className="text-primary transition-transform duration-300 hover:scale-110" />
            <span className="text-sm font-semibold">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

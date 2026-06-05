import MaterialIcon from '@/components/MaterialIcon'

const signals = [
  { icon: 'verified', label: 'MCS Certified Installer' },
  { icon: 'account_balance', label: 'Boiler Upgrade Scheme Approved' },
  { icon: 'savings', label: 'Grants up to £7,500' },
  { icon: 'credit_score', label: 'No Upfront Cost Options' },
  { icon: 'handshake', label: 'Rated Excellent by UK Homeowners' },
]

export default function TrustBar() {
  return (
    <section className="border-y border-outline-variant/30 bg-surface-container-low py-8" aria-label="Trust and accreditations">
      <div className="mx-auto flex max-w-container-max flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 md:px-margin-desktop">
        {signals.map((s) => (
          <div key={s.label} className="flex items-center gap-2 text-on-surface-variant">
            <MaterialIcon name={s.icon} className="text-primary" />
            <span className="text-sm font-semibold">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

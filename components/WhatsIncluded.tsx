import MaterialIcon from '@/components/MaterialIcon'

const items = [
  {
    icon: 'solar_power',
    title: 'System Installation',
    text: 'Solar PV and battery system from leading manufacturers, installed to the highest industry standards by skilled engineers.',
  },
  {
    icon: 'monitoring',
    title: 'Performance Monitoring',
    text: 'Remote monitoring and periodic inspections ensure optimal efficiency and identify issues before they impact performance.',
  },
  {
    icon: 'handyman',
    title: 'Unlimited Repairs',
    text: 'System maintenance and repairs (parts, labour and access) are covered for your plan term with no callout fees or hidden charges.',
  },
  {
    icon: 'verified_user',
    title: 'Replacement Protection',
    text: 'We’ll replace any equipment that fails within your plan lifetime at no extra cost, even if the manufacturer warranty has expired.',
  },
]

export default function WhatsIncluded() {
  return (
    <section className="mx-auto max-w-container-max px-4 py-24 md:px-margin-desktop" id="whats-included">
      <div className="reveal mb-16 max-w-2xl active">
        <h2 className="mb-4 text-headline-lg">What’s Included in Your Solar Plan</h2>
        <p className="text-on-surface-variant">
          Gain energy independence and future-proof your home with reliable service and predictable costs.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-4">
        {items.map((f, i) => (
          <div
            key={f.title}
            className="reveal glass rounded-3xl p-8 shadow-premium active"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <MaterialIcon name={f.icon} className="mb-5 text-4xl text-primary" />
            <h3 className="mb-3 text-headline-md">{f.title}</h3>
            <p className="text-body-md text-on-surface-variant">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

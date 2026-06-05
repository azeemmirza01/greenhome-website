import MaterialIcon from '@/components/MaterialIcon'

const features = [
  {
    icon: 'savings',
    title: 'No Upfront Cost',
    text: 'Get solar panels on lease and claim the £7,500 heat pump grant, so you can switch to renewable energy without a large bill to pay in advance.',
  },
  {
    icon: 'verified_user',
    title: 'Government-Backed & MCS',
    text: 'We are MCS-certified and apply for your Boiler Upgrade Scheme grant directly, so every install meets the standards required for funding and SEG payments.',
  },
  {
    icon: 'nature_people',
    title: 'Lower Bills & Lower Carbon',
    text: 'Cut your energy bills from day one, reduce your carbon footprint, and move your home towards net zero with clean, efficient technology.',
  },
]

export default function Features() {
  return (
    <section className="mx-auto max-w-container-max px-4 py-24 md:px-margin-desktop" id="features">
      <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3">
        {features.map((f, i) => (
          <div
            key={f.title}
            className={`reveal space-y-4 active ${i === 1 ? 'border-x border-outline-variant/30 px-4' : ''}`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <MaterialIcon
              name={f.icon}
              className="mx-auto text-5xl text-primary transition-transform duration-300 hover:scale-110"
            />
            <h3 className="text-headline-md">{f.title}</h3>
            <p className="px-4 text-body-md text-on-surface-variant">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

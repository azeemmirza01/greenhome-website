import MaterialIcon from '@/components/MaterialIcon'

const features = [
  {
    icon: 'savings',
    title: 'Energy Saving',
    text: 'Reduce grid dependency by up to 90% with integrated solar and battery storage tailored to UK consumption patterns.',
  },
  {
    icon: 'payments',
    title: 'Cost Efficiency',
    text: 'Strong ROI through SEG export payments, reduced standing charges, and long-term protection from volatile unit rates.',
  },
  {
    icon: 'nature_people',
    title: 'Eco Impact',
    text: 'Cut household carbon by tonnes annually while increasing EPC ratings and property appeal to eco-conscious buyers.',
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

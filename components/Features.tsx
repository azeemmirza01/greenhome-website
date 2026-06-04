import MaterialIcon from '@/components/MaterialIcon'

const features = [
  {
    icon: 'savings',
    title: 'Lower Energy Bills',
    text: 'Use your own solar during the day and cut reliance on grid electricity priced in pence per kWh. Batteries help shift more solar into evening use.',
  },
  {
    icon: 'payments',
    title: 'UK Grants & SEG',
    text: 'Access Smart Export Guarantee payments for solar and Boiler Upgrade Scheme support for heat pumps where you qualify in England and Wales.',
  },
  {
    icon: 'nature_people',
    title: 'EPC & Carbon',
    text: 'Improve your home\'s EPC rating and reduce carbon emissions in line with UK net zero goals, adding long-term value for UK buyers and landlords.',
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

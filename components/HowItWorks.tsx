import MaterialIcon from '@/components/MaterialIcon'

const steps = [
  {
    num: '01',
    title: 'Design',
    detail:
      'Our installers will survey your property and design a system to suit your home and energy needs. They’ll provide detailed equipment specifications and energy-saving forecasts.',
    tags: [] as string[],
  },
  {
    num: '02',
    title: 'Apply',
    detail:
      'Alongside their quote, Our installers will send a personal link to apply for the Solar Plan. Complete our application, choose your plan, then you’re ready to sign our online agreement.',
    tags: ['Secure online application', 'Instant decisions', 'Won’t impact credit score', '14-day cooling off'],
  },
  {
    num: '03',
    title: 'Install',
    detail:
      'Your new system is installed and remote monitoring is set up. We get in touch to check that you’re happy with the work before your payments begin.',
    tags: ['Rated 4.9 / 5 on cleanliness, courtesy and promptness'],
  },
  {
    num: '04',
    title: 'Relax',
    detail:
      'It’s time to enjoy your energy savings. We’ll take care of system monitoring, maintenance and repairs, so you’re covered for the lifetime of your plan.',
    tags: [] as string[],
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-surface-container-low py-24" id="how-it-works">
      <div className="mx-auto max-w-container-max px-4 md:px-margin-desktop">
        <div className="reveal mb-16 max-w-2xl active">
          <h2 className="mb-4 text-headline-lg">How the Solar Plan Works</h2>
          <p className="text-on-surface-variant">
            We’re here to help you get a payment plan to fit your needs, hassle-free installation, and comfort
            around ongoing system performance and costs.
          </p>
        </div>
        <ol className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.num}
              className="reveal glass flex flex-col rounded-3xl p-8 shadow-premium active"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="mb-4 text-display-sm font-bold text-primary/30">{s.num}</span>
              <h3 className="mb-3 text-headline-md">{s.title}</h3>
              <p className="text-body-md text-on-surface-variant">{s.detail}</p>
              {s.tags.length > 0 && (
                <ul className="mt-5 space-y-2">
                  {s.tags.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm text-on-surface-variant">
                      <MaterialIcon name="check_circle" className="mt-0.5 text-base text-primary" filled />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

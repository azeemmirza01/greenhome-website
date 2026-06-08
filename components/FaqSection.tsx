import { faqData } from '@/lib/faq-data'

export default function FaqSection() {
  return (
    <section className="mx-auto max-w-container-max px-4 py-24 md:px-margin-desktop" id="faq">
      <div className="reveal mb-12 text-center">
        <h2 className="text-headline-lg">Frequently Asked Questions</h2>
        <p className="mt-2 text-on-surface-variant">Clear answers on the all-inclusive Solar Plan, payments, and the Boiler Upgrade Scheme.</p>
      </div>
      <div className="mx-auto max-w-3xl divide-y divide-outline-variant/40">
        {faqData.map((item, i) => (
          <details
            key={item.q}
            className="reveal group py-6 transition-colors hover:text-primary"
            style={{ '--reveal-delay': `${i * 50}ms` } as React.CSSProperties}
          >
            <summary className="cursor-pointer list-none text-headline-md font-semibold marker:content-none transition-colors [&::-webkit-details-marker]:hidden">
              {item.q}
              <span className="float-right text-primary transition-transform duration-300 group-open:rotate-45">+</span>
            </summary>
            <p className="faq-content card-text mt-4 text-body-md text-on-surface-variant">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import MaterialIcon from '@/components/MaterialIcon'
import { siteConfig } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="bg-navy px-4 py-20 text-[#bac8dc] md:px-margin-desktop">
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-gutter md:grid-cols-3">
        <div>
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-3"
            aria-label={`${siteConfig.name} home`}
          >
            <Image
              src="/images/FooterLogoo.png"
              alt=""
              width={1024}
              height={698}
              className="h-20 w-auto shrink-0 object-contain sm:h-16"
              unoptimized
              aria-hidden
            />
            {/* <span
              className="inline-flex whitespace-nowrap text-xl font-bold leading-none tracking-tight sm:text-[22px]"
              aria-hidden
            >
              <span className="text-primary">GREEN</span>
              <span className="text-[#d6e4f9]">HOMES</span>
              <span className="text-[#bac8dc]">NW</span>
            </span> */}
          </Link>
          <p className="mb-6 text-sm leading-relaxed opacity-80">
            Switch to clean, green power and cut your energy bills with no upfront cost. Our all-inclusive Solar Plan
            covers your PV and battery system, installation, monitoring, and maintenance, so you keep the savings and
            we handle the rest.
          </p>
          <div className="flex gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:bg-primary"
              aria-label="Email"
            >
              <MaterialIcon name="mail" className="text-sm transition-transform group-hover:scale-110" />
            </a>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:bg-primary"
              aria-label="Call on WhatsApp"
            >
              <MaterialIcon name="call" className="text-sm transition-transform group-hover:scale-110" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="mb-6 font-semibold uppercase tracking-wider text-[#d6e4f9]">Services</h2>
          <ul className="space-y-4 text-sm">
            <li><Link href="/services/solar-panels-on-lease" className="transition-colors hover:text-primary">Solar Panels on Lease</Link></li>
            <li><Link href="/services/air-source-heat-pump-grants" className="transition-colors hover:text-primary">Air Source Heat Pump Grants</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="mb-6 font-semibold uppercase tracking-wider text-[#d6e4f9]">Contact</h2>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-2">
              <MaterialIcon name="location_on" className="text-sm" />
              {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.postalCode}
            </li>
            <li className="flex gap-2">
              <MaterialIcon name="phone" className="text-sm" />
              <span>{siteConfig.phoneDisplay}</span>
            </li>
            <li className="flex gap-2">
              <MaterialIcon name="mail" className="text-sm" />
              <a href={`mailto:${siteConfig.email}`} className="break-all transition-colors hover:text-primary">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex gap-2">
              <MaterialIcon name="schedule" className="text-sm" />
              {siteConfig.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-container-max border-t border-white/10 pt-8 text-center text-xs opacity-60">
        <p>
          {siteConfig.legalName} is a {siteConfig.companyType.toLowerCase()} registered in {siteConfig.address.region}.
          Registered office: {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.postalCode}.
        </p>
        <p className="mt-2">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}

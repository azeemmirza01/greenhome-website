import Image from 'next/image'
import Link from 'next/link'
import MaterialIcon from '@/components/MaterialIcon'
import { siteConfig } from '@/lib/site'
import { ukCities } from '@/lib/uk-cities'

export default function Footer() {
  const topCities = ukCities.slice(0, 8)

  return (
    <footer className="bg-navy px-4 py-20 text-[#bac8dc] md:px-margin-desktop">
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-gutter md:grid-cols-4">
        <div>
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-3"
            aria-label={`${siteConfig.name} home`}
          >
            <Image
              src="/images/Logoo.png"
              alt=""
              width={80}
              height={58}
              className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16"
              unoptimized
              aria-hidden
            />
            <span
              className="inline-flex whitespace-nowrap text-xl font-bold leading-none tracking-tight sm:text-[22px]"
              aria-hidden
            >
              <span className="text-primary">GREEN</span>
              <span className="text-[#d6e4f9]">HOMES</span>
              <span className="text-[#bac8dc]">NW</span>
            </span>
          </Link>
          <p className="mb-6 text-sm leading-relaxed opacity-80">
            MCS-certified solar panels and air source heat pumps for homes across England, Scotland, Wales, and Northern
            Ireland. SEG, BUS, and UK grant guidance included.
          </p>
          <div className="flex gap-4">
            <a
              href={siteConfig.social.linkedin}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:bg-primary"
              aria-label="LinkedIn"
            >
              <MaterialIcon name="public" className="text-sm transition-transform group-hover:scale-110" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:bg-primary"
              aria-label="Email"
            >
              <MaterialIcon name="mail" className="text-sm transition-transform group-hover:scale-110" />
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:bg-primary"
              aria-label="Phone"
            >
              <MaterialIcon name="call" className="text-sm transition-transform group-hover:scale-110" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="mb-6 font-semibold uppercase tracking-wider text-[#d6e4f9]">Services</h2>
          <ul className="space-y-4 text-sm">
            <li><Link href="/services/solar-panels" className="transition-colors hover:text-primary">Solar Panels</Link></li>
            <li><Link href="/services/air-source-heat-pumps" className="transition-colors hover:text-primary">Air Source Heat Pumps</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="mb-6 font-semibold uppercase tracking-wider text-[#d6e4f9]">UK Locations</h2>
          <ul className="space-y-4 text-sm">
            {topCities.map((c) => (
              <li key={c.slug}>
                <Link href={`/locations/${c.slug}`} className="transition-colors hover:text-primary">
                  {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/locations" className="font-semibold text-primary">
                View all cities →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-6 font-semibold uppercase tracking-wider text-[#d6e4f9]">Contact</h2>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-2">
              <MaterialIcon name="location_on" className="text-sm" />
              {siteConfig.address.street}, {siteConfig.address.city}
            </li>
            <li className="flex gap-2">
              <MaterialIcon name="phone" className="text-sm" />
              {siteConfig.phoneDisplay}
            </li>
            <li className="flex gap-2">
              <MaterialIcon name="schedule" className="text-sm" />
              {siteConfig.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-container-max border-t border-white/10 pt-8 text-center text-xs opacity-60">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  )
}

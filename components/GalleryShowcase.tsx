import Image from 'next/image'
import { galleryImages } from '@/lib/images'

export default function GalleryShowcase() {
  return (
    <section className="bg-surface py-24" id="gallery">
      <div className="mx-auto max-w-container-max px-4 md:px-margin-desktop">
        <div className="reveal mb-12 max-w-2xl active">
          <h2 className="mb-4 text-headline-lg">Renewable Energy in Action</h2>
          <p className="text-on-surface-variant">
            From consultation and design through to installation and ongoing care, see how we help UK homeowners switch
            to clean, affordable energy.
          </p>
        </div>
        <div className="reveal grid grid-cols-2 gap-3 active sm:gap-gutter md:grid-cols-3">
          {galleryImages.map((img, i) => (
            <div
              key={img.src}
              className={`relative overflow-hidden rounded-2xl shadow-premium ${
                i === 0 || i === 5 ? 'col-span-2 aspect-[2/1] md:col-span-1 md:aspect-[4/3]' : 'aspect-[4/3]'
              }`}
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

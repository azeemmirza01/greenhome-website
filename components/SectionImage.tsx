import Image from 'next/image'
import type { SiteImage } from '@/lib/images'

type Props = SiteImage & {
  className?: string
  priority?: boolean
  sizes?: string
}

export default function SectionImage({ src, alt, className = 'object-cover', priority, sizes }: Props) {
  return (
    <div className={`relative overflow-hidden ${className.includes('h-') ? '' : 'aspect-[4/3]'} ${className}`}>
      <Image src={src} alt={alt} fill className="object-cover" priority={priority} sizes={sizes ?? '(max-width: 768px) 100vw, 50vw'} />
    </div>
  )
}

import Image from '../Image'
import Link from 'next/link'

const DisplayMedium = ({ imageSrc, title, subtitle, link }) => {
  return (
    <div className="
    mb-4 lg:mb-0
    p-8 pb-0 hover:bg-light-200">
      <Link href={`${link}`}>
        <a aria-label={title}>
          <div className="flex flex-column justify-center items-center h-60">
            <Image src={imageSrc} alt={title} className="w-full" />
          </div>
          <div className="mb-8" style={{position:'relative', top:'15px'}}>
            <p className="text-3xl font-semibold mb-1">{title}</p>
            <p className="text-xs text-gray-700">{subtitle}</p>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default DisplayMedium;
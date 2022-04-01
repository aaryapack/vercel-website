import Link from "next/link"
import { getTrimmedString } from "../../utils/helpers"
import Image from "../Image"

const DisplaySmall = ({ link, title, subtitle, imageSrc }) => (
  <div
    style={{ margin: 10}}
    className="lg:w-flex-fourth
  px-6 pt-10 pb-2 lg:p-6 lg:pb-0 
  hover:bg-light-200 lg:mb-0 mb-4"
  >
    <Link href={link}>
      <a aria-label={title}>
        <div className = "flex flex-col" style={{display: 'flex', justifyContent: 'flex-end', flexDirection: 'column',}}>
          <div
            className="flex flex-column justify-center items-center h-44"
          >
            <Image alt={title} src={imageSrc} className="w-full" />
          </div>
          <div className="" style={{position:'relative', top:'15px'}}>
            <p className="text-xl font-semibold mb-1">{title}</p>
            <p className="text-xs text-gray-700 mb-4 pb-4">
              {getTrimmedString(subtitle, 150)}
            </p>
          </div>
        </div>
      </a>
    </Link>
  </div>
)

export default DisplaySmall

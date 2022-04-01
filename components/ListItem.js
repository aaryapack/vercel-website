import React from "react"
import Link from "next/link"
import Image from "./Image"

const ListItem = ({ link, title, imageSrc, price }) => (
  <div
  style={{margin: 10}}
    className="
    w-80
    md:w-1/2
    lg:w-1/4
    p1 sm:p-2
    hover:bg-light-200
  "
  >
    <Link href={`${link}`}>
      <a aria-label={title}>
        <div className=" flex justify-center items-center ">
          <div className=" flex flex-column justify-center items-center">
            <Image alt={title} src={imageSrc} className="w-full" />
          </div>
        </div>
        <div>
          <p className="m-4 text-center text-l font-semibold mb-1">{title}</p>
        </div>
      </a>
    </Link>
  </div>
)

export default ListItem

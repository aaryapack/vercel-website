import Head from "next/head"
import Button from "../../components/Button"
import Image from "../../components/Image"
import inventory from "../../utils/inventory"
import { slugify } from "../../utils/helpers"
import Carousel from "../../components/Carousel"

export default function ItemView(props) {
  const { product } = props
  const { images, name } = product

  return (
    <>
      <Head>
        <title>Aarya Pack - {name}</title>
        <meta
          property="og:title"
          content={`Aarya Pack - ${name}`}
          key="title"
        />
      </Head>
      <div
        className="
        sm:py-12
        md:flex-row
        py-4 w-full flex flex-1 flex-col my-0 mx-auto
      "
      >
        <div className="w-full md:w-1/2 h-120 flex flex-1">
          <div className="py-16 p10 flex flex-1 justify-center items-center">
            {images.length > 1 ? (
              <Carousel imageSrc={Object.entries(images)} detailHeight />
            ) : (
              <Image
                src={images[0]}
                alt="Inventory item"
                className="max-h-full"
                style={{ border: "solid 1px" }}
              />
            )}
          </div>
        </div>
        <div className="pt-2 px-0 md:px-10 pb-8 w-full md:w-1/2">
          <h1
            className="
           sm:mt-0 mt-2 text-5xl font-light leading-large
          "
          >
            {name}
          </h1>
          <h2 className="text-2xl tracking-wide sm:py-8 py-6"> </h2>
          <p className="text-gray-600 leading-7">
            Available in customizable sizes
          </p>
          <div className="my-6"></div>
          <a
            href="mailto:aaryapack1@gmail.com?subject=Request for quotes"
            target="_blank"
          >
            <Button full title="Get Quotes" />
          </a>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const paths = inventory.map((item) => {
    return { params: { name: slugify(item.name) } }
  })
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const name = params.name.replace(/-/g, " ")
  const product = inventory.find((item) => slugify(item.name) === slugify(name))

  return {
    props: {
      product,
    },
  }
}

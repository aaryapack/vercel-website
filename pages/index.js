import Head from "next/head"
import { useEffect } from "react"
import { Center, DisplaySmall } from "../components"
import { slugify } from "../utils/helpers"
import inventory from "../utils/inventory"
import Carousel from "../components/Carousel"

// Notification:
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
const customId = "custom-id-yes"

// mobile responsive:
import { useMediaQuery } from "react-responsive"

const Home = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` })

  const notify = () => {
    if (!toast.isActive(customId)) {
      if (isMobile) {
        toast.info("Contact us at 8850843126 for more information!", {
          toastId: customId,
          position: "bottom-center",
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      } else {
        toast.info("Contact us at 8850843126 for more information!", {
          toastId: customId,
          position: "top-right",
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }
    }
  }

  useEffect(() => {
    notify()
  }, [])

  return (
    <>
      <div className="w-full">
        <Head>
          <title>Aarya Pack</title>
          <meta
            name="description"
            content="We are a well-known manufacturer of a highly reliable array of Packaging Products. Owing to their long service life and resistance to crack, these offered ranges are famous among our patrons"
          />
          <meta property="og:title" content="Aarya Pack" key="title" />
        </Head>

        <div
          className="bg-blue-300
        p-6 pb-10 smpb-6
        flex lg:flex-row flex-col"
        >
          <div className="pt-4 pl-2 sm:pt-12 sm:pl-12 flex flex-col">
            <Center title={"Packaging Products"} />
          </div>
          <div className="flex flex-1 justify-center items-center relative">
            <div className="flex flex-col items-center">
              <Carousel
                imageSrc={Object.entries([
                  "/products/air_bubble/air_bubble_pouch.jpg",
                  "/products/shrink/shrink_sleeve.jpg",
                  "/products/foam/foam_pouch.jpg",
                  "/products/foam/foam_packing_10.jpg",
                  "products/air_bubble/air_bubble_roll.jpg",
                ])}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ALL PRODUCTS SECTION */}
      <div className="pt-10 pb-6 flex flex-col items-center">
        <h2 className="text-6xl mb-3">All Products</h2>
      </div>

      {/* Air Bubble */}
      <div className="pt-10 pb-6 flex flex-col items-center">
        <h3 className="text-3xl mb-3">Air Bubble Products</h3>
        <p>
          {" "}
          We are prominent organization engaged in offering bubble pouches of
          superior quality. This Air Bubble Pouches / Envelopes are lightweight
          gives better shelf life to products and aesthetic appeal. Air Bubble
          Pouches / Envelopes can be used in pharmaceutical, chemical, food,
          aromatic industries. Hygiene, barrier to water, moisture and light,
          high durability, user friendly are some properties of Air Bubble
          Pouches / Envelopes. Providing you the best range of air bubble pouch,
          air bubble pouch bag, 2 and 3 layer air bubble pouch, bubble pouch,
          custom transparent air bubble bags and transparent air bubble bags
          with effective & timely delivery.
        </p>
      </div>
      <div className="my-8 flex flex-col lg:flex-row flex-wrap justify-left">
        <DisplaySmall
          imageSrc={inventory[0].images[0]}
          title={inventory[0].name}
          subtitle={inventory[0].categories[0]}
          link={`/product/${slugify(inventory[0].name)}`}
        />

        <DisplaySmall
          imageSrc={inventory[1].images[0]}
          title={inventory[1].name}
          subtitle={inventory[1].categories[0]}
          link={`/product/${slugify(inventory[1].name)}`}
        />

        <DisplaySmall
          imageSrc={inventory[2].images[0]}
          title={inventory[2].name}
          subtitle={inventory[2].categories[0]}
          link={`/product/${slugify(inventory[2].name)}`}
        />

        <DisplaySmall
          imageSrc={inventory[3].images[0]}
          title={inventory[3].name}
          subtitle={inventory[3].categories[0]}
          link={`/product/${slugify(inventory[0].name)}`}
        />

        <DisplaySmall
          imageSrc={inventory[4].images[0]}
          title={inventory[4].name}
          subtitle={inventory[4].categories[0]}
          link={`/product/${slugify(inventory[4].name)}`}
        />

        <DisplaySmall
          imageSrc={inventory[5].images[0]}
          title={inventory[5].name}
          subtitle={inventory[5].categories[0]}
          link={`/product/${slugify(inventory[5].name)}`}
        />
      </div>

      {/* PVC Shrink */}
      <div className="pt-10 pb-6 flex flex-col items-center">
        <h3 className="text-3xl mb-3">Stretch and Shrink Films</h3>
        <p>
          {" "}
          Leading Manufacturer of PVC heat shrink sleeves and pouches, PVC
          shrink film combo packaging. PVC shrink film, is durable and is used
          in many applications, including packaging and house ware products. In
          terms of packaging, PVC is seen in rigid applications including
          blister and clamshell packaging, and flexible applications including
          shrink wrap and bagging.{" "}
        </p>
      </div>

      <div className="my-8 flex flex-col lg:flex-row flex-wrap justify-left">
        <DisplaySmall
          imageSrc={inventory[6].images[0]}
          title={inventory[6].name}
          subtitle={inventory[6].categories[0]}
          link={`/product/${slugify(inventory[6].name)}`}
        />

        <DisplaySmall
          imageSrc={inventory[7].images[0]}
          title={inventory[7].name}
          subtitle={inventory[7].categories[0]}
          link={`/product/${slugify(inventory[7].name)}`}
        />

        <DisplaySmall
          imageSrc={inventory[8].images[0]}
          title={inventory[8].name}
          subtitle={inventory[8].categories[0]}
          link={`/product/${slugify(inventory[8].name)}`}
        />

        <DisplaySmall
          imageSrc={inventory[9].images[0]}
          title={inventory[9].name}
          subtitle={inventory[9].categories[0]}
          link={`/product/${slugify(inventory[9].name)}`}
        />

        <DisplaySmall
          imageSrc={inventory[10].images[0]}
          title={inventory[10].name}
          subtitle={inventory[10].categories[0]}
          link={`/product/${slugify(inventory[10].name)}`}
        />
      </div>

      {/* Foam Packing */}
      <div className="pt-10 pb-6 flex flex-col items-center">
        <h3 className="text-3xl mb-3">Foam Packing</h3>
        <p>
          {" "}
          We are prominent organization engaged in offering bubble pouches of
          superior quality. This Air Bubble Pouches / Envelopes are lightweight
          gives better shelf life to products and aesthetic appeal. Air Bubble
          Pouches / Envelopes can be used in pharmaceutical, chemical, food,
          aromatic industries. Hygiene, barrier to water, moisture and light,
          high durability, user friendly are some properties of Air Bubble
          Pouches / Envelopes. Providing you the best range of air bubble pouch,
          air bubble pouch bag, 2 and 3 layer air bubble pouch, bubble pouch,
          custom transparent air bubble bags and transparent air bubble bags
          with effective & timely delivery.
        </p>
      </div>
      <div className="my-8 flex flex-col lg:flex-row flex-wrap  justify-left">
        <DisplaySmall
          imageSrc={inventory[11].images[0]}
          title={inventory[11].name}
          subtitle={inventory[11].categories[0]}
          link={`/product/${slugify(inventory[11].name)}`}
        />

        <DisplaySmall
          imageSrc={inventory[12].images[0]}
          title={inventory[12].name}
          subtitle={inventory[12].categories[0]}
          link={`/product/${slugify(inventory[12].name)}`}
        />

        <DisplaySmall
          imageSrc={inventory[13].images[0]}
          title={inventory[13].name}
          subtitle={inventory[13].categories[0]}
          link={`/product/${slugify(inventory[13].name)}`}
        />

        <DisplaySmall
          imageSrc={inventory[14].images[0]}
          title={inventory[14].name}
          subtitle={inventory[14].categories[0]}
          link={`/product/${slugify(inventory[14].name)}`}
        />
      </div>

      {/* Plastic Corrugated Box */}
      <div className="pt-10 pb-6 flex flex-col items-center">
        <h3 className="text-3xl mb-3">Plastic Corrugated Box</h3>
        <p>
          {" "}
          Corrugated Plastic Package Box for Office and Home Use, Made of Strong
          & Light weight Plastic materials, Very long Life. Ideal for Air Tight
          and Reusable Packing. Humidity and Chemical resistance. Polypropylene
          is Impact Resistance built to handle heavy weight. Unique Foldable
          design to Store if not in Use, Stackable boxes easy to transport with
          Handles to carry. This boxes are highly recommendable for Export
          Packaging due to its light weight quality. Aarya Pack’s plastic
          corrugated boxes are durable, reusable, waterproof, recyclable and
          lightweight. They are best in quality, having best applicable price
          and delivered across India. They can be good option for storing items
          at your home. Aarya Pack’s corrugated plastic box series is by far the
          most versatile box in the market, our corrugated plastic boxes in
          hundreds of sizes, styles, and colors, and it also makes this product
          in custom sizes with a very nominal upcharge.
        </p>
      </div>

      <div className="my-8 flex flex-col lg:flex-row flex-wrap justify-left">
        <DisplaySmall
          imageSrc={inventory[15].images[0]}
          title={inventory[15].name}
          subtitle={inventory[15].categories[0]}
          link={`/product/${slugify(inventory[15].name)}`}
        />

        <DisplaySmall
          imageSrc={inventory[16].images[0]}
          title={inventory[16].name}
          subtitle={inventory[16].categories[0]}
          link={`/product/${slugify(inventory[16].name)}`}
        />

        <DisplaySmall
          imageSrc={inventory[17].images[0]}
          title={inventory[17].name}
          subtitle={inventory[17].categories[0]}
          link={`/product/${slugify(inventory[17].name)}`}
        />

        <DisplaySmall
          imageSrc={inventory[18].images[0]}
          title={inventory[18].name}
          subtitle={inventory[18].categories[0]}
          link={`/product/${slugify(inventory[18].name)}`}
        />
      </div>
    </>
  )
}

export default Home

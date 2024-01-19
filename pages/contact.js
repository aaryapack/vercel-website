import Head from "next/head"
import React from "react"
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import { GiFactory } from "react-icons/gi"
import { MdEmail } from "react-icons/md"

export default function Contact() {
  return (
    <>
      <Head>
        <title>Aarya Pack - Contact Us </title>

        <meta name="description" content={`Aarya Pack - Contact Us`} />
        <meta
          property="og:title"
          content="Aarya Pack - Contact Us"
          key="title"
        />
      </Head>

      <div className="pt-10 pb-16 flex flex-col items-center lg:pl-20">
        <h2 class="font-medium leading-tight text-4xl mt-0 mb-6 text-blue-600">
          Contact Us
        </h2>

        <p
          className="font-light"
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          To get the best quotes, describe your requirements in detail:
          <ul class="list-disc ml-6 pl-4">
            <li>What are you looking for</li>
            <li>Features / Specifications</li>
            <li>Application / Usage</li>
            <li>Minimum Order Quantity, etc</li>
          </ul>
        </p>
      </div>

      {/* the four icons */}
      <div className="my-8 flex flex-col lg:flex-row flex-wrap justify-left">
        {/* ADDRESS */}
        <a href="https://goo.gl/maps/TVcAbzU8coEwRSxL9" target="_blank">
          <div
            className="mb-12"
            style={{
              flex: 1,
              marginRight: 10,
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <FaMapMarkerAlt style={{ height: 30, width: 30 }} />
            <h2 class="font-medium leading-tight text-2xl mt-0 mb-2 text-blue-600">
              Office Address
            </h2>
            <h5 class="font-medium leading-tight text-xl">Aarya Pack</h5>
            <p className="font-light">
              168, Parekh Nagar, S.V. Road, Kandivali West, <br /> Mumbai -
              400067, Maharashtra, India
            </p>
          </div>
        </a>

        {/* PHONE NO. */}
        <div
          className="mb-12"
          style={{
            flex: 1,
            marginRight: 10,
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <FaPhoneAlt style={{ height: 30, width: 30 }} />
          <h2 class="font-medium leading-tight text-2xl mt-0 mb-2 text-blue-600">
            Phone No.
          </h2>
          <h5 class="font-medium leading-tight text-xl">Bhavesh Parekh</h5>
          <p className="font-light">9930330954</p>
        </div>

        {/* EMAIL */}
        <a href="mailto:aaryapack1@gmail.com" target="_blank">
          <div
            className="mb-12"
            style={{
              flex: 1,
              marginRight: 10,
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <MdEmail style={{ height: 30, width: 30 }} />
            <h2 class="font-medium leading-tight text-2xl mt-0 mb-2 text-blue-600">
              Email
            </h2>
            <p className="font-light">aaryapack1@gmail.com</p>
          </div>
        </a>

        {/* FACTORY */}
        <div
          className="mb-12"
          style={{
            flex: 1,
            marginLeft: 20,
            marginRight: 10,
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <GiFactory style={{ height: 30, width: 30 }} />
          <h2 class="font-medium leading-tight text-2xl mt-0 mb-2 text-blue-600">
            Factory
          </h2>
          <p className="font-light">
            103, Arjun Velji Udyog No. 3, <br />
            Opp. Golani Naka, Waliv, Vasai (Wast),
            <br /> Dist. Thane, India
          </p>
        </div>
      </div>
    </>
  )
}

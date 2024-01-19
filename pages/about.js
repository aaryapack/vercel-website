import Head from "next/head"

export default function About() {
  return (
    <>
      <Head>
        <title>Aarya Pack - About Us </title>

        <meta name="description" content={`Aarya Pack - All Products`} />
        <meta property="og:title" content="Aarya Pack - About" key="title" />
      </Head>

      <div className="pt-10 pb-6 flex flex-col items-center">
        <h2
          class="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600"
          style={{ marginBottom: 30 }}
        >
          Aarya Pack &trade;  
        </h2>

        {/* <p
          class="font-light"
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          Aarya Pack is a Trademark registered under Aaditya Enterprises.{" "}
        </p> */}

        <br></br>

        <p
          class="font-light"
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          With an assortment of qualitative products, Aaditya Enterprises was
          established in the year 2006 as the manufacturer of high-quality
          Packaging Products. Offered products range consists of Bubble Rolls,
          Bubble Film, and Bubble Pouch. Recognized for their long service life,
          strong construction, simple usability, and fine finishing, these
          products are made available in several sizes. We have appointed highly
          skilled workforce who have in-depth process knowledge in manufacturing
          packaging products. Owing to their undeterred efforts, we have been
          able to achieve organizational targets and maintain economies of
          scale.
        </p>

        <br></br>

        <p
          class="font-light"
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          All our offered packaging products ranges are quality assured against
          the industry set parameters to ensure their quality. Apart from this,
          the raw material we use to design these products is procured from the
          most trustworthy vendors of the industry in compliance with the
          industry quality standards. Underneath the command of our devoted
          mentor Mr. Bhavesh Parekh, we have been successful in attaining the
          faith. His extensive qualifications and experience have brought
          lucrative deals for the company and motivated the team in delivering
          exemplary products.
        </p>
      </div>

      {/* -------table Factsheet---------- */}

      <div className="pt-10 pb-6 flex flex-col">
        <h4 class="font-medium leading-tight text-2xl mt-0 mb-2 text-blue-600">
          Company Factsheet
        </h4>

        <table class="max-w-3xl">
          <tbody>
            <tr class="border-b"></tr>
            <tr class="border-b">
              <td class="w-1/2">Nature of Business</td>
              <td class="w-1/2">Manufacturer</td>
            </tr>
            <tr class="border-b">
              <td>Additional Business</td>
              <td>Wholesaler, Supplier</td>
            </tr>
            <tr class="border-b">
              <td>Company CEO</td>
              <td>Bhavesh Parekh</td>
            </tr>
            <tr class="border-b">
              <td>Registered Address</td>
              <td>
                168, Parekh Nagar, S. V. Road, Kandivali West, <br /> Mumbai -
                400067, Maharashtra, India
              </td>
            </tr>
            <tr class="border-b">
              <td>Total Number of Employees</td>
              <td>11 to 25 People</td>
            </tr>
            <tr class="border-b">
              <td>Year of Establishment</td>
              <td>2006</td>
            </tr>
            <tr class="border-b">
              <td>Standards & Quality Certifications</td>
              <td>SSI Registration Number : (270211106593)</td>
            </tr>
            <tr class="border-b">
              <td>Legal Status of Firm</td>
              <td>Individual - Proprietor</td>
            </tr>
            <tr class="border-b">
              <td>GST No.</td>
              <td>27AABPP4731G1ZT</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* WHY US */}

      <div className="pb-6 flex flex-col">
        <h1
          class="font-medium leading-tight text-2xl mt-0 mb-2 text-blue-600"
          style={{ marginTop: 30, marginBottom: 20 }}
        >
          Why Us?
        </h1>

        <p
          class="font-light"
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          Being a quality driven organization, we believe in offering our
          patrons the best quality packaging products. Also, our expert
          logistics professionals guide the quality of the products and allow
          timely shipment of the packaging products to the customers based
          across various parts of the country.
        </p>

        <p
          class="font-light"
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
            alignSelf: "start",
          }}
        >
          The key factors are as follows:
        </p>
        <ul
          className="list-disc ml-6 font-light"
          style={{ alignSelf: "start" }}
        >
          <li>Finest quality products </li>
          <li>Timely delivery of consignments </li>
          <li> Complete customer satisfaction</li>
          <li> Customization of products as per clients’ needs</li>
          <li>Pocket-friendly price </li>
        </ul>
      </div>

      {/* OUR TEAM */}

      <div className="pb-6 flex flex-col">
        <h1
          class="font-medium leading-tight text-2xl mt-0 mb-2 text-blue-600"
          style={{ marginTop: 30, marginBottom: 20 }}
        >
          Our Team
        </h1>

        <p
          class="font-light"
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          We have appointed highly skilled workforce who have in-depth process
          knowledge in manufacturing Fabricated Packaging Products. Owing to
          their undeterred efforts, we have been able to achieve organizational
          targets and maintain economies of scale. Further, they work in close
          coordination with each other at each stage of production to ensure the
          effective production of our wide product range.
        </p>
      </div>
    </>
  )
}

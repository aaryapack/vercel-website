import "../styles/globals.css"
import Layout from "../layouts/layout"
import fetchCategories from "../utils/categoryProvider"

function AaryaPack({ Component, pageProps, categories }) {
  return (
    <Layout categories={categories}>
      <Component {...pageProps} />
    </Layout>
  )
}

AaryaPack.getInitialProps = async () => {
  const categories = await fetchCategories()
  return {
    categories,
  }
}

export default AaryaPack

import React from "react"
import PageHeader from "../components/page-header"

import Layout from "../layout/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery"

// import theme from "../utils/theme"


const Offer = () => (
  <Layout>
    <SEO title="Projekty wnętrz" />
    <PageHeader menuType="dark" />
    <Gallery />
  </Layout>
)

export default Offer

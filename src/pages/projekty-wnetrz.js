import React from "react"
import PageHeader from "../components/page-header"

import Layout from "../layout/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery"
import Services from "../components/services"

// import theme from "../utils/theme"


const Offer = () => (
  <Layout>
    <SEO title="Projekty wnętrz" />
    <PageHeader menuType="dark" />
    <Services/>
    <Gallery />
  </Layout>
)

export default Offer

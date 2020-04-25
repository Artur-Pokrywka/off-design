import React from "react"
import PageHeader from "../components/page-header"

import Layout from "../layout/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery"
import PageTitle from "../components/page-title"
import Services from "../components/services"
import Prices from "../components/hs-pirices"
import Footer from "../components/footer"

const HomeStaging = () => (
  <Layout>
    <SEO title="Home staging" />
    <PageHeader menuType="dark"/>
    <PageTitle title={"home staging"}></PageTitle>
    <Services text='nasze kompleksowe usługi:'/>
    <Gallery />
    <Prices />
    <Footer />
  </Layout>
)

export default HomeStaging

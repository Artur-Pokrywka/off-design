import React from "react"
import PageHeader from "../components/page-header"

import Layout from "../layout/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery"
import PageTitle from "../components/page-title"
import Services from "../components/services"

const HomeStaging = () => (
  <Layout>
    <SEO title="Home staging" />
    <PageHeader menuType="dark"/>
    <PageTitle text={"home staging"}></PageTitle>
    <Services />
    <Gallery />
  </Layout>
)

export default HomeStaging

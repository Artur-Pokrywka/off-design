import React from "react"
import PageHeader from "../components/page-header"

import Layout from "../layout/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery"
import Services from "../components/services"

const Projects = () => (
  <Layout>
    <SEO title="Home staging" />
    <PageHeader />
    <Services/>
    <Gallery />
  </Layout>
)

export default Projects

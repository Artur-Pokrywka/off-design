import React from "react"
import PageHeader from "../components/page-header"

import Layout from "../layout/layout"
import SEO from "../components/seo"
import PageTitle from "../components/page-title"
import Gallery from "../components/gallery"


const Projects = () => (
  <Layout>
    <SEO title="Projekty wnętrz" />
    <PageHeader menuType="dark" />
    <PageTitle text= {"projekty wnętrz"}></PageTitle>
    <Gallery />
  </Layout>
)

export default Projects

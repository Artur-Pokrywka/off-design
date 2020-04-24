import React from "react"
import PageHeader from "../components/page-header"

import Layout from "../layout/layout"
import SEO from "../components/seo"
import PageTitle from "../components/page-title"
import Gallery from "../components/gallery"
import Services from "../components/services"


const Projects = () => (
  <Layout>
    <SEO title="Projekty wnętrz" />
    <PageHeader menuType="dark" />
    <PageTitle title= {"projekty wnętrz"}></PageTitle>
    <Services text="proces projektowy:"/>
    <Gallery />
  </Layout>
)

export default Projects

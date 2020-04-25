import React from "react"
import PageHeader from "../components/page-header"

import Layout from "../layout/layout"
import SEO from "../components/seo"
import PageTitle from "../components/page-title"
import Gallery from "../components/gallery"
import Services from "../components/services"
import Prices from "../components/hs-pirices"
import Footer from "../components/footer"

const Projects = () => (
  <Layout>
    <SEO title="Projekty wnętrz" />
    <PageHeader menuType="dark" />
    <PageTitle title= {"projekty wnętrz"}></PageTitle>
    <Services text="nasze kompleksowe usługi:"/>
    <Gallery />
    <Prices />
    <Footer />
  </Layout>
)

export default Projects

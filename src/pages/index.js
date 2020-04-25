import React from "react"

import Layout from "../layout/layout"
import PageHeader from "../components/page-header"
import SEO from "../components/seo"
import Video from "../components/video"
import Counters from "../components/counters"
import About from "../components/about"
import Footer from "../components/footer"



const IndexPage = () => ( 
  <Layout>
    <SEO title="off desig-wnętrza " />
    <PageHeader />
    <Video />
    <About />
    <Counters />
    <Footer />
  </Layout>
)

export default IndexPage

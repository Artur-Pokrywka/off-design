import React from "react"
import Layout from "../layout/layout"
import PageHeader from "../components/page-header"
import SEO from "../components/seo"
import Video from "../components/video"
import Counters from "../components/counters"
import About from "../components/about"



const IndexPage = () => ( 
  <Layout>
    <SEO title="off desig-wnętrza " />
    <PageHeader />
    <Video />
    <About />
    <Counters /> 
  </Layout>
)

export default IndexPage

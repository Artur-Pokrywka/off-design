import React from "react"
import PageHeader from "../components/page-header"

import Layout from "../components/layout"
import SEO from "../components/seo"

const styled =  {
  background: `red`
};


const Offer = () => (
  <Layout>
    <SEO title="Projekty wnętrz" />
    <PageHeader style={styled}/>
   
  </Layout>
)

export default Offer

import React from "react"
import PageHeader from "../components/page-header"

import Layout from "../layout/layout"
import SEO from "../components/seo"
import PageTitle from "../components/page-title"
import Contact from "../components/contact"

const Conatct = () => (
  <Layout>
    <SEO title="Kontakt" />
   <PageHeader menuType="dark" />
   <PageTitle title= {"kontakt"}></PageTitle>
   <Contact />
  </Layout>
)

export default Conatct

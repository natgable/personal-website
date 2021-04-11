import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/global.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p className='homeText'>Natalie Kim Gable is an engineer and recent Stanford grad from San Francisco. She's mostly interested in applying data science to fight the climate crisis and forward progressive politics.</p>
    <p className='homeText'>
      You can learn a little more <Link> 
        <span style={{textDecoration: 'dotted underline'}}>about Natalie</span> 
        </Link> or see <Link> <span style={{textDecoration: 'dotted underline'}}>her resume</span> </Link> 
      or check out some of <Link> <span style={{textDecoration: 'dotted underline'}}>her work</span>  </Link>.
    </p>
  </Layout>
)

export default IndexPage

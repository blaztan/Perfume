import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"
import { graphql } from "gatsby"

const Home = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero images={data.allFile.edges} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: { extension: { regex: "/(jpg)/" } }) {
      edges {
        node {
          base
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Home

import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Hero from "../components/hero"
import { graphql } from "gatsby"
import Brands from "../components/brands"
import About from "../components/about"

const Home = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero images={data.allFile.edges} />
      <Brands />
      <About />
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

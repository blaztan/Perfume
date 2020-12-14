import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Hero from "../components/hero"
import Brands from "../components/brands"
import About from "../components/about"
import Testimonial from "../components/testimonial"
import NewsLetter from "../components/newsletter"
import Footer from "../components/footer"

const Home = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Brands />
      <About />
      <Testimonial />
      <NewsLetter />
      <Footer />
    </Layout>
  )
}

export default Home

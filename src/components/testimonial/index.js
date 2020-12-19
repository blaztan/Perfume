import React from "react"
import * as Styled from "./style"
import Title from "../ui/SubTitle"
import Carousel from "../ui/Carousel"
import { graphql, useStaticQuery } from "gatsby"
import FormatHtml from "../../utils/FormatHtml"
import Image from "../image"

export default function Testimonial() {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "testimonials" } }) {
        frontmatter {
          title
          subTitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "testimonial" } } }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              cover {
                childImageSharp {
                  fluid(maxWidth: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const sectionTitle = markdownRemark.frontmatter
  const testimonials = allMarkdownRemark.edges

  return (
    <Styled.TestimonialWrapper id="testimonials">
      <Styled.Container>
        <div>
          <Title
            slide={true}
            span={sectionTitle.subTitle}
            h2={sectionTitle.title}
          />
        </div>
        <Styled.Testimonials>
          <Carousel>
            {testimonials.map(item => {
              const {
                id,
                html,
                frontmatter: { cover, title },
              } = item.node

              return (
                <Styled.Testimonial key={id}>
                  <Styled.Image>
                    <Image fluid={cover.childImageSharp.fluid} alt={title} />
                  </Styled.Image>
                  <Styled.Title>{title}</Styled.Title>

                  <FormatHtml content={html} />
                </Styled.Testimonial>
              )
            })}
          </Carousel>
        </Styled.Testimonials>
      </Styled.Container>
    </Styled.TestimonialWrapper>
  )
}

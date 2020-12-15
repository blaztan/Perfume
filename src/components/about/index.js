import Title from "../ui/SubTitle"
import Paragraph from "../ui/Paragraph"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import * as Styled from "./style"
import Image from "../image"

export default function About() {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "about" } }) {
        frontmatter {
          title
          subTitle
          content
          cover {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <Styled.AboutWrapper id="about">
        <Styled.AboutContainer>
          <Styled.CenterText>
            <Title
              span={markdownRemark.frontmatter.subTitle}
              h2={markdownRemark.frontmatter.title}
            />
            <Paragraph>{markdownRemark.frontmatter.content}</Paragraph>
          </Styled.CenterText>
          <Styled.ImageWrapper
            data-sal="slide-left"
            data-sal-delay="100"
            data-sal-easing="ease"
            data-sal-duration="900"
          >
            <Image
              fluid={markdownRemark.frontmatter.cover.childImageSharp.fluid}
            />
          </Styled.ImageWrapper>
        </Styled.AboutContainer>
      </Styled.AboutWrapper>
    </>
  )
}

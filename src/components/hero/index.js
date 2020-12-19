import Image from "../../components/image"
import React from "react"
import * as Styled from "./style"
import { graphql, useStaticQuery } from "gatsby"
import Paragraph from "../ui/Paragraph"
import Button from "../ui/Button"
import scrollTo from "gatsby-plugin-smoothscroll"

export default function Hero() {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "hero section" } }) {
        frontmatter {
          title
          content
          linkText
          img_01 {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img_02 {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img_03 {
            childImageSharp {
              fluid {
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
      <Styled.Hero id="home">
        <Styled.Banner>
          <Styled.HeroText>
            <Styled.Title className="slide-down">
              {markdownRemark.frontmatter.title}
            </Styled.Title>

            <Paragraph>{markdownRemark.frontmatter.content}</Paragraph>
            <Button id="#brands">
              <Styled.Line />
              <span>{markdownRemark.frontmatter.linkText}</span>
            </Button>
          </Styled.HeroText>

          <Styled.MainImage className="zoom-in">
            <Image
              fluid={markdownRemark.frontmatter.img_01.childImageSharp.fluid}
            />
          </Styled.MainImage>

          <Styled.ImageContainer>
            <Styled.Image className="slide-left">
              <Image
                fluid={markdownRemark.frontmatter.img_02.childImageSharp.fluid}
              />
            </Styled.Image>

            <Styled.Image
              style={{ marginLeft: "6rem" }}
              className="slide-right"
            >
              <Image
                fluid={markdownRemark.frontmatter.img_03.childImageSharp.fluid}
              />
            </Styled.Image>
          </Styled.ImageContainer>
        </Styled.Banner>

        <Styled.ScrollContainer onClick={() => scrollTo("#brands")}>
          <Styled.ScrollPara>Scroll</Styled.ScrollPara>
          <Styled.ScrollLine />
        </Styled.ScrollContainer>
      </Styled.Hero>
    </>
  )
}

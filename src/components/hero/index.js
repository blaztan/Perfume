import Image from "../../components/image"
import React from "react"
import * as Styled from "./style"
import { graphql, useStaticQuery } from "gatsby"
import Paragraph from "../ui/Paragraph"
import Button from "../ui/Button"
import scrollTo from "gatsby-plugin-smoothscroll"
import Animated from "../ui/Animated"

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
            <Animated type="slide-down" delay="700" duration="900">
              <Styled.Title>{markdownRemark.frontmatter.title}</Styled.Title>
            </Animated>
            <Paragraph>{markdownRemark.frontmatter.content}</Paragraph>
            <Button>
              <Styled.Line />
              <span>{markdownRemark.frontmatter.linkText}</span>
            </Button>
          </Styled.HeroText>
          <Animated type="zoom-in" delay="400" duration="900">
            <Styled.MainImage>
              <Image
                fluid={markdownRemark.frontmatter.img_01.childImageSharp.fluid}
              />
            </Styled.MainImage>
          </Animated>
          <Styled.ImageContainer>
            <Animated type="slide-left" delay="500" duration="900">
              <Styled.Image>
                <Image
                  fluid={
                    markdownRemark.frontmatter.img_02.childImageSharp.fluid
                  }
                />
              </Styled.Image>
            </Animated>
            <Animated type="slide-left" delay="600" duration="900">
              <Styled.Image style={{ marginLeft: "6rem" }}>
                <Image
                  fluid={
                    markdownRemark.frontmatter.img_03.childImageSharp.fluid
                  }
                />
              </Styled.Image>
            </Animated>
          </Styled.ImageContainer>
        </Styled.Banner>
        <Animated type="fade" delay="900" duration="900">
          <Styled.ScrollContainer onClick={() => scrollTo("#brands")}>
            <Styled.ScrollPara>Scroll</Styled.ScrollPara>
            <Styled.ScrollLine />
          </Styled.ScrollContainer>
        </Animated>
      </Styled.Hero>
    </>
  )
}

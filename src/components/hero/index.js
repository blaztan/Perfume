import Image from "../../components/image"
import React from "react"
import * as Styled from "./style"
import { graphql, useStaticQuery } from "gatsby"
import Paragraph from "../ui/Paragraph"
import Button from "../ui/Button"

export default function Hero({ images }) {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "hero section" } }) {
        frontmatter {
          title
          content
          linkText
        }
      }
    }
  `)

  return (
    <>
      <Styled.Hero>
        <Styled.Banner>
          <Styled.HeroText>
            <Styled.Title>{markdownRemark.frontmatter.title}</Styled.Title>
            <Paragraph>{markdownRemark.frontmatter.content}</Paragraph>
            <Button>
              <Styled.Line />
              <span>{markdownRemark.frontmatter.linkText}</span>
            </Button>
          </Styled.HeroText>
          <Image fluid={images[0].node.childImageSharp.fluid} />
          <Styled.ImageContainer>
            <Styled.Image>
              <Image fluid={images[2].node.childImageSharp.fluid} />
            </Styled.Image>
            <Styled.Image style={{ marginLeft: "6rem" }}>
              <Image fluid={images[1].node.childImageSharp.fluid} />
            </Styled.Image>
          </Styled.ImageContainer>
        </Styled.Banner>
        <Styled.ScrollContainer>
          <Styled.ScrollPara>Scroll</Styled.ScrollPara>
          <Styled.ScrollLine />
        </Styled.ScrollContainer>
      </Styled.Hero>
    </>
  )
}

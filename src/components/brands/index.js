import Title from "../ui/SubTitle"
import React from "react"
import * as Styled from "./style"
import { graphql, useStaticQuery } from "gatsby"
import Paragraph from "../ui/Paragraph"
import Brand from "../ui/Brand"
import Button from "../ui/Button"

export default function Brands() {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "brands" } }) {
        frontmatter {
          title
          subTitle
          content
          linkText
          brand_01_name
          brand_01_price
          brand_02_name
          brand_02_price
          brandLink
          brand_01 {
            childImageSharp {
              fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          brand_02 {
            childImageSharp {
              fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Styled.BrandContainer id="brands">
      <Styled.BrandContent>
        <Styled.BrandText>
          <Title
            span={markdownRemark.frontmatter.subTitle}
            h2={markdownRemark.frontmatter.title}
          />
          <Paragraph>{markdownRemark.frontmatter.content}</Paragraph>
          <Button>
            <span>{markdownRemark.frontmatter.linkText}</span>
            <Styled.Line />
          </Button>
        </Styled.BrandText>
        <div>
          <Brand
            src={markdownRemark.frontmatter.brand_01.childImageSharp.fluid}
            name={markdownRemark.frontmatter.brand_01_name}
            price={markdownRemark.frontmatter.brand_01_price}
            link={markdownRemark.frontmatter.brandLink}
          />
          <Styled.Brand_02>
            <Brand
              src={markdownRemark.frontmatter.brand_02.childImageSharp.fluid}
              name={markdownRemark.frontmatter.brand_02_name}
              price={markdownRemark.frontmatter.brand_02_price}
              link={markdownRemark.frontmatter.brandLink}
            />
          </Styled.Brand_02>
        </div>
      </Styled.BrandContent>
    </Styled.BrandContainer>
  )
}

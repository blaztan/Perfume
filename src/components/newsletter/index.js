import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as Styled from "./style"
import Title from "../ui/SubTitle"

const NewsLetter = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "newsletter" } }) {
        frontmatter {
          title
          subTitle
          linkText
        }
      }
    }
  `)

  return (
    <Styled.NewsLetter>
      <Styled.Container>
        <Title
          span={markdownRemark.frontmatter.subTitle}
          h2={markdownRemark.frontmatter.title}
        />
        <Styled.Form>
          <Styled.Input
            data-sal="slide-right"
            data-sal-delay="200"
            data-sal-easing="ease"
            data-sal-duration="900"
            type="email"
            placeholder="Enter Your Email"
          />
          <Styled.Button
            data-sal="slide-left"
            data-sal-delay="200"
            data-sal-easing="ease"
            data-sal-duration="900"
          >
            {markdownRemark.frontmatter.linkText}
          </Styled.Button>
        </Styled.Form>
      </Styled.Container>
    </Styled.NewsLetter>
  )
}

export default NewsLetter

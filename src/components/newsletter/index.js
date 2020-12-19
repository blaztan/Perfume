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
          slide={false}
        />
        <Styled.Form>
          <Styled.Input type="email" placeholder="Enter Your Email" />
          <Styled.Button>{markdownRemark.frontmatter.linkText}</Styled.Button>
        </Styled.Form>
      </Styled.Container>
    </Styled.NewsLetter>
  )
}

export default NewsLetter

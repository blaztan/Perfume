import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import * as Styled from "./style"

export default function Footer() {
  return (
    <Styled.Footer id="contact">
      <Styled.Container>
        <Styled.FooterContent
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease"
          data-sal-duration="900"
        >
          <Styled.Social>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </Styled.Social>
          <Styled.CopyRight>Made By zinochan</Styled.CopyRight>
        </Styled.FooterContent>
      </Styled.Container>
      <Styled.ScrollTop>
        <Styled.Button onClick={() => scrollTo("#home")}>
          <Styled.Line></Styled.Line>
          <Styled.Text>Top</Styled.Text>
        </Styled.Button>
      </Styled.ScrollTop>
    </Styled.Footer>
  )
}

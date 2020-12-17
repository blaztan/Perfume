import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import * as Styled from "./style"

const Nav = ({ siteTitle }) => {
  return (
    <Styled.MainNav>
      <Styled.Logo>
        <h1>{siteTitle}</h1>
      </Styled.Logo>
      <Styled.NavList>
        <Styled.NavItem onClick={() => scrollTo("#home")}>Home</Styled.NavItem>
        <Styled.NavItem onClick={() => scrollTo("#about")}>
          About
        </Styled.NavItem>
        <Styled.NavItem onClick={() => scrollTo("#brands")}>
          Brands
        </Styled.NavItem>
        <Styled.NavItem onClick={() => scrollTo("#testimonials")}>
          Testimonials
        </Styled.NavItem>
        <Styled.NavItem onClick={() => scrollTo("#contact")}>
          Contact
        </Styled.NavItem>
      </Styled.NavList>
    </Styled.MainNav>
  )
}

export default Nav

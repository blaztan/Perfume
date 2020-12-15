import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import * as Styled from "./style"
import scrollTo from "gatsby-plugin-smoothscroll"

const Header = ({ siteTitle }) => (
  <Styled.Header
    data-sal="slide-up"
    data-sal-delay="100"
    data-sal-easing="ease"
    data-sal-duration="900"
  >
    <Styled.Container>
      <Styled.MainNav>
        <Styled.Logo>
          <h1>
            <Link to="/">{siteTitle}</Link>
          </h1>
        </Styled.Logo>
        <Styled.NavList>
          <Styled.NavItem onClick={() => scrollTo("#home")}>
            Home
          </Styled.NavItem>
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
    </Styled.Container>
  </Styled.Header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

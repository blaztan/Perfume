import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import * as Styled from "./style"

const Header = ({ siteTitle }) => (
  <Styled.Header>
    <Styled.Container>
      <Styled.MainNav>
        <Styled.Logo>
          <h1>
            <Link to="/">{siteTitle}</Link>
          </h1>
        </Styled.Logo>
        <Styled.NavList>
          <Styled.NavItem>Home</Styled.NavItem>
          <Styled.NavItem>About</Styled.NavItem>
          <Styled.NavItem>Brands</Styled.NavItem>
          <Styled.NavItem>Testimonials</Styled.NavItem>
          <Styled.NavItem>Contact</Styled.NavItem>
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

import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import * as Styled from "./style"
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = ({ siteTitle }) => {
  const [innerWidth, setInnerWidth] = useState(1024)

  useEffect(() => {
    if (typeof window !== undefined) {
      setInnerWidth(window.innerWidth)
      window.addEventListener("resize", () => {
        setInnerWidth(window.innerWidth)
      })
    }
  }, [])

  const breakPoint = innerWidth && innerWidth >= 1024

  return (
    <Styled.Header>
      <Styled.Container>
        {breakPoint ? (
          <Nav siteTitle={siteTitle} />
        ) : (
          <MobileNav siteTitle={siteTitle} />
        )}
      </Styled.Container>
    </Styled.Header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

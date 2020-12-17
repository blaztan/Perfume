import React, { useState } from "react"
import * as Styled from "./style"
import scrollTo from "gatsby-plugin-smoothscroll"

export default function MobileNav({ siteTitle }) {
  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = id => {
    setNavOpen(!navOpen)
    scrollTo(id)
  }

  return (
    <Styled.MainNav>
      <Styled.Logo>
        <h1>{siteTitle}</h1>
      </Styled.Logo>
      <Styled.Toggler onClick={() => setNavOpen(!navOpen)}>
        <Styled.Bar
          style={{
            transform: `${navOpen ? "rotate(45deg)" : ""}`,
          }}
        ></Styled.Bar>
        <Styled.Bar
          style={{
            transform: `${navOpen ? "translateX(-50px)" : ""}`,
            backgroundColor: `${navOpen ? "transparent" : ""}`,
          }}
        ></Styled.Bar>
        <Styled.Bar
          style={{
            transform: `${
              navOpen ? "rotate(-45deg) translate(13px,-16px)" : ""
            }`,
          }}
        ></Styled.Bar>
      </Styled.Toggler>
      <Styled.MobileNav
        style={{ transform: `${navOpen ? "scale(1)" : "scale(0)"}` }}
      >
        <Styled.NavItem onClick={() => toggleNav("#home")}>Home</Styled.NavItem>
        <Styled.NavItem onClick={() => toggleNav("#about")}>
          About
        </Styled.NavItem>
        <Styled.NavItem onClick={() => toggleNav("#brands")}>
          Brands
        </Styled.NavItem>
        <Styled.NavItem onClick={() => toggleNav("#testimonials")}>
          Testimonials
        </Styled.NavItem>
        <Styled.NavItem onClick={() => toggleNav("#contact")}>
          Contact
        </Styled.NavItem>
      </Styled.MobileNav>
    </Styled.MainNav>
  )
}

import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import scrollTo from "gatsby-plugin-smoothscroll"

export const PrimaryButton = styled.button`
  ${tw`bg-gray-900 px-8 flex items-center 2xl:absolute lg:relative z-10 bottom-0 left-0 py-4 text-2xl text-white my-auto`}
`

export default function Button({ children, id }) {
  return (
    <PrimaryButton
      className="slide-left"
      onClick={() => (id ? scrollTo(id) : null)}
    >
      {children}
    </PrimaryButton>
  )
}

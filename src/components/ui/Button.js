import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import scrollTo from "gatsby-plugin-smoothscroll"

export const PrimaryButton = styled.button`
  ${tw`bg-gray-900 px-8 flex items-center xl:absolute lg:relative z-10 bottom-0 left-0 py-4 text-2xl text-white my-auto`}
`

export default function Button({ children, id }) {
  return (
    <PrimaryButton
      onClick={() => (id ? scrollTo(id) : null)}
      data-sal="slide-right"
      data-sal-delay="900"
      data-sal-easing="ease"
      data-sal-duration="900"
    >
      {children}
    </PrimaryButton>
  )
}

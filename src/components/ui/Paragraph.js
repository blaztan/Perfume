import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

const Para = styled.p`
  ${tw`text-2xl text-gray-500`}
`

export default function Paragraph({ children }) {
  return (
    <Para
      data-sal="slide-up"
      data-sal-delay="700"
      data-sal-easing="ease"
      data-sal-duration="900"
    >
      {children}
    </Para>
  )
}

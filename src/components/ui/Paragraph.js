import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

const Para = styled.p`
  ${tw`text-2xl text-gray-500`}
`

export default function Paragraph({ children }) {
  return <Para>{children}</Para>
}

import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

const Title = styled.h2`
  ${tw`text-4xl text-gray-900 mb-4`}
`

const SpanText = styled.span`
  ${tw`text-2xl uppercase text-gray-500 mb-2 font-bold`}
`

export default function SubTitle({ span, h2 }) {
  return (
    <>
      <SpanText>{span}</SpanText>
      <Title>{h2}</Title>
    </>
  )
}

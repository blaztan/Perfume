import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

const Title = styled.h2`
  ${tw`text-4xl text-gray-900 mb-4  `}
`

const SpanText = styled.span`
  ${tw`text-2xl uppercase text-gray-500 mb-2 font-bold `}
`

export default function SubTitle({ span, h2 }) {
  return (
    <>
      <SpanText
        data-sal="slide-down"
        data-sal-delay="200"
        data-sal-easing="ease"
        data-sal-duration="900"
      >
        {span}
      </SpanText>
      <Title
        data-sal="slide-down"
        data-sal-delay="300"
        data-sal-easing="ease"
        data-sal-duration="900"
      >
        {h2}
      </Title>
    </>
  )
}

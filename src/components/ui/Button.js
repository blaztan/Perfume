import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

export const PrimaryButton = styled.button`
  ${tw`bg-gray-900 px-8 flex items-center absolute bottom-0 left-0 py-4 text-2xl text-white my-auto`}
`

export default function Button({ children }) {
  return (
    <PrimaryButton
      data-sal="slide-right"
      data-sal-delay="900"
      data-sal-easing="ease"
      data-sal-duration="900"
    >
      {children}
    </PrimaryButton>
  )
}

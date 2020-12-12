import styled from "styled-components"
import tw from "twin.macro"

export const BrandContainer = styled.section`
  ${tw` bg-gray-50 py-20 `}
`

export const BrandContent = styled.div`
  ${tw`max-w-screen-2xl mx-auto px-4 sm:px-6 grid grid-cols-2 items-center relative`}
`

export const BrandText = styled.div`
  ${tw` self-center `}
`

export const Line = styled.span`
  ${tw`w-16 h-0.5 bg-white inline-block ml-3`}
`

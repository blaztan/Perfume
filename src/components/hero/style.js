import styled from "styled-components"
import tw from "twin.macro"

export const Banner = styled.div`
  ${tw`grid  gap-4 w-full relative`}
  grid-template-columns: 1fr 650px 1fr;
`

export const Hero = styled.div`
  ${tw`flex items-center min-h-screen py-10 max-w-screen-2xl mx-auto px-4 sm:px-6 mb-20 relative`}
`

export const ImageContainer = styled.div`
  ${tw`flex flex-col space-y-8 justify-between`}
`

export const Image = styled.div`
  ${tw`w-80 h-80 ml-4  overflow-hidden`}
`

export const HeroText = styled.div`
  ${tw`self-center`}
`

export const Title = styled.h1`
  ${tw`text-6xl mb-8`}
`

export const Line = styled.span`
  ${tw`w-16 h-0.5 bg-white inline-block mr-2`}
`

export const ScrollContainer = styled.div`
  ${tw`absolute bottom-0 -right-6 cursor-pointer`}
`

export const ScrollPara = styled.p`
  ${tw`text-3xl text-gray-900`}
  writing-mode: vertical-rl;
`

export const ScrollLine = styled.span`
  ${tw`h-16 w-0.5 bg-gray-900 m-4 inline-block`}
`

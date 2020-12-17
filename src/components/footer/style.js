import styled from "styled-components"
import tw from "twin.macro"

export const Footer = styled.footer`
  ${tw`bg-gray-900 py-20 text-white relative`}
`

export const Container = styled.div`
  ${tw`max-w-screen-2xl mx-auto`}
`
export const FooterContent = styled.div`
  ${tw`flex lg:items-center space-y-6 px-4 justify-between flex-col md:space-y-0 md:flex-row`}
`
export const Social = styled.ul`
  ${tw`flex flex-col space-y-6 text-2xl md:space-y-0 md:space-x-6 md:flex-row`}
`

export const CopyRight = styled.p`
  ${tw`text-2xl`}
`

export const Line = styled.span`
  ${tw`w-0.5 h-16 bg-gray-900 inline-block mr-2`}
`
export const Button = styled.div`
  ${tw`w-16 h-auto flex flex-col items-center bg-white py-6 cursor-pointer`}
`

export const Text = styled.span`
  ${tw`text-2xl text-gray-900 inline-block ml-4`}
  writing-mode: vertical-rl;
`

export const ScrollTop = styled.div`
  ${tw`absolute right-0 bottom-0 top-0  `}
`

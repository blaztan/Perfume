const { default: styled } = require("styled-components")
const { default: tw } = require("twin.macro")

export const AboutWrapper = styled.section`
  ${tw`min-h-screen py-20`}
`

export const AboutContainer = styled.div`
  ${tw`max-w-screen-2xl mx-auto px-4 xl:px-0  grid-cols-1 grid xl:grid-cols-2 items-center relative`}
`

export const CenterText = styled.div`
  ${tw` self-center `}
`

export const ImageWrapper = styled.div`
  margin-left: 2rem;
`

import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import Image from "../image"
import Paragraph from "../ui/Paragraph"

const ImageWrapper = styled.div`
  ${tw`w-80 h-80 overflow-hidden`}
`

const BrandWrapper = styled.div`
  ${tw`flex  space-x-6 justify-center items-center`}
`

const BrandName = styled.h3`
  ${tw`text-2xl text-gray-900 mb-4`}
`

const Price = styled.span`
  ${tw`text-2xl text-gray-900 font-bold`}
`

const BrandButton = styled.button`
  ${tw`bg-gray-900 px-6  py-1 text-xl text-white rounded mt-8 rounded-2xl`}
`

export default function Brand({ src, name, price, link }) {
  return (
    <BrandWrapper>
      <ImageWrapper
        data-sal="slide-right"
        data-sal-delay="500"
        data-sal-easing="ease"
        data-sal-duration="900"
      >
        <Image fluid={src} />
      </ImageWrapper>
      <div
        data-sal="slide-left"
        data-sal-delay="500"
        data-sal-easing="ease"
        data-sal-duration="900"
      >
        <BrandName>{name}</BrandName>
        <Paragraph>
          Price:
          <Price>{price}</Price>
        </Paragraph>
        <BrandButton>{link}</BrandButton>
      </div>
    </BrandWrapper>
  )
}

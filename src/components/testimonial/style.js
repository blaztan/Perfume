import styled from "styled-components"
import tw from "twin.macro"

export const TestimonialWrapper = styled.section`
  ${tw`bg-gray-50 py-20 px-4`}
`

export const Container = styled.section`
  ${tw`max-w-screen-2xl mx-auto`}
`

export const Testimonials = styled.div`
  ${tw`xl:max-w-screen-lg lg:max-w-2xl mx-auto w-full mb-4 mt-20`};
`

export const Testimonial = styled.div`
  ${tw`flex flex-col items-center text-center `};
`

export const Image = styled.figure`
  ${tw`w-16 h-16 mx-auto border border-pink-500 rounded-full`};

  img {
    ${tw`border-4 border-white rounded-full`};
  }
`

export const Title = styled.h3`
  ${tw`font-semibold my-4`};
`

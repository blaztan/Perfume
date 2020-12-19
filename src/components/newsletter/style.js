import styled from "styled-components"
import tw from "twin.macro"

export const Input = styled.input`
  ${tw`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-gray-500 focus:z-10 sm:text-sm`}
`
export const NewsLetter = styled.div`
  ${tw`py-40 px-4`}
`

export const Container = styled.section`
  ${tw`max-w-screen-2xl mx-auto`}
`

export const Form = styled.form`
  ${tw`mt-20 flex flex-col md:flex-row md:space-x-6 space-y-6 max-w-screen-sm md:space-y-0 `}
`

export const Button = styled.button`
  ${tw`bg-gray-900 px-10 py-2 text-white text-2xl`}
`

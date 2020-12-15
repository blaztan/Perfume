import styled from "styled-components"
import tw from "twin.macro"

export const Header = styled.header`
  ${tw`absolute top-0 left-0 w-screen z-10`}
`

export const Container = styled.div`
  ${tw`max-w-screen-2xl mx-auto px-4 sm:px-6`}
`

export const MainNav = styled.nav`
  ${tw`flex justify-between items-center py-6 md:justify-start md:space-x-10`}
`

export const Logo = styled.div`
  ${tw`flex justify-start lg:w-0 lg:flex-1 text-4xl`}
`

export const NavList = styled.ul`
  ${tw`flex items-center`}
`

export const NavItem = styled.li`
  ${tw`font-medium text-gray-900 mx-4 hover:text-gray-500 cursor-pointer`}
`

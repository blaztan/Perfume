import styled from "styled-components"
import tw from "twin.macro"

export const Header = styled.header`
  ${tw`absolute top-0 left-0 w-screen z-20  overflow-x-hidden`}
`

export const Container = styled.div`
  ${tw`max-w-screen-2xl mx-auto px-4 sm:px-6`}
`

export const MainNav = styled.nav`
  ${tw`flex justify-between items-center py-6 `}
`

export const Logo = styled.div`
  ${tw`flex justify-start lg:w-0 lg:flex-1 text-4xl z-30`}
`

export const MobileNav = styled.ul`
  ${tw`flex items-center 
    justify-center space-y-6 inset-0 fixed w-screen 
    h-screen flex-col bg-white z-10
    overflow-hidden
    `};

  transition: transform 0.2s linear;
`

export const NavList = styled.ul`
  ${tw`flex items-center space-x-6`}
`

export const NavItem = styled.li`
  ${tw`font-medium text-gray-900 mx-4 hover:text-gray-500 cursor-pointer text-2xl`}
`
export const Toggler = styled.div`
  ${tw`flex flex-col space-y-2 z-30 ml-auto lg:hidden`}
`
export const Bar = styled.div`
  ${tw`w-10 h-0.5 bg-gray-900 rounded `}
`

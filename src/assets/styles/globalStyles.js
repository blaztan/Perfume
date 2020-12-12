import { createGlobalStyle } from "styled-components"
import tw from "twin.macro"

export default createGlobalStyle`
  body {
    font-family: 'Josefin Sans', sans-serif;
   
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: "Francois One", sans-serif;
  }

  p + p {
    ${tw`mt-3`};
  }
`

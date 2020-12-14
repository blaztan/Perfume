import React from "react"
import * as Styled from "./style"

export default function Footer() {
  return (
    <Styled.Footer>
      <Styled.Container>
        <Styled.FooterContent>
          <Styled.Social>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </Styled.Social>
          <Styled.CopyRight>Made By zinochan</Styled.CopyRight>
        </Styled.FooterContent>
      </Styled.Container>
    </Styled.Footer>
  )
}

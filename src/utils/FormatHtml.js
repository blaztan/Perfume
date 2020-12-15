import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import tw from "twin.macro"

const Span = styled.span`
  ${tw`text-2xl text-gray-700`}
`

const FormatHtml = ({ content }) => (
  <Span
    dangerouslySetInnerHTML={{
      __html: content,
    }}
  />
)

FormatHtml.propTypes = {
  content: PropTypes.any.isRequired,
}

export default FormatHtml

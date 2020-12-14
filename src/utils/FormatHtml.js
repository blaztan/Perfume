import React from "react"
import PropTypes from "prop-types"

const FormatHtml = ({ content }) => (
  <span
    dangerouslySetInnerHTML={{
      __html: content,
    }}
  />
)

FormatHtml.propTypes = {
  content: PropTypes.any.isRequired,
}

export default FormatHtml

import React from "react"
import Img from "gatsby-image"

const Image = ({ fluid }) => {
  if (!fluid) {
    return <div>Picture not found</div>
  }

  return (
    <Img
      fluid={fluid}
      alt="Perfume"
      style={{ position: "relative", height: "100%" }}
    />
  )
}

export default Image

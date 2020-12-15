import React from "react"

export default function Animated({ type, delay, duration, children }) {
  return (
    <div
      data-sal={type}
      data-sal-delay={delay}
      data-sal-easing="ease"
      data-sal-duration={duration}
    >
      {children}
    </div>
  )
}

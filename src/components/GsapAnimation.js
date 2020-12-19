import React, { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const GsapAnimation = ({ children }) => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.core.globals("ScrollTrigger", ScrollTrigger)
    }

    const slideLeft = gsap.utils.toArray(".slide-left")
    slideLeft.forEach(element => {
      gsap.from(element, {
        x: "-100%",
        opacity: 0,
        duration: 2,
        ease: "expo.inOut",
        stagger: 0.3,
        scrollTrigger: {
          trigger: element,
        },
      })
    })

    const slideRight = gsap.utils.toArray(".slide-right")
    slideRight.forEach(element => {
      gsap.from(element, {
        x: "100%",
        opacity: 0,
        duration: 2,
        stagger: 0.3,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: element,
        },
      })
    })

    const slideUp = gsap.utils.toArray(".slide-up")
    slideUp.forEach(element => {
      gsap.from(element, {
        y: "100%",
        opacity: 0,
        duration: 2,
        stagger: 0.3,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: element,
          markers: true,
        },
      })
    })
    const slideDown = gsap.utils.toArray(".slide-down")
    slideDown.forEach(element => {
      gsap.from(element, {
        y: "-100%",
        opacity: 0,
        duration: 2,
        stagger: 0.3,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: element,
        },
      })
    })
    gsap.from(".zoom-in", {
      scale: 0,
      opacity: 0,
      duration: 2,
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: ".zoom-in",
      },
    })
  }, [])
  return <>{children}</>
}

export default GsapAnimation

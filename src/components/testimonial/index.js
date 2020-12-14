import React from "react"

export default function Testimonial() {
  return (
    <Styled.TestimonialWrapper>
      <Styled.Container>
        <div>
          <Title span="testimonials" h2="What our client say" />
          <Styled.Testimonials>
            <Styled.TestimonialAvatar></Styled.TestimonialAvatar>
            <Styled.TestimonialText></Styled.TestimonialText>
          </Styled.Testimonials>
        </div>
      </Styled.Container>
    </Styled.TestimonialWrapper>
  )
}

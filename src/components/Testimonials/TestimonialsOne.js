import React, { forwardRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadingSection from "../HeadingSection/HeadingSection";
import TestimonialItem from "./TestimonialItem";


const reviewData = JSON.parse(localStorage.getItem("DATA"))

const TestimonialsOne = forwardRef(
  ({ title, tagline, font }, ref) => {
    const settings = {
      dots: true,
      centerMode: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      className: "slick testimonial",
    };

    return (
      <section
        className="parallax-bg-18 fixed-bg"
        id="testimonials"
        data-stellar-background-ratio="0.2"
        ref={ref}
      >
        <div className="overlay-bg"></div>
        <div className="container">
          <div className="row">
            <HeadingSection
              title={title}
              tagline={tagline}
              classAppend="white-color"
              font={font}
            />
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider {...settings}>
                {reviewData.map((testimonial, i) => (
                  <TestimonialItem
                    avatar={testimonial.profile_photo_url}
                    name={testimonial.author_name}
                    key={i}
                  >
                    {testimonial.text}
                  </TestimonialItem>
                ))}
              </Slider>}

            </div>
          </div>
        </div>
      </section>
    );
  }
)

export default TestimonialsOne;

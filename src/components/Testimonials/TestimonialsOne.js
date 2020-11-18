import React, { useState, useEffect, forwardRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadingSection from "../HeadingSection/HeadingSection";
import TestimonialItem from "./TestimonialItem";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const placeID = "ChIJ0yRzMuGFwYkRBflpsg2KP3k";

const API_URL = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&fields=review&key=${API_KEY}`;

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

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      loadData();
    }, []);

    const loadData = async () => {
      await fetch(API_URL)
        .then(response => response.json())
        .then(data => setData(data.result.reviews))
      setLoading(false)
    }

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
              {loading ?
                <div className="scoda-pulse"></div>
                :
                <Slider {...settings}>
                  {data.map((testimonial, i) => (
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

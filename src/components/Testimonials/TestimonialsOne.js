import React, { forwardRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadingSection from "../HeadingSection/HeadingSection";
import TestimonialItem from "./TestimonialItem";


const TestimonialsOne = forwardRef(
  ({ title, tagline, font }, ref) => {

    const [data, setData] = useState({ reviews: [], isFetching: true })

    useEffect(() => {
      if (data.isFetching === true) {
        const getReviewData = () => {
          setData({ reviews: data.reviews, isFetching: true })

          const map = new window.google.maps.Map(document.getElementById("map"), {
            center: { lat: -33.866, lng: 151.196 },
            zoom: 15,
          });

          const place_request = {
            placeId: "ChIJ0yRzMuGFwYkRBflpsg2KP3k",
            fields: ["review"],
          };

          const service = new window.google.maps.places.PlacesService(map);
          service.getDetails(place_request, (place, status) => {
            setData({ reviews: place.reviews, isFetching: false })
          });
        }
        const googleMapScript = document.createElement('script');
        googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`
        googleMapScript.async = true;
        window.document.body.appendChild(googleMapScript);
        googleMapScript.addEventListener('load', () => {
          getReviewData();
        });
      }
    }, [data.reviews, data.isFetching])
    const settings = {
      dots: false,
      centerMode: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      className: "slick testimonial",
    };


    return (
      <section
        className="parallax-bg-18 fixed-bg height-75p"
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
            <div className="col-md-12 padding-8">

              <Slider {...settings}>
                {data.reviews.map((testimonial, i) => (
                  <TestimonialItem
                    avatar={testimonial.profile_photo_url}
                    name={testimonial.author_name}
                    key={i}
                  >
                    {testimonial.text}
                  </TestimonialItem>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
)

export default TestimonialsOne;

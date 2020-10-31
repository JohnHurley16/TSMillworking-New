import React, { forwardRef } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import parse from "html-react-parser";
import SliderButtons from "../../elements/SliderButtons/SliderButtons";
import ReactWOW from "react-wow";

const HeroSliderSingle = forwardRef(({ home_data }, ref) => {
  const params = {
    loop: false,
  };

  return (
    <section className="pt-0 pb-120" id="home" ref={ref}>
      <div className="slider-bg flexslider">
        <ul className="slides">
          <Swiper {...params}>
            {
              <li key={home_data.data.id}>
                <div
                  className="slide-img"
                  style={{
                    background: `url(${require("../../assets/images/" +
                      home_data.data.image)}) center center / cover scroll no-repeat`,
                  }}
                ></div>
                <div
                  className={
                    "hero-text-wrap " + (home_data.data.bg ? "gradient-overlay-bg" : "")
                  }
                >
                  <div className="hero-text white-color">
                    <div className="container text-center">
                      <ReactWOW animation="fadeInUp">
                        <h2 className="white-color font-500 letter-spacing-5">
                          {home_data.data.tagline}
                        </h2>
                      </ReactWOW>
                      <h1 className="white-color text-uppercase font-700">
                        {home_data.data.title}
                      </h1>
                      <h3 className="white-color font-400">
                        {home_data.data.text ? parse(home_data.data.text) : ""}
                      </h3>
                      {home_data.data.buttons.length !== 0 ? (
                        <p className="text-center mt-30">
                          <SliderButtons buttons={home_data.data.buttons} but_ref={home_data} />
                        </p>
                      ) : (
                          ""
                        )}
                    </div>
                  </div>
                </div>
              </li>
            }
          </Swiper>
        </ul>
      </div>
    </section>
  );
});

export default HeroSliderSingle;

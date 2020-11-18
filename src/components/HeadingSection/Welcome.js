import React, { forwardRef } from 'react';
import aboutImg from "../../assets/images/TS_Millworking_logo.jpg";
import ReactWOW from "react-wow";

const Welcome = forwardRef(({ title, tagline, children }, ref) => (
  <section ref={ref} className="white-bg" id="about">
    <div className="col-md-6 col-sm-4 bg-flex bg-flex-right">
      <div
        className="bg-flex-holder bg-flex-cover"
        style={{ backgroundImage: `url(${aboutImg})` }}
      ></div>
    </div>
    <div className="container">
      <div className="col-md-5 col-sm-7">
        <ReactWOW animation="fadeTop" delay="0.1s">
          <h2 className="font-700">{title}</h2>
        </ReactWOW>
        <ReactWOW animation="fadeTop" delay="0.2s">
          <h4 className="mt-10 line-height-26">{tagline}</h4>
        </ReactWOW>
        <ReactWOW animation="fadeTop" delay="0.3s">
          <div>
            <p className="mt-20 line-height-26">
              {children}
            </p>
          </div>
        </ReactWOW>
      </div>
    </div>
  </section>
));

export default Welcome;
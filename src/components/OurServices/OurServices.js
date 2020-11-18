import React, { forwardRef } from "react";
import dataServices from "../../data/Services/our-services-two.json";
import ServiceBox from "./ServiceBox";
import ReactWOW from "react-wow";

const OurServices = forwardRef(({ serviceImg, title, tagline }, ref) => (
  <section className="white-bg" id="service">
    <div className="col-md-6 col-sm-4 bg-flex bg-flex-left">
      <div
        className="bg-flex-holder bg-flex-cover"
        style={{ backgroundImage: `url(${serviceImg})` }}
      ></div>
    </div>
    <div className="container">
      <div className="col-md-5 col-sm-7 col-md-offset-7 col-sm-offset-5">
        <ReactWOW animation="fadeTop" delay="0.1s">
          <h2 className="font-700">{title}</h2>
        </ReactWOW>
        <ReactWOW animation="fadeTop" delay="0.2s">
          <h4 className="mt-10 line-height-26">{tagline}</h4>
        </ReactWOW>
        <div className="left-service-box pt-40 pb-20 row">
          {dataServices.map((service) => (
            <ServiceBox
              key={service.id}
              icon={service.icon}
              title={service.title}
            >
              {service.text}
            </ServiceBox>
          ))}
        </div>
      </div>
    </div>
  </section>
));

export default OurServices;

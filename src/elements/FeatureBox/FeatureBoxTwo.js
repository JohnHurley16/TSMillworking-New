import React from "react";
import Icofont from "react-icofont";
import ReactWOW from "react-wow";

const FeatureBoxTwo = ({ icon, title, color, children }) => (
  <ReactWOW animation="fadeTop" delay="0.1s">
    <div className="col-md-4 feature-box text-left mb-50 col-sm-6">
      <div className="pull-left">
        <Icofont icon={icon} className="font-50px default-icon" />
      </div>
      <div className={"pull-right " + (color === "white" ? "white-color" : "")}>
        <h5 className="mt-0 upper-case">{title}</h5>
        <p>{children}</p>
      </div>
    </div>
  </ReactWOW>
);

export default FeatureBoxTwo;

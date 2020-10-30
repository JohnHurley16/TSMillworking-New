import React from "react";
import Icofont from "react-icofont";
import ReactWOW from "react-wow";

const FeatureBoxOne = ({ icon, title, children }) => (
  <ReactWOW animation="fadeTop" delay="0.1s">
    <div className="col-md-12 feature-box text-left mb-50 col-sm-6">
      <div className="pull-left">
        <Icofont icon={icon} className="font-60px white-icon" />
      </div>
      <div className="pull-right">
        <h3 className="mt-0 cardo-font">{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  </ReactWOW>
);

export default FeatureBoxOne;

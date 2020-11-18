import React, { useState, useEffect, useCallback } from "react";
import logoFooter from "../../assets/images/logo-white.png";


const FooterOne = () => {

  const [hidden, setHidden] = useState(true);
  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 5000) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <footer className="footer" id={hidden ? "" : "footer-fixed"}>
        <div className="footer-main">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-4">
                <div className="widget widget-text">
                  <div className="logo logo-footer">
                    <a href={`${process.env.PUBLIC_URL}/`}>
                      <img
                        className="logo logo-display"
                        src={logoFooter}
                        alt=""
                      />
                    </a>
                  </div>
                  <p>
                    We are a family buisiness Established in 1997 that specializes in laminate and solid surface countertops, architectural casework and millwork as well as CNC routing services.
                </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-2">
              </div>
              <div className="col-sm-6 col-md-2">
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="widget widget-text widget-links">
                  <h5 className="widget-title">Contact Us</h5>
                  <ul>
                    <li>
                      <i className="icofont icofont-google-map"></i>
                      <a href="https://www.google.com/maps/dir//tsmillworking/@40.1605202,-74.1677906,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c185e1327324d3:0x793f8a0db269f905!2m2!1d-74.1151411!2d40.080942">1102 Industrial Pkwy, Brick Township, NJ 08724</a>
                    </li>
                    <li>
                      <i className="icofont icofont-iphone"></i>
                      <a href="#!">(732) 458-5225</a>
                    </li>
                    <li>
                      <i className="icofont icofont-mail"></i>
                      <a href="#!">tsmillwork@gmail.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-height" style={{ height: (hidden ? "0px" : "305px") }}></div>
    </>
  )
};

export default FooterOne;

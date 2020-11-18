import React, { useState } from "react";
import { Link } from "react-router-dom";
import AttributeNav from "../Navs/AttributeNav";
import Scrollspy from "react-scrollspy";
import SocialNav from "../Navs/SocialNav";
import MainLogoOne from "../MainLogoOne";

const HeaderOne = ({ social, scrollToSection, home_ref }) => {

  const [collapse, setCollapse] = useState(false);

  const showMenu = () => {
    setCollapse(!collapse);
    const menu = document.getElementById("navbar-menu");
    collapse ? menu.classList.remove("in") : menu.classList.add("in");
  };

  return (
    <>
      <nav
        className="navbar-scrollspy navbar navbar-default navbar-fixed white bootsnav on no-full"
        data-minus-value-desktop="70"
        data-minus-value-mobile="55"
        data-speed="1000"
      >
        <div className="container">
          <AttributeNav>
            <SocialNav items={social} />
          </AttributeNav>
          <MainLogoOne showMenu={showMenu} />
          <div
            className="navbar-collapse collapse"
            id="navbar-menu"
            aria-expanded="false"
          >
            <Scrollspy
              items={["home", "gallery"]}
              currentClassName="active"
              className="nav navbar-nav navbar-right nav-scrollspy-onepage"
              data-in="fadeInLeft"
            >
              <li className="scroll" key="2">
                <Link to="/">
                  Home
                </Link>
              </li>
              <li className="scroll" key="1">
                <Link
                  to="gallery"
                  onClick={(e) => scrollToSection(e)}
                >
                  Gallery
                </Link>
              </li>
            </Scrollspy>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderOne;

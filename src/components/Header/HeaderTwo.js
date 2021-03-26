import React, { useState, useEffect, useCallback } from "react";
import Scrollspy from "react-scrollspy";
import dataNav from "../../data/Navbar/nav-creativeone-data.json";
import AttributeNav from "../Navs/AttributeNav";
import SocialNav from "../Navs/SocialNav";
import MainLogo from "../MainLogoTwo";
import { Link } from "react-router-dom";

const HeaderTwo = ({ social, scrollToSection, home_ref }) => {
  const [fixed, setFixed] = useState(false);
  const [collapse, setCollapse] = useState(false);

  const showMenu = () => {
    setCollapse(!collapse);
    const menu = document.getElementById("navbar-menu");
    collapse ? menu.classList.remove("in") : menu.classList.add("in");
  };

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 34) {
      setFixed(true);
    } else {
      setFixed(false);
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
      <nav
        className={
          "navbar-scrollspy navbar navbar-default navbar-fixed white bootsnav on no-full " +
          (fixed ? "" : "navbar-transparent")
        }
        data-minus-value-desktop="70"
        data-minus-value-mobile="55"
        data-speed="1000"
      >
        <div className="container">
          <AttributeNav>
            <SocialNav items={social} />
          </AttributeNav>
          <MainLogo showMenu={showMenu} home_ref={home_ref} />
          <div
            className="navbar-collapse collapse"
            id="navbar-menu"
            aria-expanded="false"
          >
            <Scrollspy
              items={[
                "home",
                "about",
                "testimonials",
                "gallery",
                "contact"
              ]}
              currentClassName="active"
              className="nav navbar-nav navbar-right nav-scrollspy-onepage"
              data-in="fadeInLeft"
            >
              {dataNav.map((item) => (
                <li className="scroll" key={item.id}>
                  <Link
                    to={item.link}
                    onClick={(e) => scrollToSection(e, item.link)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </Scrollspy>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderTwo;

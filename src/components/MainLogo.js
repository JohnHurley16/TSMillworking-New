import React from "react";
import logoWhite from "../assets/images/logo-white.png";
import logoBlack from "../assets/images/logo-black.png";
import Icofont from "react-icofont";

const MainLogo = ({ collapse, showMenu, home_ref }) => {
  const ETScrollHome = () => {
    home_ref.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="navbar-header">
      <button
        type="button"
        className={"navbar-toggle " + (collapse ? "collapsed" : "")}
        data-toggle="dropdown"
        data-target="#navbar-menu"
        onClick={showMenu}
      >
        <Icofont icon="navigation-menu" />
      </button>
      <div className="logo">
        <a onClick={(e) => {
          e.preventDefault()
          ETScrollHome()
        }}
          href="/">
          <img className="logo logo-display" src={logoWhite} alt="" />
          <img className="logo logo-scrolled" src={logoBlack} alt="" />
        </a>
      </div>
    </div>
  )
};

export default MainLogo;

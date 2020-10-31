import React from "react";
import imgLogo from "../../assets/images/logo-black.png";

const MainLogoTwo = ({ home_ref }) => {

  const ETScrollHome = () => {
    home_ref.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <a className="logo navbar-brand" onClick={(e) => {
      console.log(home_ref)
      e.preventDefault()
      ETScrollHome()
    }}
      href={"/home"}>
      <img src={imgLogo} className="logo" alt="" />
    </a>
  );
};

export default MainLogoTwo;

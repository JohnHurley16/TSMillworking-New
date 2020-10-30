import React from "react";

const SliderButtons = ({ buttons, but_ref }) => {
  const handleScrollClick = () => {
    but_ref.but_ref.current.scrollIntoView({ behavior: "smooth" })
  }


  return (
    buttons.map((button) => (
      <a
        key={button.id}
        href="/"
        onClick={(e) => {
          e.preventDefault();
          handleScrollClick();
        }}
        className={"btn btn-animate " + (button.type ? button.type : "")}
      >
        <span>
          {button.text}
          <i className="icofont icofont-arrow-right"></i>
        </span>
      </a >
    ))
  )
};

export default SliderButtons;

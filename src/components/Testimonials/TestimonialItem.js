import React from "react";

const TestimonialItem = ({ avatar, name, children }) => (
  <div className="testimonial-item">
    <div className="testimonial-content">
      <img
        className="img-responsive img-circle"
        src={avatar}
        alt="avatar-1"
      />
      <h5>{name}</h5>
      <h4>{children}</h4>
    </div>
  </div>
);

export default TestimonialItem;

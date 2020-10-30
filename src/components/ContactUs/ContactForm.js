import React, { useState } from "react";
import HeadingFive from "../HeadingSection/HeadingFive";

const ContactForm = ({ title }) => {
  const [inputs, setInputs] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <form
      name="contact-form"
      className="contact-me"
      id="contact-form"
      method="POST"
    >
      <input type="hidden" name="form-name" value="contact" />
      {title ? (
        <div className="row">
          <HeadingFive title={title} />
        </div>
      ) : null}
      <div className="messages"></div>
      <div className="form-group">
        <label className="sr-only" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="form-control"
          id="name"
          required="required"
          placeholder="Your Name"
          data-error="Your Name is Required"
          value={inputs.name}
          onChange={handleInputChange}
        />
        <div className="help-block with-errors mt-20"></div>
      </div>
      <div className="form-group">
        <label className="sr-only" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="form-control"
          id="email"
          placeholder="Your Email"
          required="required"
          data-error="Please Enter Valid Email"
          value={inputs.email}
          onChange={handleInputChange}
        />
        <div className="help-block with-errors mt-20"></div>
      </div>
      <div className="form-group">
        <label className="sr-only" htmlFor="message">
          Message
        </label>
        <textarea
          name="message"
          className="form-control"
          id="message"
          rows="7"
          placeholder="Your Message"
          required
          data-error="Please, Leave us a message"
          value={inputs.message}
          onChange={handleInputChange}
        ></textarea>
        <div className="help-block with-errors mt-20"></div>
      </div>
      <p className="text-center">
        <button
          type="submit"
          name="submit"
          className="btn btn-color btn-circle"
        >
          Send Message
        </button>
      </p>
    </form>
  );
};

export default ContactForm;

import React, { forwardRef } from "react";
import Icofont from "react-icofont";
import ContactForm from './ContactForm'

const ContactFour = forwardRef(({ data }, ref) => (
  <>
    <section className="contact-us" id="contact" ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <ContactForm title="CONTACT US" />
          </div>
        </div>
      </div>
    </section>

    <section className="p-0">
      <div className="container-fluid">
        <div className="row row-flex">
          <div className="col-md-4">
            <div className="col-inner spacer dark-bg">
              <div className="text-center white-color">
                <Icofont icon="google-map" className="font-50px white-icon" />
                <h2>Address</h2>
                <p>
                  1102 Industrial Pkwy, <br />
                  Brick Township, NJ 08724
                  </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="col-inner spacer gradient-bg">
              <div className="text-center white-color">
                <Icofont icon="email" className="font-50px white-icon" />
                <h2>Email Us</h2>
                <p className="mb-0">tsmillwork@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="col-inner spacer dark-bg">
              <div className="text-center white-color">
                <Icofont icon="iphone" className="font-50px white-icon" />
                <h2>Call Us</h2>
                <p className="mb-0">(732) 458-5225</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
));

export default ContactFour;

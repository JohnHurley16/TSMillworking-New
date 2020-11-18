import React, { forwardRef } from "react";
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

  </>
));

export default ContactFour;
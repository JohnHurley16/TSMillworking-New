import React, { forwardRef } from "react";
import HeadingSection from "../../components/HeadingSection/HeadingSection";
import TabsIconSection from "../../components/Tabs/TabsIconSection";

const WhoWeAreThree = forwardRef(({ data }, ref) => (
  <section className="about-us  pb-0" id="about" ref={ref}>
    <div className="container-fluid flex-grow justify-content-around">
      <div className="row justify-content-center">
        <div className="bg-flex-fill col-md-6">
          <HeadingSection title="Who We Are" tagline="Built For You">
            We are a family owned and operated millworking shop located in central New Jersey.  With over 20 years of experience under our belts we work hard to ensure that no product leaves our shop that we wouldn't put in our own homes.  We love to work hand in hand with our customers to give them an exceptional experience while we turn their vision into a reality!
            </HeadingSection>
        </div>
        <div className="bg-flex-fill col-md-6">
          <TabsIconSection title="What We Offer" />
        </div>
      </div>
    </div>
  </section >
));

export default WhoWeAreThree;

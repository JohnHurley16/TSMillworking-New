import React, { useRef } from "react";
import ScrollToTop from "../helpers/ScrollToTop"
import Loader from "../components/Loader/Loader";
import dataCorporate from "../data/Slider/corporate-business-data.json";
import HeaderTwo from "../components/Header/HeaderTwo";
import HeroSliderSingle from "../components/Hero/HeroSliderSingle";
import Welcome from "../components/HeadingSection/Welcome";
import ClientsBrand from "../components/ClientsBrand/ClientsBrand";
import ContactUs from "../components/ContactUs/ContactUs";
import OurServices from "../components/OurServices/OurServices";
import serviceOneImg from "../assets/images/services.jpg";
import TestimonialsOne from "../components/Testimonials/TestimonialsOne";
import Footer from "../components/Footer/FooterOne"


const Home = () => {
    const home = useRef();
    const service = useRef();
    const about = useRef();
    const testimonials = useRef();
    const contact = useRef();

    const home_data = {
        "data": dataCorporate,
        "but_ref": contact
    }

    const scrollToSection = (e, content) => {
        e.preventDefault();
        switch (content) {
            case "home":
                home.current.scrollIntoView({ behavior: "smooth" });
                break;
            case "about":
                about.current.scrollIntoView({ behavior: "smooth" });
                break;
            case "testimonials":
                testimonials.current.scrollIntoView({ behavior: "smooth" });
                break;
            case "contact":
                contact.current.scrollIntoView({ behavior: "smooth" });
                break;
            default:
        }
    };
    return (
        <ScrollToTop>
            <Loader>
                <HeaderTwo scrollToSection={scrollToSection} home_ref={home} />
                <HeroSliderSingle home_data={home_data} ref={home} />
                <Welcome title="Who We Are" tagline="Built For You" ref={about}>
                    We are a family owned and operated millworking shop located in central New Jersey.  With over 20 years of experience under our belts we work hard to ensure that no product leaves our shop that we wouldn't put in our own homes.  We love to work hand in hand with our customers to give them an exceptional experience while we turn their vision into a reality!
                </Welcome>
                <OurServices
                    title="What We Offer"
                    tagline="Custom Millworking done right"
                    serviceImg={serviceOneImg}
                    ref={service}
                />
                <TestimonialsOne title="Testimonials" tagline="Happy clients" ref={testimonials} />
                <ContactUs ref={contact} />
                <ClientsBrand />
                <Footer />
            </Loader>
        </ScrollToTop>
    )
};

export default Home;
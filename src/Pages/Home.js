import React, { useRef } from "react";
import ScrollToTop from "../helpers/ScrollToTop"
import Loader from "../components/Loader/Loader";
import dataCorporate from "../data/Slider/corporate-business-data.json";
import HeaderTwo from "../components/Header/HeaderTwo";
import HeroSliderSingle from "../components/Hero/HeroSliderSingle";
import WhoWeAreThree from "../components/WhoWeAre/WhoWeAreThree";
import Portfolio from "../components/Portfolio/Portfolio";
import HeadingSection from "../components/HeadingSection/HeadingSection";
import ClientsBrand from "../components/ClientsBrand/ClientsBrand";
import ContactUs from "../components/ContactUs/ContactUs";

const Home = () => {
    const home = useRef();
    const about = useRef();
    const gallery = useRef();
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
            case "gallery":
                gallery.current.scrollIntoView({ behavior: "smooth" });
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
                <HeaderTwo scrollToSection={scrollToSection} />
                <HeroSliderSingle home_data={home_data} ref={home} />
                <WhoWeAreThree ref={about} />
                <Portfolio filter="true" columns="three" items="8" ref={gallery}>
                    <HeadingSection title={"Gallery"} />
                </Portfolio>
                <ContactUs ref={contact} />
                <ClientsBrand />
            </Loader>
        </ScrollToTop>
    )
};

export default Home;
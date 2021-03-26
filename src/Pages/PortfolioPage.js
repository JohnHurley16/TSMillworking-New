import React, { useRef } from "react";
import ScrollToTop from "../helpers/ScrollToTop"
import Loader from "../components/Loader/Loader";
import HeaderOne from "../components/Header/HeaderOne";
import Portfolio from "../components/Portfolio/Portfolio";
import HeadingSection from '../components/HeadingSection/HeadingSection';
import Footer from "../components/Footer/FooterOne"


const Home = () => {
    const gallery = useRef();

    const scrollToSection = (e) => {
        e.preventDefault();
        gallery.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <ScrollToTop>
            <Loader>
                <HeaderOne scrollToSection={scrollToSection} />
                <Portfolio filter="false" columns="three" items="8" ref={gallery}>
                    <HeadingSection title={"Gallery"} />
                </Portfolio>
                <Footer />
            </Loader>
        </ScrollToTop>
    )
};

export default Home;
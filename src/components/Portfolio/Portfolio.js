import React, { useEffect, useRef, useState, forwardRef } from "react";
import dataPortfolio from "../../data/Portfolio/creative-agency-data.json";
import PortfolioFilter from "../../elements/Portfolio/PortfolioFilter";
import PortfolioItem from "./PortfolioItem";
import Shuffle from "shufflejs";
import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";

const Portfolio = forwardRef(
  ({ filter, layout, columns, space, items, classAppend, children }, ref) => {
    const categories = ["all", "cnc", "laminate", "solid surface", "closet", "cabinetry"];
    const element = useRef();
    const [shuffle, setShuffle] = useState();

    useEffect(() => {
      if (element.current) {
        setShuffle(
          new Shuffle(element.current, {
            itemSelector: ".portfolio-item",
          })
        );
      }

    }, []);

    const filterElements = (evt) => {
      const btn = evt.currentTarget;
      evt.target.parentElement
        .querySelectorAll(".active")
        .forEach((e) => e.classList.remove("active"));
      evt.currentTarget.classList.add("active");
      const cat = btn.getAttribute("value");
      shuffle.filter((element) => {
        return element.getAttribute("data-groups").toLowerCase().includes(cat);
      });
    };

    const [isOpen, setIsOpen] = useState(false);
    const [photo, setPhoto] = useState(0);

    const closeLightbox = () => {
      setIsOpen(false);
    };
    const openLightbox = (e, photo) => {
      e.preventDefault();
      setPhoto(photo);
      setIsOpen(true);
    };

    // useEffect(() => {
    //   shuffleLib= new Shuffle(element.current, {
    //     itemSelector: ".portfolio-item",
    //   })
    // }, []);

    // componentDidUpdate() {
    //   this.shuffle.resetItems();
    // }

    // componentWillUnmount() {
    //   this.shuffle.destroy();
    //   this.shuffle = null;
    // }

    return (
      <section
        className={"pt-120 pb-120 " + (classAppend ? classAppend : "")}
        id="gallery"
        ref={ref}
      >
        {children ? (
          <div className="container">
            <div className="row">{children}</div>
          </div>
        ) : null}
        <div className={"container" + (layout === "wide" ? "-fluid" : "")}>
          <div className="row">
            <div className="portfolio-container text-center">
              {filter === "true" ? (
                <PortfolioFilter
                  categories={categories}
                  handleClick={filterElements}
                />
              ) : null}

              <ul
                id="portfolio-grid"
                ref={element}
                className={(columns ? columns : "three") + "-column hover-two"}
              >
                {items
                  ? dataPortfolio
                    .filter((v, i) => i < items)
                    .map((item, i) => (
                      <PortfolioItem
                        key={item.id}
                        title={item.title}
                        category={item.category}
                        image={item.image}
                        groups={item.groups}
                        space={space ? "true" : "false"}
                        openLightbox={openLightbox}
                      />
                    ))
                  : dataPortfolio.map((item, i) => (
                    <PortfolioItem
                      key={item.id}
                      title={item.title}
                      category={item.category}
                      image={item.image}
                      groups={item.groups}
                      space={space ? "true" : "false"}
                      openLightbox={openLightbox}
                    />
                  ))}
              </ul>
              {isOpen && (
                <Lightbox
                  mainSrc={require("../../assets/images/" + photo)}
                  onCloseRequest={() => closeLightbox()}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
);

export default Portfolio;

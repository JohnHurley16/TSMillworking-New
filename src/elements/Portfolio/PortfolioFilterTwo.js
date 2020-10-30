import React from "react";
import ReactWOW from "react-wow";

const PortfolioFilterTwo = ({ categories }) => (
  <ReactWOW animation="fadeTop" delay="0.1s">
    <ul id="portfolio-filter" className="list-inline filter-transparent">
      {categories.map((cat, i) =>
        i === 0 ? (
          <li className="active" key={i} data-group={cat}>
            {cat}
          </li>
        ) : (
          <li key={i}>{cat}</li>
        )
      )}
    </ul>
  </ReactWOW>
);

export default PortfolioFilterTwo;

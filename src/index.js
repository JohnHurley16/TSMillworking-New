import React from "react";
import ReactDOM from "react-dom";
import SimpleReactLightbox from 'simple-react-lightbox'
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import App from "./App";

ReactDOM.render(
    <SimpleReactLightbox>
        <App />
    </SimpleReactLightbox>,
    document.getElementById("main")
);

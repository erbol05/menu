import React from "react";
import Welcome from "./homeSections/Welcome";
import About from "./homeSections/About";
import Best from "./homeSections/Best";
import ScrollToElement from "./homeSections/Best";

const HomeSections = () => {
    return (
        <div>
            <Welcome />
            <About />
            <Best />
        </div>
    );
};

export default HomeSections;

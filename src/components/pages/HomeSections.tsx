import React from "react";
import Welcome from "./homeSections/Welcome";
import About from "./homeSections/About";
import Best from "./homeSections/Best";
import ScrollToElement from "./homeSections/Best";
import Main from "./homeSections/Main";
import Interior from "./homeSections/Interior";

const HomeSections = () => {
    return (
        <div>
            <Welcome />
            <About />
            <Best />
            <Main />
            <Interior />
        </div>
    );
};

export default HomeSections;

import React from "react";
import Welcome from "./homeSections/Welcome";
import About from "./homeSections/About";
import Visit from "./homeSections/Visit"

const HomeSections = () => {
    return (
        <div>
            <Welcome />
            <About />
            <Visit/>
        </div>
    );
};

export default HomeSections;

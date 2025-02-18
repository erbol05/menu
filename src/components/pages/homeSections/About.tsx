import { FC } from "react";
import scss from "./About.module.scss";
import Image from "next/image";
import icon from "../../../assets/img/icon.png";
import aboutUs from "../../../assets/img/About Us.png";
import aboutImg1 from "../../../assets/img/Frame 15.png";
import aboutImg2 from "../../../assets/img/Frame 16.png";

const About: FC = () => {
    return (
        <section className={scss.About}>
            <div className="container">
                <div className={scss.content}>
                    <div className={scss.aboutIcon}>
                        <Image src={icon} alt="icon" />
                        <Image src={aboutUs} alt="aboutUs" />
                    </div>
                    <div className={scss.aboutText}>
                        <h1>A Journey Throught Cafesio Flavors</h1>
                        <p>
                            Try dishes that will open up new tastes for you and
                            delight your eyes with their appearance. Here you
                            will find a cozy atmosphere, excellent service and
                            attention to each guest. Book a table now and enjoy
                            a unique experience of taste discovery!
                        </p>
                    </div>
                    <div className={scss.aboutImg}>
                        <Image src={aboutImg1} alt="img1"/>
                        <Image src={aboutImg2} alt="img2"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

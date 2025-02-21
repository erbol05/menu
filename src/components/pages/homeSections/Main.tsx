"use client";
import { FC, useState } from "react";
import scss from "./Main.module.scss";
import Image from "next/image";
import mainLog from "@/assets/img/mainMenuLog (2).png";

const Main: FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={scss.Main}>
            <div className="container">
                <div className={scss.content}>
                    <div className={scss.global}>
                        <center>
                            <div className={scss.mainTop}>
                                <Image src={mainLog} alt="" />
                                <h1>
                                    Exceptional Quality. Delightfully Delicious
                                </h1>
                            </div>
                        </center>
                        <div className={scss.mains}>
                            <div className={scss.mains1}>
                                {[
                                    "Desserts",
                                    "Hot Drinks",
                                    "Cold Drinks",
                                    "National Foods",
                                    "Eastern cuisine",
                                    "Fast foods",
                                ].map((el, index) => (
                                    <div
                                        key={index}
                                        onClick={() => handleClick(index)}
                                        style={{
                                            background:
                                                activeIndex === index
                                                    ? "red"
                                                    : "none",
                                            cursor: "pointer",
                                            width: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                        }}
                                    >
                                        <h4>{el}</h4>
                                        <hr />
                                    </div>
                                ))}
                            </div>
                            <div className={scss.mains2}>
                                <div className={scss.mains2All}>
                                    <div className={scss.mains2All_top}>
                                        <b>Beer Brewery</b>
                                        <p>
                                            .....................................................................................
                                        </p>
                                        <h3>$24</h3>
                                    </div>
                                    <div className={scss.mains2All_main}>
                                        <p>
                                            Lörem ipsum askstoppad defaktisk,
                                            logokemi. Diastat retos att
                                            endomatisk. Geogehet pultvätta, om
                                            pneumativ.
                                        </p>
                                        <div className={scss.mains2All_end}>
                                            <h3>Order Now</h3>
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                                <div className={scss.mains2All}>
                                    <div className={scss.mains2All_top}>
                                        <b>Burger&Pasta</b>
                                        <p>
                                            .....................................................................................
                                        </p>
                                        <h3>$14</h3>
                                    </div>
                                    <div className={scss.mains2All_main}>
                                        <p>
                                            Lörem ipsum askstoppad defaktisk,
                                            logokemi. Diastat retos att
                                            endomatisk. Geogehet pultvätta, om
                                            pneumativ.
                                        </p>
                                        <div className={scss.mains2All_end}>
                                            <h3>Order Now</h3>
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                                <div className={scss.mains2All}>
                                    <div className={scss.mains2All_top}>
                                        <b>Burger&Pasta</b>
                                        <p>
                                            .....................................................................................
                                        </p>
                                        <h3>$14</h3>
                                    </div>
                                    <div className={scss.mains2All_main}>
                                        <p>
                                            Lörem ipsum askstoppad defaktisk,
                                            logokemi. Diastat retos att
                                            endomatisk. Geogehet pultvätta, om
                                            pneumativ.
                                        </p>
                                        <div className={scss.mains2All_end}>
                                            <h3>Order Now</h3>
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                                <div className={scss.mains2All}>
                                    <div className={scss.mains2All_top}>
                                        <b>Burger&Pasta</b>
                                        <p>
                                            .....................................................................................
                                        </p>
                                        <h3>$14</h3>
                                    </div>
                                    <div className={scss.mains2All_main}>
                                        <p>
                                            Lörem ipsum askstoppad defaktisk,
                                            logokemi. Diastat retos att
                                            endomatisk. Geogehet pultvätta, om
                                            pneumativ.
                                        </p>
                                        <div className={scss.mains2All_end}>
                                            <h3>Order Now</h3>
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                                <div className={scss.mains2All}>
                                    <div className={scss.mains2All_top}>
                                        <b>Burger&Pasta</b>
                                        <p>
                                            .....................................................................................
                                        </p>
                                        <h3>$14</h3>
                                    </div>
                                    <div className={scss.mains2All_main}>
                                        <p>
                                            Lörem ipsum askstoppad defaktisk,
                                            logokemi. Diastat retos att
                                            endomatisk. Geogehet pultvätta, om
                                            pneumativ.
                                        </p>
                                        <div className={scss.mains2All_end}>
                                            <h3>Order Now</h3>
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={scss.borders}>
                        <div className={scss.bord}></div>
                        <button>View Full menu</button>
                        <div className={scss.bord}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;

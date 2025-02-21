"use client";
import { FC, useRef, useState, useEffect } from "react";
import Image from "next/image";
import scss from "./Best.module.scss";
import icon from "../../../assets/img/icon.png";
import logo from "../../../assets/img/bestLog.png";
import img1 from "../../../assets/img/bestImg1.png";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";

const Best: FC = () => {
    const productContainerRef = useRef<HTMLDivElement>(null);
    const [showScrollLeft, setShowScrollLeft] = useState(false);
    const [showScrollRight, setShowScrollRight] = useState(true);

    useEffect(() => {
        const checkScroll = () => {
            if (productContainerRef.current) {
                setShowScrollLeft(productContainerRef.current.scrollLeft > 0);
                setShowScrollRight(
                    productContainerRef.current.scrollLeft +
                        productContainerRef.current.clientWidth <
                        productContainerRef.current.scrollWidth
                );
            }
        };

        checkScroll();
        productContainerRef.current?.addEventListener("scroll", checkScroll);
        return () =>
            productContainerRef.current?.removeEventListener(
                "scroll",
                checkScroll
            );
    }, []);

    const scrollLeft = () => {
        if (productContainerRef.current) {
            productContainerRef.current.scrollBy({
                left: -400,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (productContainerRef.current) {
            productContainerRef.current.scrollBy({
                left: 400,  
                behavior: "smooth",
            });
        }
    };

    return (
        <section className={scss.Best}>
            <div className="container">
                <div className={scss.content}>
                    <div className={scss.bestText}>
                        <div className={scss.img}>
                            <Image src={icon} alt="icon" />
                            <Image src={logo} alt="logo" />
                        </div>
                        <div className={scss.text}>
                            <h1>You Only Reserve Exception</h1>
                            <p>
                                Each location has a menu that&apos;s curated
                                just for them. See what&apos;s new at your
                                Cafesio and you&apos;ll find Cafesio Covent
                                Garden moments.
                            </p>
                        </div>
                    </div>
                    <div className={scss.bestImgWrapper}>
                        {showScrollLeft && (
                            <button
                                className={scss.scrollLeft}
                                onClick={scrollLeft}
                            >
                                <AiOutlineDoubleLeft />
                            </button>
                        )}
                        <div className={scss.bestImg} ref={productContainerRef}>
                            <Image src={img1} alt="bestImg1" />
                            <Image src={img1} alt="bestImg1" />
                            <Image src={img1} alt="bestImg1" />
                            <Image src={img1} alt="bestImg1" />
                            <Image src={img1} alt="bestImg1" />
                            <Image src={img1} alt="bestImg1" />
                            <Image src={img1} alt="bestImg1" />
                        </div>
                        {showScrollRight && (
                            <button
                                className={scss.scrollRight}
                                onClick={scrollRight}
                            >
                                <AiOutlineDoubleRight />
                            </button>
                        )}
                    </div>
                    <div className={scss.bestImages}>
                        <Image src={img1} alt="" />
                        <Image src={img1} alt="" />
                        <Image src={img1} alt="" />
                        <Image src={img1} alt="" />
                        <Image src={img1} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Best;

import { FC } from "react";
import scss from "./Interior.module.scss";
import Image from "next/image";
import interLog from "@/assets/img/interior.png";
import line from "@/assets/img/Line 16.png";
import inter1 from "@/assets/img/impo1.png";
import inter2 from "@/assets/img/inter2.png";
import inter3 from "@/assets/img/inter3.png";
import inter4 from "@/assets/img/inter4.png";

const Interior: FC = () => {
    return (
        <section className={scss.Interior}>
            <div className="container">
                <div className={scss.content}>
                    <center>
                        <Image src={interLog} alt="logo" />
                    </center>
                    <div className={scss.interior}>
                        <Image
                            src={line}
                            alt="line"
                            className={scss.interLine}
                        />
                        <div className={scss.global}>
                            <div className={scss.interImg}>
                                <Image src={inter1} alt="interior" />
                                <div className={scss.interImg1}>
                                    <Image src={inter2} alt="interior" />
                                    <div className={scss.interImg2}>
                                        <Image src={inter3} alt="interior" />
                                        <Image src={inter4} alt="interior" />
                                    </div>
                                </div>
                            </div>
                            <div className={scss.interImg}>
                                <Image src={inter1} alt="interior" />
                                <div className={scss.interImg1}>
                                    <Image src={inter2} alt="interior" />
                                    <div className={scss.interImg2}>
                                        <Image src={inter3} alt="interior" />
                                        <Image src={inter4} alt="interior" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Interior;

import { FC } from 'react';
import scss from './Visit.module.scss'
import Image from 'next/image';
import icons from '../../../assets/img/Frame 10.png'
import text from '../../../assets/img/Visit Restaurant.png'
import Map from '../../../assets/img/image 22.png'
import { FaArrowRight } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { BsEnvelope } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";



const page: FC = () => {
    return <>
        <section className={scss.Visit}>
            <div className="container">
                <div className={scss.visit}>
                    <div className={scss.visit_text_info}>
                        <div className={scss.visit_icons}>
                            <Image src={icons} alt='icons' />
                            <Image src={text} alt='Visit Restourant' />
                        </div>
                        <div className={scss.visitText}>
                            <h1>Join Us  for <br />
                                Happy Hours</h1>
                            <div className={scss.TextCard}>
                                <h3>Your neighborhood</h3>
                                <h5>225$.Lake Ave.Suite 1150 <br />
                                    Pasadena,CA 911101</h5>
                            </div>
                            <div className={scss.TextCard}>
                                <h3>Opening hours:</h3>
                                <h5>Mon-Thu: 10:00 am - 01:00 am</h5>
                                <h5>Fri-Sun: 10:00 am - 02:00 am</h5>
                            </div>
                            <button>Purchase gift card <FaArrowRight /></button>
                        </div>
                    </div>
                    <div className={scss.visit_Contact__info}>
                        <div className={scss.contact}>
                            <h2>contact Info</h2>
                            <h3><LuPhoneCall />+771219900</h3>
                            <h3><BsEnvelope /> motionweb312@gmail.com</h3>
                        </div>
                        <div className={scss.social_media}>
                            <a href="https://telegram.org/?setln=ru"><FaTelegramPlane /></a>
                            <a href="https://www.instagram.com/"><AiFillInstagram /></a>
                        </div>
                        <div className={scss.mapCard}>
                            <Image src={Map} alt='map'className={scss.map}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>


};


export default page
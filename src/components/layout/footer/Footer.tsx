import Link from "next/link";
import scss from "./Footer.module.scss";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <section className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.FooterLogo}>
            <h1>Restaurant</h1>
          </div>
          <div className={scss.menu_footer}>
            <nav>
              <ul>
                <Link href={'/interior'}>interior</Link>
                <Link href={'/About'}>About Us</Link>
                <Link href={'/Menu'}>Menu</Link>
                <Link href={'/Contacts'}>Contacts</Link>
              </ul>
            </nav>
          </div>
          <div className={scss.social_media}>
            <a href="https://telegram.org/?setln=ru"><FaTelegramPlane /></a>
            <a href="https://www.instagram.com/"><AiFillInstagram /></a>
          </div>
        </div>
        <div className={scss.marker}>
          <h5>c 2023 Motion Study LLC</h5>
        </div>
      </div>
    </section>
  );
};

export default Footer;

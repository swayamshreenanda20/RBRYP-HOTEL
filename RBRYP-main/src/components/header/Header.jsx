import css from "./Header.module.css";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import { useState } from "react";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <div className={css.header}>
        <div className={css.header_left}>
          <li className={css.nav_list}>
            <Link
              to="/"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
              HOME
            </Link>
          </li>
          <li className={css.nav_list}>
            <Link
              to="about_us"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
              ABOUT US
            </Link>
          </li>
          {/* <li className={css.nav_list}>
            <Link
              to="offers"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
              OFFERS
            </Link>
          </li> */}
        </div>
        <div className={css.header_center}>
          <Link to="/" className={css.logo_box}>
            <img src={logo} alt="logo" className={css.logo} />
          </Link>
        </div>
        <div className={css.header_right}>
          <button className={css.btn}>
            <Link
              to="contact_us"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
              CONTACT US
            </Link>
          </button>
        </div>
      </div>

      <div className={css.header_mbl}>
        <Link to="/" className={css.mbl_logo}>
          <img src={logo} alt="logo" className={css.mbl_logo_img} />
        </Link>
        <div className={click ? css.mbl_menu_lists : css.nav_lists}>
          <li className={css.menu_list}>
            <Link
              to="/"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleClick}>
              HOME
            </Link>
          </li>
          <li className={css.menu_list}>
            <Link
              to="about_us"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleClick}>
              ABOUT US
            </Link>
          </li>
          <li className={css.menu_list}>
            <Link
              to="contact us"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleClick}>
              CONTACT US
            </Link>
          </li>
        </div>
        <div className={css.menu_mbl} onClick={handleClick}>
          <i className={click ? "fas fa-times fa-lg" : "fas fa-bars fa-lg"} />
        </div>
      </div>
    </>
  );
};

export default Header;

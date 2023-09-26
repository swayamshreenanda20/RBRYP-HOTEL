import React, { useState } from "react";
import css from "./header.module.css";
import logo from "../../../assets/logo.png";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <div className={css.header}>
        <div className={css.left}>
          <ul className={css.lists}>
            <li className={css.list}>HOME</li>
          </ul>
          <ul className={css.lists}>
            <li className={css.list}>ROOMS</li>
          </ul>
          <ul className={css.lists}>
            <li className={css.list}>SPECIALS</li>
          </ul>
        </div>
        <div className={css.center}>
          <img src={logo} alt="" className={css.logo} />
        </div>
        <div className={css.right}>
          <button className={css.btn}>RESTAURANT</button>
          <button className={css.btn}>LOUNGE</button>
          <button className={css.btn}>CONTACT US</button>
        </div>
      </div>
      <div className={css.header_mbl}>
        <img src={logo} alt="logo" className={css.mbl_logo_img} />

        <div className={click ? css.mbl_menu_lists : css.nav_lists}>
          <ul className={css.mbl_lists}>
            <li className={css.mbl_list}>THE HOTEL</li>
          </ul>
          <ul className={css.mbl_lists}>
            <li className={css.mbl_list}>ROOMS</li>
          </ul>
          <ul className={css.mbl_lists}>
            <li className={css.mbl_list}>SPECIALS</li>
          </ul>
          <ul className={css.mbl_lists}>
            <li className={css.mbl_list}>RESTAURANT</li>
          </ul>
          <ul className={css.mbl_lists}>
            <li className={css.mbl_list}>LOUNGE</li>
          </ul>
          <ul className={css.mbl_lists}>
            <li className={css.mbl_list}>CONTACT US</li>
          </ul>
        </div>
        <div className={css.menu_mbl} onClick={handleClick}>
          <i className={click ? "fas fa-times fa-lg" : "fas fa-bars fa-lg"} />
        </div>
      </div>
    </>
  );
};

export default Header;

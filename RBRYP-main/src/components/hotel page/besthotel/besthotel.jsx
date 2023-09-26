import React from "react";
import css from "./besthotel.module.css";
import dark_bg from "../../../assets/dark_bg.png";
import cir_brown from "../../../assets/cir_brown.png";
import cir_white from "../../../assets/cir_white.png";

const BestHotel = () => {
  return (
    <div className={css.best_hotel}>
      <p className={css.top_para}>
        Book Your Stay Now and Experience the Finest Hospitality with the Best
        Hotel in Motihari.
      </p>
      <h2 className={css.heading}>
        Best Hotel in Motihari - Exceptional Experiences Await
      </h2>
      <p className={css.para}>
        Whether you are visiting Motihari for leisure or business, Ram Bhawan
        Ram Yamuna Prasad Hotel & Resort promises an unforgettable experience.
        From the moment you step into our beautifully designed property to the
        time you bid farewell, we strive to exceed your expectations and create
        lasting memories.
      </p>
      <div className={css.btns}>
        <button className={css.btn_left}>LEARN MORE </button>
        <button className={css.btn_right}>VIEW PACKAGE</button>
      </div>
    </div>
  );
};

export default BestHotel;

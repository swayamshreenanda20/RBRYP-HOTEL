import React from "react";
import css from "./welcome.module.css";
import welcome from "../../../assets/welcome.png";
import welcome_2 from "../../../assets/welcome_2.png";
import pool from "../../../assets/pool.jpg";

const Welcome = () => {
  return (
    <div className={css.welcome}>
      <p className={css.para}>
        Welcome to Ram Bhawan Ram Yamuna Prasad Hotel & Resort
      </p>
      <h2 className={css.heading}>
        Experience Unparalleled Luxury and Hospitality with the Best Hotel &
        Resort in Motihari
      </h2>
      <div className={css.content}>
        <div className={css.left}>
          <p className={css.content_para}>
            Discover Tranquil Bliss at Ram Bhawan Ram Yamuna Prasad Hotel &
            Resort, where indulgence meets serenity. Nestled amidst the
            breathtaking beauty and culture of Motihari, our Hotel & Resort
            offers an enchanting escape from the hustle and bustle of everyday
            life. Immerse yourself in a world of opulence as you step into our
            meticulously designed property. From the moment you arrive, our
            attentive staff will ensure that every detail of your stay is
            nothing short of perfection. Whether you are here for a romantic
            getaway, a family vacation, or an event, our commitment to
            delivering exceptional experiences remains unwavering.
          </p>
          <button className={css.btn}>OUR STORY</button>
        </div>
        <div className={css.right}>
          <img
            src={welcome_2}
            alt="welcome_img"
            className={css.welcome_img_2}
          />
          <img src={welcome} alt="welcome_img" className={css.welcome_img} />
        </div>
      </div>
    </div>
  );
};

export default Welcome;

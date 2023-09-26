import React from "react";
import css from "./hero.module.css";
import hero from "../../../assets/hero.png";

const Hero = () => {
  return (
    <div
      className={css.hero}
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
      }}>
      <p className={css.para}>a modern day palace with</p>
      <h1 className={css.heading}>classic elegance in heart of motihari</h1>
      <button className={css.btn}>EXPLORE THE HOTEL</button>
    </div>
  );
};

export default Hero;

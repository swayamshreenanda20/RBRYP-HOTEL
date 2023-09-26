import React from "react";
import css from "./gallery.module.css";
import gal1 from "../../../assets/gal1.png";
import gal2 from "../../../assets/gal2.png";
import gal3 from "../../../assets/gal3.png";
import gal4 from "../../../assets/gal4.png";
import gal5 from "../../../assets/gal5.png";
import gal6 from "../../../assets/gal6.png";

const Gallery = () => {
  return (
    <div className={css.gallery}>
      <p className={css.para}>
        Looking for a memorable and luxurious stay in Motihari?
      </p>
      <h2 className={css.heading}>THE GALLERY</h2>
      <div className={css.gallery_imgs}>
        <img
          src={gal1}
          alt="the best hotel in motihari"
          className={css.image}
        />
        <img
          src={gal2}
          alt="the best hotel in motihari"
          className={css.image}
        />
        <img
          src={gal3}
          alt="the best hotel in motihari"
          className={css.image}
        />
        <img
          src={gal4}
          alt="the best hotel in motihari"
          className={css.image}
        />
        <img
          src={gal5}
          alt="the best hotel in motihari"
          className={css.image}
        />
        <img
          src={gal6}
          alt="the best hotel in motihari"
          className={css.image}
        />
      </div>
    </div>
  );
};

export default Gallery;

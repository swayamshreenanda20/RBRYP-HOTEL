import css from "./Gallery.module.css";
import hotel from "../../assets/hotel.png";
import auto from "../../assets/auto.png";
import jewell from "../../assets/jewell.png";
import food from "../../assets/food.png";
import school from "../../assets/school.png";
import cloth from "../../assets/cloth.png";
import lounge from "../../assets/lounge.png";
import pool from "../../assets/pool.png";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Gallery = () => {
  return (
    <div className={css.gallery}>
      <h2 className={css.heading}>WHAT WE DO</h2>
      <p className={css.para}>
        At Ram Bhawan Ram Yamuna Prasad, we bring a wide range of services and
        products to the people across India. From providing exceptional
        hospitality experiences, offering quality education, delivering
        top-notch automobiles and fashion, to creating memorable dining
        experiences, we are dedicated to enriching lives and serving our
        community with excellence in every endeavour.
      </p>
      <div className={css.imgs}>
        <Masonry columnsCount={4} gutter="15px" style={{ gap: "0" }}>
          <img src={hotel} alt="" className={css.img_small} />
          <img src={auto} alt="" className={css.img_big} />
          <img src={jewell} alt="" className={css.img_small} />
          <img src={food} alt="" className={css.img_big} />
          <img src={school} alt="" className={css.img_big} />
          <img src={cloth} alt="" className={css.img_small} />
          <img src={pool} alt="" className={css.img_big} />
          <img src={lounge} alt="" className={css.img_small} />
        </Masonry>
      </div>
    </div>
  );
};

export default Gallery;

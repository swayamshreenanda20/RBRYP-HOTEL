import css from "./Department.module.css";
import hotel from "../../assets/hotel.png";
import auto from "../../assets/auto.png";
import jewell from "../../assets/jewell.png";
import food from "../../assets/food.png";
import school from "../../assets/school.png";
import cloth from "../../assets/cloth.png";
import lounge from "../../assets/lounge.png";
import pool from "../../assets/pool.png";
import { Link } from 'react-router-dom';


const Department = () => {
  return (
    <div className={css.department}>
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
        <div
          className={css.img}
          style={{
            backgroundImage: `url(${hotel})`,
            backgroundSize: "cover",
          }}>
          <p className={css.img_para}>Hospitality</p>
        </div>
        <div
          className={css.img}
          style={{
            backgroundImage: `url(${auto})`,
            backgroundSize: "cover",
          }}>
          <p className={css.img_para}>Automobiles</p>
        </div>
        <div
          className={css.img}
          style={{
            backgroundImage: `url(${jewell})`,
            backgroundSize: "cover",
          }}>
          <p className={css.img_para}>Jewellery</p>
        </div>
        <div
          className={css.img}
          style={{
            backgroundImage: `url(${food})`,
            backgroundSize: "cover",
          }}>
          <p className={css.img_para}>Restaurant</p>
        </div>
        <div
          className={css.img}
          style={{
            backgroundImage: `url(${school})`,
            backgroundSize: "cover",
          }}>
          <p className={css.img_para}>Education</p>
        </div>
        <div
          className={css.img}
          style={{
            backgroundImage: `url(${cloth})`,
            backgroundSize: "cover",
          }}>
          <p className={css.img_para}><Link to="/clothing">Clothing</Link></p>
        </div>
        <div
          className={css.img}
          style={{
            backgroundImage: `url(${pool})`,
            backgroundSize: "cover",
          }}>
          <p className={css.img_para}><Link to="/hotel">Hotel</Link></p>
        </div>
        <div
          className={css.img}
          style={{
            backgroundImage: `url(${lounge})`,
            backgroundSize: "cover",
          }}>
          <p className={css.img_para}>Lounge</p>
        </div>
        {/* <img src={hotel} alt="" className={css.img} />
        <img src={auto} alt="" className={css.img} />
        <img src={jewell} alt="" className={css.img} />
        <img src={food} alt="" className={css.img} />
        <img src={school} alt="" className={css.img} />
        <img src={cloth} alt="" className={css.img} />
        <img src={pool} alt="" className={css.img} />
        <img src={lounge} alt="" className={css.img} /> */}
      </div>
    </div>
  );
};

export default Department;

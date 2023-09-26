import React from "react";
import css from "./bookyourstay.module.css";
import stay from "../../../assets/stay.png";

const BookYourStay = () => {
  return (
    <div className={css.container}>
      <div className={css.inner_container}>
        <div className={css.left}>
          <img src={stay} alt="" className={css.img} />
        </div>
        <div className={css.content}>
          <h3 className={css.heading}>
            Book Your Stay at the Best Hotel in Motihari
          </h3>
          <p className={css.para}>
            Looking for a memorable and luxurious stay in Motihari? Look no
            further! Ram Bhawan Ram Yamuna Prasad Hotel & Resort is your perfect
            choice for an exceptional hotel experience in this charming city.
          </p>
        </div>
      </div>
      <div className={css.inner_container_2}>
        <h3 className={css.heading_2}>
          What makes Ram Bhawan Ram Yamuna Prasad best Hotel & Resort in
          Motihari ?
        </h3>
        <ul className={css.lists}>
          <li className={css.para_2}>
            <span className={css.bold}>Unparalleled Luxury:</span>
            Unparalleled Luxury: Our hotel offers unmatched opulence and
            elegance, providing a retreat of comfort and indulgence.
          </li>
          <li className={css.para_2}>
            <span className={css.bold}>Prime Location:</span>
            Located in the heart of Motihari, we offer convenient access to
            major attractions, shopping centres, and business districts.
          </li>
          <li className={css.para_2}>
            <span className={css.bold}>Modern Amenities:</span>
            Our rooms and suites are equipped with modern amenities to ensure a
            pleasant and comfortable stay.
          </li>
          <li className={css.para_2}>
            <span className={css.bold}>Culinary Delights:</span>
            Savour delectable cuisines prepared by our talented chefs, making
            your dining experience a delight.
          </li>
          <li className={css.para_2}>
            <span className={css.bold}>Impeccable Service:</span>
            Our dedicated staff is committed to providing warm and attentive
            service, ensuring your stay is nothing short of exceptional.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BookYourStay;

import React from "react";
import css from "./cards.module.css";

const Cards = () => {
  return (
    <div className={css.cards}>
      <div className={css.top}>
        <h2 className={css.top_heading}>
          Discover the essence of luxury and tranquillity with Best Hotel in
          Motihari
        </h2>
        <p className={css.top_para}>
          At Ram Bhawan Ram Yamuna Prasad Hotel & Resort, where every moment is
          designed to surpass expectations. We invite you to embark on an
          unforgettable journey with us and create cherished memories that will
          last a lifetime.
        </p>
      </div>
      <div className={css.bottom}>
        <div className={css.card}>
          <h3 className={css.heading}>Indulge in Luxurious Accommodations </h3>
          <p className={css.para}>
            Our elegantly appointed rooms and suites boast modern amenities and
            chic décor, providing you with a haven of comfort and relaxation.
            Each accommodation offers stunning views, creating a serene backdrop
            to unwind and rejuvenate.
          </p>
        </div>
        <div className={css.card}>
          <h3 className={css.heading}>Culinary Delights to Savour </h3>
          <p className={css.para}>
            Satisfy your palate with an array of gastronomic wonders at our
            restaurant. Our talented chefs curate a diverse menu featuring
            exquisite local and international cuisines, ensuring an
            unforgettable dining experience that tantalises the taste buds.
          </p>
        </div>
        <div className={css.card}>
          <h3 className={css.heading}>Rejuvenate Your Senses </h3>
          <p className={css.para}>
            At Ram Bhawan Ram Yamuna Prasad, we believe in holistic well-being.
            Our wellness centre offers an oasis of serenity, where you can
            indulge in therapeutic treatments, yoga sessions, and invigorating
            spa therapies. Embrace a sense of rejuvenation as our expert
            therapists guide you on a journey of relaxation and revitalization.
          </p>
        </div>
        <div className={css.card}>
          <h3 className={css.heading}>
            A Paradise for Events and Celebrations{" "}
          </h3>
          <p className={css.para}>
            Host your special occasions, corporate gatherings, and weddings in
            our elegant event venues. From intimate gatherings to grand
            celebrations, our versatile spaces are designed to cater to your
            unique preferences, making every moment truly unforgettable.
          </p>
        </div>
        <div className={css.card}>
          <h3 className={css.heading}>Explore Nature's Beauty & Culture</h3>
          <p className={css.para}>
            Surrounded by the enchanting landscapes of Motihari, our Hotel &
            Resort offers an opportunity to connect with nature. Embark on an
            adventure to explore nearby attractions, engage in thrilling outdoor
            activities, culture of Motihari or simply bask in the tranquillity
            of the surroundings.
          </p>
        </div>
        <div className={css.card}>
          <h3 className={css.heading}>Your Home Away from Home </h3>
          <p className={css.para}>
            At Ram Bhawan Ram Yamuna Prasad Hotel & Resort, we take pride in
            curating a personalised and warm hospitality experience for each
            guest. Your comfort and satisfaction are our top priorities,
            ensuring that you leave with cherished memories and a desire to
            return.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;

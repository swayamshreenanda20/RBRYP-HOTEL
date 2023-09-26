import css from "./About_us.module.css";
import about_img from "../../assets/about_img.png";

const About_us = () => {
  return (
    <div className={css.about_us} id="about_us">
      <h2 className={css.heading}>ABOUT US</h2>
      <p className={css.para}>
        We are proud to be a leading conglomerate based in the vibrant city of
        Motihari, Bihar. With a diverse portfolio of businesses, we strive to
        offer exceptional services and products across various industries,
        including hospitality, education, automobiles, clothing, jewellery,
        lounges, and restaurants. We provide exceptional services and products,
        enriching the lives of our valued customers and contributing to the
        growth of the local community.
      </p>
      <div className={css.cards}>
        <div className={css.card}>
          <h3 className={css.card_heading}>MISSION</h3>
          <p className={css.card_para}>
            To be the driving force behind Motihari's progress, we aim to
            deliver unparalleled quality, innovation, and personalised
            experiences across our diverse business divisions. We are dedicated
            to exceeding customer expectations, empowering individuals, and
            creating a positive impact on our community.
          </p>
          <img src={about_img} alt="" className={css.card_img} />
        </div>
        <div className={css.card}>
          <h3 className={css.card_heading}>VISION</h3>
          <p className={css.card_para}>
            To be the premier conglomerate in Motihari, Bihar, recognized for
            our unwavering commitment to excellence, sustainable growth, and
            creating a lasting positive impact on the lives of our customers,
            employees, and the community.
          </p>
          <img src={about_img} alt="" className={css.card_img} />
        </div>
        <div className={css.card}>
          <h3 className={css.card_heading}>VALUES</h3>
          <p className={css.card_para}>
            Integrity, innovation, customer-centricity, and community
            empowerment form the foundation of our operations. We uphold these
            values to ensure ethical practices, drive continuous improvement,
            prioritise customer satisfaction, and make a meaningful difference
            in the communities we serve.
          </p>
          <img src={about_img} alt="" className={css.card_img} />
        </div>
      </div>
    </div>
  );
};

export default About_us;

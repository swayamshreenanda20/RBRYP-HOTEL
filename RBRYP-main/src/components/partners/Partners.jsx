import css from "./Partners.module.css";
import partner1 from "../../assets/partner1.png";

const Partners = () => {
  return (
    <div className={css.partner}>
      <h2 className={css.heading}>MEET OUR PARTNERS</h2>
      <div className={css.cards}>
        <div className={css.card}>
          <img src={partner1} alt="" className={css.img} />
          <p className={css.name}>RAJAT SINGH</p>
          <p className={css.post}>CEO/ CO-FOUNDER</p>
        </div>
        <div className={css.card}>
          <img src={partner1} alt="" className={css.img} />
          <p className={css.name}>RAJAT SINGH</p>
          <p className={css.post}>CEO/ CO-FOUNDER</p>
        </div>
        <div className={css.card}>
          <img src={partner1} alt="" className={css.img} />
          <p className={css.name}>RAJAT SINGH</p>
          <p className={css.post}>CEO/ CO-FOUNDER</p>
        </div>
        {/* <div className={css.card}>
          <img src={partner1} alt="" className={css.img} />
          <p className={css.name}>RAJAT SINGH</p>
          <p className={css.post}>CEO/ CO-FOUNDER</p>
        </div> */}
      </div>
    </div>
  );
};

export default Partners;

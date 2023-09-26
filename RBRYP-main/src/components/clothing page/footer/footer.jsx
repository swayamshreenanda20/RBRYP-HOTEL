import css from "./footer.module.css";
import logo_dark from "../../../assets/logo_dark.png";
import fb from "../../../assets/fb.png";
import yt from "../../../assets/yt.png";
import insta from "../../../assets/insta.png";

const Footer = () => {
  return (
    <div className={css.footer} id="contact_us">
      <img src={logo_dark} alt="" className={css.logo} />
      <div className={css.right}>
        <input type="text" className={css.input} placeholder="Your E-Mail" />
        <div className={css.middle}>
          <div className={css.middle1}>
            <p className={css.title}>PARTNERSHIP</p>
            <p className={css.para}>Lorem Ipsum</p>
            <p className={css.para}>Lorem Ipsum</p>
            <p className={css.para}>Lorem Ipsum</p>
          </div>
          <div className={css.middle2}>
            <p className={css.title}>ABOUT</p>
            <p className={css.para}>Lorem Ipsum</p>
            <p className={css.para}>Lorem Ipsum</p>
            <p className={css.para}>Lorem Ipsum</p>
          </div>
          <div className={css.middle3}>
            <p className={css.title}>SUPPORT</p>
            <p className={css.para}>Lorem Ipsum</p>
            <p className={css.para}>Lorem Ipsum</p>
            <p className={css.para}>Lorem Ipsum</p>
          </div>
        </div>
        <div className={css.line}></div>
        <div className={css.copy_link}>
          <p className={css.copyright}>
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <div className={css.links}>
            <img src={fb} alt="" className={css.link_img} />
            <img src={yt} alt="" className={css.link_img} />
            <img src={insta} alt="" className={css.link_img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

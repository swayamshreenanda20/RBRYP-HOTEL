import React from "react";
import css from "./contact.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <div className={css.contact}>
      <a
        href="tel:+91 9122762278"
        style={{ textDecoration: "none" }}
        className={css.contact_links}>
        <BiPhoneCall color="#fff" className={css.icon} />
        <span className={css.contact_link}>+91-6005787874</span>
      </a>
      <a
        href="mailto:rbryp.resorts@gmail..com"
        style={{ textDecoration: "none" }}
        className={css.contact_links}>
        <FiMail color="#fff" className={css.icon} />
        <span className={css.contact_link}>info@abhyaasiit.com</span>
      </a>
      <a
        href="https://wa.me/919122762278?text=Hello,%20I%20want%20to%20chat!"
        style={{ textDecoration: "none" }}
        target="_blank"
        rel="noreferrer"
        className={css.contact_links}>
        <FaWhatsapp color="#fff" className={css.icon} />
        <span className={css.contact_link}>91-6005787874</span>
      </a>
    </div>
  );
};

export default Contact;

import css from "./Why_us.module.css";

const Why_us = () => {
  return (
    <div className={css.Why_us} id="offers">
      <h2 className={css.heading}>WHY PARTNER WITH US</h2>
      <p className={css.para}>
        Partnering with Ram Bhawan Ram Yamuna Prasad can offer strong
        collaboration opportunities that can amplify your business growth. By
        leveraging our extensive network, expertise, and shared values,
        together, we can create mutually beneficial partnerships that drive
        success and make a positive impact across India.
      </p>
      <div className={css.cards}>
        <div className={css.card}>
          <h3 className={css.card_heading}>Strong Industry Expertise</h3>
          <p className={css.card_para}>
             Partner with us to leverage our decades of experience and deep
            industry knowledge, ensuring strategic insights and proven success
            to drive your business forward.
          </p>
        </div>
        <div className={css.card}>
          <h3 className={css.card_heading}>Extensive Network and Resources</h3>
          <p className={css.card_para}>
            Unlock new opportunities and collaborations by tapping into our vast
            network of industry contacts, investors, and resources, expanding
            your reach and accelerating growth.
          </p>
        </div>
        <div className={css.card}>
          <h3 className={css.card_heading}>
            Commitment to Quality and Excellence:
          </h3>
          <p className={css.card_para}>
            Align your brand with our reputation, renowned for maintaining the
            highest standards of quality, excellence, and customer satisfaction,
            enhancing your market reputation.
          </p>
        </div>
        <div className={css.card}>
          <h3 className={css.card_heading}>Innovation & Adaptability</h3>
          <p className={css.card_para}>
            Embrace our culture of innovation and adaptability through
            collaboration, harnessing our collective strengths to create
            groundbreaking solutions and strong vision.
          </p>
        </div>
        <div className={css.card}>
          <h3 className={css.card_heading}>
            Shared Values and Ethical Practices
          </h3>
          <p className={css.card_para}>
            Join forces with an organisation that shares your commitment to
            ethics, integrity, and responsible business practices, fostering a
            sustainable and socially responsible approach.
          </p>
        </div>
        <div className={css.card}>
          <h3 className={css.card_heading}>Community Impact</h3>
          <p className={css.card_para}>
            Partner with us to make a meaningful difference in the community as
            we contribute to its development and well-being, creating a positive
            impact that extends beyond business success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why_us;

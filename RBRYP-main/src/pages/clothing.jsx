import React from "react";
import Header from "../components/clothing page/header/header";
import Hero from "../components/clothing page/hero/hero";
import Footer from "../components/clothing page/footer/footer";
import Sarees from "../components/clothing page/sarees/sarees";
import Sherwani from "../components/clothing page/sherwani/sherwani";
import Storegallery from "../components/clothing page/storegallery/storegallery";
import Lehenga from "../components/clothing page/lehenga/lehenga";
import css from "./clothing.module.css";




const Home = () => {
  return (
    <div className={css.home}>
      <Header />
      <Hero />
      <Sarees/>
      <Lehenga/>
      <Sherwani/>
      <Storegallery/>
      <Footer/>
      </div>
  );
};

export default Home;
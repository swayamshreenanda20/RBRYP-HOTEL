import React from "react";
import Header from "../components/hotel page/header/header";
import Hero from "../components/hotel page/hero/hero";
import Welcome from "../components/hotel page/welcome/welcome";
import Cards from "../components/hotel page/cards/cards";
import Footer from "../components/hotel page/footer/footer";
import BookYourStay from "../components/hotel page/bookyourstay/bookyourstay";
import Gallery from "../components/hotel page/gallery/gallery";
import BestHotel from "../components/hotel page/besthotel/besthotel";
import Contact from "../components/hotel page/contact/contact";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Contact />
      <Welcome />
      <Cards />
      <Gallery />
      <BestHotel />
      <BookYourStay />
      <Footer />
    </>
  );
};

export default Home;
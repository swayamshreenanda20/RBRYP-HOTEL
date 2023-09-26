import About_us from "../components/about_us/About_us";
import Department from "../components/departments/Department";
import Footer from "../components/footer/Footer";
import Gallery from "../components/gallery/Gallery";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Partners from "../components/partners/Partners";
import Why_us from "../components/why_us/Why_us";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About_us />
      <Partners />
      {/* <Gallery /> */}
      <Department />
      <Why_us />
      <Footer />
    </>
  );
};

export default Home;

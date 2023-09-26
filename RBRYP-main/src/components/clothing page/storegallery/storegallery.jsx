import css from "./storegallery.module.css";
import storeimg1 from "../../../assets/Rectangle 179.png";
import storeimg2 from "../../../assets/Rectangle 180.png";
import storeimg3 from "../../../assets/Rectangle 194.png";
import storeimg4 from "../../../assets/Rectangle 195.png";
import storeimg5 from "../../../assets/Rectangle 196.png";
import storeimg6 from "../../../assets/Rectangle 220.png";
import storeimg7 from "../../../assets/Rectangle 221.png";






import React, { useState } from "react";



const Storegallery = () =>{
    
  const images = [storeimg1, storeimg2, storeimg3, storeimg4, storeimg5, storeimg6, storeimg7]; // Add more image paths here
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
  };

  return (
    <div className={css.storeGallery}>
      <div className={css.imageContainer}>
        <img src={images[currentImageIndex]} className={css.storeimg} alt={`Image ${currentImageIndex + 1}`} />
        <div className={css.buttonContainer}>
        <button onClick={prevImage} className={css.navButton}>
          {"<"}
        </button>
        <button onClick={nextImage} className={css.navButton}>
          {">"}
        </button>
        </div>
      </div>
    </div>
  );
};



export default Storegallery;
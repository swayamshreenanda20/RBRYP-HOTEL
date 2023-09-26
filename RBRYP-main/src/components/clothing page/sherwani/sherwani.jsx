import css from "./sherwani.module.css";
import shimg1 from "../../../assets/Rectangle 178.png";
import shimg2 from "../../../assets/Rectangle 184.png";
import shimg3 from "../../../assets/Rectangle 185.png";
import shimg4 from "../../../assets/Rectangle 186.png";
import shimg5 from "../../../assets/Rectangle 187.png";
import shimg6 from "../../../assets/Rectangle 188.png";
import shimg7 from "../../../assets/Rectangle 189.png";

import React, { useState } from "react";







const Sherwani =() => {

    const images = [shimg1, shimg2, shimg3 ,shimg4 ,shimg5 ,shimg6 ,shimg7]; // Add more image paths here
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const nextImage = () => {
      const nextIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextIndex);
    };
  
    const prevImage = () => {
      const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
      setCurrentImageIndex(prevIndex);
    };

    
    return(
       <div className={css.container}>
        <div className={css.imageContainer}>
<img src={images[currentImageIndex]} className={css.shimg} alt={`Image ${currentImageIndex + 1}`} />
<div className={css.buttonContainer}>
<button onClick={prevImage} className={css.navButton}>
  {"<"}
</button>
<button onClick={nextImage} className={css.navButton}>
  {">"}
</button>
</div>
</div>
        <div className= {css.txtdiv}>
            <p className={css.para1}>SHERWANI</p><br></br>
            <p className={css.para2}>Lorem ipsum dolor sit amet consectetur. In non facilisis nec consectetur et. Nec varius ultrices etiam sed ut diam enim turpis dignissim. Aliquam ut et et commodo vitae non volutpat sit. Faucibus orci morbi dolor lacus scelerisque odio dui sed viverra. Donec enim orci pu</p>
        </div>
       </div>


    );
};

export default Sherwani;


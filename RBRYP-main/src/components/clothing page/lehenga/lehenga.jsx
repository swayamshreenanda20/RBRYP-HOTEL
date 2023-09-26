import css from "./lehenga.module.css";
import limg1 from "../../../assets/Rectangle 17.png";
import limg2 from "../../../assets/Rectangle 191.png";
import limg3 from "../../../assets/Rectangle 193.png";

import React, { useState } from "react";






const Lehenga = () => {


    const images = [limg1, limg2, limg3]; // Add more image paths here
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
        <div className={css.container}>
            <div className={css.txtdiv}>
                <p className={css.para1}>LEHENGA</p><br></br>
                <p className={css.para2}>Lorem ipsum dolor sit amet consectetur. In non facilisis nec consectetur et. Nec varius ultrices etiam sed ut diam enim turpis dignissim. Aliquam ut et et commodo vitae non volutpat sit. Faucibus orci morbi dolor lacus scelerisque odio dui sed viverra. Donec enim orci pu</p>
            </div>
            <div className={css.imageContainer}>
                <img src={images[currentImageIndex]} className={css.limg} alt={`Image ${currentImageIndex + 1}`} />
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

export default Lehenga;
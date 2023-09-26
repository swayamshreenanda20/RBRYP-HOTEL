import css from "./sarees.module.css";
import simg1 from "../../../assets/Rectangle 177.png";
import simg2 from "../../../assets/Rectangle 181.png";
import simg3 from "../../../assets/Rectangle 182.png";
import simg4 from "../../../assets/Rectangle 183.png";
import simg5 from "../../../assets/Rectangle 1805.png";





import React, { useState } from "react";


const Sarees = () => {

    const images = [simg1, simg2, simg3, simg4,simg5]; // Add more image paths here
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
            <div className={css.imageContainer}>
                <img src={images[currentImageIndex]} className={css.simg} alt={`Image ${currentImageIndex + 1}`} />
                <div className={css.buttonContainer}>
                    <button onClick={prevImage} className={css.navButton}>
                        {"<"}
                    </button>
                    <button onClick={nextImage} className={css.navButton}>
                        {">"}
                    </button>
                </div>
            </div>
            <div className={css.txtdiv}>
                <p className={css.para1}>SAREES</p><br></br>
                <p className={css.para2}>Lorem ipsum dolor sit amet consectetur. In non facilisis nec consectetur et. Nec varius ultrices etiam sed ut diam enim turpis dignissim. Aliquam ut et et commodo vitae non volutpat sit. Faucibus orci morbi dolor lacus scelerisque odio dui sed viverra. Donec enim orci pu</p>
            </div>
        </div>


    );
};

export default Sarees;
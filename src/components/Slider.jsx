import { useState } from "react";
import SliderIndex from "./SliderIndex";

const Slider = (props) => {
    const {imagelist} = props
    const [currentIndex, setCurrentIndex] = useState(0)

    //--------------- Functions for left and right arrow--------------------------
    const handleLeftArrow =  () => {
        const firstimage = currentIndex === 0
        const newIndex = firstimage ? imagelist.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const handleRightArrow = () => {
        const lastimage = currentIndex === imagelist.length - 1
        const newIndex = lastimage ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    // --------Function for dots-------------------------
    const handleSliderIndex = (imageindex) => {
        setCurrentIndex(imageindex)
    }


    return ( 
        <div className="slider-container">

        {/* ---------------slider of places to travel---------------------- */}
            <div style={{backgroundImage: `url(${imagelist[currentIndex].url})`}} className="display-image"  >
                <h6 className="destination-name"> 
                    {imagelist[currentIndex].name}
                </h6>


                {/* ------------navigation arrows-------------- */}
                <div className="navigation-arrows">
                    <div onClick={handleLeftArrow} className="left-arrow">
                        <i className="fa-solid fa-arrow-left"></i>
                    </div>
                    <div onClick={handleRightArrow} className="right-arrow">
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </div>

        {/* ----------dots to navigate-------------- */}
            <div className="slider-index">
                {imagelist.map((image, imageIndex) => (
                    <SliderIndex
                        imageIndex={imageIndex}
                        handleSliderIndex={handleSliderIndex}
                        active={imageIndex === currentIndex}
                    />
                ))}
            </div>     
        </div>
     );
}
 
export default Slider;
import { useState } from 'react';
import {PropTypes} from "prop-types"
import SliderIndex from './SliderIndex';

function Slider(props) {
  const { cities } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftArrow = () => {
    const firstimage = currentIndex === 0;
    const newIndex = firstimage ? cities.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleRightArrow = () => {
    const lastimage = currentIndex === cities.length - 1;
    const newIndex = lastimage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleSliderIndex = (imageindex) => {
    setCurrentIndex(imageindex);
  };

  return (
    <div className="slider-container">
      <div style={{ backgroundImage: `url(${cities[currentIndex].url})` }} className="display-image">
        <h6 className="destination-name">
          {cities[currentIndex].name}
        </h6>

        <div className="navigation-arrows">
          <button type='button' onClick={handleLeftArrow} className="left-arrow">
            <i className="fa-solid fa-arrow-left" />
          </button>

          <button type='button' onClick={handleRightArrow} className="right-arrow">
            <i className="fa-solid fa-arrow-right" />
          </button>
        </div>
      </div>

      <div className="slider-index">
        {cities.map((city, cityIndex) => (
          <SliderIndex
            key={cityIndex}
            cityIndex={cityIndex}
            handleSliderIndex={handleSliderIndex}
            active={cityIndex === currentIndex}
          />
        ))}
      </div>
    </div>
  );
}

Slider.propTypes = {
  cities : PropTypes.array,
}

export default Slider;

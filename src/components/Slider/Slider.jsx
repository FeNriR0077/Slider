import { useState } from 'react';
import SliderIndex from './SliderIndex';

function Slider(props) {
  const { imagelist } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftArrow = () => {
    const firstimage = currentIndex === 0;
    const newIndex = firstimage ? imagelist.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleRightArrow = () => {
    const lastimage = currentIndex === imagelist.length - 1;
    const newIndex = lastimage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleSliderIndex = (imageindex) => {
    setCurrentIndex(imageindex);
  };

  return (
    <div className="slider-container">
      <div style={{ backgroundImage: `url(${imagelist[currentIndex].url})` }} className="display-image">
        <h6 className="destination-name">
          {imagelist[currentIndex].name}
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

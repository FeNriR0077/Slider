const SliderIndex = (props) => {
  const { imageIndex, handleSliderIndex, active} = props;

  return (
    <i
      key={imageIndex}
      className={`fa-sharp fa-solid fa-circle dots ${
        active ? "active" : ""
      } `}
      onClick={() => handleSliderIndex(imageIndex)}
    ></i>
  );
};

SliderIndex.defaultProps = {
  imageIndex: 0,
  handleSliderIndex: null,
  active: false
};
  
export default SliderIndex;
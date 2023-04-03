function SliderIndex(props) {
  const { imageIndex, handleSliderIndex, active } = props;

  return (
    <button type="button" onClick={() => handleSliderIndex(imageIndex)}>
      <i
      key={imageIndex}
      className={`fa-sharp fa-solid fa-circle dots ${
        active ? 'active' : ''
      } `}
    />
    </button>
  );
}

SliderIndex.defaultProps = {
  imageIndex: 0,
  handleSliderIndex: null,
  active: false,
};

export default SliderIndex;

import {PropTypes} from "prop-types"

const SliderIndex = (props) => {
  const { cityIndex, handleSliderIndex, active } = props;

  return (
    <button type="button" onClick={() => handleSliderIndex(cityIndex)}>
      <i
      className={`fa-sharp fa-solid fa-circle dots ${
        active ? 'active' : ''
      } `}
    />
    </button>
  );
}

SliderIndex.defaultProps = {
  cityIndex: 0,
  handleSliderIndex: null,
  active: false,
};

SliderIndex.propTypes = {
  cityIndex: PropTypes.number,
  handleSliderIndex: PropTypes.func,
  active: PropTypes.bool,
}

export default SliderIndex;

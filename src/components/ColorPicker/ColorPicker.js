import "./ColorPicker.css";
import { Close } from "@mui/icons-material";

const ColorPicker = ({
  hue,
  setHue,
  randomColor,
  setRandomColor,
  show,
  innerRef,
  dismissColorPicker
}) => {
  return (
    <div
      className={`color-picker-container ${!show ? "hidden" : ""}`}
      ref={innerRef}
    >
      <div className="color-picker-header">
        <h3>Color Picker</h3>
        <MyCheckBox
          setHue={setHue}
          randomColor={randomColor}
          setRandomColor={setRandomColor}
          id="inner"
        />
        <div className="blank-space"></div>
        <Close
          onClick={dismissColorPicker}
          sx={{ color: "white", cursor: "pointer" }}
        />
      </div>
      <ColorRange hue={hue} setHue={setHue} />
    </div>
  );
};

const ColorRange = ({ hue, setHue }) => {
  return (
    <input
      className={`color-picker`}
      type="range"
      min={0}
      max={360}
      value={hue}
      onInput={(e) => {
        console.log(e.target.value);
        setHue(e.target.value);
      }}
    />
  );
};

const MyCheckBox = ({ randomColor, setRandomColor, setHue, id }) => {
  const handleOnChangeCheckBox = (e) => {
    const checked = e.target.checked;
    return setRandomColor(checked);
  };

  return (
    <div className="my-checkbox">
      <input
        id={`colorCheckbox${id}`}
        type="checkbox"
        onChange={handleOnChangeCheckBox}
        checked={randomColor}
      />
      <label htmlFor={`colorCheckbox${id}`}>Random Color</label>
    </div>
  );
};

export default ColorPicker;
export { ColorRange, MyCheckBox };

import PropTypes from "prop-types";
import Menu from "./Menu";
function ToDo({ name, keyName, colors, currentColor, handler, colorHandler }) {
  const handleClickEvent = () => handler(keyName);
  return (
    <div className={`todo bg-${colors[currentColor]}`}>
      <Menu
        elements={colors}
        keyName={keyName}
        name="📝"
        colorHandler={colorHandler}
      ></Menu>
      <div className="text-content">{name}</div>
      <button className="check" onClick={handleClickEvent}>
        ✔
      </button>
    </div>
  );
}

ToDo.PropType = {
  name: PropTypes.string.isRequired,
  keyName: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string),
  handler: PropTypes.func.isRequired,
  colorHandler: PropTypes.func,
};

export default ToDo;

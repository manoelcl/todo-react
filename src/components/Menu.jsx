import PropTypes from "prop-types";

function Menu({ elements, name, keyName, colorHandler }) {
  return (
    <div className="menu">
      <div>{name}</div>
      {elements.map((element, index) => (
        <div
          onClick={() => {
            colorHandler(keyName, index);
          }}
          key={index}
          className={`color-picker bg-${element}`}
        ></div>
      ))}
    </div>
  );
}

Menu.PropType = {
  name: PropTypes.string.isRequired,
  elements: PropTypes.arrayOf(PropTypes.string),
  colorHandler: PropTypes.func,
};

export default Menu;

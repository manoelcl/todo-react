import PropTypes from "prop-types";
function ToDo({ name, keyName, handler }) {
  const handleClickEvent = () => handler(keyName);
  return (
    <div className="todo">
      <div className="menu1"></div>
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
  handler: PropTypes.func.isRequired,
};

export default ToDo;

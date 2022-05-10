import PropTypes from "prop-types";
function ToDo({ name, keyName, handler }) {
  const handleClickEvent = () => handler(keyName);
  return (
    <div>
      <div>{name}</div>
      <button onClick={handleClickEvent}>Completed</button>
    </div>
  );
}

ToDo.PropType = {
  name: PropTypes.string.isRequired,
  keyName: PropTypes.string,
  handler: PropTypes.func.isRequired,
};

export default ToDo;

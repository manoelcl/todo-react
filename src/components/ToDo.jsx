import PropTypes from "prop-types";
import { useState } from "react";
import Menu from "./Menu";
import TextInput from "./TextInput";
function ToDo({
  name,
  keyName,
  colors,
  currentColor,
  handler,
  colorHandler,
  textHandler,
}) {
  const [editMode, setEditMode] = useState(false);
  const handleCheckEvent = () => handler(keyName);
  const handleEditEvent = () => setEditMode(!editMode);
  const handleTextEditEvent = ({ text }) => {
    textHandler(keyName, text);
    handleEditEvent();
  };
  return (
    <div className={`todo bg-${colors[currentColor]} t${keyName}`}>
      <button onClick={handleEditEvent}>📝</button>
      <Menu
        elements={colors}
        keyName={keyName}
        name=""
        colorHandler={colorHandler}
      ></Menu>
      {!editMode ? (
        <div className="text-content">{name}</div>
      ) : (
        <div className="text-content">
          <TextInput
            buttonText="✔️"
            initialValue={name}
            className="text-content"
            handler={handleTextEditEvent}
          />
        </div>
      )}
      {!editMode ? (
        <button className="check" onClick={handleCheckEvent}>
          🗑️
        </button>
      ) : (
        ""
      )}
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

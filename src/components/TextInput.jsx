import PropTypes from "prop-types";
import { useState } from "react";

function TextInput({ handler }) {
  const [textInput, setTextInput] = useState("");
  const handleClick = () => {
    handler({ text: textInput });
    setTextInput("");
  };

  return (
    <>
      <input
        type="text"
        name="textInput"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        placeholder="Type your todo"
      ></input>
      <button onClick={handleClick}>Create ToDo</button>
    </>
  );
}
TextInput.PropType = {
  handler: PropTypes.func.isRequired,
};

export default TextInput;

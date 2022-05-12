import PropTypes from "prop-types";
import { useState } from "react";

function TextInput({ handler, buttonText, initialValue = "" }) {
  const [textInput, setTextInput] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    handler({ text: textInput });
    setTextInput("");
  };

  return (
    <form>
      <input
        type="text"
        name="textInput"
        autoComplete="off"
        autoFocus
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        placeholder="Type your todo"
      ></input>
      {/* cambiar por input type submit con prevent default */}
      <button onClick={handleSubmit}>{buttonText || "Create to-do"}</button>
    </form>
  );
}
TextInput.PropType = {
  handler: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
};

export default TextInput;

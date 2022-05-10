import PropTypes from "prop-types";
import { useState } from "react";

function TextInput({ handler }) {
  const [textInput, setTextInput] = useState("");
  const handleSubmit = () => {
    handler({ text: textInput });
    setTextInput("");
  };

  return (
    <>
      <input
        type="text"
        name="textInput"
        value={textInput}
        onSubmit={handleSubmit}
        onChange={(e) => setTextInput(e.target.value)}
        placeholder="Type your todo"
      ></input>
      <button onClick={handleSubmit}>Create ToDo</button>
    </>
  );
}
TextInput.PropType = {
  handler: PropTypes.func.isRequired,
};

export default TextInput;

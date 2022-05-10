import "./App.css";
import TextInput from "./components/TextInput";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [todoElements, setTodo] = useState([]);

  const deleteTodo = (index) => {
    todoElements.splice(index, 1);
    console.log(index);
    setTodo([...todoElements]);
  };

  return (
    <div className="App">
      <TextInput handler={({ text }) => setTodo([...todoElements, text])} />
      <TodoList todoList={todoElements} todoHandler={deleteTodo} />
    </div>
  );
}

export default App;

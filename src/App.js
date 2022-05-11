import "./App.css";
import TextInput from "./components/TextInput";
import TodoList from "./components/TodoList";
import { useState } from "react";

const COLORS = ["yellow", "blue", "orange", "red", "green"];
let CURRENT_COLOR = localStorage.getItem("currentColor")
  ? JSON.parse(localStorage.getItem("currentColor"))
  : 0;

function App() {
  const [todoElements, setTodo] = useState(
    localStorage.getItem("todoElements")
      ? [...JSON.parse(localStorage.getItem("todoElements"))]
      : []
  );

  const createRandomNumber = (amp) => Math.random() * 2 * amp - amp;

  const createTodo = ({
    text,
    currentColor = CURRENT_COLOR,
    rotation = createRandomNumber(2),
    offset = createRandomNumber(12),
  }) => {
    const newElements = [
      ...todoElements,
      { text, currentColor, rotation, offset },
    ];
    setTodo(newElements);
    updateLocalStorage(newElements, CURRENT_COLOR);
  };

  const deleteTodo = (index) => {
    todoElements.splice(index, 1);
    setTodo([...todoElements]);
    updateLocalStorage(todoElements, CURRENT_COLOR);
  };

  const setTodoColor = (index, colorNum) => {
    console.log(index, colorNum);
    todoElements[index] = { ...todoElements[index], currentColor: colorNum };
    setTodo([...todoElements]);
    CURRENT_COLOR = colorNum;
    updateLocalStorage(todoElements, CURRENT_COLOR);
  };

  const updateLocalStorage = (elements, currentColor) => {
    localStorage.setItem("todoElements", JSON.stringify(elements));
    localStorage.setItem("currentColor", JSON.stringify(currentColor));
  };

  return (
    <div className="App">
      <header>
        <h1>To-do List</h1>
        <TextInput handler={createTodo} />
      </header>
      <main>
        <TodoList
          todoList={todoElements}
          colors={COLORS}
          todoHandler={deleteTodo}
          colorHandler={setTodoColor}
        />
      </main>
      <footer>
        <a href="https://github.com/manoelcl">Manoel Castro</a>, 2022
      </footer>
    </div>
  );
}

export default App;

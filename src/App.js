import "./App.css";
import TextInput from "./components/TextInput";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [todoElements, setTodo] = useState(
    localStorage.getItem("todoElements")
      ? [...JSON.parse(localStorage.getItem("todoElements"))]
      : []
  );

  const createTodo = ({ text }) => {
    const newElements = [...todoElements, text];
    setTodo(newElements);
    updateLocalStorage(newElements);
  };

  const deleteTodo = (index) => {
    todoElements.splice(index, 1);
    setTodo([...todoElements]);
    updateLocalStorage(todoElements);
  };

  const updateLocalStorage = (elements) => {
    localStorage.setItem("todoElements", JSON.stringify(elements));
  };

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
        <TextInput handler={createTodo} />
      </header>
      <main>
        <TodoList todoList={todoElements} todoHandler={deleteTodo} />
      </main>
      <footer>
        <a href="https://github.com/manoelcl">Manoel Castro</a>, 2022
      </footer>
    </div>
  );
}

export default App;

import PropTypes from "prop-types";
import ToDo from "./ToDo";

function TodoList({ todoList, todoHandler, colors, colorHandler }) {
  return (
    <>
      {todoList.map((todo, index) => (
        <ToDo
          key={index}
          keyName={index}
          name={todo.text}
          handler={todoHandler}
          colors={colors}
          colorHandler={colorHandler}
          currentColor={todo.currentColor}
        />
      ))}
    </>
  );
}
TodoList.PropType = {
  todoList: PropTypes.arrayOf(PropTypes.object),
  todoHandler: PropTypes.func,
  colorHandler: PropTypes.func,
};
export default TodoList;

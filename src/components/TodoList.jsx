import PropTypes from "prop-types";
import ToDo from "./ToDo";

function TodoList({ todoList, todoHandler }) {
  return (
    <>
      {todoList.map((todo, index) => (
        <ToDo key={index} keyName={index} name={todo} handler={todoHandler} />
      ))}
    </>
  );
}
TodoList.PropType = {
  todoList: PropTypes.arrayOf(PropTypes.string),
  todoHandler: PropTypes.func,
};
export default TodoList;

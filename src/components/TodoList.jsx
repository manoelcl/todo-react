import PropTypes from "prop-types";
import React from "react";
import ToDo from "./ToDo";

function TodoList({
  todoList,
  todoHandler,
  colors,
  colorHandler,
  textHandler,
}) {
  return (
    <>
      <style>
        {todoList.reduce(
          (acc, curr, index) => {
            return (
              acc +
              ` .t${index}{ transform: rotate(${curr.rotation}deg) translateX(${curr.offset}px);}`
            );
          },

          ""
        )}
      </style>
      {todoList.map((todo, index) => (
        <ToDo
          key={index}
          keyName={index}
          name={todo.text}
          handler={todoHandler}
          colors={colors}
          colorHandler={colorHandler}
          currentColor={todo.currentColor}
          textHandler={textHandler}
        />
      ))}
    </>
  );
}
TodoList.PropType = {
  todoList: PropTypes.arrayOf(PropTypes.object),
  todoHandler: PropTypes.func,
  colorHandler: PropTypes.func,
  textHandler: PropTypes.func,
};
export default TodoList;

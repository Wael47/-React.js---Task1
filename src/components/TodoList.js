import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <ul>
      {props.todoList.map((todo) => {
        return (
          <li key={todo.id}>
            <Todo todo={todo} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;

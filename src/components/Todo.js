import React from "react";
import "../style/TodoStyle.css";

const Todo = (props) => {
  const todo = props.todo;
  return (
    <div className="Todo">
      <h2>{todo.title}</h2>
      <p className={todo.completed ? "isCompleted" : "isIncomplete"}>
        {todo.completed ? "Completed" : "Incomplete"}
      </p>
    </div>
  );
};

export default Todo;

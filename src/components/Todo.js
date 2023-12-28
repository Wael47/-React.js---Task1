import React from "react";
import "../style/TodoStyle.css";

const Todo = (props) => {
  const todo = props.todo;
  return (
    <div className="Todo">
      <h2>{todo.title}</h2>
      <div>
        <samp className={todo.completed ? "isCompleted" : "isIncomplete"}>
          {todo.completed ? "Completed" : "Incomplete"}
        </samp>
      </div>
    </div>
  );
};

export default Todo;

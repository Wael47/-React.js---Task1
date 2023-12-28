import React from "react";
import Todo from "./Todo";
import "../style/TodoStyle.css";

const TodoList = (props) => {
  const deleteTodo = props.onDeleteTodo;
  return (
    <ul>
      {props.todoList.map((todo, index) => {
        return (
          <li key={todo.id} className="TodoList">
            <Todo todo={todo} />
            <button onClick={() => deleteTodo(index)}>Delete Todo</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;

import "./App.css";
import TodoList from "./components/TodoList";
import { useState } from "react";

const list = [
  {
    id: 1,
    title: "Complete homework",
    completed: false,
  },
  {
    id: 2,
    title: "Read a book",
    completed: true,
  },
  {
    id: 3,
    title: "Go for a run",
    completed: false,
  },
  {
    id: 4,
    title: "Buy groceries",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(list);
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: todos.length + 1,
      title: e.target.elements.title.value,
      completed: false,
    };
    setTodos([...todos, todo]);
    e.target.elements.title.value = "";
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Title <input type="text" name="title" required />
        </label>
        <input type="submit" value={"Add Todo"} />
      </form>

      <TodoList todoList={todos} />
    </div>
  );
}

export default App;

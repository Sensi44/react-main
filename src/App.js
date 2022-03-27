import React from "react";
import TodoList from "./Todo/TodoList";

function App() {
  const todos = [
    { id: 1, completed: false, title: "купить хлеб" },
    { id: 2, completed: false, title: "купить масло" },
    { id: 3, completed: false, title: "купить молоко" },
  ];

  return (
    <div className="wrapper">
      <h1>React tutorial</h1>
      <h2>React tutorial2</h2>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;

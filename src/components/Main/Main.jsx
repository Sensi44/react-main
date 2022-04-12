import React from "react";
import ItemAddForm from "./ItemAddForm";

import TodoList from "./TodoList";

import "./Main.scss";

const Main = ({ todos, onDeleted, add, onToggleDone, onToggleImportant }) => {
  return (
    <section className="main">
      <TodoList
        todos={todos}
        onDeleted={(id) => onDeleted(id)}
        onToggleDone={(id) => onToggleDone(id)}
        onToggleImportant={(id) => onToggleImportant(id)}
      />
      <ItemAddForm add={() => add("Тестовое добавление")} />
    </section>
  );
};

export default Main;

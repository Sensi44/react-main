import React from "react";
import ItemAddForm from "./ItemAddForm";

import TodoList from "./TodoList";

import "./Main.scss";

const Main = ({ todos, onDeleted, add, onToggleDone,
                onToggleImportant, editItem, confirmEdit }) => {


  return (
    <section className="main">
      <TodoList
        todos={todos}
        onDeleted={(id) => onDeleted(id)}
        onToggleDone={(id) => onToggleDone(id)}
        onToggleImportant={(id) => onToggleImportant(id)}
        editItem={(id) => editItem(id)}
        confirmEdit={(text, id) => confirmEdit(text, id)}

      />

      <ItemAddForm add={(text) => add(text)} />


    </section>
  );
}

export default Main;

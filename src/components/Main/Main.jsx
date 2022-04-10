import React from "react";
import ItemAddForm from "./ItemAddForm";

import TodoList from "./TodoList";

import "./Main.scss";

const Main = ({todos, onDeleted, add, done, imp}) => {
  return (
    <section className="main">
      <TodoList todos={todos}
                onDeleted={(id) => onDeleted(id)}
                done={(id => done(id))}
                imp={(id, aa) => imp(id, aa)}
      />
       <ItemAddForm add={() => add('Тестовое добавление')}/>
    </section>
  );
};

export default Main;

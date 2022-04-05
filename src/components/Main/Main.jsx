import React from "react";

import TodoList from "./TodoList";

import "./Main.scss";

const Main = (props) => {
  return (
    <section className="main">
      <TodoList todos={props.todos} />
    </section>
  );
};

export default Main;

import React from "react";
import TodoListItem from "../TodoListItem";
import "./TodoList.scss";

const TodoList = ({ todos }) => {
  const elements = todos.map((item) => {
    const { id, classname, ...itemProps } = item;
    return (
      <li key={id} className={classname}>
        <TodoListItem {...itemProps} />
        <input type="text" className="edit" defaultValue="Editing task" />
      </li>
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TodoList;

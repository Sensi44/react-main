import React from "react";
import TodoListItem from "../TodoListItem";
import "./TodoList.scss";

const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant }) => {
  const elements = todos.map((item) => {
    const { id, classname, ...itemProps } = item;
    return (
      <li key={id} className={classname}>
        <TodoListItem
          {...itemProps}
          classname={classname}
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleImportant={() => onToggleImportant(id)}
        />
        <input type="text" className="edit" defaultValue="Editing task" />
      </li>
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TodoList;

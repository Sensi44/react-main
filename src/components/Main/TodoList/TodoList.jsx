import React, {useState} from "react";
import TodoListItem from "../TodoListItem";
import "./TodoList.scss";

const TodoList = (props) => {
  const { todos, onDeleted, onToggleDone, onToggleImportant, editItem, confirmEdit } = props;

  const elements = todos.map((item, idx) => {

    const { status, ...itemProps } = item;

    return (
      <li key={idx} className={status}>
        <TodoListItem
          {...itemProps}
          status={status}
          onDeleted={() => onDeleted(idx)}
          onToggleDone={() => onToggleDone(idx)}
          onToggleImportant={() => onToggleImportant(idx)}
          editItem={() => editItem(idx)}
          confirmEdit={(text) => confirmEdit(text, idx)}
        />

      </li>
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TodoList;

import React, { useState } from "react";
import TodoListItem from "../TodoListItem";
import "./TodoList.scss";
import PropTypes from "prop-types";

const TodoList = (props) => {
  const {
    todos,
    onDeleted,
    onToggleDone,
    onToggleImportant,
    editItem,
    confirmEdit,
  } = props;

  const elements = todos.map((item, idx) => {
    const { id, status, ...itemProps } = item;
    return (
      <li key={idx} className={status}>
        <TodoListItem
          {...itemProps}
          status={status}
          onDeleted={() => onDeleted(idx)}
          onToggleDone={() => onToggleDone(id)}
          onToggleImportant={() => onToggleImportant(id)}
          editItem={() => editItem(idx)}
          confirmEdit={(text) => confirmEdit(text, idx)}
        />
      </li>
    );
  });

  return <ul className="todo-list">
    {elements}

  </ul>;
};


TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,


  //
}


export default TodoList;

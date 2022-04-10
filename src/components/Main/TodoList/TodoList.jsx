import React from "react";
import TodoListItem from "../TodoListItem";
import "./TodoList.scss";

const TodoList = ({ todos, onDeleted, done, imp }) => {
  const elements = todos.map((item) => {
    const { id, classname, ...itemProps } = item;
    return (
      <li key={id} className={classname}>
        <TodoListItem
            {...itemProps}
            classname={classname}
            onDeleted={()=> onDeleted(id)}
            done={() => done(id)}
            imp={(aa) => imp(id, aa)}
        />
        <input type="text" className="edit" defaultValue="Editing task" />
      </li>
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TodoList;

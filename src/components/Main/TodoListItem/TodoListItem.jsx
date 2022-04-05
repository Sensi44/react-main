import React from "react";
import "./TodoListItem.scss";

const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? "steelblue" : "black",
    fontWeight: important ? "bold" : "normal",
  };

  return (
    <div className="view">
      <input type="checkbox" className="toggle" />
      <label>
        <span className="description">{label}</span>
        <span className="created">created 17 seconds ago</span>
      </label>
      <button className="icon icon-edit" />
      <button className="icon icon-destroy" />
    </div>
  );
};

export default TodoListItem;

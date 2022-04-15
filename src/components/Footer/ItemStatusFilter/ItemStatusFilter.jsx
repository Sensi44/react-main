import React, {useState} from "react";

import "./ItemStatusFilter.scss";

const ItemStatusFilter = (props) => {
  const { toDo, done, filter, clear,filterStatus } = props;

  return (
    <div className="footer-wrap">
      <span className="todo-count">
        | Active - {toDo}, done - {done} |
      </span>

      <ul className="filters">
        <li onClick={() => filter("all")}>
          <button className={filterStatus === 'all' ? 'selected' : ''}>All</button>
        </li>

        <li onClick={() => filter("active")}>
          <button className={filterStatus === 'active' ? 'selected' : ''}>Active</button>
        </li>

        <li onClick={() => filter("completed")}>
          <button className={filterStatus === 'completed' ? 'selected' : ''}>Completed</button>
        </li>
      </ul>

      <button className="clear-completed" onClick={clear}>
        Clear completed
      </button>
    </div>
  );
};

export default ItemStatusFilter;





import React from "react";

import "./ItemStatusFilter.scss";

const ItemStatusFilter = (props) => {
  const { toDo, done, filter, clear } = props;

  return (
    <div className="footer-wrap">
      <span className="todo-count">
        | Active - {toDo}, done - {done} |
      </span>

      <ul className="filters">
        <li onClick={() => filter("all")}>
          <button className="selected">All</button>
        </li>

        <li onClick={() => filter("active")}>
          <button>Active</button>
        </li>

        <li onClick={() => filter("completed")}>
          <button>Completed</button>
        </li>
      </ul>

      <button className="clear-completed" onClick={clear}>
        Clear completed
      </button>
    </div>
  );
};

export default ItemStatusFilter;





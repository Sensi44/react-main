import React from "react";
import PropTypes from "prop-types";

function TodoItem({ todo, index }) {
  return (
    <li>
      <strong>{index + 1}</strong>&nbsp;
      {todo.title}
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default TodoItem;

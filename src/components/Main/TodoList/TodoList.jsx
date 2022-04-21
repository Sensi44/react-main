import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from '../TodoListItem';

import './TodoList.scss';

function TodoList(props) {
  const {
    todos,
    onDeleted,
    onToggleDone,
    onToggleImportant,
    editItem,
    confirmEdit,
  } = props;

  const elements = todos.map((item, idx) => {
    const { id, status, label, important, diffTime } = item;
    return (
      <li key={`${id}-super-key`} className={status}>
        <TodoListItem
          label={label}
          diffTime={diffTime}
          status={status}
          important={important}
          onDeleted={() => onDeleted(idx)}
          onToggleDone={() => onToggleDone(id)}
          onToggleImportant={() => onToggleImportant(id)}
          editItem={() => editItem(idx)}
          confirmEdit={(text) => confirmEdit(text, idx)}
        />
      </li>
    );
  });

  return <ul className='todo-list'>{elements}</ul>;
}

TodoList.defaultProps = {
  todos: [],
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    })
  ),
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  onToggleImportant: PropTypes.func,
  editItem: PropTypes.func,
  confirmEdit: PropTypes.func,
};

export default TodoList;

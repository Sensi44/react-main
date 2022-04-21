import React from 'react';

import PropTypes from 'prop-types';
import ItemAddForm from './ItemAddForm';
import TodoList from './TodoList';
import './Main.scss';

function Main({
  todos,
  onDeleted,
  add,
  onToggleDone,
  onToggleImportant,
  editItem,
  confirmEdit,
}) {
  return (
    <section className='main'>
      <TodoList
        todos={todos}
        onDeleted={(id) => onDeleted(id)}
        onToggleDone={(id) => onToggleDone(id)}
        onToggleImportant={(id) => onToggleImportant(id)}
        editItem={(id) => editItem(id)}
        confirmEdit={(text, id) => confirmEdit(text, id)}
      />
      <ItemAddForm add={(text) => add(text)} />
    </section>
  );
}

Main.defaultProps = {
  todos: [],
  add: () => {},
};

Main.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    })
  ),
  onDeleted: PropTypes.func,
  add: PropTypes.func,
  onToggleDone: PropTypes.func,
  onToggleImportant: PropTypes.func,
  editItem: PropTypes.func,
  confirmEdit: PropTypes.func,
};

export default Main;

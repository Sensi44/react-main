import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import './TodoListItem.scss';

function TodoListItem(props) {
  const {
    label, onDeleted, onToggleDone, onToggleImportant, status,
    important, editItem, confirmEdit, diffTime
  } = props;

  // eslint-disable-next-line prefer-const
  let [labelInput, setLabel] = useState('');

  const onLabelChange = (e) => {
    const temp = e.target.value[0].toUpperCase() + e.target.value.slice(1);
    setLabel((labelInput = temp === 'undefined' ? '' : temp));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    confirmEdit(labelInput);
    setLabel((labelInput = ''));
  };

  const onChange = (e) => {
    setLabel(e.target.value);
  };

  const style = {
    color: important ? 'red' : 'black',
    fontWeight: important ? 'bold' : 'normal',
    fontSize: 27
  };

  let labelClassNames = 'description';
  labelClassNames += (status === 'completed') ? (' done') : ('');
  labelClassNames += (important) ? (' description-important') : ('');

  return (
    <>
      <form onSubmit={onSubmit}>
        <span className="edit-icon">ᴥ</span>

        <input
          type="text"
          className="edit"
          onChange={onLabelChange}
          placeholder={label}
          onKeyDown={onChange}
        />
      </form>

      <div className="view">
        <span className="important" style={style}>

          {important ? '!' : '~'}

        </span>

        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          {' '}
          {/* eslint-disable-next-line max-len */}
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus */}
          <span role="menuitem" className={labelClassNames} onClick={onToggleDone}>
            {label}
          </span>
          <span className="created">{diffTime}</span>
        </label>

        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button type="button" className="icon icon-edit" onClick={editItem} />
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button type="button" className="icon icon-destroy" onClick={onDeleted} />
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button type="button" className="icon icon-important" onClick={onToggleImportant} />
      </div>
    </>
  );
}

TodoListItem.defaultProps = {
  important: false,
  status: 'active',
  onToggleDone: () => {},
  onToggleImportant: () => {},
  onDeleted: () => {},
  diffTime: 'Время не пришло',
  confirmEdit: () => {},
  editItem: () => {}
};

TodoListItem.propTypes = {
  label: PropTypes.string.isRequired,
  status: PropTypes.string,
  diffTime: PropTypes.string,
  important: PropTypes.bool,
  onToggleDone: PropTypes.func,
  onDeleted: PropTypes.func,
  onToggleImportant: PropTypes.func,
  confirmEdit: PropTypes.func,
  editItem: PropTypes.func
};

export default TodoListItem;

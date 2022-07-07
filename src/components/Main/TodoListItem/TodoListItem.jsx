import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Timer from '../../Timer';

import './TodoListItem.scss';

function TodoListItem(props) {
  const { label, onDeleted, onToggleDone, onToggleImportant, status } = props;
  const { important, editItem, confirmEdit, diffTime } = props;
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
    fontSize: 27,
  };

  let labelClassNames = 'description';
  labelClassNames += status === 'completed' ? ' done' : '';
  labelClassNames += important ? ' description-important' : '';

  return (
    <>
      <form onSubmit={onSubmit}>
        <span className='edit-icon'>ᴥ</span>
        <input type='text' className='edit' onChange={onLabelChange} placeholder={label} onKeyDown={onChange} />
      </form>

      <div className='view'>
        <span className='important' style={style}>
          {important ? '!' : '~'}
        </span>

        <label>
          <span tabIndex={0} role='menuitem' className={labelClassNames} onClick={onToggleDone}>
            {label}
          </span>
          <span className='created'>{diffTime}</span>
        </label>

        <Timer />
        <button type='button' className='icon icon-edit' onClick={editItem} />
        <button type='button' className='icon icon-destroy' onClick={onDeleted} />
        <button type='button' className='icon icon-important' onClick={onToggleImportant} />
      </div>
    </>
  );
}

TodoListItem.defaultProps = {
  important: false,
  status: 'active',
  diffTime: 'Время не пришло',
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
  editItem: PropTypes.func,
};

export default TodoListItem;

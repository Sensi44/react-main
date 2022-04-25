import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ItemAddForm.scss';

function ItemAddForm(props) {
  const { add } = props;
  // eslint-disable-next-line prefer-const
  let [label, setLabel] = useState('');
  const [focus, setFocus] = useState(false);

  const onLabelChange = (e) => {
    const temp = e.target.value[0].toUpperCase() + e.target.value.slice(1);
    setLabel((label = temp === 'undefined' ? '' : temp));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    add(label);
    setLabel((label = ''));
  };

  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  return (
    <form className='item-add-form' onSubmit={onSubmit}>
      <input
        // autoFocus
        type='text'
        onFocus={onFocus}
        onBlur={onBlur}
        className={focus ? 'add-input' : 'add-input blur'}
        onChange={onLabelChange}
        placeholder='What needs to be done'
        value={label}
      />
      <button type='submit' className='btn' onClick={onSubmit}>
        Add Item
      </button>
    </form>
  );
}

ItemAddForm.defaultProps = {
  add: () => {},
};

ItemAddForm.propTypes = {
  add: PropTypes.func,
};

export default ItemAddForm;

import React from 'react';
import PropTypes from 'prop-types';

import './ItemStatusFilter.scss';

function ItemStatusFilter(props) {
  const {
    toDo, done, filter, clear, filterStatus,
  } = props;

  return (
    <div className="footer-wrap">
      <span className="todo-count">
        | Active -
        {' '}
        {toDo}
        , done -
        {' '}
        {done}
        {' '}
        |
      </span>

      <ul className="filters">
        <li onClick={() => filter('all')}>
          <button type="button" className={filterStatus === 'all' ? 'selected' : ''}>All</button>
        </li>

        <li onClick={() => filter('active')}>
          <button type="button" className={filterStatus === 'active' ? 'selected' : ''}>Active</button>
        </li>

        <li onClick={() => filter('completed')}>
          <button type="button" className={filterStatus === 'completed' ? 'selected' : ''}>Completed</button>
        </li>
      </ul>

      <button type="button" className="clear-completed" onClick={clear}>
        Clear completed
      </button>
    </div>
  );
}

ItemStatusFilter.defaultProps = {
  toDo: 0,
  done: 0,
  filter: () => {},
  clear: () => {},
  filterStatus: 'all',
};

ItemStatusFilter.propTypes = {
  toDo: PropTypes.number,
  done: PropTypes.number,
  filterStatus: PropTypes.string,
  clear: PropTypes.func,
  filter: PropTypes.func,
};

export default ItemStatusFilter;

import React from 'react';
import PropTypes from 'prop-types';

import ItemStatusFilter from './ItemStatusFilter';

import './Footer.scss';

function Footer(props) {
  const { toDo, done, filter, clear, filterStatus } = props;
  return (
    <footer className='footer'>
      <ItemStatusFilter
        toDo={toDo}
        done={done}
        filter={(f) => filter(f)}
        clear={() => clear()}
        filterStatus={filterStatus}
      />
    </footer>
  );
}

Footer.defaultProps = {
  toDo: 0,
  done: 0,
  filter: () => {},
  clear: () => {},
  filterStatus: 'all',
};

Footer.propTypes = {
  toDo: PropTypes.number,
  done: PropTypes.number,
  filterStatus: PropTypes.string,
  clear: PropTypes.func,
  filter: PropTypes.func,
};

export default Footer;

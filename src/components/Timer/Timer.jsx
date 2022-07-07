import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './Timer.scss';

const Timer = () => {
  const [timerStatus, setTimerStatus] = useState(false);
  const [timeleft, setTimeLeft] = useState([10, 15]);

  const changeTimer = (e) => {
    console.log(e.target.value);
    const time = e.target.value.split(':');
    setTimeLeft([...time]);
    console.log(timeleft);
  };

  useEffect(() => {
    let timer = null;
    if (timerStatus) {
      timer = setInterval(() => {
        setTimeLeft((prevtime) => {
          if (prevtime[1] <= 59 && prevtime[1] > 0) {
            let seconds = prevtime[1] - 1;
            seconds = seconds < 10 ? `0${seconds}` : seconds;
            return [prevtime[0], seconds];
          }
          if (prevtime[1] === 0 && prevtime[0] > 0) {
            let min = prevtime[0] - 1;
            min = min < 10 ? `0${min}` : min;
            const seconds = 59;
            return [min, seconds];
          }
          if (prevtime[0] === 0 && prevtime[1] === 0) {
            clearInterval(timer);
            return ['00', '00'];
          }
          return [prevtime[0], prevtime[1]];
        });
      }, 1000);
    } else {
      clearInterval(timer);
      setTimeLeft(timeleft);
    }
    return () => clearInterval(timer);
  }, [timerStatus]);

  return (
    <span className='description timer-block'>
      <button type='button' className='icon_timer icon-play' onClick={() => setTimerStatus(true)}>
        {' '}
      </button>
      <button type='button' className='icon_timer icon-pause' onClick={() => setTimerStatus(false)}>
        {' '}
      </button>

      <input
        className='timer_input'
        value={`${timeleft[0].toString().slice(-2)}:${timeleft[1].toString().slice(-2)}`}
        type='time'
        onChange={changeTimer}
      />
    </span>
  );
};

Timer.defaultProps = {
  time: [0, 0],
};

Timer.propTypes = {
  time: PropTypes.arrayOf(PropTypes.number),
};

export default Timer;

import React, {Component} from "react";

import PropTypes from 'prop-types';

const Counter = ({counter, func, number, string}) => {
  console.log(counter, func, number, string);
  return <p>{`Counter component. Counter value is: ${counter}`}</p>
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired, // обязательное
  func: PropTypes.func,
  number: PropTypes.number,
  string: PropTypes.string,
}

Counter.defaultProps = {   // указываем дефолтные значения пропсов пропсов
  func: () => {},
  number: 0,
  string: '',
}




export default class Lesson_04 extends Component{
state = {
  counter: 0,
  id2: 100,
}

  handleClick = () => {
    this.setState(({counter, id2}) => ({   // деструктуризация текущей версии объекта state
      counter: ++counter,
      id2: ++id2,
    }))
  }

  render() {
    const { counter, id2 } = this.state;
    return(
      <div>
        <div>{counter}&nbsp;{id2}</div>
        <button onClick={this.handleClick}>+1</button>

        <Counter counter={counter}/>

      </div>
    )
  }
}





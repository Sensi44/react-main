import React, {Component} from "react";

import PropTypes, {oneOfType} from 'prop-types';


// node
Component.propTypes = {
  node: PropTypes.node,
}

//element
Component.propTypes = {
  elem: PropTypes.element,
}

// Instance of
Component.propTypes = {
  instance: PropTypes.instanceOf('Constructor'),
}


// One of:
Component.propTypes = {
  elem: PropTypes.oneOf(['val1', 'val2']),
}

// One of type:
Component.propTypes = {
  elem: PropTypes/oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

//Array of / Object of:
Component.propTypes = {
  array: PropTypes.arrayOf(PropTypes.string),
  object: PropTypes.objectOf(PropTypes.number),
}

// Shape:  - Форма
Component.propTypes = {
  obj: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
    lineHeight: PropTypes.number,
  }),
}



export const Counter = ({counter = 0}) => {
  return <p>{`Counter component. Counter value is: ${counter}`}</p>
}

export const Button = () => (
  <button>Simple button</button>
)


export class Lesson_05 extends Component {
static propTypes = {
  children: PropTypes.element,
}

static defaultProps = {
  children: null,
}

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
    const {children, child} = this.props;
    return(
      <div>
        {child}
        <div>{counter}&nbsp;{id2}</div>
        {children}
        {React.cloneElement(children, {counter: this.state.counter})}
        <button onClick={this.handleClick}>+1</button>

      </div>
    )
  }
}






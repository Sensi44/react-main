import React, {Component} from "react";

import PropTypes from 'prop-types';

const MyLink = ({text, onClick}) => (
  <a href="/test" onClick={onClick}>{text}</a>
)

MyLink.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

MyLink.defaultProps = {
  text: 'link',
  onclick: () => {},
}

class Lesson_06 extends Component {

  handleClick = (e) => {
    e.preventDefault();     // Отменяем дефолтное поведение
    console.log('Click')
    this.test = () => {
      console.log('Вложенная функция')
    }            // Один обработчик внутрь другого
    this.test();
  }

  render() {
    return (
      <MyLink onClick={this.handleClick} />
    )
  }

}


export default Lesson_06;



// Передача аргументов в события
// class Lesson_07 extends Component {
//
//   handleClick = (e, o) => {
//     console.log(o)
//     e.preventDefault();     // Отменяем дефолтное поведение
//     console.log('Click')
//   }
//
//   render() {
//     return (
//       <MyLink onClick={(e) => this.handleClick(e, 'test')} />
//     )
//   }
//
// }






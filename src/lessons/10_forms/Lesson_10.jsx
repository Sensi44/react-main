import React, {Component, Fragment} from "react";

import "./Lesson_10.scss";

import {POSITIONS} from '../Config/Config'

class Lesson_10 extends Component{
  // т.к. данные берём из стейта, мы не можем ничего сами вводить в поля, пока что
  state = {
    inputText: '',
    textareaText: '',
    selectText: '',
    showData: {
      name: '',
      text: '',
      position: '',
    }
  }

  // Сразу из объекта event вытягиваем через деструктуризацию таргет и из него вэлью
  handleInputChange = ({target: { value }}) => {
    this.setState({
      inputText: value,
    })
  }

  handleTextareaChange = ({target: { value }}) => {
    this.setState({
      textareaText: value,
    })
  }

  handleSelectChange = ({target: { value }}) => {
    this.setState({
      selectText: value,
    })
  }

  handleShow = (e) => {
    e.preventDefault();
    const { inputText, textareaText, selectText } = this.state;
    this.setState({
      inputText: '',
      textareaText: '',
      selectText: '',
      showData: {
        name: inputText,
        text: textareaText,
        position: selectText,
      }
    })
  }

  render() {
    const { inputText, textareaText, showData, selectText } = this.state;
    const { name, text, position } = showData;

    return (
      <Fragment>
        <form>            {/* Обрати внимание как используется label, всё как в html */}
          {/* Input */}
          <label>
            Name:
            <input type="text" name="name" value={inputText} onChange={this.handleInputChange}/>
          </label>

          {/* Textarea */}<br />
          <label htmlFor="text">Text:</label>
          <textarea id="text" value={textareaText} onChange={this.handleTextareaChange}/>

          {/* Select */}<br />
          <select value={selectText} onChange={this.handleSelectChange}>
            {POSITIONS.map(({ id, value, title }) => (
              <option key={id} value={value}>{title}</option>
            )) }
            {/*<option value="Front-end developer">Front-end developer</option>*/}
            {/*<option value="Back-end developer">Back-end developer</option>*/}
          </select>
          
          {/* button */}<br />
          <button className="btn" onClick={this.handleShow}>Show</button>
        </form>
        <span>{name}</span><br/>
        <span>{text}</span><br />
        <span>{position}</span>
      </Fragment>
    )
  }
}


export default Lesson_10;



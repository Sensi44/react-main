import React, {Component, Fragment} from "react";

import "./Lesson_12.scss";
import {POSITIONS} from "../Config/Config";

// links ref - (getElementById)

class Lesson_12 extends Component{
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

  //!! Инициализация ссылок
  inputRef = React.createRef();
  textareaRef = React.createRef();
  selectRef = React.createRef();

  // Теперь 3 метода можем заменить одним см.ниже.
  // handleInputChange = ({target: { value }}) => {
  //   this.setState({
  //     inputText: value,
  //   })
  // }
  //
  // handleTextareaChange = ({target: { value }}) => {
  //   this.setState({
  //     textareaText: value,
  //   })
  // }
  //
  // handleSelectChange = ({target: { value }}) => {
  //   this.setState({
  //     selectText: value,
  //   })
  // }

  handleChange = () => {
    this.setState({
      inputText: this.inputRef.current.value,
      textareaText: this.textareaRef.current.value,
      selectText: this.selectRef.current.value,
    })
  }

  UNSAFE_componentWillMount() {
    console.log('cwm', this.inputRef)
  }

  componentDidMount() {
    console.log('cdm', this.inputRef)
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
        <form>
          {/* Input */}
          <label>
            Name:
            <input ref={this.inputRef} type="text" name="name" value={inputText} onChange={this.handleChange}/>
          </label>

          {/* Textarea */}<br />
          <label htmlFor="text">Text:</label>
          <textarea ref={this.textareaRef} id="text" value={textareaText} onChange={this.handleChange}/>

          {/* Select */}<br />
          <select ref={this.selectRef} value={selectText} onChange={this.handleChange}>
            {POSITIONS.map(({ id, value, title }) => (
              <option key={id} value={value}>{title}</option>
            )) }
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


export default Lesson_12;



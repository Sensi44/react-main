import React, { Component } from "react";

import "./TodoListItem.scss";

export default class TodoListItem extends Component {

  state = {
    important: false,
  }

  onLabelClick = () => {
    console.log(`Done: ${this.props.label}`);
  };

  handleChange = () => {
    const { important } = this.state;
    this.setState({
      important: important ? false : true,
    })
  }

  render() {
    // console.log(this.props) // label, important

    const {label} = this.props;
    // const {label, important} = this.props;
    const { important } = this.state;

    const style = {
      color: important ? 'red' : 'black',
      fontWeight: important ? 'bold' : 'normal',
    }


    return (
      <div className="view">
        <input type="checkbox" className="toggle" />
        <span onClick={this.handleChange} className="important" style={style}>{important ? '!' : '~'}</span>
        <label onClick={this.onLabelClick}>
          <span className="description" >{label}</span>
          <span className="created">created 17 seconds ago</span>
        </label>
        <button className="icon icon-edit" />
        <button className="icon icon-destroy" />
      </div>
    );
  }
}

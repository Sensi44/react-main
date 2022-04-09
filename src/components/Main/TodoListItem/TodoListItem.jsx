import React, { Component } from "react";

import "./TodoListItem.scss";

export default class TodoListItem extends Component {
  state = {
    important: false,
    done: false,
  }

  onLabelClick = () => {
    const { done } = this.state;
    this.setState({
      done: !done,
    })
  };

  importantChange = () => {
    const { important } = this.state;
    this.setState({
      important: !important,
    })
  }

  render() {
    const {label} = this.props;
    const { important, done } = this.state;

    const style = {
      color: important ? 'red' : 'black',
      fontWeight: important ? 'bold' : 'normal',
      fontSize: 27,
    }

    let labelClassNames = 'description';
    (done) ? labelClassNames += ' done' : labelClassNames += '';
    (important) ? labelClassNames += ' description-important' : labelClassNames += '';


    return (
      <div className="view">
        <input type="checkbox" className="toggle" />
        <span onClick={this.importantChange} className="important" style={style}>{important ? '!' : '~'}</span>
        <label onClick={this.onLabelClick}>
          <span className={labelClassNames} >{label}</span>
          <span className="created">created 17 seconds ago</span>
        </label>
        <button className="icon icon-edit" />
        <button className="icon icon-destroy" />
      </div>
    );
  }
}

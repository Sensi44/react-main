import React, { Component } from "react";

import "./TodoListItem.scss";

export default class TodoListItem extends Component {
  state = {
    important: this.props.important,
    isDone: (this.props.classname === 'completed'),
  };


  taskDone = () => {
    this.setState(({ isDone }) => {
      return { isDone: !isDone };
    });
  };

  onMarkImportant = () => {
      const imp = this.props.imp
    this.setState(({ important }) => {
      return { important: !important };
    });
      imp(this.state.important);
  };

  render() {
      console.log(this.props)

    const { label, onDeleted, done, imp} = this.props;
    const { important, isDone } = this.state;
    const style = {
      color: important ? "red" : "black",
      fontWeight: important ? "bold" : "normal",
      fontSize: 27,
    };


    let labelClassNames = "description";
    isDone ? (labelClassNames += " done") : (labelClassNames += "");
    important
      ? (labelClassNames += " description-important")
      : (labelClassNames += "");

    return (
      <div className="view">
        <input type="checkbox" className="toggle" />

        <span
          className="important"
          style={style}
        >
          {important ? "!" : "~"}
        </span>

        <label onClick={this.taskDone}>
          <span className={labelClassNames}
                onClick={done}
          >{label}</span>
          <span className="created">created 17 seconds ago</span>
        </label>

        <button type="button"
                className="icon icon-edit"
                // onClick={}
        />
        <button type="button"
                className="icon icon-destroy"
                onClick={onDeleted}
        />
        <button type="button"
                className="icon icon-important"
                onClick={this.onMarkImportant}
        />
      </div>
    );
  }
}

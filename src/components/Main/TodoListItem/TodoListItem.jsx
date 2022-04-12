import React, { Component } from "react";

import "./TodoListItem.scss";

export default class TodoListItem extends Component {
  render() {
    const {
      label, onDeleted,
      onToggleDone, onToggleImportant,
      important, done,
    } = this.props;

    const style = {
      color: important ? "red" : "black",
      fontWeight: important ? "bold" : "normal",
      fontSize: 27,
    };

    let labelClassNames = "description";
    done ? (labelClassNames += " done") : (labelClassNames += "");
    important
      ? (labelClassNames += " description-important")
      : (labelClassNames += "");

    return (
      <div className="view">
        <input type="checkbox" className="toggle" />

        <span className="important" style={style}> {/* important flag */}
          {important ? "!" : "~"}
        </span>

        <label> {/* main text */}
          <span className={labelClassNames} onClick={onToggleDone}>
            {label}
          </span>
          <span className="created">created 17 seconds ago</span>
        </label>

        <button type="button" className="icon icon-edit"/> {/* edit */}
        <button type="button" className="icon icon-destroy" onClick={onDeleted}/> {/* delete */}
        <button type="button" className="icon icon-important" onClick={onToggleImportant}/> {/* important */}
      </div>
    );
  }
}

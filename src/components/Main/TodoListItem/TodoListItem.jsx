import React, { Component } from "react";

import "./TodoListItem.scss";

export default class TodoListItem extends Component {
  onLabelClick = () => {
    console.log(`Done: ${this.props.label}`);
  };

  render() {
    return (
      <div className="view">
        <input type="checkbox" className="toggle" />
        <label onClick={this.onLabelClick}>
          <span className="description">{this.props.label}</span>
          <span className="created">created 17 seconds ago</span>
        </label>
        <button className="icon icon-edit" />
        <button className="icon icon-destroy" />
      </div>
    );
  }
}

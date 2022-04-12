import React, { Component } from "react";

import "./ItemAddForm.scss";

export default class ItemAddForm extends Component {
  state = {
    label: "",
  };

  onLabelChange = (e) => {
    let temp = e.target.value[0]?.toUpperCase() + e.target.value.slice(1);
    this.setState({
      label: temp === 'undefined' ? '' : temp,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state.label);
    this.setState({label: ''});
  };


  render() {
    return (
      <form className="item-add-form"
            onSubmit={this.onSubmit}>
        <input
          type="text"
          className="add-input"
          onChange={this.onLabelChange}
          placeholder="What needs to be done"
          value={this.state.label}
        />
        <button className="btn">Add Item</button>
      </form>
    );
  }
}


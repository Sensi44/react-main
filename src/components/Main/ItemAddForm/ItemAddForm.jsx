import React, { useState } from "react";

import "./ItemAddForm.scss";

const ItemAddForm = (props) => {
  let [label, setLabel] = useState("");
  let [focus, setFocus] = useState(false);

  const onLabelChange = (e) => {
    let temp = e.target.value[0]?.toUpperCase() + e.target.value.slice(1);
    setLabel((label = temp === "undefined" ? "" : temp));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.add(label);
    setLabel((label = ""));
  };

  const onFocus = () => {
    setFocus(true);
  }

  const onBlur = () => {
    setFocus(false);
  }

  return (
    <form className="item-add-form" onSubmit={onSubmit}>
      <input
        autoFocus
        type="text"
        onFocus={onFocus}
        onBlur={onBlur}
        className={focus ? "add-input" : "add-input blur"}
        onChange={onLabelChange}
        placeholder="What needs to be done"
        value={label}
      />
      <button className="btn">Add Item</button>
    </form>
  );
};

export default ItemAddForm;


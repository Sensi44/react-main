import React, { useState } from "react";

import "./ItemAddForm.scss";

const ItemAddForm = (props) => {
  let [label, setLabel] = useState("");

  const onLabelChange = (e) => {
    let temp = e.target.value[0]?.toUpperCase() + e.target.value.slice(1);
    setLabel((label = temp === "undefined" ? "" : temp));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.add(label);
    setLabel((label = ""));
  };

  return (
    <form className="item-add-form" onSubmit={onSubmit}>
      <input
        type="text"
        className="add-input"
        onChange={onLabelChange}
        placeholder="What needs to be done"
        value={label}
      />
      <button className="btn">Add Item</button>
    </form>
  );
};

export default ItemAddForm;


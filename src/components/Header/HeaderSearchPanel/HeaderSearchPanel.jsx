import React from "react";
import "./HeaderSearchPanel.scss";

const HeaderSearchPanel = () => {
  return (
    <input
      type="text"
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
    />
  );
};

export default HeaderSearchPanel;

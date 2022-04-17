import React, { Fragment, useState } from "react";
import { formatDistanceToNow } from "date-fns";

import "./TodoListItem.scss";

const TodoListItem = (props) => {
  console.log(props)
  const { label, onDeleted, onToggleDone, onToggleImportant, status,
          important, editItem, confirmEdit, diffTime} = props;

  let [labelInput, setLabel] = useState("");

  const onLabelChange = (e) => {
    let temp = e.target.value[0]?.toUpperCase() + e.target.value.slice(1);
    setLabel((labelInput = temp === "undefined" ? "" : temp));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    confirmEdit(labelInput);
    setLabel((labelInput = ""));
  };

  const onChange = (e) => {
    setLabel(e.target.value);
  };

  const style = {
    color: important ? "red" : "black",
    fontWeight: important ? "bold" : "normal",
    fontSize: 27,
  };

  let labelClassNames = "description";
  status === 'completed' ? (labelClassNames += " done") : (labelClassNames += "");
  important
    ? (labelClassNames += " description-important")
    : (labelClassNames += "");


  return (
    <Fragment>

      <form onSubmit={onSubmit}>
        <span className="edit-icon">ᴥ</span>

        <input
          type="text"
          className="edit"
          onChange={onLabelChange}
          placeholder={label}
          onKeyDown={onChange}
        />
      </form>

      <div className="view">
        <span className="important" style={style}>
          {""}
          {important ? "!" : "~"}

        </span>

        <label>
          {" "}
          <span className={labelClassNames} onClick={onToggleDone}>
            {label}
          </span>
          <span className="created">{diffTime}</span>
        </label>

        <button type="button" className="icon icon-edit" onClick={editItem} />{" "}
        {/* edit */}
        <button type="button" className="icon icon-destroy" onClick={onDeleted}/>{" "}
        {/* delete */}
        <button type="button" className="icon icon-important" onClick={onToggleImportant}/>{" "}
        {/* important */}
      </div>
    </Fragment>
  );
};

export default TodoListItem
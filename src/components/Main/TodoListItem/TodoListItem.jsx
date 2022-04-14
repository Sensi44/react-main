import React, {Fragment, useState} from "react";

import "./TodoListItem.scss";

const TodoListItem = (props) => {
  const { todos, label, onDeleted, onToggleDone, classname, itemProps,
    onToggleImportant, important, done, editItem, confirmEdit, id
  } = props;



  let [labelInput, setLabel] = useState("");
  let [curId, setCurId] = useState('');

  const onLabelChange = (e) => {
    let temp = e.target.value[0]?.toUpperCase() + e.target.value.slice(1);
    setLabel((labelInput = temp === "undefined" ? "" : temp));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(curId)
    confirmEdit(labelInput);
    setLabel(labelInput = '')
  }

  const onChange = (e) => {
    console.log(e.target.value)
    setLabel(e.target.value);
    console.log(props)
    setCurId(id);
  }


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
    <Fragment>
    <form onSubmit={onSubmit}>
      <input type="text"
             className="edit"
             onChange={onLabelChange}
             placeholder={label}

             onKeyDown={onChange}
        // onKeyUp={test}
      />
    </form>

    <div className="view">


      <input type="checkbox" className="toggle" />
      <span className="important" style={style}>
        {" "}
        {/* important flag */}
        {important ? "!" : "~"}
      </span>

      <label>
        {" "}
        {/* main text */}
        <span className={labelClassNames} onClick={onToggleDone}>
          {label}
        </span>
        <span className="created">created 17 seconds ago</span>
      </label>

      <button type="button"
              className="icon icon-edit"
              onClick={editItem}
      /> {/* edit */}

      <button
        type="button"
        className="icon icon-destroy"
        onClick={onDeleted}
      />{" "} {/* delete */}

      <button
        type="button"
        className="icon icon-important"
        onClick={onToggleImportant}
      />{" "} {/* important */}

    </div>
    </Fragment>
  );
}

export default TodoListItem
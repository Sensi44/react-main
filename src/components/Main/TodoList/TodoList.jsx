import React, {useState} from "react";
import TodoListItem from "../TodoListItem";
import "./TodoList.scss";

const TodoList = (props) => {
  const { todos, onDeleted, onToggleDone, onToggleImportant, editItem, confirmEdit } = props;

  let [label, setLabel] = useState("");
  let [curId, setCurId] = useState('');

  const onLabelChange = (e) => {
    let temp = e.target.value[0]?.toUpperCase() + e.target.value.slice(1);
    setLabel((label = temp === "undefined" ? "" : temp));
  };

  const onChange = (id) => {
      setCurId(id);
    console.log(curId)
  }

  const test = (e) => {
    if (e.code === 'Enter') {
      console.log(curId)
     confirmEdit(curId);
    }
  }

  const elements = todos.map((item) => {
    const { id, classname, ...itemProps } = item;

    return (
      <li key={id} className={classname}>
        <TodoListItem
          {...itemProps}
          classname={classname}
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleImportant={() => onToggleImportant(id)}
          editItem={() => editItem(id)}
        />
        <input type="text"
               className="edit"
               onChange={onLabelChange}
               placeholder={itemProps.label}
               value={label}
               onKeyDown={() => onChange(id)}
               onKeyUp={test}
        />
      </li>
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TodoList;

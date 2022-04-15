import React, { useState, useRef, useMemo } from "react";

import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

// import  Lesson_1 from "../../lessons/01_hooks";
// import  Lesson_02 from "../../lessons/02_hooks";
// import {Lesson_03, Counter, Button} from "../../lessons/03_hooks/Lesson_03";
// import  Lesson_06 from "../../lessons/06_events";
// import  Lesson_07 from "../../lessons/07_if-render";
// import  Lesson_08 from "../../lessons/08_list-keys";
// import  Lesson_09 from "../../lessons/09_fragments-styles";
// import  Lesson_10 from "../../lessons/10_forms";
// import  Lesson_11 from "../../lessons/11_lifecycles-methods";
// import  Lesson_12 from "../../lessons/12_ref-links";
// import  Lesson_13 from "../../lessons/13_high-order-comp-s";
// import  Lesson_14 from "../../lessons/14_react-portal";

import "./App.scss";

const App = () => {
  const [todoData, setTodoData] = useState([
    {label: 'Drink Coffee', important: false, status: 'active'},
    {label: 'Editing task !', important: false, status: 'editing'},
    {label: 'work,sleep, repeat', important: true, status: 'active'},
    {label: 'sleep', important: false, status: 'active'},
  ]);
  const [filterStatus, setFilterStatus] = useState('all');


  const createTodoItem = (label, status = "active") => {
    return {
      label,
      important: false,
      status,
      done: false,
    };
  }

  const addItem = (text) => {
    const newItem = createTodoItem(text);
    setTodoData([...todoData, newItem]);
  };


  // Основные методы

  const deleteItem = (id) => {
    const temp = [...todoData];
    temp.splice(id, 1);
    setTodoData(temp);
  };

  const onToggleDone = (id) => {
    let current = todoData[id];
    const temp = [...todoData];
    current.status = current.status === 'active' ? 'completed' : 'active';
    temp.splice(id, 1, current);
    setTodoData(temp);
  };

  const onToggleImportant = (id) => {
    let current = todoData[id];
    current.important = !current.important;
    const temp = [...todoData];
    temp.splice(id, 1, current);
    setTodoData(temp);
    console.table(todoData);
  };

  const editItem = (id) => {
    let temp = [...todoData];
    let current = [...todoData];
    current.forEach((el, idx) => {
        if ( idx !== id) {
          el.status = (el.status === 'editing') ? 'active' : el.status
        } else {
          el.status = 'editing'
        }
      })
    temp.splice(id, 1, current[id])
    setTodoData(current);
  }

  const confirmEdit = (text, id) => {
    const newItem = { ...todoData[id], label : text, status: 'active' };
    setTodoData([...todoData.slice(0, id), newItem, ...todoData.slice(id + 1)]);
  }

  const filter2 = (items, filterType) => {
    switch(filterType) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item => item.status === 'active'))
      case 'completed':
        return items.filter((item => item.status === 'completed'))
      default:
        return items
    }
  }

  const filter = (filterType) => {
    setFilterStatus(filterType);
  }

  const clearAll = () => {
    let newData = todoData.filter(el => el.status === 'active' || el.status === 'editing')
    setTodoData(newData);
  }

  const doneCount = todoData.filter((el) => el.status === 'completed').length;
  const todoCount = todoData.length - doneCount;

  return (
    <div className="todoapp">
      <Header />

      <Main
        todos={filter2(todoData, filterStatus)}
        onDeleted={deleteItem}
        add={addItem}
        onToggleDone={onToggleDone}
        onToggleImportant={onToggleImportant}
        editItem={editItem}
        confirmEdit={confirmEdit}
      />
      <Footer
        toDo={todoCount}
        done={doneCount}
        filter={filter}
        clear={clearAll}
        filterStatus={filterStatus}
      />


      {/*  Уроки с плэйлиста* /}
       {/* <Lesson_1 /> */}
       {/* <Lesson_02 /> */}
       {/* <Lesson_03 child={<Button />}>*/}
       {/*   <Counter /> */}
       {/* </Lesson_03>  */}
       {/* <Lesson_06 /> */}
       {/* <Lesson_07 /> */}
       {/* <Lesson_08 /> */}
       {/* <Lesson_09 /> */}
       {/* <Lesson_10 /> */}
       {/* <Lesson_11 /> */}
       {/* <Lesson_12 /> */}
       {/* <Lesson_13 /> */}
       {/* <Lesson_14 /> */}
    </div>
  );

}

export default App;
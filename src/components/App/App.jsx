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
  let maxId =  useRef(100);

  const [todoData, setTodoData] = useState([
    {label: 'Drink Coffee', important: false, id: 96, classname: 'active', done: false},
    {label: 'Editing task !', important: false, id: 97, classname: 'editing', done: false},
    {label: 'work,sleep, repeat', important: true, id: 98, classname: 'active', done: false},
    {label: 'sleep', important: false, id: 99, classname: 'active', done: false},
  ]);
  const [filterStatus, setFilterStatus] = useState('all');

  // Создание, удаление, добавление
  const createTodoItem = (label, classname = "active") => {
    return {
      label,
      important: false,
      id: maxId.current++,
      classname,
      done: false,
    };
  }

  const addItem = (text) => {
    const newItem = createTodoItem(text);
    setTodoData([...todoData, newItem]);
  };


  const toggleProperty = (arr, id, propName, text) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];

    if(propName==='done') {
      let classname = (oldItem.classname === 'active')
      ? 'completed'
      : 'active';
      const newItem = { ...oldItem, [propName]: !oldItem[propName], classname: classname };
      return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
    }

    if (propName === 'confirm') {
      let old = arr[idx].classname;
      console.log(old, 'Тот самый момент')
      const newItem = { ...oldItem, classname: arr[idx].done ? 'completed' : 'active', label : text };
      return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
    }

    if (propName === 'classname') {
      console.log('Тот самый момент');
      arr.forEach((el) => {
        if ( el.id !== id) {
          console.log(el.classname);
          el.classname = (el.classname === 'editing') ? 'active' : el.classname
        }
      })
      const newItem = { ...oldItem, [propName]: 'editing' };
      return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
    }

    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    console.table([...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]);
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }


  // Основные методы

  const deleteItem = (id) => {
    const temp = [...todoData];
    temp.splice(id, 1);
    setTodoData(temp);
  };

  const onToggleDone = (id) => {
    let current = todoData[id];
    const temp = [...todoData];
    current.classname = current.classname === 'active' ? 'completed' : 'active';
    temp.splice(id, 1, current);
    setTodoData(temp);
  };

  const onToggleImportant = (id) => {
    let current = todoData[id];
    current.important = !current.important;
    setTodoData([...todoData.slice(0, id), current, ...todoData.slice(id + 1)]);
    console.table(todoData);
  };

  const editItem = (id) => {
    let current = [...todoData];
    current.forEach((el, idx) => {
        if ( idx !== id) {
          el.classname = (el.classname === 'editing') ? 'active' : el.classname
        } else {
          el.classname = 'editing'
        }
      })
    setTodoData([...todoData.slice(0, id), current[id], ...todoData.slice(id + 1)]);
  }

  const confirmEdit = (text, id) => {
    const newItem = { ...todoData[id], label : text, classname: 'active' };
    setTodoData([...todoData.slice(0, id), newItem, ...todoData.slice(id + 1)]);
  }

  const filter2 = (items, filterType) => {
    switch(filterType) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item => item.classname === 'active'))
      case 'completed':
        return items.filter((item => item.classname === 'completed'))
      default:
        return items
    }
  }

  const filter = (filterType) => {
    setFilterStatus(filterType);
  }

  const clearAll = () => {
    let newData = todoData.filter(el => el.classname === 'active' || el.classname === 'editing')
    console.log(newData);
    setTodoData(newData);
  }

  const doneCount = todoData.filter((el) => el.classname === 'completed').length;
  const todoCount = todoData.length - doneCount;


  return (
    <div className="todoapp">
      <Header />

      <Main
        todos={filter2(todoData, filterStatus)}
        onDeleted={deleteItem}
        add={addItem}
        onToggleDone={(id) => onToggleDone(id)}
        onToggleImportant={(id) => onToggleImportant(id)}
        editItem={(id) => editItem(id)}
        confirmEdit={(text, id) => confirmEdit(text, id)}
      />
      <Footer
        toDo={todoCount}
        done={doneCount}
        filter={(f) => filter(f)}
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
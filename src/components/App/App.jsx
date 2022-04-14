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

  const createTodoItem = (label, classname = "active") => {
    // console.log(maxId.current)
    return {
      label,
      important: false,
      id: maxId.current++,
      classname,
      done: false,
    };
  }

  const [todoData, setTodoData] = useState([
    createTodoItem("Drink Coffee", "active"),
    createTodoItem("Editing task !", "editing"),
    createTodoItem("work,sleep, repeat", "active"),
    createTodoItem("sleep", "active"),
  ]);
  const [filterStatus, setFilterStatus] = useState('all');


  const addItem = (text) => {
    const newItem = createTodoItem(text);
    const newArray = [...todoData, newItem];
    setTodoData(newArray);
  };

  const deleteItem = (id) => {
    const idx = todoData.findIndex((el) => el.id === id);
    const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
    setTodoData(newArray);
  };

  const toggleProperty = (arr, id, propName, text) => {

    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];


    if(propName==='done') {
      console.log(oldItem.classname)

      let classname = (oldItem.classname === 'active')
      ? 'completed'
      : 'active';
      const newItem = { ...oldItem, [propName]: !oldItem[propName], classname: classname };
      return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
    }


    if (arr[idx].classname === 'editing') {
      let old = arr[idx].classname;
      console.log(old)
      const newItem = { ...oldItem, classname: arr[idx].done ? 'completed' : 'active', label : text };
      return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
    }

    if (propName === 'classname') {
      arr.forEach((el) => {
        if ( el.id !== id) {
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



  const onToggleDone = (id) => {
    setTodoData(toggleProperty(todoData, id, "done"));
  };


  const onToggleImportant = (id) => {
    setTodoData(toggleProperty(todoData, id, "important"));
  };

  const editItem = (id) => {
    console.log(id)
    setTodoData(toggleProperty(todoData, id, "classname"));
  }

  const confirmEdit = (text, id) => {
    console.log(text, id)
    setTodoData(toggleProperty(todoData, id, "classname", text));
  }

  const filter2 = (items, filterType) => {
    // console.log(items, filterType);
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
    setFilterStatus(filterType)
  }

  const clearAll = () => {
    setTodoData([]);
  }


  const doneCount = todoData.filter((el) => el.done).length;
  const todoCount = todoData.length - doneCount;

  // eslint-disable-next-line react-hooks/rules-of-hooks


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
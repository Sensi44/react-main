import React, { Component } from "react";

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

import Lesson_1 from "../../ru.reactjs.org/01_hooks";
import Lesson_2 from "../../ru.reactjs.org/02_hooks";
import Lesson_3 from "../../ru.reactjs.org/03_hooks";


import "./App.scss";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem("Drink Coffee", "active"),
      this.createTodoItem("Editing task !", "editing"),
      this.createTodoItem("work,sleep, repeat", "active"),
      this.createTodoItem("sleep", "active"),
    ],
    curData: '',
    filter: 'all',
  };


  createTodoItem(label, classname = "active") {
    return {
      label,
      important: false,
      id: this.maxId++,
      classname,
      done: false,
    };
  }


  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];
      return {
        todoData: newArray,
      };
    });
  };


  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      return {
        todoData: [...todoData.slice(0, idx), ...todoData.slice(idx + 1)],
      };
    });
  };


  toggleProperty(arr, id, propName) {
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

    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    console.table([...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]);
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }


  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done"),
      };
    });
  };


  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important"),
      };
    });

  };


  filter2 = (items, filterType) => {
    console.log(items, filterType);
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

  filter = (filterType) => {
    this.setState({filter: filterType,});
  }

  clearAll = () => {
    this.setState({
      todoData: [],
    })
  }

  render() {
    const { todoData, curData } = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    console.log(this.state.filter)
    return (
      <div className="todoapp">
        <Header />

        <Main
          todos={this.filter2(todoData, this.state.filter)}
          onDeleted={this.deleteItem}
          add={this.addItem}
          onToggleDone={(id) => this.onToggleDone(id)}
          onToggleImportant={(id) => this.onToggleImportant(id)}
        />
        <Footer
          toDo={todoCount}
          done={doneCount}
          filter={(f) => this.filter(f)}
          clear={this.clearAll}
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

        <Lesson_1/>
        <Lesson_2/>
        <Lesson_3/>
      </div>
    );
  }
}

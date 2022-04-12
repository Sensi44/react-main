
import React, { Component } from "react";

import Header from "../Header";
import ItemAdd from "../ItemAdd";
import Main from "../Main";
import Footer from "../Footer";

// import  Lesson_03 from "../../lessons/03_state";
// import  Lesson_04 from "../../lessons/04_props";
// import {Lesson_05, Counter, Button} from "../../lessons/05_props/Lesson_05";
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

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem("Drink Coffee", "completed"),
      this.createTodoItem("Editing task !", "editing"),
      this.createTodoItem("work,sleep, repeat", "active"),
      this.createTodoItem("sleep", "active"),
    ],
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
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    console.table([...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]);
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      // const newArray = todoData.map((obj) => {
      //   if (obj.id === id && obj.done) {
      //     return {
      //       label: obj.label,
      //       important: obj.important,
      //       id: obj.id,
      //       classname: "active",
      //       done: !obj.done,
      //     };
      //   }
      //   if (obj.id === id && !obj.done) {
      //     return {
      //       label: obj.label,
      //       important: obj.important,
      //       id: obj.id,
      //       classname: "completed",
      //       done: !obj.done,
      //     };
      //   }
      //   return obj;
      // });
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

  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className="todoapp">
        <Header />
        <ItemAdd />
        <Main
          todos={todoData}
          onDeleted={this.deleteItem}
          add={this.addItem}
          onToggleDone={(id) => this.onToggleDone(id)}
          onToggleImportant={(id) => this.onToggleImportant(id)}
        />
        <Footer toDo={todoCount} done={doneCount} />

        {/*  Уроки с плэйлиста* /}
        {/* <Lesson_03 /> */}
        {/* <Lesson_04 /> */}
        {/* <Lesson_05 child={<Button />}>*/}
        {/*   <Counter /> */}
        {/* </Lesson_05>  */}
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
}

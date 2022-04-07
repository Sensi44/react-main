import React from "react";

import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

import Lesson_03 from "../../lessons/03_state";
import Lesson_04 from "../../lessons/04_props";
import {Lesson_05, Counter, Button} from "../../lessons/05_props/Lesson_05";
import Lesson_06 from "../../lessons/06_events";
import Lesson_07 from "../../lessons/07_if-render";
import Lesson_08 from "../../lessons/08_list-keys";
import Lesson_09 from "../../lessons/09_fragments-styles";
import Lesson_10 from "../../lessons/10_forms";
import Lesson_11 from "../../lessons/11_lifecycles-methods";
import Lesson_12 from "../../lessons/12_ref-links";

import "./App.scss";


const App = () => {
  const todoData = [
    {
      label: "Completed task",
      important: false,
      id: 1,
      classname: "completed",
    },
    { label: "Editing task", important: true, id: 2, classname: "editing" },
    { label: "Active task", important: false, id: 3 },
  ];

  return (
    <div className="todoapp">
      <Header />
      <Main todos={todoData} />
      <Footer count={todoData.length} />


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
      <Lesson_10 />
      {/*Уроки конец*/}
    </div>
  );
};

export default App;

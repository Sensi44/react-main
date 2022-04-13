import React, { Component, useState, useEffect } from "react";

import Lesson_1 from "../01_hooks";
import Lesson_2 from "../02_hooks";
import Lesson_3 from "../03_hooks";
import Lesson_4 from "../04_hooks";
import Lesson_5 from "../05_hooks";

import "./App.scss";

function App() {
  const [visibleList, setVisibleList] = React.useState(true);

  const toggleVisibleList = () => {
    // Через анонимную функцию получаем актуальное значение стэйта
    // и меняем его
    setVisibleList((visible) => {
      return !visible
    });
  }



  return (
    <div>
      {/* <Lesson_1 /> */}
      {/* {visibleList && <Lesson_2 />} */}
      {/* <button onClick={toggleVisibleList}>{visibleList ? 'Скрыть' : 'Показать' }</button> */}
      {/* <Lesson_3 /> */}
      <Lesson_4 />
      {/* Lesson_5 /> */}


    </div>
  )

}

export default App;
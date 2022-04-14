import React, {Component, useState, useEffect, useRef, useMemo, Fragment} from "react";
import Count from "./Count/Count";
import IsFive from "./IsFive/IsFive";

import "./Lesson_4.scss"

// useMemo ReactMemo
// useMemo - указывает какую функцию мемоизировать
// Следит за выполнением функции, по зависимостям отслеживания.
// Если зависимости не меняются, возвращает предыдущий результат функции


function Lesson_4() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <Fragment>
      <h5>Счётчик 1</h5>
      <div className="counter">
        <button onClick={() => setCount1(count1 + 1)}>+</button>
        <Count id={1} value={count1}/>
      </div>

      <h5>Счётчик 2</h5>
      <div className="counter">
        <button onClick={() => setCount2(count2 + 1)}>+</button>
        <Count id={2} value={count2} />
        <IsFive value={count2} />
      </div>
    </Fragment>
  )
}

export default Lesson_4






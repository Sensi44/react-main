import React, {Component, useState, useEffect, useRef} from "react";

import "./Lesson_5.scss"

// useRef и прочее
// Как я понял, в хуке хранятся актуальные данные
// которые переживают обновление компонента

function Lesson_5() {
  const [numbers, setNumbers] = useState([1,2,3,4,5,6,7])
  const ulRef =  useRef();
  const timerRef =  useRef();

  const addNumber = () => {
    setNumbers((prev) =>{
      console.log(prev)
      return [...prev, prev[prev.length - 1] + 1]
    })
  }

  const start = () => {
    timerRef.current = setInterval(addNumber, 1000);
  }

  const stop = () => {
    console.log(timerRef.current)
    clearInterval(timerRef.current);
  }

  const handleScroll = () => {
    console.log('Был скролл')
  }


  useEffect(() => {
    ulRef.current.addEventListener('scroll', handleScroll);
  }, [])



  const removeScroll = () => {
    console.log(ulRef)
    console.log('Не следим за скроллом')
    ulRef.current.removeEventListener('scroll', handleScroll);
  }

  return (
    <div className="App">
      <ul className="test" ref={ulRef}>      {/* Указываем реф - и элемент useRef аналог querySelector */}
        {
          numbers.map( (el, index) => {
            return <li key={index}>{el}</li>
          })
        }
      </ul>
      <button onClick={addNumber}>† Новое число †</button>
      <br/>
      <button onClick={removeScroll}>♪ Не следить ♪</button>
      <br/><br/>
      <button onClick={start}>Старт</button>
      <button onClick={stop}>Стоп</button>
    </div>
  );
}

export default Lesson_5






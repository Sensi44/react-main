import React, {Component, useState, useEffect, useRef} from "react";
import Buttons from "./Buttons/Buttons";

import "./Lesson_5.scss"

// useCallback
// В этом уроке 2 части
// useCallback сохраняет ссылку на функцию, и использую React.memo в дочернем комопненет,
// мы не будем заного объявлять эти функции, будем брать их из useCallback

function Lesson_5() {
  const [count, setCounter] = useState(0)

// const onPlus = () => setCounter((count) => count + 1)
const onPlus = React.useCallback(() => setCounter((count) => count + 1), [])
const onMinus = React.useCallback(() => setCounter((count) => count - 1), [])

  return (
    <div className="App">
      <h1>{count}</h1>
      <Buttons onPlus={onPlus} onMinus={onMinus}/>
    </div>
  );
}

export default Lesson_5


















// function Lesson_5() {
//   const [numbers, setNumbers] = useState([1,2,3,4,5,6,7])
//   const ulRef =  useRef();
//   const numbersRef =  useRef();
//
//   // Теперь ссылаемся на актуальные данные, простой и компактный синтаксис вместо useEffect
//   numbersRef.current = numbers;
//
//   // Можно так но это излишне
//   useEffect(() => {
//     numbersRef.current = numbers;
//   }, [numbers])
//
//   const addNumber = () => {
//     setNumbers((prev) =>{
//       return [...prev, prev[prev.length - 1] + 1]
//     })
//   }
//
//   const start = () => {
//     ulRef.current.addEventListener('scroll', handleScroll)
//   }
//
//   const stop = () => {
//     ulRef.current.removeEventListener('scroll', handleScroll)
//   }
//
//   const handleScroll = React.useCallback(() => {
//     console.log('Был скролл', numbersRef.current)
//   }, []);
//
//
//   // useEffect(() => {
//   //   ulRef.current.addEventListener('scroll', handleScroll);
//   // }, [])
//   //
//   //
//   //
//   // const removeScroll = () => {
//   //   console.log(ulRef)
//   //   console.log('Не следим за скроллом')
//   //   ulRef.current.removeEventListener('scroll', handleScroll);
//   // }
//
//   return (
//     <div className="App">
//       <ul className="test" ref={ulRef}>      {/* Указываем реф - и элемент useRef аналог querySelector */}
//         {
//           numbers.map( (el, index) => {
//             return <li key={index}>{el}</li>
//           })
//         }
//       </ul>
//       <button onClick={addNumber}>† Новое число †</button>
//       <br/>
//       {/*<button onClick={removeScroll}>♪ Не следить ♪</button>*/}
//
//       <button onClick={start}>Старт</button>
//       <button onClick={stop}>Стоп</button>
//     </div>
//   );
// }
//
// export default Lesson_5






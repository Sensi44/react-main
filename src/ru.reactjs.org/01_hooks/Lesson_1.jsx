import React, { useState, useEffect } from 'react';

// Хуки - 1
// setState - простейшая установка
// первое это изначальное значение ( то что в скобках сет стейта)
// второе, функция оповещающая реакт о том что надо обновиться и которая
// описывает алгоритм изменения

function Lesson_1() {
   // Хранение,  функция
const[numbers, setNumbers] = useState([1,2,3])

  const addNumber = () => {
    const randNumber = Math.round(Math.random() * 10);
    const newArr = [...numbers, randNumber];
      setNumbers(newArr)
  }

  console.log(React.useState(1))

  return (
    <div className="App">
      <ul>
        {
          numbers.map( (el, index) => {
            return <li key={index}>{el}</li>
          })
        }
      </ul>
      <button onClick={addNumber}>Новое число</button>
    </div>
  );
}

export default Lesson_1

// ещё раз, на кнопке обработчик, он вызывает функцию, в которой мы вызываем "аналог"
// this.setState - setNumbers (название может быть любым) главное сослаться на второе значение
// на функцию иначе говоря. и уже в сетнамберс и функции оборачивающей её мы прописываем логику
//
//
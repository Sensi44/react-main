import React, { Component, useState, useEffect } from "react";

// Хуки - 2
// useEffect - аналог методов жизненного цикла.
// + попутно беглый разбор основных компонентов жизненного цикла

const List = () => {
  const[numbers, setNumbers] = useState([1,2,3])
  const[count, setCount] = useState(0)

  const addNumber = () => {
    const randNumber = Math.round(Math.random() * 10);
    const newArr = [...numbers, randNumber];
    setNumbers(newArr)
  }

  // useEffect вторым аргументом получает зависимости
  // если пустой массив - то это аналог componentDidMount
  useEffect(() => {
    console.log('Компонент был отображён - useEffect []');
  }, []);

  // Без второго аргумента - вызывается по обновлению любых данных
  // Следим за всем
  useEffect(() => {
    console.log('Компонент был обновлён - useEffect');
  });

  // Следим за переменной или переменными (второй аргумент, массив)
  useEffect(() => {
    console.log('Компонент был обновлён (numbers) - useEffect [numbers, count]');
  }, [numbers, count]);

  // Компонент был удалён - componentWillUnmount
  // совместно с монтированием. анонимную функцию добавляем для отслеживания удаления
  useEffect(() => {
    console.log('Компонент был удалён');
    return () => {
      console.log('Компонент был удалён - componentWillUnmount');
    }
  }, []);


  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <ul>
        {
          numbers.map( (el, index) => {
            return <li key={index}>{el}</li>
          })
        }
      </ul>
      <button onClick={addNumber}>Новое число</button>
    </div>
  )
}




// class List extends Component {
//   state = {
//     numbers: [1, 2, 3],
//   };
//
//   componentDidMount() {
//     // Первичное монтирование компонента на страницу
//     console.log("Компонент был отображен - componentDidMount");
//   }
//
//   componentDidUpdate(prevProps, prevState, snapshot) {
//     // Отображение предыдущих пропсов и стэйта и текущих, уже обновившихся
//     // Метод срабатывает при любом изменении компонента (стэйты и пропсы соответственно)
//     console.log(prevProps, prevState, snapshot);
//     console.log(this.props, this.state);
//     if (this.state.numbers.length !== prevState.numbers.length) {
//       console.log("Компонент был обновлён - componentDidUpdate")
//     }
//   }
//
//   componentWillUnmount() {
//     // Компонент был удалён
//     console.log('Компонент будет удалён - componentWillUnmount')
//   }
//
//   addRandomNumber = () => {
//     const randNumber = Math.round(Math.random() * 10);
//     this.setState({
//       numbers: [...this.state.numbers, randNumber],
//     });
//   };
//
//   render() {
//     const { numbers } = this.state;
//     return (
//       <div className="App">
//         <ul>
//           {numbers.map((el, index) => {
//             return <li key={index}>{el}</li>;
//           })}
//         </ul>
//         <button onClick={this.addRandomNumber}>Новое число</button>
//       </div>
//     );
//   }
// }

export default List;
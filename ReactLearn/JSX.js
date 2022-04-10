//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// Пример базы JSX
// Массивы и Spread
// true по умолчанию
// Деструктуризация и остаточные параметры
//
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// Пример базы JSX

import TodoListItem from "../src/components/ItemAddForm-item";
import React from "react";

const TodoList = () => {
  const items = ["Drink coffee", "Build awesome App"];
  return (
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
    </ul>
  );
};

const AppHeader = () => {
  return <h1>My Todo List</h1>;
};

const SearchPanel = () => {
  const searchText = "Type here to search";
  const searchStyle = {
    fontSize: "25px",
    color: "red",
  };
  return <input style={searchStyle} placeholder={searchText} />;
};

const App = () => {
  return (
    <div>
      <span>{new Date().toString()}</span>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// Массивы и Spread

// Массив можно передать как свойство
// const ItemAddForm = ({todos}) => {
//      {todos} - в данном случае это переданный массив [1,2,3]
// }

// В JSX можно вставлять массивы элементов (не только по одному)
//    <ul>
//        {elements}
//    </ul>
//{elememts} - это массив реакт-элементов

// Можно передать все свойства объекта в компонент используя
// Object Spread оператор ( не перечисляя каждое)
// <TodoListItem {...item}/>

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// true по умолчанию
/*  Если мы аргументу ничего не указываем - по умолчанию true  */
/*  т.е. important === important={true}                        */

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// Деструктуризация и остаточные параметры

const todoList = ({ todos }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    // айдишник отдельно, остаточные параметры отдельно
    return (
      <li key={id}>
        <TodoListItem {...itemProps} />
      </li>
    );
  });

  return <ul>{elements}</ul>;
};

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//

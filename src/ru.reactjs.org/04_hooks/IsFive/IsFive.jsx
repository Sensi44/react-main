import React, {Component, useState, useEffect, useRef, useMemo} from "react";

let renderCount = 0;



export default React.memo(function IsFive({value}) {
    console.warn(`IsFive render: ${++renderCount}`);

    // Выносим в useMemo сложную тяжёлую функцию, чтобы она не влияла на другие компоненты
    // Вызов этой функции будет происходить ТОЛЬКО при смене данных для остлеживания
    // в текущем исполнении это - [value]
    const getResult = useMemo(() => {
      let i = 0;
      while (i < 600000000) {
        i++;
        console.log(i)
        return value === 5 ? 'Этоп пять' : "Это не пять";
      }
    }, [value]);

    return (
      <h6>{getResult}</h6>
    )
  }, // это функция обработчик React.memo
  (prevProps, nextProps) => {
  console.log(prevProps, nextProps);
    if (nextProps.value === 5) {
      return false; // Сделать реренден
    } else {
      return true; // Не делать ререндер
    }
})
  // React.memo делает реренден только при изменении свойств
  // useMemo делает вызов функции только при изменении отслеживаемых данных







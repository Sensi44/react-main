//▬▬▬
//
//
//
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

// https://date-fns.org/v2.13.0/docs/formatDistanceToNow
// Показывает дату и всю фигню
// import { formatDistanceToNow } from "date-fns";
//   let result = formatDistanceToNow(new Date(2014, 6, 2));
//   console.log(result);
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

// PropTypes

// PropTypes изначально был представлен как часть модуля React core
// и обычно используется с компонентами React. Вот пример использования PropTypes
// с компонентом React, который также документирует различные предоставленные валидаторы:
//
// импорт React из' react';
// импорт PropTypes из' prop-types';
//
// класс MyComponent расширяет React.Component {
//   render() {
//     // ... делайте что-то с реквизитом
//   }
// }
//
// MyComponent.PropTypes = {
//   // Вы можете объявить, что prop является конкретным примитивом JS. По умолчанию все эти
//   // являются необязательными.
//   optionalArray: PropTypes.array,
//   optionalBigInt: PropTypes.bigint,
//   optionalBool: PropTypes.bool,
//   optionalFunc: PropTypes.func,
//   optionalNumber: PropTypes.number,
//   optionalObject: PropTypes.object,
//   optionalString: PropTypes.string,
//   optionalSymbol: PropTypes.symbol,
//
//   //Все, что может быть визуализировано: числа, строки, элементы или массив
//   // (или фрагмент), содержащий эти типы.
//   // см. https://reactjs.org/docs/rendering-elements.html для получения дополнительной информации
//   optionalNode: PropTypes.node,
//
//   // Элемент React (т. е. <MyComponent />).
//   optionalElement: PropTypes.element,
//
//   // Тип элемента React (например. MyComponent).
//   // функция, строка или "элементоподобный" объект (например. Реагировать.Фрагмент, Саспенс и т. д.)
//   // см. https://github.com/facebook/react/blob/HEAD/packages/shared/isValidElementType.js
//   optionalElementType: PropTypes.ElementType,
//
//   // Вы также можете объявить, что prop является экземпляром класса. При этом используется
//   оператор instanceof// JS.
//   optionalMessage: PropTypes.instanceOf(Message),
//
//   // Вы можете убедиться, что ваш prop ограничен определенными значениями, обработав
//   // его как enum.
//   optionalEnum: PropTypes.oneOf(['News', 'Photos']),
//
//   // Объект, который может быть одним из многих типов
//   optionalUnion: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number,
//     PropTypes.instanceOf(Message)
//   ]),
//
//   // Массив определенного типа
//   optionalArrayOf: PropTypes.ArrayOf(PropTypes.number),
//
//   // Объект со значениями свойств определенного типа
//   optionalObjectOf: PropTypes.objectOf(PropTypes.number),
//
//   // Вы можете связать любое из вышеперечисленных с `IsRequired`, чтобы убедиться, что предупреждение
//   // отображается, если prop не предусмотрен.
//
//   / / Объект,принимающий определенную форму
//   optionalObjectWithShape: PropTypes.shape({
//     optionalProperty: PropTypes.string,
//     requiredProperty: PropTypes.number.IsRequired
//   }),
//
//   / / Объект с предупреждениями о дополнительных свойствах
//   optionalObjectWithStrictShape: PropTypes.exact({
//     optionalProperty: PropTypes.string,
//     requiredProperty: PropTypes.number.IsRequired
//   }),
//
//   requiredFunc: PropTypes.func.IsRequired,
//
//   // Значение любого типа данных
//   requiredAny: PropTypes.any.IsRequired,
//
//   // Вы также можете указать пользовательский валидатор. Он должен возвращать ошибку
//   // объект, если проверка не удалась. Не `console.warn` или throw, так как это
//   // не будет работать внутри `oneOfType`.
//   customProp: функция(props, propName, ComponentName) {
//     if (!/matchme/.test(props[propName])) {
//       return new Error(
//         'Invalid prop ` + propName + " supplied to' +
//         ' ` + ComponentName + ". Проверка не удалась.'
//       );
//     }
//   },
//
//   // Вы также можете предоставить пользовательский валидатор для `ArrayOf` и `objectOf`.
//   // Он должен возвращать объект Error, если проверка не удалась. Валидатор
//   // будет вызываться для каждого ключа в массиве или объекте. Первые два
//   аргумента// валидатора-это сам массив или объект, а
//   // ключ текущего элемента.
//   customArrayProp: PropTypes.ArrayOf(функция(propValue, key, ComponentName, location, propFullName) {
//     if (!/matchme/.test(propValue[key])) {
//       return new Error(
//         'Invalid prop ` + propFullName + " supplied to' +
//         ' ` + ComponentName + ". Проверка не удалась.'
//       );
//     }
//   })
// };

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

// React.children
// https://ru.reactjs.org/docs/react-api.html#reactchildren
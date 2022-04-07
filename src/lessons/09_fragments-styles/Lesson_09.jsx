import React, {Component, Fragment} from "react";
// Для использования фрагмента его необходимо импортнуть!

import "./Lesson_09.scss";

// Фрагмент
const Columns = () => (
  // если фрагмент возвращает итерируемый объект, то снова нужен ключ
  <Fragment>
    <td>Hello</td>
    <td>World</td>
  </Fragment>
);

// стили
const styles = {color: 'red', textTransform: 'uppercase'};

const Styles = () => (
  <Fragment>
    <td style = {{color: 'red', textTransform: 'uppercase'}}>Inline</td>
    <td style = {styles}>Inline</td>
    <td className="simple">Simple class</td>
  </Fragment>
);

// Фрагменты и стили
class Lesson_09 extends Component {
  render() {
    return (
     <table>
       <tbody>
       <tr>
        <Columns />
        <Styles />
       </tr>
       </tbody>
     </table>
    )}
}


export default Lesson_09;




// Два вариант вернуть без обёрточного тега.
// первый это фрагмент
// второй через массив: - возвращаем итерируемый объект, по этому каждому эл-у атрибут кей
// const Columns = () => ([
//     <td key="1">Hello</td>,
//     <td key="2">World</td>
//   ]);

// Есть ещё третий вариант из новых версий реакта, без использования фрагмента:
// const Columns = () => (
//   <>
//     <td>Hello</td>
//     <td>World</td>
//   </>
// );
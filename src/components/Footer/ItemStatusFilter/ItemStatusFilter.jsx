import React, { Component } from "react";

import "./ItemStatusFilter.scss";

export default class ItemStatusFilter extends Component {

  render() {
    const { todoData } = this.props;

    let tasksCount = 0;
      todoData.forEach( (task) => {
      if (task.classname !== 'completed') {
          tasksCount++
      }
    })

    return (
      <div className="footer-wrap">
        <span className="todo-count">{tasksCount} items left</span>

        <ul className="filters">
          <li>
            <button className="selected">All</button>
          </li>
          <li>
            <button>Active</button>
          </li>
          <li>
            <button>Completed</button>
          </li>
        </ul>

        <button className="clear-completed">Clear completed</button>
      </div>
    );
  }
}











// Old version
// const ItemStatusFilter = (props) => {
//   return (
//     <div className="footer-wrap">
//       <span className="todo-count">{props.count} items left</span>
//
//       <ul className="filters">
//         <li>
//           <button className="selected">All</button>
//         </li>
//         <li>
//           <button>Active</button>
//         </li>
//         <li>
//           <button>Completed</button>
//         </li>
//       </ul>
//
//       <button className="clear-completed">Clear completed</button>
//     </div>
//   );
// };
//
// export default ItemStatusFilter;

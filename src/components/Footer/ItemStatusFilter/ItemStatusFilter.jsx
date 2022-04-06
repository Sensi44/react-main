import React, { Component } from "react";

import "./ItemStatusFilter.scss";

export default class ItemStatusFilter extends Component {
  render() {
    return (
      <div className="footer-wrap">
        <span className="todo-count">{this.props.count} items left</span>

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

//
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

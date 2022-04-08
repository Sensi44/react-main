import React, {Component, Fragment} from "react";
import { BrowserRouter as Router, Link} from 'react-router-dom'

import "./Lesson_13_hoc.scss";

// High order components


const isEmpty = (prop) => (
  prop === null ||
  prop === undefined ||
  (prop.hasOwnProperty('length') && prop.length === 0) ||
  (prop.constructor === Object && Object.keys(prop).length === 0)
)

const Lesson_13_hoc = (loadingProp) => (WrappedComponent) => {
  return class Lesson_13 extends Component {
    render() {
      return isEmpty(this.props[loadingProp]) ?
        <div className="loader" />
        : <WrappedComponent {...this.props} />;
    }
  }
}

export default Lesson_13_hoc;






// Пример 1

// const AppLink = (props) => ({
//   render: () => (
//     <Link {...props} activeClassName="active" />
//   )
// })
//
// class Lesson_13_hoc extends Component{
//   render() {
//     return (
//       <Router>
//         <nav>
//           <AppLink to="/" >Home</AppLink>
//           <AppLink to="/portfolio" >Portfolio</AppLink>
//           <AppLink to="/contacts" >Contacts</AppLink>
//         </nav>
//       </Router>
//     )
//   }
// }
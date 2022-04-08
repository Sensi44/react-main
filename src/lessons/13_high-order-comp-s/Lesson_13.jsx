import React, {Component, Fragment} from "react";
import { BrowserRouter as Router, Link} from 'react-router-dom'
import Lesson_13_hoc from "./13_hoc/Lesson_13_hoc";

import "./Lesson_13.scss";

// High order components


class AppComponentUI extends Component {
  render() {
    return (
      <div>{this.props.data.title}</div>
    )
  }
}

const AppComponent = Lesson_13_hoc('data')(AppComponentUI);

class Lesson_13 extends Component {
  state = {
    data: {},
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => this.updateState(data))
  }

  updateState = (data) => {
    window.setTimeout(()=>{
      this.setState({data})
    }, 3000);
  }

  render() {
    return (
      <AppComponent data={this.state.data} />
    );
  }
}


export default Lesson_13;




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
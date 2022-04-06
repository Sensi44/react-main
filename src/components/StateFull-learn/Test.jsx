import React, {Component} from "react";

import "./Test.scss";

export default class Test extends Component{

state = {
  counter: 0,
  id2: 100,
}


  handleClick = () => {
    this.setState(({counter, id2}) => ({   // деструктуризация текущей версии объекта state
      counter: ++counter,
      id2: ++id2,
    }))
  }


  render() {
    const { counter, id2 } = this.state;
    return(
      <div>
        <div>{counter}&nbsp;{id2}</div>
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
}





// handleClick = () => {
//   this.setState(prevState => ({
//     counter: ++prevState.counter,
//     id2: ++prevState.id2,
//   }))
// }
// prevState - в данном случае это объект state до изменения
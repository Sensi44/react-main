import React, {Component, Fragment} from "react";

import {TABS_BTN} from '../Config/Config'

import "./Lesson_08.scss";


const Tab1 = () => (
  <p>Text of tab1</p>
)

const Tab2 = () => (
  <p>Text of tab2</p>
)

const Tab3 = () => (
  <p>Text of tab3</p>
)


const people = ['Jack', 'Max', 'Leo', 'Alex'];
// не нужон ибо импортируем это из конфига
// const TABS_BTN = [
//   {
//     dataName: 1,
//     title: 'Tab1',
//     icon: '+',
//   },
//   {
//     dataName: 2,
//     title: 'Tab2',
//     icon: '-',
//   },
//   {
//     dataName: 3,
//     title: 'Tab3',
//     icon: '*',
//   }
// ];



class Lesson_08 extends Component{
  state = {
    activeTab: 1,
  }

  handleTab = (e, clname) => {
    this.setState({
      activeTab: +e.target.getAttribute('data-name'),
    })
  }

  render() {
    const { activeTab } = this.state;
    console.log(this.props)
    return (
      <Fragment>

        {TABS_BTN.map( ({dataName, title, icon})=> {
          return <button
            key={`${dataName}-${title}`}
            data-name={dataName}
            onClick={this.handleTab}
          >{icon}{title}</button>
        })}
        {activeTab === 1 ? <Tab1/> : activeTab === 2 ? <Tab2/> : <Tab3/>}

        <div>
          {`Active tab is:  ${activeTab === 1 ? 'first' : activeTab === 2 ? 'second' : 'third'}`}
        </div>

        <ul>
          {people.map( (person, index) => {
            return(<li key={index}>{person}</li>)
          })}
        </ul>
      </Fragment>
    )
  }
}


export default Lesson_08;



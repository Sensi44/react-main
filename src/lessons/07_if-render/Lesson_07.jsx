import React, {Component, Fragment} from "react";

import "./Lesson_07.scss";

import PropTypes from 'prop-types';

const MyLink = ({text, onClick}) => (
  <a href="/test" onClick={onClick}>{text}</a>
)

MyLink.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

MyLink.defaultProps = {
  text: 'link',
  onclick: () => {},
}


const ValidationMsg = ({val}) => {
  console.log(val)
  if (val >= 10) {
    return <h2>Grate than 10 --- {val}</h2>
  } else {
    return <h3>Less than 10 --- {val} </h3>
  }
}




const Tab1 = () => (
  <p>Text of tab1</p>
)

const Tab2 = () => (
  <p>Text of tab2</p>
)

const Tab3 = () => (
  <p>Text of tab3</p>
)


// Делаем эктив таб
class Lesson_07 extends Component{
  state = {
    activeTab: 1,
    clname: 'name0',
  }

  handleTab = (e, clname) => {
    this.setState({
      activeTab: +e.target.getAttribute('data-name'),
    //  getAttribute - это метод работы с дата аттрибутами, вроде должен помнить
      clname: 'name' + clname,
    })


  }
// ЧТобы совсем корректно отображать текущий статус нажатой кнопки, надо её выносить в отдельный компонент
  render() {
    console.log(this.state)
    const { activeTab } = this.state;
    return (
      <Fragment>
        <button data-name={1}
                className={(this.state.clname === 'namen1') ? 'active' : ' '}
                onClick={(e) => this.handleTab(e, 'n1')} >
          Tab1
        </button>

        <button data-name={2}
                className={(this.state.clname === 'namen2') ? 'active' : ' '}
                onClick={(e) => this.handleTab(e, 'n2')}>
          Tab2
        </button>

        <button data-name={3}
                className={(this.state.clname === 'namen3') ? 'active' : ' '}
                onClick={(e) => this.handleTab(e, 'n3')}>
          Tab3
        </button>

        {activeTab === 1 ? <Tab1/> : activeTab === 2 ? <Tab2/> : <Tab3/>}

        <div>
          {`Active tab is:  ${activeTab === 1 ? 'first' : activeTab === 2 ? 'second' : 'third'}`}
        </div>
      </Fragment>
    )
  }
}


export default Lesson_07;





// // Простейший условный рендеринг
// const ValidationMsg = ({val}) => {
//   console.log(val)
//   if (val >= 10_forms) {
//     return <h2>Grate than 10_forms --- {val}</h2>
//   } else {
//     return <h3>Less than 10_forms --- {val} </h3>
//   }
// }
//
// class Lesson_07 extends Component {
//   render() {
//     return (
//       <ValidationMsg val={8} />
//     )
//   }
// }



//▬▬▬ Ещё варианты условий

// const Lesson_07 = () => {
//   const val = 9;
//
//   return (
//     <div>
//       {/*ternary*/}
//       {val >= 10_forms ? <h2>Grate than 10_forms - {val}</h2> : <h2>Less than 10_forms - {val}</h2>}
//       {/*&&*/}
//       {val && <span>We have val</span>}
//       {/*Либо рендеринг либо не отображается вообще*/}
//     </div>
//   )
// }



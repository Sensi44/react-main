import React, {Component} from "react";

import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";


// import  Lesson_03 from "../../lessons/03_state";
// import  Lesson_04 from "../../lessons/04_props";
// import {Lesson_05, Counter, Button} from "../../lessons/05_props/Lesson_05";
// import  Lesson_06 from "../../lessons/06_events";
// import  Lesson_07 from "../../lessons/07_if-render";
// import  Lesson_08 from "../../lessons/08_list-keys";
// import  Lesson_09 from "../../lessons/09_fragments-styles";
// import  Lesson_10 from "../../lessons/10_forms";
// import  Lesson_11 from "../../lessons/11_lifecycles-methods";
// import  Lesson_12 from "../../lessons/12_ref-links";
// import  Lesson_13 from "../../lessons/13_high-order-comp-s";
// import  Lesson_14 from "../../lessons/14_react-portal";

import "./App.scss";


export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            {
                label: "Completed task",
                important: true,
                id: 1,
                classname: "completed",
            },
            { label: "Editing task", important: false, id: 2, classname: "editing" },
            { label: "Active task", important: false, id: 3, classname: "active" },
            { label: "Active task", important: true, id: 4, classname: "active"},
        ],
    };

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            return {
                todoData: [...todoData.slice(0, idx), ...todoData.slice(idx + 1)],
            }
        })
    }

    changeCompleted = (id) => {
        console.log(id)

        this.setState( ({ todoData }) => {
            const newArray = todoData.map( (obj) => {
                if (obj.id === id && obj.classname === 'completed') {
                    return {
                        label: obj.label,
                        important: obj.important,
                        id: obj.id,
                        classname: 'active',
                    }
                }
                if (obj.id === id && obj.classname === 'active') {
                    return {
                        label: obj.label,
                        important: obj.important,
                        id: obj.id,
                        classname: 'completed',
                    }
                }
                return obj;
            });
            console.log(newArray)
            return {
                todoData: newArray,
            }

        })
    }

    addItem = (text) => {
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++,
            classname: 'active,'
        }
        console.log(newItem)

        this.setState( ({ todoData }) => {
            const newArray = [
                ...todoData, newItem
            ];
            return {
                todoData: newArray,
            };
        });
    }

    impChange = (id, aa) => {
        console.log(id, aa);
        this.setState( ({ todoData }) => {
            const newArray = todoData.map( (obj) => {
                if (obj.id === id) {
                    return {
                        label: obj.label,
                        important: !aa,
                        id: obj.id,
                        classname: obj.classname,
                    }
                }
                return obj;
            });
            console.log(newArray)
            return {
                todoData: newArray,
            }

        })
    }


    render() {
        const {todoData} = this.state;
        return (
            <div className="todoapp">
                <Header />
                <Main todos={todoData}
                      onDeleted={this.deleteItem}
                      add={this.addItem}
                      done={(a) => this.changeCompleted(a)}
                      imp={(aa, id) => this.impChange(aa, id) }

                />
                <Footer count={todoData}/>



                {/*  Уроки с плэйлиста* /}
                {/* <Lesson_03 /> */}
                {/* <Lesson_04 /> */}
                {/* <Lesson_05 child={<Button />}>*/}
                {/*   <Counter /> */}
                {/* </Lesson_05>  */}
                {/* <Lesson_06 /> */}
                {/* <Lesson_07 /> */}
                {/* <Lesson_08 /> */}
                {/* <Lesson_09 /> */}
                {/* <Lesson_10 /> */}
                {/* <Lesson_11 /> */}
                {/* <Lesson_12 /> */}
                {/* <Lesson_13 /> */}
                {/* <Lesson_14 /> */}
            </div>
        );
    }


};


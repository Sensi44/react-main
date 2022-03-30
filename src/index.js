import React from "react";
import ReactDOM from "react-dom";
// import App from "./App"


const TodoList = () => {
    const items = ['Drink coffee', 'Build awesome app']
    return (
        <ul>
            <li>{ items[0] }</li>
            <li>{ items[1] }</li>
        </ul>
    )
}

const AppHeader = () => {
    return <h1>My Todo List</h1>;
}

const SearchPanel = () => {
    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '25px',
        color: 'red',
    }
    return <input
        style = {searchStyle}
        placeholder={searchText} />;
}

const App = () => {
    return (
        <div>
            <span>{ new Date().toString() }</span>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    )
}




let root = document.getElementById("root");
ReactDOM.render(<App />, root);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

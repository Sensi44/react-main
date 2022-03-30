import React from "react";
import ReactDOM from "react-dom";

import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";
import AppHeader from "./components/app-header";



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


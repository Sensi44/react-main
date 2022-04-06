import React from "react";

import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import Test from "../StateFull-learn";
import Test2 from "../props-learn";

import "./App.scss";

const App = () => {
  const todoData = [
    {
      label: "Completed task",
      important: false,
      id: 1,
      classname: "completed",
    },
    { label: "Editing task", important: true, id: 2, classname: "editing" },
    { label: "Active task", important: false, id: 3 },
  ];

  return (
    <div className="todoapp">
      <Header />
      <Main todos={todoData} />
      <Footer count={todoData.length} />
      <Test />
      <Test2 />
    </div>
  );
};

export default App;

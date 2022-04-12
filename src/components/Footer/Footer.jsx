import React from "react";
import ItemStatusFilter from "./ItemStatusFilter";


import "./Footer.scss";


const Footer = (props) => {
  const {toDo, done} = props;
  return (
    <footer className="footer">
      <ItemStatusFilter toDo={toDo} done={done} /><br />
    </footer>
  );
};

export default Footer;

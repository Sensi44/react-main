import React from "react";
import ItemStatusFilter from "./ItemStatusFilter";


import "./Footer.scss";


const Footer = (props) => {
  const {toDo, done, filter} = props;
  return (
    <footer className="footer">
      <ItemStatusFilter
        toDo={toDo}
        done={done}
        filter={(f) => filter(f)}
      /> <br />
    </footer>
  );
};

export default Footer;

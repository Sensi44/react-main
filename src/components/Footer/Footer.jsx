import React from "react";
import ItemStatusFilter from "./ItemStatusFilter";


import "./Footer.scss";


const Footer = ({count, add}) => {
  return (
    <footer className="footer">
      <ItemStatusFilter todoData={count} /><br />
    </footer>
  );
};

export default Footer;

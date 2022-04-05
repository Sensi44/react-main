import React from "react";

import "./Footer.scss";
import ItemStatusFilter from "./ItemStatusFilter";

const Footer = (props) => {
  return (
    <footer className="footer">
      <ItemStatusFilter {...props} />
    </footer>
  );
};

export default Footer;

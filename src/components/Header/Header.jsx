import React from "react";
import "./Header.scss";
import HeaderSearchPanel from "./HeaderTitle";
import HeaderTitle from "./HeaderSearchPanel";

const Header = () => {
  return (
    <header className="header">
      <HeaderSearchPanel />
      <HeaderTitle />
    </header>
  );
};

export default Header;

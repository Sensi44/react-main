import React from "react";
import "./Header.scss";
import HeaderTitle from "./HeaderTitle";
import HeaderSearchPanel from "./HeaderSearchPanel";

const Header = () => {
  return (
    <header className="header">
       {/*<HeaderSearchPanel />*/}
      <HeaderTitle />
    </header>
  );
};

export default Header;

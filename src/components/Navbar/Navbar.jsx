import React from "react";
import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import "./navbar.css";

function Navbar() {
  return (
    <div className="sidebar">
      <Header />
      <Menu />
    </div>
  );
}

export default Navbar;

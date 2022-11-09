import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="container-header">
      <div className="my-Photo">
        <img
          src="https://www.elmanawy.info/demo/mulan-cms/cdn/about/click.png"
          alt=""
        />
      </div>
      <div className="title-block">
        <p>BUI LE DAN THU</p>
        <p>Front-end Developer</p>
      </div>
    </div>
  );
}

export default Header;

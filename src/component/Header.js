import "../css/header.css";
import React, { useState } from "react";

function Header() {
  const [active, setActive] = useState("");

  const click = () => {
    setActive(active === "" ? "active" : "");
  };
  console.log(active);

  return (
    <header id="header">
      <div className="logo">
        <a href="/">
          <span className="material-icons">apps</span>
        </a>
        <h4 className="header_logo">To Do</h4>
      </div>
      <div className={"header_search " + active}>
        <span className="material-icons">search</span>
        <input type="text" onMouseLeave={click} onClick={click} />
      </div>
      <div className="header_etc">
        <a href="/">
          <span className="material-icons">settings</span>
        </a>
        <a href="/">
          <span className="material-icons">question_mark</span>
        </a>
        <a href="/">
          <span className="material-icons">filter_alt</span>
        </a>
        <a href="/">
          <span className="material-icons">circle</span>
        </a>
      </div>
    </header>
  );
}

export default Header;


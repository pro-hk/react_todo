import "../css/header.css";
import React, { useState } from "react";

function Header() {
  // 서치 관리
  const [active, setActive] = useState("");

  const click = () => {
    setActive(active === "" ? "active" : "");
  };
  // 서치 end

  // 우측 상단 링크 관리
  const etcs = [
    { id: 1, link: "/", title: "settings" },
    { id: 2, link: "/", title: "question_mark" },
    { id: 3, link: "/", title: "filter_alt" },
    { id: 4, link: "/", title: "circle" },
  ];

  const etcList = etcs.map((i) => (
    <a href={i.link} key={i.id}>
      <span className="material-icons">{i.title}</span>
    </a>
  ));
  // 링크 end

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
      <div className="header_etc">{etcList}</div>
    </header>
  );
}

export default Header;

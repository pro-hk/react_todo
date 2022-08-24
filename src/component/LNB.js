import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/lnb.css";

function LNB(prop) {
  const [off, setOff] = useState("");
  const [active, setActive] = useState(1);

  useEffect(() => {
    if (prop.data === "open") {
      setOff("");
    }
  });

  // 메뉴 관리
  const menus = [
    { id: 1, link: "/today", icon: "wb_sunny", title: "오늘 할 일" },
    { id: 2, link: "/important", icon: "star_border", title: "중요" },
    {
      id: 3,
      link: "/plan",
      icon: "calendar_month",
      title: "계획된 일정",
    },
    {
      id: 4,
      link: "/assign",
      icon: "person_outline",
      title: "나에게 할당됨",
    },
    { id: 5, link: "/work", icon: "home", title: "작업" },
  ];

  const MenuList = () =>
    menus.map((i) => (
      <Link
        key={i.id}
        to={i.link}
        onClick={() => {
          setActive(i.id);
        }}
      >
        <li className={active === i.id ? "on" : ""}>
          <span className="material-icons">{i.icon}</span>
          <span className="title">{i.title}</span>
          <span className="count">{prop.length}</span>
        </li>
      </Link>
    ));
  // 메뉴 end

  // 하단 link
  const links = [
    { id: 1, link: "/", title: "mail_outline" },
    { id: 2, link: "/", title: "calendar_month" },
    { id: 3, link: "/", title: "people_outline" },
    { id: 4, link: "/", title: "attach_file" },
    { id: 5, link: "/", title: "done_outline" },
  ];

  const linkList = links.map((i) => (
    <li key={i.id}>
      <Link to={i.link}>
        <span className="material-icons">{i.title}</span>
      </Link>
    </li>
  ));
  // link end

  return (
    <div className={"LNB " + off}>
      <button
        href="/"
        onClick={function () {
          prop.onClose();
          setOff("off");
        }}
      >
        <span className="material-icons">menu</span>
      </button>
      <ul className="menu">
        <MenuList />
      </ul>
      <div className="link">
        <ul className="linkList">{linkList}</ul>
      </div>
    </div>
  );
}

export default LNB;

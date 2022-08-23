import React, { useState, useEffect } from "react";
import "../css/today.css";
import ContentAdd from "../component/ContentAdd";
import Content from "../component/Content";

function Today(prop) {
  var now = new Date();
  var todayMonth = now.getMonth() + 1;
  var todayDate = now.getDate();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  var todayDay = week[now.getDay()];

  var [icon, setIcon] = useState("wb_sunny");
  useEffect(() => {
    if (prop.data === "menu") {
      setIcon("menu");
    }
  });

  return (
    <div className="today">
      <div className="main_title">
        <a
          href="/"
          className={icon}
          onClick={function (e) {
            e.preventDefault();
            setIcon("wb_sunny");
            prop.onOpen();
          }}
        >
          <span className="material-icons">{icon}</span>
        </a>
        <h3 className="drag">오늘 할 일</h3>
        <a href="/">
          <span className="material-icons">more_horiz</span>
        </a>
      </div>
      <div className="date drag">
        {todayMonth}월 {todayDate}일, {todayDay}요일
      </div>
      <ContentAdd />
      <Content />
    </div>
  );
}

export default Today;

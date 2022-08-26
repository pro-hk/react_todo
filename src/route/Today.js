import React, { useState, useEffect } from "react";
import "../css/today.css";
import ContentAdd from "../component/ContentAdd";
import Content from "../component/Content";

function Today(prop) {
  // 날짜 관리
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
  }, [prop.data]);

  const [addStar, setAddStar] = useState(null);

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
      <ContentAdd
        contents={prop.contents}
        onAddContent={(content) => prop.onAddContent(content)}
        onAddStar={(id) => setAddStar({ id: id, check: false })}
      />
      <Content
        contents={prop.contents}
        onSelect={(id) => prop.onSelectID(id)}
        addStar={addStar}
      />
    </div>
  );
}

export default Today;

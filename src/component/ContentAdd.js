import React, { useState } from "react";
import "../css/contentAdd.css";

function ContentAdd() {
  // 추가 버튼 커서 모양 관리
  const [cursor, setCursor] = useState({
    cursor: "no-drop",
  });

  const change = (e) => {
    console.log(e);
    setCursor(
      e.target.value !== "" ? { cursor: "pointer" } : { cursor: "no-drop" }
    );
    console.log(cursor);
    console.log(e.target.value);
  };
  // 커서 end

  // 작업 추가 밑 링크 관리
  const options = [
    { id: 1, link: "/", title: "calendar_month" },
    { id: 2, link: "/", title: "notifications_none" },
    { id: 3, link: "/", title: "repeat" },
  ];

  const optionList = options.map((i) => (
    <a href={i.link} key={i.id}>
      <span className="material-icons">{i.title}</span>
    </a>
  ));
  // 링크 end

  // 컨텐트 관리
  const contents = [
    { id: 1, content: "abcd", type: "작업" },
    { id: 2, content: "abcd", type: "작업" },
  ];

  const ContentList = () =>
    contents.map((i) => (
      <li key={i.id}>
        <span className="material-icons check">radio_button_unchecked</span>
        <div className="content">
          <p>{i.content}</p>
          <span>{i.type}</span>
        </div>
        <span className="material-icons">star_border</span>
      </li>
    ));
  // 컨텐트 end

  return (
    <>
      <div className="add">
        <div className="input">
          <span className="material-icons">radio_button_unchecked</span>
          <input type="text" placeholder="작업 추가" onChange={change}></input>
        </div>
        <div className="option">
          <div>{optionList}</div>
          <button style={cursor}>추가</button>
        </div>
      </div>
      <ul className="contents">
        <ContentList />
      </ul>
    </>
  );
}

export default ContentAdd;

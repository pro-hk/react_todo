import React from "react";
import "../css/contentAdd.css";

function ContentAdd() {
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

  return (
    <div className="add">
      <div className="input">
        <span className="material-icons">radio_button_unchecked</span>
        <input type="text" placeholder="작업 추가"></input>
      </div>
      <div className="option">
        <div>{optionList}</div>
        <button>추가</button>
      </div>
    </div>
  );
}

export default ContentAdd;

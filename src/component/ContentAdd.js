import "../css/content.css";
import React, { useState } from "react";
import axios from "axios";

function ContentAdd(prop) {
  var maxID;
  if (prop.todoList.length === 0) {
    maxID = 1;
  } else {
    maxID = prop.todoList[prop.todoList.length - 1]._id + 1;
  }

  // 추가 버튼 커서 모양 관리
  const [cursor, setCursor] = useState({
    cursor: "no-drop",
  });
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

  // 추가
  var now = new Date();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const month = now.getMonth() + 1;

  const [addContent, setAddContent] = useState({
    id: maxID,
    content: "",
    type: "작업",
    date: month + "월 " + now.getDate() + "일, " + week[now.getDay()],
  });

  return (
    <div className="add">
      <div className="input">
        <span className="material-icons">radio_button_unchecked</span>
        <input
          type="text"
          placeholder="작업 추가"
          value={addContent.content}
          onChange={(e) => {
            setAddContent({ ...addContent, content: e.target.value });
            setCursor(
              e.target.value !== ""
                ? { cursor: "pointer" }
                : { cursor: "no-drop" }
            );
          }}
        />
      </div>
      <div className="option">
        <div>{optionList}</div>
        <button
          style={cursor}
          onClick={(e) => {
            if (addContent.content !== "") {
              axios({
                url: "http://localhost:3001/add",
                method: "post",
                data: {
                  id: addContent.id,
                  todo: addContent.content,
                  date: addContent.date,
                  type: addContent.type,
                  star: false,
                },
              }).then((response) => {
                alert("입력");
                console.log(response);
              });
              setAddContent({
                ...addContent,
                id: addContent.id + 1,
                content: "",
              });
              setCursor({ cursor: "no-drop" });
            }
          }}
        >
          추가
        </button>
      </div>
    </div>
  );
}

export default ContentAdd;

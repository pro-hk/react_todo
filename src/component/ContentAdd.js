import React, { useState } from "react";
import "../css/content.css";

function ContentAdd(prop) {
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
  const [addContent, setAddContent] = useState({
    id: prop.contents.length + 1,
    content: "",
    type: "작업",
    star: false,
    checked: false,
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
        ></input>
      </div>
      <div className="option">
        <div>{optionList}</div>
        <button
          style={cursor}
          onClick={(e) => {
            e.preventDefault();
            if (addContent.content !== "") {
              prop.onAddContent(addContent);
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

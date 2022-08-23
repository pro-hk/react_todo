import React, { useState } from "react";

function Content() {
  // 컨텐트 관리
  const [contents, setContents] = useState([
    {
      id: 1,
      content: "abcd",
      type: "작업",
    },
    {
      id: 2,
      content: "abcdasdfd",
      type: "작업",
    },
  ]);
  //    readonly && 동적  구분 -> state를 따로
  // react component callback

  const Star = () => {
    const [star, setStar] = useState(false);
    return (
      <span
        className="material-icons"
        onClick={() => {
          setStar(!star);
        }}
      >
        {star ? "star" : "star_border"}
      </span>
    );
  };

  const ContentList = () =>
    contents.map((i) => (
      <li key={i.id}>
        <span className="material-icons check">radio_button_unchecked</span>
        <div className="content">
          <p>{i.content}</p>
          <span>{i.type}</span>
        </div>
        <Star />
      </li>
    ));
  // 컨텐트 end

  return (
    <ul className="contents">
      <ContentList />
    </ul>
  );
}

export default Content;

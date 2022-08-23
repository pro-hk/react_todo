import React, { useState } from "react";

function Content(prop) {
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
    prop.contents.map((i) => (
      <li key={i.id}>
        <span className="material-icons check">radio_button_unchecked</span>
        <div
          className="content"
          onClick={() => {
            prop.onSelect(i.id);
          }}
        >
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

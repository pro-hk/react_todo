import React from "react";
import Star from "./Star";

function Content(prop) {
  //    readonly && 동적  구분 -> state를 따로
  // react component callback

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
        <Star
          star={prop.stars[i.id - 1].star}
          onStar={(star) => prop.onStar(i.id, star)}
        />
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

import React, { useState } from "react";
import Star from "./Star";

function Content(prop) {
  //    readonly && 동적  구분 -> state를 따로
  // react component callback
  const [active, setActive] = useState(Array(prop.contents.length).fill(false));

  const ContentList = () =>
    prop.contents.map((i, idx) => (
      <li key={i.id} className={active[idx] ? "active" : ""}>
        <span className="material-icons check">radio_button_unchecked</span>
        <div
          className="content"
          onClick={() => {
            prop.onSelect(i.id);
            var array = Array(prop.contents.length).fill(false);
            array[idx] = true;
            setActive(array);
          }}
        >
          <p>{i.content}</p>
          <span>{i.type}</span>
        </div>
        <Star content={i} addStar={prop.addStar} />
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

import React, { useState } from "react";
import Star from "./Star";

function Content(prop) {
  //    readonly && 동적  구분 -> state를 따로
  // react component callback
  const [active, setActive] = useState(Array(prop.todoList.length).fill(false));

  const ContentList = () =>
    prop.todoList.map((i, idx) => (
      <li key={i._id} className={active[idx] ? "active" : ""}>
        <span className="material-icons check">radio_button_unchecked</span>
        <div
          className="content"
          onClick={() => {
            prop.onSelect(i._id);
            var array = Array(prop.todoList.length).fill(false);
            array[idx] = true;
            setActive(array);
          }}
        >
          <p>{i.todo}</p>
          <span>{i.type}</span>
        </div>
        <Star id={i._id} star={i.star} />
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

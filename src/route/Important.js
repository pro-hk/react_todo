import React, { useState, useEffect } from "react";
import ContentAdd from "../component/ContentAdd";

function Important(prop) {
  var [icon, setIcon] = useState("star_border");
  useEffect(() => {
    if (prop.data === "menu") {
      setIcon("menu");
    }
  });
  return (
    <div className="today">
      <div className="main_title" style={{ color: "#2564cf" }}>
        <a
          href="/"
          className={icon}
          onClick={function (e) {
            e.preventDefault();
            setIcon("star_border");
            prop.onOpen();
          }}
        >
          <span className="material-icons">{icon}</span>
        </a>
        <h3 className="drag">중요</h3>
        <a href="/">
          <span className="material-icons">more_horiz</span>
        </a>
      </div>
      <ContentAdd contents={{}} />
    </div>
  );
}

export default Important;

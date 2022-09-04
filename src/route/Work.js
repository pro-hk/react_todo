import React, { useState, useEffect } from "react";
import ContentAdd from "../component/ContentAdd";

function Work(prop) {
  var [icon, setIcon] = useState("home");
  useEffect(() => {
    if (prop.data === "menu") {
      setIcon("menu");
    }
  }, [prop]);
  return (
    <div className="today">
      <div className="main_title" style={{ color: "#2564cf" }}>
        <a
          href="/"
          className={icon}
          onClick={function (e) {
            e.preventDefault();
            setIcon("home");
            prop.onOpen();
          }}
        >
          <span className="material-icons">{icon}</span>
        </a>
        <h3 className="drag">작업</h3>
        <a href="/">
          <span className="material-icons">more_horiz</span>
        </a>
      </div>
      <ContentAdd contents={{}} />
    </div>
  );
}

export default Work;

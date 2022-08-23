import React, { useState, useEffect } from "react";

function Assign(prop) {
  const [icon, setIcon] = useState("person_outline");
  useEffect(() => {
    if (prop.data === "menu") {
      setIcon("menu");
    }
  });
  return (
    <div className="today">
      <div className="main_title" style={{ color: "#5ca52d" }}>
        <a
          href="/"
          className={icon}
          onClick={function (e) {
            e.preventDefault();
            setIcon("person_outline");
            prop.onOpen();
          }}
        >
          <span className="material-icons">{icon}</span>
        </a>
        <h3 className="drag">나에게 할당됨</h3>
        <a href="/">
          <span className="material-icons">more_horiz</span>
        </a>
      </div>
    </div>
  );
}

export default Assign;

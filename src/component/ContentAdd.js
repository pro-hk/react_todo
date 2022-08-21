import React from "react";
import "../css/contentAdd.css";

function ContentAdd() {
  return (
    <div className="add">
      <div className="input">
        <span className="material-icons">radio_button_unchecked</span>
        <input type="text" placeholder="작업 추가"></input>
      </div>
      <div className="option">
        <div>
          <a href="/">
            <span className="material-icons">calendar_month</span>
          </a>
          <a href="/">
            <span className="material-icons">notifications_none</span>
          </a>
          <a href="/">
            <span className="material-icons">repeat</span>
          </a>
        </div>
        <button>추가</button>
      </div>
    </div>
  );
}

export default ContentAdd;

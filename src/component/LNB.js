import React, { useState, useEffect } from "react";
import "../css/lnb.css";

function LNB(prop) {
  var [off, setOff] = useState("");

  useEffect(() => {
    if (prop.data === "open") {
      setOff("");
    }
  });

  return (
    <div className={"LNB " + off}>
      <button
        href="/"
        onClick={function (e) {
          e.preventDefault();
          prop.onClose();
          setOff("off");
        }}
      >
        <span className="material-icons">menu</span>
      </button>
      <ul className="menu">
        <li className="on">
          <a href="/today">
            <span className="material-icons">wb_sunny</span>
            <span className="title">오늘 할 일</span>
            <span className="count"></span>
          </a>
        </li>
        <li>
          <a href="/important">
            <span className="material-icons">star_border</span>
            <span className="title">중요</span>
            <span className="count"></span>
          </a>
        </li>
        <li>
          <a href="/plan">
            <span className="material-icons">calendar_month</span>
            <span className="title">계획된 일정</span>
            <span className="count"></span>
          </a>
        </li>
        <li>
          <a href="/assign">
            <span className="material-icons">person_outline</span>
            <span className="title">나에게 할당됨</span>
            <span className="count"></span>
          </a>
        </li>
        <li>
          <a href="/work">
            <span className="material-icons">home</span>
            <span className="title">작업</span>
            <span className="count"></span>
          </a>
        </li>
      </ul>
      <div className="link">
        <ul className="linkList">
          <li>
            <a href="/">
              <span className="material-icons">mail_outline</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span className="material-icons">calendar_month</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span className="material-icons">people_outline</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span className="material-icons">attach_file</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span className="material-icons">done_outline</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LNB;

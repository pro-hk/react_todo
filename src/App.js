import React, { useState } from "react";
import Header from "./component/Header";
import LNB from "./component/LNB";
import Detail from "./component/Detail";
import Today from "./route/Today";
import Important from "./route/Important";
import Plan from "./route/Plan";
import Assign from "./route/Assign";
import Work from "./route/Work";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  var [icon, setIcon] = useState("wb_sunny");
  var [open, setOpen] = useState("");

  // 컨텐트 관리
  const [contents, setContents] = useState([
    {
      id: 1,
      content: "abcd",
      type: "작업",
      star: "star_border",
      checked: false,
    },
    {
      id: 2,
      content: "abcdasdfd",
      type: "작업",
      star: "star_border",
      checked: false,
    },
  ]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <LNB
            data={open}
            onClose={() => {
              setIcon("menu");
              setOpen("");
            }}
          />
          <Routes>
            <Route
              path="/today"
              element={
                <Today
                  contents={contents}
                  data={icon}
                  onOpen={() => {
                    setIcon("wb_sunny");
                    setOpen("open");
                  }}
                />
              }
            />
            <Route
              path="/important"
              element={
                <Important
                  data={icon}
                  onOpen={() => {
                    setIcon("star_border");
                    setOpen("open");
                  }}
                />
              }
            />
            <Route
              path="/plan"
              element={
                <Plan
                  data={icon}
                  onOpen={() => {
                    setIcon("calendar_month");
                    setOpen("open");
                  }}
                />
              }
            />
            <Route
              path="/assign"
              element={
                <Assign
                  data={icon}
                  onOpen={() => {
                    setIcon("person_outline");
                    setOpen("open");
                  }}
                />
              }
            />
            <Route
              path="/work"
              element={
                <Work
                  data={icon}
                  onOpen={() => {
                    setIcon("home");
                    setOpen("open");
                  }}
                />
              }
            />
          </Routes>
          <Detail />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

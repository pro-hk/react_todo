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
  var [icon, setIcon] = useState([
    { today: "wb_sunny" },
    { important: "star_border" },
    { plan: "calendar_month" },
    { assign: "person_outline" },
    { work: "home" },
  ]);
  var [LNBopen, setLNBOpen] = useState(true);

  // 컨텐트 관리
  const [contents, setContents] = useState([
    {
      id: 1,
      content: "abcd",
      type: "작업",
      date: "어제",
    },
    {
      id: 2,
      content: "abcdasdfd",
      type: "작업",
      date: "오늘",
    },
  ]);

  // detail 관리(select)
  var [selectContent, setSelectContent] = useState(null);
  const [detailOff, setDetailOff] = useState(true);

  // 별 관리
  // const [stars, setStars] = useState([
  //   { id: 1, star: false },
  //   { id: 2, star: false },
  // ]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <LNB
            open={LNBopen}
            length={contents.length}
            onClose={() => {
              setIcon("menu");
              setLNBOpen(false);
            }}
          />
          <Routes>
            <Route
              path="today"
              element={
                <Today
                  //stars={stars}
                  contents={contents}
                  data={icon}
                  onOpen={() => {
                    setIcon("wb_sunny");
                    setLNBOpen(true);
                  }}
                  onAddContent={(content) => {
                    setContents(contents.concat(content));
                    //setStars(stars.concat({ id: content.id, star: false }));
                  }}
                  onSelectID={(id) => {
                    for (var i = 0; i < contents.length; i++) {
                      if (contents[i].id === id) {
                        setSelectContent(contents[i]);
                        setDetailOff(true);
                      }
                    }
                  }}
                  onStar={(id, star) => {
                    console.log("app", id, star);
                    // for (var i = 0; i < stars.length; i++) {
                    //   if (stars[i].id === id) {
                    //     console.log("id", id);

                    //     // setStars(...stars, { star: star });
                    //   }
                    // }
                  }}
                />
              }
            />
            <Route
              path="important"
              element={
                <Important
                  data={icon}
                  onOpen={() => {
                    setIcon("star_border");
                    setLNBOpen(true);
                  }}
                />
              }
            />
            <Route
              path="plan"
              element={
                <Plan
                  data={icon}
                  onOpen={() => {
                    setIcon("calendar_month");
                    setLNBOpen(true);
                  }}
                />
              }
            />
            <Route
              path="assign"
              element={
                <Assign
                  data={icon}
                  onOpen={() => {
                    setIcon("person_outline");
                    setLNBOpen(true);
                  }}
                />
              }
            />
            <Route
              path="work"
              element={
                <Work
                  data={icon}
                  onOpen={() => {
                    setIcon("home");
                    setLNBOpen(true);
                  }}
                />
              }
            />
          </Routes>
          <Detail
            content={selectContent}
            open={detailOff}
            onClose={() => setDetailOff(false)}
            onDeleteID={(id) => {
              setContents(contents.filter((i) => i.id !== id));
              setSelectContent(null);
            }}
            onUpdateID={(content) => {
              setContents(
                contents.map((i) =>
                  i.id === content.id ? { ...contents, content } : i
                )
              );
            }}
          />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

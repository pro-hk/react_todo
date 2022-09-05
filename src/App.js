import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import LNB from "./component/LNB";
import Detail from "./component/Detail";
import Today from "./route/Today";
import Important from "./route/Important";
import Plan from "./route/Plan";
import Assign from "./route/Assign";
import Work from "./route/Work";
// import Main from "./component/Main";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";

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
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((res) => {
        console.log("res==", res);
        setTodos(res.data.todoList);
      })
      .catch((err) => console.log(err));
  }, []);

  // detail 관리(select)
  const [selectTodo, setSelectTodo] = useState(null);
  const [detailOff, setDetailOff] = useState(true);

  // maxID
  console.log(todos);

  return (
    <div className="App">
      <BrowserRouter basename="react_todo">
        <Header />
        <main>
          <LNB
            open={LNBopen}
            length={todos.length}
            onClose={() => {
              setIcon("menu");
              setLNBOpen(false);
            }}
          />
          <Routes>
            <Route path="/" element={<Navigate to="/today" />} />
            <Route
              path="/today"
              element={
                <Today
                  todoList={todos}
                  data={icon}
                  onOpen={() => {
                    setIcon("wb_sunny");
                    setLNBOpen(true);
                  }}
                  onAddContent={(content) => {
                    setTodos(todos.concat(content));
                  }}
                  onSelectID={(id) => {
                    for (var i = 0; i < todos.length; i++) {
                      if (todos[i]._id === id) {
                        setSelectTodo(todos[i]);
                        setDetailOff(true);
                      }
                    }
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
                    setLNBOpen(true);
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
                    setLNBOpen(true);
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
                    setLNBOpen(true);
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
                    setLNBOpen(true);
                  }}
                />
              }
            />
          </Routes>
          <Detail
            selectTodo={selectTodo}
            open={detailOff}
            onClose={() => setDetailOff(false)}
            onDeleteID={(id) => {
              setTodos(todos.filter((i) => i.id !== id));
              setSelectTodo(null);
            }}
            onUpdate={(editContent) => {
              setSelectTodo({ ...selectTodo, content: editContent });
              // setContents(contents.map((i) => (i.id === content.id ? { ...contents, content } : i)));
            }}
          />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

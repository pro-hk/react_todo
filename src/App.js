import "./App.css";
import React, { useState } from "react";
import Header from "./component/Header";
import Today from "./component/Today";
import LNB from "./component/LNB";
import Important from "./component/Important";
import Plan from "./component/Plan";
import Assign from "./component/Assign";
import Work from "./component/Work";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  var [icon, setIcon] = useState("wb_sunny");
  var [open, setOpen] = useState("");

  return (
    <BrowserRouter>
      <div className="App">
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
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

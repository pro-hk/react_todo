import "./App.css";
import React, { useState } from "react";
import Header from "./component/Header";
import LNB from "./component/LNB";
import Today from "./route/Today";
import Important from "./route/Important";
import Plan from "./route/Plan";
import Assign from "./route/Assign";
import Work from "./route/Work";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  var [icon, setIcon] = useState("wb_sunny");
  var [open, setOpen] = useState("");

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
      </BrowserRouter>
    </div>
  );
}

export default App;

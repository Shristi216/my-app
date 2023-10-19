import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter.jsx";
import Buttonclick from "./components/Buttonclick.jsx";
import Navbar from "./components/Navbar.jsx";
// import Shopingcart from "./components/Shopingcart.jsx";
import Mapping from "./components/Mapping.jsx";
import Textform from "./components/Textform.jsx";
import Textutils from "./components/Textutils.jsx";
import Dropdown from "./components/Dropdown";
// import Gridsystem from "./components/Gridsystem";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<Navbar title="Learner" about="about us" />}
          />
          <Route
            path="/form"
            element={<Textform heading="Please fill the form" />}
          />
          <Route path="/utils" element={<Textutils />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/maps" element={<Mapping />} />
          <Route path="/buttons" element={<Buttonclick />} />
        </Routes>
        <Dropdown />
        {/* <Gridsystem/>   materialui install error */}
        {/* <Counter /> */}
        {/* <Buttonclick /> */}
        {/* <Shopingcart /> */}
        {/* <Mapping /> */}
        {/* <p>hii</p> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

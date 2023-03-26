import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import React from "react";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

import "./App.css";
import "./css_files/connection_css.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import React from "react";
import Home from "./Home";
import Connection from "./Connection";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Connection" element={<Connection />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

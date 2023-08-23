import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Splash from "./pages/Splash";
import Register from "./pages/Register";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>

  );
}

export default App;
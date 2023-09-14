import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Splash from "./pages/Splash";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import VerificationNotify from "./pages/VerificationNotify";
import VerificationSuccess from "./pages/VerificationSuccess";
import VerificationTimeout from "./pages/VerificationTimeout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/verification" element={<VerificationNotify />} />
        <Route path="/verification-success" element={<VerificationSuccess />} />
        <Route path="/verification-timeout" element={<VerificationTimeout />} />
      </Routes>
    </div>

  );
}

export default App;
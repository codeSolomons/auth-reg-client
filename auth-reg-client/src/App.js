import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Splash from "./pages/Splash";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Splash />
    </div>

  );
}

export default App;

{/* <Router>
<Routes>
  <Route path="/login">
    <Login />
  </Route>
  <Route path="/">
    <Splash />
  </Route>
</Routes>
</Router> */}
import React from "react";
import Home from "./pages/home/home"
import Nav from "./components/Nav/nav/Nav";
import { Route, BrowserRouter, Routes, Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
        <Nav />
        <Routes>
          <Route path="/" component={Home}></Route>
          <Route path="/clean" component={Home}></Route>
        </Routes>
    </div>
  );
}

export default App;

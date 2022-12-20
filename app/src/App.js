import React from "react";
import Home from "./pages/home/home"
import Nav from "./components/Nav/nav/Nav";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
        <Nav />
        <Routes>
          <Route path="/" component={Home}></Route>
          <Route path="/free" component={Home}></Route>
          <Route path="/product" component={Home}></Route>
          <Route path="/comment" component={Home}></Route>
        </Routes>
    </div>
  );
}

export default App;

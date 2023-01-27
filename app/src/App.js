import React from "react";
import Home from "./pages/home/home"
import Nav from "./components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/products/product";
import Free from "./pages/free/free";
import Comment from "./pages/comment/comment";
function App() {
  return (
    <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={ <Home /> }></Route>
          <Route path="/free" element={ <Free /> }></Route>
          <Route path="/product" element={ <Product /> }></Route>
          <Route path="/comment" element={ <Comment /> }></Route>
        </Routes>
    </div>
  );
}

export default App;

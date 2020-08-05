import React from "react";
import logo from "../logo.svg";
import "../styles/App.css";
import SearchBooks from "./SearchBooks";

function App() {
  return (
    <div className="container">
      <div className="title">The New York Times Best Sellers</div>
      <SearchBooks />
    </div>
  );
}

export default App;

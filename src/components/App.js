import React from "react";
import SearchBooks from "./SearchBooks";
import "../styles/App.css";

function App() {
  return (
    <div className="container">
      <div className="title">The New York Times Best Sellers</div>
      <SearchBooks />
    </div>
  );
}

export default App;

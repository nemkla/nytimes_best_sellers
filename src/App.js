import React from "react";
import SearchBooks from "./components/SearchBooks";
import "./styles/App.css";

function App() {
  console.log("Render: App");
  return (
    <div className="container">
      <div className="title">The New York Times Best Sellers</div>
      <SearchBooks />
    </div>
  );
}

export default App;

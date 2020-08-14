import React from "react";
import SearchBooks from "./components/SearchBooks";
import TopStories from "./components/TopStories";

import "./styles/App.css";

function App() {
  console.log("Render: App");
  return (
    <>
      <div className="container">
        <div className="title">Mini The New York Times</div>
        <SearchBooks />
        <TopStories/>
      </div>
    </>
  );
}

export default App;

import React from "react"
import NYTAppBar from "./components/NYTAppBar"
import TopStories from "./components/TopStories"

import "./styles/App.css"

function App() {
  console.log("Render: App")
  return (
    <>
    <NYTAppBar/>
    <div className="container">
      <div className="title">Mini The New York Times</div>
      <TopStories />
    </div>
    </>
  );
}

export default App;

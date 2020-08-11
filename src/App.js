import React from "react"
import NYTAppBar from "./components/NYTAppBar"

import "./styles/App.css"

function App() {
  console.log("Render: App")
  return (
    <>
    <NYTAppBar/>
    <div className="container">
      <div className="title">Mini The New York Times</div>
    </div>
    </>
  );
}

export default App;

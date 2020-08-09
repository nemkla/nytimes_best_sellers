import React from "react";
import SearchBooks from "./components/SearchBooks";
import "./styles/App.css";
import {AppProvider} from './contexts/AppContext';

function App() {
  console.log('Render: App');
  return (
    <AppProvider>
      <div className="container">
        <div className="title">The New York Times Best Sellers</div>
        <SearchBooks />
      </div>
    </AppProvider>

  );
}

export default App;

import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Products from "./app/Products";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Products />
      </header>
    </div>
  );
}

export default App;

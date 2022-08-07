import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Products from "./app/Products";
import MyTest from "./app/MyTest";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyTest></MyTest>
        <Products />
      </header>
    </div>
  );
}

export default App;

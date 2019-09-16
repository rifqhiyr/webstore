import React from "react";
import "./App.css";
import BaseLoading from "./components/BaseLoading";
import SigninComponent from "./components/SigninComponent";

function App() {
  return (
    <div className="App">
      <h1>store</h1>
      <BaseLoading />
      <SigninComponent />
    </div>
  );
}

export default App;

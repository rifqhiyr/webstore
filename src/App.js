<<<<<<< HEAD
import React from "react";
import "./App.css";
import BaseLoading from "./components/BaseLoading";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <h1>store</h1>
      <BaseLoading />
      <Footer />
    </div>
  );
=======
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/views/HomePage";
import LoginPage from "./components/views/LoginPage";
import RegisterPage from "./components/views/RegisterPage";
import DetailPage from "./components/views/DetailPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/detail" exact component={DetailPage} />
      </Router>
    );
  }
>>>>>>> 0cd2984b129e76718209eda6247b67717aa3f4ac
}

export default App;

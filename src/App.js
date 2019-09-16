import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import "./App.css";

// Import Component (Dont Forget to delete in production)
import BaseLoading from "./components/BaseLoading";
import HomePage from "./pages/HomePage"

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <h1>store</h1>
      <Route path="/" exact component={BaseLoading}/> 
      <Route path="/home" exact component={HomePage}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;

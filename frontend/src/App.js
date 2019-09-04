import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchDB from "./Components/SearchDB";
import Compatibility from "./Components/Compatibility";
import Home from "./Components/Home";
import Entry from "./Components/Entry";
import EditDevice from "./Components/EditDevice";
import "./reset.css";
import "./App.css";

function MyRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/search' component={SearchDB} />
        <Route path='/entry' component={Entry} />
        <Route path='/device/:mpn' component={Compatibility} />
        <Route path='/edit/device/:mpn' component={EditDevice} />
      </Switch>
    </Router>
  )
}

function App() {
  return (
    <div className="App">
      <MyRouter />
    </div>
  );
}

export default App;

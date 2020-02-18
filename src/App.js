import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import SearchDB from "./Components/SearchDB";
import Compatibility from "./Components/Compatibility";
import Entry from "./Components/Entry";
import EditDevice from "./Components/EditDevice";
import EditTape from "./Components/EditTape";
import ViewDevice from "./Components/ViewDevice";
import "./reset.css";
import "./css/App.css";

function MyRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/search' component={SearchDB} />
        <Route path='/entry' component={Entry} />
        <Route path='/device/:mpn' component={Compatibility} />
        <Route path='/edit_device/:mpn' component={EditDevice} />
        <Route path='/edit_tape/:carrier_tape' component={EditTape} />
        <Route path='/view/device/:mpn' component={ViewDevice} />
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

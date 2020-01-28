import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './Home'
import About from './About'
import NavBar from './NavBar'
import Main from './Main'
import FourZeroFour from './FourZeroFour';


function App() {

  return (
   <div>
      <h3 className="appTemplateTitle">
       React Template
      </h3>

      <NavBar />

      <Switch>
        <Route path="/about"><About /></Route>
        <Route path="/main"><Main /></Route>
        <Route exact path="/"><Home /></Route>
        <Route path="*"><FourZeroFour /></Route>
      </Switch>
   </div>
  );
}

export default App;

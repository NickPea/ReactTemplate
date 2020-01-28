import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './home'
import About from './about'
import NavBar from './navbar'
import Main from './main'
import FourZeroFour from './fourzerofour';


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

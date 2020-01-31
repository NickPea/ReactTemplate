import React from "react";
import style from './app.module.css'
import { Switch, Route, useLocation } from "react-router-dom";
import { useTransition, animated, config } from "react-spring";
import Home from "./pages/home";
import About from "./pages/about";
import NavBar from "./components/navbar";
import Main from "./pages/main";
import Backpack from "./pages/backpack";
import Testing from "./pages/testing";
import FourZeroFour from "./pages/fourzerofour";

function App() {
  //Route Transitions with spring-react hooks
  const location = useLocation();
  const transitions = useTransition(location, location => location.pathname, {
    config: config.slow,
    //ALL THREE ANIMATION OBJECTS MUST CONTAIN
    //THE SAME PROPERTIES AND AN OBVIOUS PATTERN
    //OF VALUE CHANGES!!!!!!
    from: { opacity: "0",  position: 'absolute', width: '100%'},
    enter: { opacity: "1", position: 'static'  , width: '100%'},
    leave: { opacity: "0", position: 'absolute', width: '100%'},
  });

  return (
    <div>
      <h3 className={style.appTemplateTitle}>React Template</h3>

      <NavBar />

      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route exact path="/"><Home /></Route>
            <Route path="/about"><About /></Route>
            <Route path="/main"><Main /></Route>
            <Route path="/backpack"><Backpack /></Route>
            <Route path="/testing"><Testing /></Route>
            <Route path="*"><FourZeroFour /></Route>
          </Switch>
        </animated.div>
      ))}
    </div>
  );
}

export default App;

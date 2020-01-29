import React from "react";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import { useTransition, animated, config } from "react-spring";
import Home from "./home";
import About from "./about";
import NavBar from "./navbar";
import Main from "./main";
import Backpack from "./backpack";
import FourZeroFour from "./fourzerofour";

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
      <h3 className="appTemplateTitle">React Template</h3>

      <NavBar />

      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route exact path="/"><Home /></Route>
            <Route path="/about"><About /></Route>
            <Route path="/main"><Main /></Route>
            <Route path="/backpack"><Backpack /></Route>
            <Route path="*"><FourZeroFour /></Route>
          </Switch>
        </animated.div>
      ))}
    </div>
  );
}

export default App;

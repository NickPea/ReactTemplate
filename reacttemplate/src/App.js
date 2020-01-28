import React from "react";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import Main from "./Main";
import FourZeroFour from "./FourZeroFour";

function App() {
  //Route Transitions with spring-react
  const location = useLocation();
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: "0" },
    enter: { opacity: "1" }
  });

  return (
    <div>
      <h3 className="appTemplateTitle">React Template</h3>

      <NavBar />

      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/main">
              <Main />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <FourZeroFour />
            </Route>
          </Switch>
        </animated.div>
      ))}
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import { useTransition, animated, config } from "react-spring";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import Main from "./Main";
import FourZeroFour from "./FourZeroFour";

function App() {
  //Route Transitions with spring-react
  const location = useLocation();
  const transitions = useTransition(location, location => location.pathname, {
    config: config.slow,
    from: { opacity: "0", position: "absolute" },
    enter: { opacity: "1" },
    leave: { opacity: "0" }
  });

  return (
    <div>
      <h3 className="appTemplateTitle">React Template</h3>

      <NavBar />
      
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route exact path="/" render={Home} />
            <Route path="/about" render={About} />
            <Route path="/main" render={Main} />
            <Route path="*" render={FourZeroFour} />
          </Switch>
        </animated.div>
      ))}
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import { useTransition, animated, config } from "react-spring";
import Home from "./home";
import About from "./about";
import NavBar from "./navbar";
import Main from "./main";
import BackPack from "./BackPack";
import FourZeroFour from "./fourzerofour";

function App() {
  //Route Transitions with spring-react hooks
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
            <Route path="/backpack" render={BackPack} />
            <Route path="*" render={FourZeroFour} />
          </Switch>
        </animated.div>
      ))}
    </div>
  );
}

export default App;

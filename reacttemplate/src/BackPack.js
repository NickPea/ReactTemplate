import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import ShowBootstrap from "./ShowBootstrap";

export default function BackPack() {
  const { url, path } = useRouteMatch();
  return (
    <div>
      <h3>The BackPack</h3>

      <Link to={`${url}/showbootstrap`}>Strap-o-Rama</Link>

      <Switch>
        <Route path={`${path}/showbootstrap`}><ShowBootstrap /></Route>
      </Switch>
    </div>
  );
}

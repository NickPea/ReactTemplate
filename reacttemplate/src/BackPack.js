import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import FourZeroFour from "./fourzerofour";
import ShowBootstrap from "./ShowBootstrap";

export default function BackPack() {
  const { url, path } = useRouteMatch();
  return (
    <div>
      <h3>The BackPack</h3>

      <Link to={`${url}/bootstrapdemo`} />

      <Switch>
        <Route exact path={`${path}/showbootstrap`} render={ShowBootstrap} />
        <Route path="*" render={FourZeroFour} />
      </Switch>
    </div>
  );
}

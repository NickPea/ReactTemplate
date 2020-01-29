import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

function Display({ routeList }) {
  let { path } = useRouteMatch();

  return (
    <div>
      <Switch>
        {routeList.map((item, index) => (
          <Route key={item.label} path={`${path}/${item.relativePath}`}>{item.component}</Route>
        ))}
      </Switch>
    </div>
  );
}

export default Display;

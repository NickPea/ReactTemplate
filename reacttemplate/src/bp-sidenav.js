import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Styles from "./bp-sidenav.module.css";

function Sidenav({ routeList }) {
  const { url } = useRouteMatch();
  return (
    <span className={Styles.navContainer}>
      {routeList.map((item, index) => (
        <Link key={index} className={Styles.navLinks} to={`${url}/${item.relativePath}`}>
          {item.label}
        </Link>
      ))}
    </span>
  );
}

export default Sidenav;

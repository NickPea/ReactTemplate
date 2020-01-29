import React, { useState }from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Styles from "./bp-sidenav.module.css";

function Sidenav({ routeList }) {
  const [isOpen, setIsOpen] = useState(true);
  const { url } = useRouteMatch();

  const closeNav = {
    width: '0%',
    padding: '0'
  }

  const spinToggle = {
    transform: 'rotateZ(540deg)'
  }

  return (
    <div className={Styles.navWrapper}>
      <div className={Styles.navContent} style={!isOpen? closeNav: null}>
        {routeList.map((item, index) => (
          <Link
            key={index}
            className={Styles.navLinks}
            to={`${url}/${item.relativePath}`}>
            {item.label}
          </Link>
        ))}
      </div>
      <div className={Styles.navToggle} onClick={()=>setIsOpen(!isOpen)}>
        <i class="fas fa-pizza-slice" style={!isOpen? spinToggle: null} ></i>
        <p>Lunchbox</p>

      </div>
    </div>
  );
}

export default Sidenav;

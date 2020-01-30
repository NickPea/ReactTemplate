import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import css from "./bp-sidenav.module.css";

function Sidenav({ routeList }) {
  const [isOpen, setIsOpen] = useState(true);
  const { url } = useRouteMatch();

  const closeNav = {
    width: '30px', //size of the navToggle width
  }
  const spinIcon = {
    transform: 'rotateZ(540deg)'
  }

  return (
    <div className={css.navWrapper}>
      <div className={css.navContent} style={!isOpen? closeNav: null}>
        {
        //Links
        routeList.map((item, index) => (
          <div className={css.navLinks}>
            <Link key={index} to={`${url}/${item.relativePath}`}>
              {item.label}
            </Link>
          </div>
        ))
        //Links
        }
      </div>
      <div className={css.navToggle} onClick={()=>setIsOpen(!isOpen)}>
        <i className="fas fa-pizza-slice" style={!isOpen? spinIcon: null}></i>
        <span>Homework</span>
      </div>
    </div>
  );
} //end component

export default Sidenav;

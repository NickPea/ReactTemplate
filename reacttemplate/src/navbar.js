import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/main">Main</Link>
        </li>
      </ul>
    </div>
  );
}

// navbar.propTypes = {}

export default NavBar;

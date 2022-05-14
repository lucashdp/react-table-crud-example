import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <a href="/tutorials" className="navbar-brand">
        bezKoder
      </a>
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link
            to={{
              pathname: "/tutorials",
            }}
          >
            Tutorials
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to={{
              pathname: "/tutorials/add",
            }}
          >
            Add
          </Link>
        </li>
      </div>
    </nav>
  );
};

export default Header;

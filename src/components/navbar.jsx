import React, { Component } from "react";

// Stateless Functional Component

const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand text-white" href="">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;

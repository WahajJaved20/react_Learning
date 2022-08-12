import React from "react";
// Stateless Functional Component
//props are sent automatically as args
// OR we can directly get it by
// const Navbar = ({totalCounters}) => {} so no more props. bs
const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-brand">
          Navbar
          <span className="badge bg-secondary">{props.totalCounters}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

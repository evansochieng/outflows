import React from 'react';
import { Link } from 'react-router-dom';
import "../index.css"

const NavBar = () => {

  const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "rgb(12 74 110)",
    textDecoration: "none",
    color: "white",
    borderRadius: "5px",
  };

  return (
    <nav className="navigation">
      {/* <i className="fa fa-money" style={{fontSize:"24px"}}></i> */}
      <h2 className='app-name'>
        Outflows
      </h2>
      <div className="navigation-menu">
        <Link to="/" exact="true" style={linkStyles}>
          Home
        </Link>
        <Link to="/income" exact="true" style={linkStyles}>
          Income
        </Link>
        <Link to="/expenses" exact="true" style={linkStyles}>
          Expenses
        </Link>
        <Link to="/logout" exact="true" style={linkStyles}>
          Sign Out
        </Link>
      </div>
    </nav>
  );
}

export default NavBar
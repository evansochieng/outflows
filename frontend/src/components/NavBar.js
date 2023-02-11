import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/income">Income</Link>
      <Link to="/expenses">Expenses</Link>
      <Link to="/logout">Sign Out</Link>
    </div>
  );
}

export default NavBar
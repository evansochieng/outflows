import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Link to="/" exact="true">
        Home
      </Link>
      <Link to="/income" exact="true">
        Income
      </Link>
      <Link to="/expenses" exact="true">
        Expenses
      </Link>
      <Link to="/logout" exact="true">
        Sign Out
      </Link>
    </div>
  );
}

export default NavBar
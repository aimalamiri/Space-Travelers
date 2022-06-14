import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const planet = require('../images/planet.png');

const Navbar = () => {
  const location = useLocation();

  const activeLink = (link) => {
    if (location.pathname === link) {
      return 'active';
    }
    return null;
  };

  return (

    <div className="navbar">
      <div className="logo-section">
        <img className="logo" src={planet} alt="space travelers" />
      </div>
      <div className="flex">
        <Link to="/" className={activeLink('/')}>Home</Link>
        <Link to="/about" className={activeLink('/about')}>About</Link>
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react';
import './Navbar.css';

const planet = require('../images/planet.png');

const Navbar = () => (
  <div className="navbar">
    <div className="logo-section">
      <img className="logo" src={planet} alt="space travelers" />
    </div>

  </div>
);

export default Navbar;

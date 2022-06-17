import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { Navbar as BNavbar, Container, Nav } from 'react-bootstrap';

const planet = require('../images/planet.png');

const Navbar = () => {
  const activeLink = (isActive) => (isActive ? { borderBottom: '1px solid #444' } : undefined);

  return (
    <>
      <BNavbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <BNavbar.Brand>
            <img className="logo" src={planet} alt="space travelers" />
            <span className="mx-2">Space Travelers</span>
          </BNavbar.Brand>
          <BNavbar.Toggle aria-controls="responsive-navbar-nav" />
          <BNavbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto gap-4">
              <NavLink to="/" style={({ isActive }) => activeLink(isActive)} className="text-dark">
                Rockets
              </NavLink>
              <NavLink to="/missions" style={({ isActive }) => activeLink(isActive)} className="text-dark">
                Missions
              </NavLink>
              <NavLink to="/profile" style={({ isActive }) => activeLink(isActive)} className="text-dark">
                My Profile
              </NavLink>
            </Nav>
          </BNavbar.Collapse>
        </Container>
      </BNavbar>
    </>
  );
};

export default Navbar;

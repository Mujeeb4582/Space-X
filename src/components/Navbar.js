import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';

const Navbar = () => {
  const activeStyle = ({ isActive }) => ({
    textDecoration: isActive ? 'underline' : 'none',
    fontWeight: 600,
    color: '#2088ff',
  });

  return (
    <header className="md:h-16 flex flex-col md:flex-row justify-between items-center my-6 mx-12 border-b-2 border-black pb-4">
      <NavLink
        className="h-full flex flex-row justify-between items-center mb-4"
        to="/"
      >
        <img className="h-10 mr-4 lg:h-14" src={logo} alt="logo" />
        <span className="text-2xl md:text-3xl">
          Space Travelers&apos; Hub
        </span>
      </NavLink>
      <nav className="flex gap-3 items-center">
        <NavLink
          to="/"
          style={activeStyle}
        >
          <span className="">Rockets</span>
        </NavLink>
        <NavLink
          to="/missions"
          style={activeStyle}
        >
          <span className="">Missions</span>
        </NavLink>
        <div className="h-4 border-r-2 border-black" />
        <NavLink
          to="/my-profile"
          style={activeStyle}
        >
          <span className="">My Profile</span>
        </NavLink>
      </nav>
    </header>
  );
};
export default Navbar;

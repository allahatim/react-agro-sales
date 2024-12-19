import React from 'react';
import { FaBell, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Fertilizer Sales Tracker</h1>
      <div className="nav-icons">
        <input type="text" placeholder="Search here" />
        <FaSearch className="search-icon" />
        <FaBell className="bell-icon" />
      </div>
    </div>
  );
};

export default Navbar;

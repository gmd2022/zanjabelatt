import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Logo from '../assets/logo.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/" onClick={handleLinkClick}>
          <img src={Logo} alt="Zanjabela Tours Logo" className="logo" />
        </Link>
        <h1>Zanjabela Tours</h1>
      </div>

      <div className={`links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={handleLinkClick}>Home</Link>
        <Link to="/Tours" onClick={handleLinkClick}>Tours</Link>
         <Link to="/Visa" onClick={handleLinkClick}>Visa</Link>
         <Link to="/Blogs" onClick={handleLinkClick}>Blogs</Link>
        <Link to="/About" onClick={handleLinkClick}>AboutUs</Link>
        <Link to="/Contact" onClick={handleLinkClick}>Contact</Link>
      </div>

      <button
        className={`burger ${menuOpen ? 'toggle' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </button>
    </nav>
  );
}

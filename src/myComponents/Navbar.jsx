import React, { useState } from 'react';
import "./Navbar.css";
import logo from '../assets/Logo/transparent.png';

const Navbar = ({ heroRef, skillsRef, workExperienceRef, contactRef }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleHamburgerClick = () => {
    setShowMenu(prevState => !prevState); // Toggle the menu
  };

  const handleLinkClick = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    if (showMenu) setShowMenu(false); // Close the menu only if it's open
  };

  return (
    <nav className='nav-wrapper'>
      <div className='nav-content'>
        <img className='logo' src={logo} alt='Logo' />
        <svg
          className='HamburgerMenu'
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 48 48"
          onClick={handleHamburgerClick}
        >
          <linearGradient id="menuGradient1" x1="12.066" x2="34.891" y1=".066" y2="22.891" gradientUnits="userSpaceOnUse">
            <stop offset=".237" stopColor="#3bc9f3" />
            <stop offset=".85" stopColor="#1591d8" />
          </linearGradient>
          <path fill="url(#menuGradient1)" d="M43,15H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,14.1,44.1,15,43,15z" />
          <linearGradient id="menuGradient2" x1="12.066" x2="34.891" y1="12.066" y2="34.891" gradientUnits="userSpaceOnUse">
            <stop offset=".237" stopColor="#3bc9f3" />
            <stop offset=".85" stopColor="#1591d8" />
          </linearGradient>
          <path fill="url(#menuGradient2)" d="M43,27H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,26.1,44.1,27,43,27z" />
          <linearGradient id="menuGradient3" x1="12.066" x2="34.891" y1="24.066" y2="46.891" gradientUnits="userSpaceOnUse">
            <stop offset=".237" stopColor="#3bc9f3" />
            <stop offset=".85" stopColor="#1591d8" />
          </linearGradient>
          <path fill="url(#menuGradient3)" d="M43,39H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,38.1,44.1,39,43,39z" />
        </svg>
        <ul className={`nav-menu ${showMenu ? 'show-menu' : 'hide-menu'}`}>
          <li><a className='menu-item' onClick={() => handleLinkClick(heroRef)}>Home</a></li>
          <li><a className='menu-item' onClick={() => handleLinkClick(skillsRef)}>Skillset</a></li>
          <li><a className='menu-item' onClick={() => handleLinkClick(workExperienceRef)}>Experience</a></li>
          <li><a className='menu-item' onClick={() => handleLinkClick(contactRef)}>Contact Me</a></li>
          <button className='contact-btn menu-item' onClick={() => handleLinkClick(contactRef)}>Hire Me</button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

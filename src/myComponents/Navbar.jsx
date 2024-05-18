import React from 'react';
import "./Navbar.css";
import logo from '..//assets/Logo/transparent.png';

const Navbar = ({scroll}) => {
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className='nav-wrapper'>
        <div className='nav-content'>
          <img className='logo' src={logo} alt='Logo' />
          <ul>
            <li><a className='menu-item' onClick={() => scrollToSection(scroll.home)}>Home</a></li>
            <li><a className='menu-item' onClick={() => scrollToSection(scroll.skills)}>Skillset</a></li>
            <li><a className='menu-item' onClick={() => scrollToSection(scroll.exp)}>Experience</a></li>
            <li><a className='menu-item' onClick={() => scrollToSection(scroll.contact)}>Contact Me</a></li>
            <button className='contact-btn' onClick={() => scrollToSection(scroll.contact)}>Hire Me</button>
          </ul>
          
        </div>
      </nav>
    </>
  )
}

export default Navbar

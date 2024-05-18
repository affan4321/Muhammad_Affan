import React from 'react';
import "./Navbar.css";
import logo from '../assets/Logo/transparent.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ scroll }) => {
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src={logo} alt="Logo" />
          <div className="nav-links">
            <ul>
              <li>
                <a onClick={() => scrollToSection(scroll.home)}>Home</a>
              </li>
              <li>
                <a onClick={() => scrollToSection(scroll.skills)}>Skillset</a>
              </li>
              <li>
                <a onClick={() => scrollToSection(scroll.exp)}>Experience</a>
              </li>
              <li>
                <a onClick={() => scrollToSection(scroll.contact)}>Contact Me</a>
              </li>
            </ul>
            <button className="contact-btn" onClick={() => scrollToSection(scroll.contact)}>
              Hire Me
            </button>
          </div>
          <details className="hamburger-menu">
            <summary>
              <div>
                <FontAwesomeIcon icon={faBars} />
              </div>
            </summary>
            <ul>
              <li>
                <a onClick={() => scrollToSection(scroll.home)}>Home</a>
              </li>
              <li>
                <a onClick={() => scrollToSection(scroll.skills)}>Skillset</a>
              </li>
              <li>
                <a onClick={() => scrollToSection(scroll.exp)}>Experience</a>
              </li>
              <li>
                <a onClick={() => scrollToSection(scroll.contact)}>Contact Me</a>
              </li>
              <button className="contact-btn" onClick={() => scrollToSection(scroll.contact)}>
                Hire Me
              </button>
            </ul>
          </details>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

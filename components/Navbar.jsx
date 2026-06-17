import React, { useState } from 'react';

const Navbar = ({ heroRef, skillsRef, workExperienceRef, contactRef,videoShowcaseRef, subdomainsRef }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleHamburgerClick = () => {
    setShowMenu(prevState => !prevState);
  };

  const handleLinkClick = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    if (showMenu) setShowMenu(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/assets/latestFace.svg" alt="Logo" className="w-10 h-10 object-contain" />
          <span className="text-xl font-bold text-[#2671b3] hidden sm:block">
            Muhammad Affan
          </span>
        </div>
        
        <svg
          className="w-8 h-8 cursor-pointer md:hidden text-gray-700 hover:text-blue-600 transition-colors"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={handleHamburgerClick}
        >
          {showMenu ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
        
        <ul className={`${showMenu ? 'flex flex-col absolute top-20 left-0 right-0 bg-white shadow-xl p-6 space-y-4 md:hidden' : 'hidden'} md:flex md:flex-row md:items-center md:space-x-8`}>
          <li><a className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group cursor-pointer" onClick={() => handleLinkClick(heroRef)}>
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </a></li>
          <li><a className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group cursor-pointer" onClick={() => handleLinkClick(skillsRef)}>
            Skillset
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </a></li>
          <li><a className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group cursor-pointer" onClick={() => handleLinkClick(workExperienceRef)}>
            Experience
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </a></li>
          <li><a className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group cursor-pointer" onClick={() => handleLinkClick(videoShowcaseRef)}>
            Videos
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </a></li>
          <li><a className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group cursor-pointer" onClick={() => handleLinkClick(subdomainsRef)}>
            Subdomains
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </a></li>
          <li><a className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group cursor-pointer" onClick={() => handleLinkClick(contactRef)}>
            Contact Me
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

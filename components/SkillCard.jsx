import React, { useState } from 'react';

function SkillCard({ title, iconURL, skills, Active, onClick }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleClick = () => {
    setIsExpanded(!isExpanded);
    onClick();
  };

  const handleMouseMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8
    setMousePosition({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <>
      <div 
        className={`bg-white p-6 rounded-2xl shadow-lg cursor-pointer transform transition-all duration-100 preserve-3d ${isExpanded ? 'ring-4 ring-blue-500 shadow-2xl scale-105' : ''}`} 
        style={{
          transform: `perspective(1000px) rotateX(${mousePosition.x}deg) rotateY(${mousePosition.y}deg) ${isExpanded ? 'scale(1.05)' : 'scale(1)'}`,
          transformStyle: 'preserve-3d'
        }}
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-col items-center">
          <div className={`w-20 h-20 mb-4 rounded-2xl flex items-center justify-center transition-all duration-300 ${isExpanded ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gradient-to-r from-blue-100 to-purple-100'}`}>
            <img src={`/assets/images/${iconURL}`} alt={title} className='w-12 h-12 object-contain' />
          </div>
          <h6 className='text-xl font-bold text-center mb-4 text-gray-800'>{title}</h6>
          <div className={`w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mb-4 transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-50'}`}></div>
          <ul className='list-disc list-inside w-full'>
            {isExpanded &&
              skills.map((skill, index) => {
                return (
                  <li key={index} className='text-sm text-gray-700 mb-2 flex items-center justify-between'>
                    <span>{skill.skill}</span>
                    <span className="text-blue-600 font-semibold">{skill.percentage}</span>
                  </li>
                );
              })
            }
          </ul>
          {!isExpanded && (
            <div className="text-blue-600 text-sm font-medium mt-2 flex items-center gap-1">
              <span>Click to expand</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SkillCard;
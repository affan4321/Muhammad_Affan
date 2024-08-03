import React, { useState } from 'react';
import './SkillCard.css';

function SkillCard({ title, iconURL, skills, Active, onClick }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
    onClick();
  };

  return (
    <>
      <div className={`skill-card ${isExpanded? "active" : ""}`} onClick={handleClick}>
        <img src={require(`../assets/images/${iconURL}`)} alt={title} className='skill-icon' />
        <h6 className='skill-title'>{title}</h6>
        <ul className='skill-list'>
          {isExpanded &&
            skills.map((skill, index) => {
              return <li key={index} className='skill-item'>{skill.skill} - {skill.percentage}</li>;
            })
          }
        </ul>
      </div>
    </>
  );
}

export default SkillCard;
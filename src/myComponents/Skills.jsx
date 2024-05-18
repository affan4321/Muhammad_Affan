import { useState, useEffect} from 'react';
import './Skills.css';
import SkillCard from './SkillCard';
import { SKILLS } from '../utils/data';

function Skills() {
    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

    const handleSelectedSkill = (data) =>{
        setSelectedSkill(data);
    }

  return (
    <section className='skills-container'>
        <h5>Technial Skills</h5>

        <div className="skills-content">
            <div className="skills">
                {
                    SKILLS.map((skillItem)=>{
                        return (
                        <SkillCard 
                            key={skillItem.title}
                            title={skillItem.title}
                            iconURL={skillItem.icons} 
                            skills={skillItem.skills}
                            Active={selectedSkill.title === skillItem.title}
                            onClick={()=>{
                                handleSelectedSkill(skillItem);
                            }}
                        />
                    )
                    })
                }
            </div>
            
        </div>

    </section>
  )
}

export default Skills


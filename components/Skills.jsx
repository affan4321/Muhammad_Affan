import { useState } from 'react';
import SkillCard from './SkillCard';
import { SKILLS } from '../utils/data';

function Skills() {
    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

    const handleSelectedSkill = (data) =>{
        setSelectedSkill(data);
    }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h5 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technical Skills</h5>
                <p className="text-gray-600 max-w-2xl mx-auto">Here are the technologies and tools I work with to bring ideas to life</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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


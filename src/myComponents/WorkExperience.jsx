import React from 'react';
import "./WorkExperience.css";
import ExperienceCard from './ExperienceCard';
import { WORK_EXPERIENCE } from '../utils/data';

function WorkExperience() {
  return (
    <section>
        <div className="experience-container">
            <h5 className='HeadingExp'>
                Work Experience
            </h5>

            <div className="experience-content">
                {
                WORK_EXPERIENCE.map((item) => {
                    return (
                        <ExperienceCard details={item}/>
                    )
                })
                }
            </div>
        </div>
    </section>
  )
}

export default WorkExperience

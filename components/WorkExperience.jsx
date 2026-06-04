import React from 'react';
import ExperienceCard from './ExperienceCard';
import { WORK_EXPERIENCE } from '../utils/data';

function WorkExperience() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h5 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Work Experience
                </h5>
                <p className="text-gray-600 max-w-2xl mx-auto">My professional journey and the roles I've taken on</p>
            </div>

            <div className="max-w-8xl mx-auto space-y-6">
                {
                WORK_EXPERIENCE.map((item, index) => {
                    return (
                        <ExperienceCard key={index} details={item}/>
                    )
                })
                }
            </div>
        </div>
    </section>
  )
}

export default WorkExperience

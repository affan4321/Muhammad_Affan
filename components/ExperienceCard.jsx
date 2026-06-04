import React from 'react';

function ExperienceCard({details}) {
  return (
    <section>
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 mb-6 border-l-4 border-blue-500">
            <div className="flex items-start justify-between mb-3">
                <h6 className="text-lg font-bold text-gray-800">{details.title}</h6>
                <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                    {details.date}
                </div>
            </div>

            {details.description && (
                <p className="text-sm text-gray-600 mb-4 italic">{details.description}</p>
            )}

            {details.projects && details.projects.length > 0 ? (
                <div className="space-y-4 mt-4">
                    {details.projects.map((project, projectIndex) => (
                        <div key={projectIndex} className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-200">
                            <h7 className="text-md font-bold text-blue-700 mb-3 block">{project.name}</h7>
                            <ul className="space-y-2">
                                {project.responsibilities.map((item, index) => (
                                    <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                                        <span className="text-blue-500 mt-1">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="expcard-content">
                    <ul className="space-y-2">
                        {
                        details.responsibilities.map((item, index) => {
                            return(
                            <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                                <span className="text-blue-500 mt-1">•</span>
                                <span>{item}</span>
                            </li>   
                        )})
                        }
                    </ul>
                </div>
            )}
        </div>
    </section>
  )
}

export default ExperienceCard

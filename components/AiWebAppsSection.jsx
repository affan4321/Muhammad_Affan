import React from 'react';

function AiWebAppsSection({ sectionRef }) {
  const projects = [
    {
      title: "AI-Powered Content Generator",
      description: "An intelligent content creation tool using advanced language models",
      tech: ["React", "Node.js", "OpenAI API"],
      image: "/assets/ai-project-1.jpg"
    },
    {
      title: "Smart Task Automation",
      description: "Automated workflow system for business process optimization",
      tech: ["Python", "FastAPI", "Celery"],
      image: "/assets/ai-project-2.jpg"
    },
    {
      title: "Computer Vision Dashboard",
      description: "Real-time image analysis and object detection platform",
      tech: ["TensorFlow", "React", "Flask"],
      image: "/assets/ai-project-3.jpg"
    },
    {
      title: "Natural Language Processor",
      description: "Advanced text analysis and sentiment analysis tool",
      tech: ["Python", "NLTK", "spaCy"],
      image: "/assets/ai-project-4.jpg"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            AI & Web Applications
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Innovative solutions powered by artificial intelligence and modern web technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 preserve-3d hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative h-48 bg-gradient-to-br from-purple-400 to-pink-400">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AiWebAppsSection;

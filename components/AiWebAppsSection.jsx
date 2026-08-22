import React from 'react';

function AiWebAppsSection({ sectionRef }) {
  const projects = [
  {
    title: "Splendor — AI-Powered Fashion E-Commerce",
    description:
      "A full-featured fashion e-commerce platform with AI-powered virtual try-on and computer vision-based body measurement estimation.",
    tech: ["React", "Node.js", "Computer Vision", "AI"],
    image: "/assets/splendor.jpg",
    link: "https://splendor-orpin.vercel.app/"
  },

  {
    title: "AI Voice Assistant",
    description:
      "A real-time AI voice assistant that connects users with configurable voice agents for natural conversational interactions and FAQ-based support.",
    tech: ["React", "LiveKit", "AI", "Voice Agents"],
    image: "/assets/voice-agent.jpg",
    link: "https://voice-agent-livekit.vercel.app/"
  },

  {
    title: "DisasterShield",
    description:
      "An AI-powered disaster response platform designed to streamline the process from disaster assessment to repair and recovery.",
    tech: ["React", "AI", "Computer Vision", "Web Platform"],
    image: "/assets/disaster-shield.jpg",
    link: "https://disaster-shield.vercel.app/"
  },

  {
    title: "Stories We Tell",
    description:
      "An AI-powered cinematic story development assistant that helps transform ideas into characters, scenes, scripts, and structured story concepts.",
    tech: ["React", "AI", "LLM", "Story Generation"],
    image: "/assets/stories-we-tell.jpg",
    link: "https://stories-we-tell.vercel.app/chat"
  },

  {
    title: "Abdullah Chughtai — Creative Portfolio",
    description:
      "A cinematic portfolio experience for a video editor and motion designer, showcasing selected work across long-form editing, short-form content, motion design, and SaaS videos.",
    tech: ["React", "Motion Design", "Video", "WebGL"],
    image: "/assets/abdullah-chughtai.jpg",
    link: "https://abdullahchughtai.vercel.app/"
  },

  {
    title: "Muhammad Affan — Video Editing Portfolio",
    description:
      "A cinematic video editing portfolio focused on commercials, music videos, and documentaries with an emphasis on storytelling, color grading, sound design, and motion.",
    tech: ["React", "Video", "Motion Design", "Color Grading"],
    image: "/assets/video-portfolio.jpg",
    link: "https://video.smaffan.com/"
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
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 preserve-3d hover:scale-105 hover:shadow-2xl cursor-pointer">
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AiWebAppsSection;

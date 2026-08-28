import React, { useState } from 'react';

function AiWebAppsSection({ sectionRef }) {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e, index) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -10
    const rotateY = ((x - centerX) / centerX) * 10
    setMousePosition({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
    setHoveredCard(null)
  }

  const projects = [
  {
    title: "Splendor — AI-Powered Fashion E-Commerce",
    description:
      "A full-featured fashion e-commerce platform with AI-powered virtual try-on and computer vision-based body measurement estimation.",
    tech: ["React", "Node.js", "Computer Vision", "AI"],
    image: "/assets/splendor.jpg",
    link: "https://splendor-store.vercel.app/"
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
  },

  {
    title: "Dark Tunnel — Interactive 3D Portfolio",
    description:
      "An immersive 3D portfolio experience where visitors explore a mysterious tunnel, discover projects through branching paths, and navigate an interactive game-like environment.",
    tech: ["Next.js", "React Three Fiber", "Three.js", "GSAP", "Zustand"],
    image: "/assets/haunted.png",
    link: "https://game.smaffan.com/"
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
              className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transform transition-all duration-100 preserve-3d"
              style={{
                transform: hoveredCard === index
                  ? `perspective(1000px) rotateX(${mousePosition.x}deg) rotateY(${mousePosition.y}deg) scale(1.05)`
                  : 'perspective(1000px) rotateX(0) rotateY(0) scale(1)',
                transformStyle: 'preserve-3d'
              }}
              onMouseMove={(e) => {
                setHoveredCard(index)
                handleMouseMove(e, index)
              }}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="relative h-48 bg-gradient-to-br from-purple-400 to-pink-400">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
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
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AiWebAppsSection;

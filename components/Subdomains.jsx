import React, { useState } from 'react'

const Subdomains = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const subdomains = [
    {
      name: 'game.smaffan.com',
      title: 'Dark Tunnel Portfolio',
      description: 'An immersive 3D portfolio experience built with Next.js, Three.js, and React Three Fiber. Navigate through a dark tunnel, explore different paths, and discover chambers with interactive content.',
      features: [
        '3D Navigation through procedurally generated dark tunnel',
        'Branching Paths to explore different career paths',
        'Interactive Chambers with detailed content',
        'Audio Experience with dynamic background music and sound effects',
        'Camera Controls with free mouse movement',
        'Fullscreen Mode for immersive experience',
        'Settings Panel for graphics quality and audio customization'
      ],
      techStack: [
        'Next.js 16',
        'Three.js, React Three Fiber, React Three Drei',
        'React Three Postprocessing',
        'React Three Rapier',
        'Howler.js',
        'Zustand',
        'Tailwind CSS',
        'GSAP'
      ],
      images: [
        '/assets/main.png',
        '/assets/chamber.png',
        '/assets/gate.png',
        '/assets/haunted.png'
      ],
      link: 'https://game.smaffan.com'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          My Subdomains
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explore my other projects and experiments hosted on subdomains
        </p>

        {subdomains.map((subdomain, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 hover:shadow-2xl transition-shadow duration-300">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8">
              <h3 className="text-3xl font-bold text-white mb-2">{subdomain.title}</h3>
              <a 
                href={subdomain.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-white font-medium underline underline-offset-4"
              >
                {subdomain.name} ↗
              </a>
            </div>

            {/* Content */}
            <div className="p-8">
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                {subdomain.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></span>
                  Features
                </h4>
                <ul className="grid md:grid-cols-2 gap-3">
                  {subdomain.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                      <span className="text-blue-600 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></span>
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {subdomain.techStack.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Images Gallery */}
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></span>
                  Gallery
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {subdomain.images.map((image, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setSelectedImage(image)}
                      className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                    >
                      <img 
                        src={image} 
                        alt={`${subdomain.title} - Image ${idx + 1}`}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white text-sm font-medium">View</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <a 
                  href={subdomain.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Visit {subdomain.name} ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-[80%] max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-2xl font-bold hover:text-blue-400 transition-colors"
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Full size view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default Subdomains

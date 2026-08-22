import React from 'react';

function WorkSection({ videoEditingRef, aiWebAppsRef }) {
  const handleVideoEditingClick = () => {
    if (videoEditingRef && videoEditingRef.current) {
      videoEditingRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAiWebAppsClick = () => {
    if (aiWebAppsRef && aiWebAppsRef.current) {
      aiWebAppsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Work
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my creative projects across different domains
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-8">
          {/* Arrow Animation */}
          <div className="animate-bounce">
            <svg 
              className="w-12 h-12 text-blue-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <button
              onClick={handleVideoEditingClick}
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg cursor-pointer min-w-[200px]"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Video Editing
              </span>
              <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>

            <button
              onClick={handleAiWebAppsClick}
              className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg cursor-pointer min-w-[200px]"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                AI & Web Apps
              </span>
              <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;

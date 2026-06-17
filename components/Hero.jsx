import React from 'react'

function Hero({ workExperienceRef, contactRef }) {
  const handleViewWorkClick = () => {
    if (workExperienceRef && workExperienceRef.current) {
      workExperienceRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      <section className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hi, I'm Muhammad Affan
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-medium mb-2">
            Creative Technologist | AI, Automation & Media Production
          </p>
          <p className="text-lg md:text-xl text-gray-600 font-medium italic mb-8">
            Blending Smart Tech with bold creativity
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button onClick={handleViewWorkClick} className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg cursor-pointer">
              View My Work
            </button>
            <button onClick={handleContactClick} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 cursor-pointer">
              Contact Me
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center mt-16 relative w-full max-w-4xl mx-auto">
          <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-40 animate-pulse"></div>
            <img src="/assets/coolBoy.jpg" alt="Muhammad Affan" className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl relative z-10" />
          </div>

          <div className="absolute top-4 -left-16 md:top-8 md:-left-24 lg:top-8 lg:-left-8 animate-float-1">
            <div className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform">
              <img src="/assets/React.png" alt="react" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="absolute top-4 -left-16 md:top-8 md:-left-24 lg:top-[20rem] lg:-left-8 animate-float-1">
            <div className="w-8 h-8 md:w-12 md:h-12 lg:w-20 lg:h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform">
              <img src="/assets/premiere-pro.png" alt="premiere pro" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="absolute top-4 -left-16 md:top-8 md:-left-24 lg:top-[15rem] lg:left-[10rem] animate-float-1">
            <div className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform">
              <img src="/assets/illustrator.png" alt="illustrator" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="absolute -top-12 right-4 md:-top-16 md:right-8 lg:-top-20 lg:right-12 animate-float-2">
            <div className="w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 bg-white rounded-2xl shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform">
              <img src="/assets/css.png" alt="css" className="w-full h-full object-contain" />
            </div>
          </div>
          
          <div className="absolute -top-12 right-4 md:-top-16 md:right-8 lg:top-20 lg:right-18 animate-float-2">
            <div className="w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 bg-white rounded-2xl shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform">
              <img src="/assets/after-effects.png" alt="after effects" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="absolute -top-12 right-4 md:-top-16 md:right-8 lg:-top-[2rem] lg:right-[20rem] animate-float-2">
            <div className="w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 bg-white rounded-2xl shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform">
              <img src="/assets/photoshop.png" alt="photoshop" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="absolute top-1/2 -left-20 md:top-1/2 md:-left-28 lg:top-1/2 lg:-left-36 animate-float-3">
            <div className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform">
              <img src="/assets/HTML.png" alt="html" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="absolute bottom-8 -right-12 md:bottom-12 md:-right-20 lg:bottom-16 lg:-right-28 animate-float-4">
            <div className="w-9 h-9 md:w-13 md:h-13 lg:w-15 lg:h-15 bg-white rounded-2xl shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform">
              <img src="/assets/Javascript.png" alt="javascript" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-15px) translateX(10px) rotate(8deg); }
          50% { transform: translateY(-25px) translateX(-5px) rotate(-5deg); }
          75% { transform: translateY(-10px) translateX(8px) rotate(3deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-20px) translateX(-8px) rotate(-7deg); }
          50% { transform: translateY(-30px) translateX(12px) rotate(6deg); }
          75% { transform: translateY(-12px) translateX(-6px) rotate(-4deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-18px) translateX(12px) rotate(-6deg); }
          50% { transform: translateY(-28px) translateX(-10px) rotate(9deg); }
          75% { transform: translateY(-14px) translateX(7px) rotate(-3deg); }
        }
        @keyframes float-4 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-22px) translateX(-12px) rotate(7deg); }
          50% { transform: translateY(-32px) translateX(15px) rotate(-8deg); }
          75% { transform: translateY(-16px) translateX(-9px) rotate(5deg); }
        }
        .animate-float-1 {
          animation: float-1 4s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float-2 5s ease-in-out infinite;
        }
        .animate-float-3 {
          animation: float-3 4.5s ease-in-out infinite;
        }
        .animate-float-4 {
          animation: float-4 5.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Hero

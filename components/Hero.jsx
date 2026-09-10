import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Reveal, RevealWords } from './Reveal'

function Hero({ workRef, contactRef }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const handleViewWorkClick = () => {
    if (workRef && workRef.current) {
      workRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={ref} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      <motion.div
        aria-hidden
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
        className="pointer-events-none absolute -top-40 left-1/2 h-[52rem] w-[52rem] -translate-x-1/2 rounded-full bg-blue-400/12 blur-[140px]"
      />
      <section className="container mx-auto px-4 relative z-10">
        <motion.div style={{ y: titleY, opacity: titleOpacity }}>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
              <span className="text-sm uppercase tracking-[0.28em] text-gray-600">AI & Data Engineering</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-blue-600 leading-tight">
              <RevealWords text="Hi, I'm" />
              <br />
              <span className="text-purple-600">
                <RevealWords text="Muhammad Affan" />
              </span>
            </h1>
            <Reveal delay={0.3}>
              <p className="text-xl md:text-2xl text-gray-700 font-medium mb-2">
                AI Engineer | Data Engineer
              </p>
              <p className="text-lg md:text-xl text-gray-600 font-medium italic mb-8">
                Building intelligent systems and data-driven solutions
              </p>
            </Reveal>
            <Reveal delay={0.5}>
              <div className="mt-8 flex justify-center gap-4">
                <button onClick={handleViewWorkClick} className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg cursor-pointer">
                  View My Work
                </button>
                <button onClick={handleContactClick} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 cursor-pointer">
                  Contact Me
                </button>
              </div>
            </Reveal>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Hero

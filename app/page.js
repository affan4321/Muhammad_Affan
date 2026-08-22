'use client'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import Contact from '../components/Contact'
import VideoShowcase from '../components/VideoShowcase'
import WorkSection from '../components/WorkSection'
import AiWebAppsSection from '../components/AiWebAppsSection'
import Footer from '../components/Footer'
import { useRef } from 'react'

export default function Home() {
  const heroRef = useRef(null)
  const skillsRef = useRef(null)
  const workExperienceRef = useRef(null)
  const contactRef = useRef(null)
  const workRef = useRef(null)
  const videoEditingRef = useRef(null)
  const aiWebAppsRef = useRef(null)

  return (
    <>
      <Navbar heroRef={heroRef} skillsRef={skillsRef} workExperienceRef={workExperienceRef} contactRef={contactRef} workRef={workRef} />
      <section ref={heroRef} id="home">
        <Hero workExperienceRef={workExperienceRef} contactRef={contactRef} />
      </section>
      <section ref={skillsRef} id="skillset">
        <Skills />
      </section>
      <section ref={workExperienceRef} id="experience">
        <WorkExperience />
      </section>
      <section ref={workRef} id="work">
        <WorkSection videoEditingRef={videoEditingRef} aiWebAppsRef={aiWebAppsRef} />
      </section>
      <section ref={videoEditingRef} id="video-editing">
        <VideoShowcase sectionRef={videoEditingRef} />
      </section>
      <section ref={aiWebAppsRef} id="ai-web-apps">
        <AiWebAppsSection sectionRef={aiWebAppsRef} />
      </section>
      <section ref={contactRef} id="contact">
        <Contact />
      </section>
      <Footer/>
    </>
  )
}

'use client'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import Contact from '../components/Contact'
import Subdomains from '../components/Subdomains'
import Footer from '../components/Footer'
import { useRef } from 'react'

export default function Home() {
  const heroRef = useRef(null)
  const skillsRef = useRef(null)
  const workExperienceRef = useRef(null)
  const contactRef = useRef(null)
  const subdomainsRef = useRef(null)

  return (
    <>
      <Navbar heroRef={heroRef} skillsRef={skillsRef} workExperienceRef={workExperienceRef} contactRef={contactRef} subdomainsRef={subdomainsRef} />
      <section ref={heroRef} id="home">
        <Hero workExperienceRef={workExperienceRef} contactRef={contactRef} />
      </section>
      <section ref={skillsRef} id="skillset">
        <Skills />
      </section>
      <section ref={workExperienceRef} id="experience">
        <WorkExperience />
      </section>
      <section ref={subdomainsRef} id="subdomains">
        <Subdomains />
      </section>
      <section ref={contactRef} id="contact">
        <Contact />
      </section>
      <Footer/>
    </>
  )
}
